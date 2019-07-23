import React from "react";
import FilePicker from "./components/FilePicker";
import Status from "./components/Status";
import Player from "./components/Player";
import Controls from "./components/Controls";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";
import Icon from "./components/Icon";
import { noop, arrayBufferToBlob, readBlobURL, download } from "./libs/utils";
import "./style.js";
import PropTypes from "prop-types";

class ReactVideoTrimmer extends React.PureComponent {
  /**
   * @type {WebVideo}
   */
  webVideo = new WebVideo({});

  propTypes = {
    onVideoEncode: PropTypes.func,
    showEncodeBtn: PropTypes.bool,
    timeLimit: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.webVideo.on("processingFile", () => this.updateIsDecoding(true));
    this.webVideo.on("processedFile", () => this.updateIsDecoding(false));

    this.webVideo.on("FFMPEGStdout", this.handleFFMPEGStdout);
    this.webVideo.on("FFMPEGReady", this.handleFFMPEGReady);
    this.webVideo.on("FFMPEGFileReceived", this.handleFFMPEGFileReceived);
    this.webVideo.on("FFMPEGDone", this.handleFFMPEGDone);
  }

  handleFFMPEGStdout = msg => {
    // console.log(msg);
  };

  handleFFMPEGReady = () => {
    // console.log("FFMPEG is Ready");
  };

  handleFFMPEGFileReceived = () => {
    // console.log("FFMPEG Received File");
  };

  handleFFMPEGDone = result => {
    const videoBlob = arrayBufferToBlob(result[0].data);
    this.decodeVideoFile(videoBlob, () => {
      const handler = this.onVideoEncode || noop;
      handler(result);
      this.setState({
        encoding: false,
        encoded: true,
        encodedVideo: videoBlob
      });
    });
  };

  state = {
    decoding: false,
    encoding: false,
    encoded: false,
    playVideo: false,
    videoDataURL: "",
    videoFrames: [],
    isDecoding: false,
    timeRange: { start: 5, end: this.props.timeLimit || 15 },
    encodedVideo: null
  };

  updateVideoDataURL = dataURL => this.setState({ videoDataURL: dataURL });

  updateVideoFrames = frames => this.setState({ videoFrames: frames });

  updateIsExtractingFrame = state =>
    this.setState({ updateIsExtractingFrame: state });

  updateIsDecoding = state => this.setState({ updateIsDecoding: state });
  updateVideoDuration = duration =>
    this.setState({ updateVideoDuration: duration });

  decodeVideoFile = (file, doneCB = noop) => {
    this.setState({ decoding: true });
    const webVideo = this.webVideo;
    webVideo.videoFile = file;
    webVideo.decode(file).then(({ blob, arrayBuffer, dataURL }) => {
      this.setState({ decoding: false });
      this.updateVideoDataURL(dataURL);
      const timeRangeStart = this.state.timeRange.start;
      const duration = this.webVideo.videoData.duration;
      const timeLimit = timeRangeStart + (this.props.timeLimit || 10);
      const timeRangeEnd = duration > timeLimit ? timeLimit : duration;
      this.setState({
        timeRange: { start: timeRangeStart, end: timeRangeEnd }
      });
      doneCB();
    });
  };
  handleFileSelected = file => {
    this.decodeVideoFile(file);
  };

  handleVideoTrim = time => {
    this.setState({ timeRange: time });
  };
  handleEncodeVideo = () => {
    const { timeRange } = this.state;
    this.setState({ encoding: true, videoDataURL: "" });
    const timeDifference = timeRange.end - timeRange.start;
    // console.log(timeRange);
    this.webVideo.trimVideo(timeRange.start, timeDifference);
  };
  handlePlayPauseVideo = () => {
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
      encoded: false,
      encodedVideo: null,
      playVideo: false,
      videoDataURL: "",
      videoFrames: [],
      isExtractingFrame: false,
      isDecoding: false,
      timeRange: this.props.timeRange || { start: 0, end: 0 }
    };
    this.setState(state);
  };
  VideoPlayerWithTrimmer = ({ showTrimmer }) => {
    const { decoding, encoding, encoded, videoDataURL } = this.state;
    return (
      <>
        {!decoding && !encoding && videoDataURL && (
          <Player
            src={this.state.videoDataURL}
            timeRange={this.state.timeRange}
            playVideo={this.state.playVideo}
            onPlayerPlay={this.handlePlayerPlay}
            onPlayerPause={this.handlePlayerPause}
          />
        )}
        {showTrimmer && (
          <Trimmer
            showTrimmer={this.state.videoDataURL}
            duration={this.webVideo.videoData.duration}
            onTrim={this.handleVideoTrim}
            timeRange={this.state.timeRange}
          />
        )}

        {!decoding && !encoding && videoDataURL && (
          <Controls
            onDownload={this.handleDownloadVideo}
            canDownload={encoded}
            showEncodeBtn={this.props.showEncodeBtn}
            onReselectFile={this.handleReselectFile}
            onEncode={this.handleEncodeVideo}
            onPlayPauseClick={this.handlePlayPauseVideo}
            processing={encoding}
            playing={this.state.playVideo}
          />
        )}
      </>
    );
  };
  handleDownloadVideo = () => {
    const blobURL = readBlobURL(this.state.encodedVideo);
    download(blobURL, "trimmed.mp4");
  };
  VideoPlayerNoTrimmer = () => {
    return <this.VideoPlayerWithTrimmer />;
  };
  render() {
    const { decoding, encoding, encoded, videoDataURL } = this.state;
    return (
      <div className="rvt-main-container">
        {encoded ? (
          <this.VideoPlayerNoTrimmer />
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
            <this.VideoPlayerWithTrimmer showTrimmer={true} />
          </>
        )}
      </div>
    );
  }
}

export default ReactVideoTrimmer;
