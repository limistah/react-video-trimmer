import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import Status from "./components/Status";
import Player from "./components/Player";
import Controls from "./components/Controls";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";
import { encode } from "./libs/workerClient";
import "./styles/main-container.scss";
import Icon from "./components/Icon";

class ReactVideoTrimmer extends React.PureComponent {
  /**
   * @type {WebVideo}
   */
  webVideo = {};

  constructor(props) {
    super(props);
    this.webVideo = new WebVideo({});
    this.webVideo.on("processingFile", () => this.updateIsDecoding(true));
    this.webVideo.on("processedFile", () => this.updateIsDecoding(false));

    this.webVideo.on("FFMPEGStdout", this.handleFFMPEGStdout);
    this.webVideo.on("FFMPEGReady", this.handleFFMPEGReady);
    this.webVideo.on("FFMPEGFileReceived", this.handleFFMPEGFileReceived);
    this.webVideo.on("FFMPEGDone", this.handleFFMPEGDone);
  }

  handleFFMPEGStdout = msg => {
    console.log(msg);
  };

  handleFFMPEGReady = () => {
    console.log("FFMPEG is Ready");
  };

  handleFFMPEGFileReceived = () => {
    console.log("FFMPEG Received File");
  };

  handleFFMPEGDone = data => {
    this.setState({ encoding: false, encoded: true });
    // Read the file as data url, set the player and show a download btn
    console.log("FFMPEG Done:", data);
  };

  state = {
    decoding: false,
    encoding: false,
    encoded: false,
    playVideo: false,
    videoDataURL: "",
    videoFrames: [],
    isDecoding: false,
    timeRange: { start: 0, end: 0 }
  };

  updateVideoDataURL = dataURL => this.setState({ videoDataURL: dataURL });

  updateVideoFrames = frames => this.setState({ videoFrames: frames });

  updateIsExtractingFrame = state =>
    this.setState({ updateIsExtractingFrame: state });

  updateIsDecoding = state => this.setState({ updateIsDecoding: state });
  updateVideoDuration = duration =>
    this.setState({ updateVideoDuration: duration });

  handleFileSelected = file => {
    this.setState({ decoding: true });
    const webVideo = this.webVideo;
    webVideo.videoFile = file;
    webVideo.decode(file).then(({ blob, arrayBuffer, dataURL }) => {
      this.setState({ decoding: false });
      this.updateVideoDataURL(dataURL);
      this.setState({
        // timeRange: { start: 10, end: this.webVideo.videoData.duration }
        timeRange: { start: 10, end: 20 }
      });
    });
  };

  handleVideoTrim = time => {
    this.setState({ timeRange: time });
  };
  handleEncodeVideo = () => {
    const { timeRange } = this.state;
    this.setState({ encoding: true, videoDataURL: "" });
    const timeDifference = timeRange.end - timeRange.start;
    this.webVideo.trimVideo(timeRange.start, timeDifference);
  };
  handlePlayPauseVideo = nextPlayPauseState => {
    const { playVideo } = this.state;
    this.setState({ playVideo: !playVideo });
  };
  handlePlayerPause = () => {
    this.setState({ playVideo: false });
  };
  handlePlayerPlay = () => {
    this.setState({ playVideo: true });
  };
  handleReselectFile = () => {
    const state = {
      decoding: false,
      encoding: false,
      playVideo: false,
      videoDataURL: "",
      videoFrames: [],
      isExtractingFrame: false,
      isDecoding: false,
      timeRange: this.props.timeRange || { start: 0, end: 0 }
    };
    this.setState(state);
  };
  render() {
    const { decoding, encoding, encoded, videoDataURL } = this.state;
    return (
      <div className="rvt-main-container">
        {encoded ? (
          <div>Encoded Download Video</div>
        ) : (
          <>
            {!decoding && !encoding && !videoDataURL && (
              <FilePicker onFileSelected={this.handleFileSelected} />
            )}
            {(decoding || encoding) && (
              <Status>
                <Icon name="spin" className="rvt-icon-spin" />
                {encoding ? "ENCODING VIDEO" : "DECODING VIDEO"}...
              </Status>
            )}

            {!decoding && !encoding && videoDataURL && (
              <Player
                src={this.state.videoDataURL}
                timeRange={this.state.timeRange}
                playVideo={this.state.playVideo}
                onPlayerPlay={this.handlePlayerPlay}
                onPlayerPause={this.handlePlayerPause}
              />
            )}

            <Trimmer
              showTrimmer={this.state.videoDataURL}
              duration={this.webVideo.videoData.duration}
              onTrim={this.handleVideoTrim}
              timeRange={this.state.timeRange}
            />

            {!decoding && !encoding && videoDataURL && (
              <Controls
                showEncodeBtn={this.props.showEncodeBtn}
                onReselectFile={this.handleReselectFile}
                onEncode={this.handleEncodeVideo}
                onPlayPauseClick={this.handlePlayPauseVideo}
                processing={encoding}
                playing={this.state.playVideo}
              />
            )}
          </>
        )}
      </div>
    );
  }
}

export default ReactVideoTrimmer;
