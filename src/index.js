import React from "react";
import FilePicker from "./components/FilePicker";
import Status from "./components/Status";
import Player from "./components/Player";
import Controls from "./components/Controls";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";
import webVideoLoader from "./libs/preloadWebVideo";
import Icon from "./components/Icon";
import { noop, arrayBufferToBlob, readBlobURL, download } from "./libs/utils";
import "./style.js";
import PropTypes from "prop-types";

class ReactVideoTrimmer extends React.PureComponent {
  /**
   * @type {WebVideo}
   */
  webVideo = webVideoLoader({});

  static propTypes = {
    onVideoEncode: PropTypes.func,
    showEncodeBtn: PropTypes.bool,
    timeLimit: PropTypes.number,
    loadingFFMPEGText: PropTypes.string
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
    this.setState({ ffmpegReady: true });
  };

  handleFFMPEGFileReceived = () => {
    // console.log("FFMPEG Received File");
  };

  handleFFMPEGDone = result => {
    this.setState({
      timeRange: { start: 0, end: this.state.timeRange.end }
    });
    const videoBlob = arrayBufferToBlob(result[0].data);
    setTimeout(() => {
      this.decodeVideoFile(videoBlob, () => {
        const handler = this.props.onVideoEncode || noop;
        handler(result);
        this.setState({
          encoding: false,
          encoded: true,
          encodedVideo: videoBlob
        });
      });
    }, 300);
  };

  defaultState = {
    decoding: false,
    encoding: false,
    encoded: false,
    playVideo: false,
    videoDataURL: "",
    videoFrames: [],
    isDecoding: false,
    timeRange: { start: 5, end: this.props.timeLimit || 15 },
    encodedVideo: null,
    playedSeconds: 0,
    ffmpegReady: false
  };

  state = this.defaultState;

  updateVideoDataURL = dataURL => this.setState({ videoDataURL: dataURL });

  updateVideoFrames = frames => this.setState({ videoFrames: frames });

  updateIsDecoding = state => this.setState({ updateIsDecoding: state });
  updateVideoDuration = duration =>
    this.setState({ updateVideoDuration: duration });

  decodeVideoFile = (file, doneCB = noop) => {
    this.setState({ decoding: true });
    const webVideo = this.webVideo;
    webVideo.videoFile = file;
    webVideo
      .decode(file)
      .then(({ blob, arrayBuffer, dataURL }) => {
        this.updateVideoDataURL(dataURL);
        const timeRangeStart = this.state.timeRange.start;
        const duration = this.webVideo.videoData.duration;
        const timeLimit = timeRangeStart + (this.props.timeLimit || 10);
        const timeRangeEnd = duration > timeLimit ? timeLimit : duration;
        this.setState({
          timeRange: { start: timeRangeStart, end: timeRangeEnd },
          playedSeconds: (timeRangeEnd - timeRangeStart) / 2 + timeRangeStart
        });
        this.setState({ decoding: false });
        doneCB();
      })
      .catch(e => console.log(e));
  };
  handleFileSelected = file => {
    this.decodeVideoFile(file);
  };

  handleVideoTrim = time => {
    this.setState({ timeRange: time });
  };
  handleEncodeVideo = timeRange => {
    this.setState({ encoding: true, videoDataURL: "", playVideo: false });
    const timeDifference = timeRange.end - timeRange.start;
    // console.log(timeRange);
    this.webVideo.trimVideo(timeRange.start, timeDifference);
  };
  handlePlayPauseVideo = () => {
    const { playVideo } = this.state;
    this.setState({ playVideo: !playVideo });
  };
  handlePlayerPause = () => {
    // console.log("pause video");
    this.setState({ playVideo: false });
  };
  handlePlayerPlay = () => {
    this.setState({ playVideo: true });
  };
  handlePlayerProgress = seconds => {
    if (this.state.playVideo) {
      this.setState({ playedSeconds: seconds });
    }
  };
  handleReselectFile = () => {
    this.setState({
      ...this.defaultState,
      ffmpegReady: true
    });
  };
  VideoPlayerWithTrimmer = ({ showTrimmer }) => {
    const { decoding, encoding, encoded, videoDataURL } = this.state;
    return (
      <>
        {!decoding && !encoding && videoDataURL && (
          <Player
            src={this.state.videoDataURL}
            timeRange={this.state.timeRange}
            timeLimit={this.props.timeLimit}
            playVideo={this.state.playVideo}
            onPlayerPlay={this.handlePlayerPlay}
            onPlayerPause={this.handlePlayerPause}
            onPlayerProgress={this.handlePlayerProgress}
          />
        )}
        {showTrimmer && (
          <Trimmer
            onPausePlayer={this.handlePlayerPause}
            showTrimmer={this.state.videoDataURL}
            duration={this.webVideo.videoData.duration}
            onTrim={this.handleVideoTrim}
            timeLimit={this.props.timeLimit}
            timeRangeLimit={this.props.timeRange}
            timeRange={this.state.timeRange}
            currentTime={this.state.playedSeconds}
          />
        )}

        {!decoding && !encoding && videoDataURL && (
          <Controls
            onDownload={() => this.handleDownloadVideo(this.state.encodedVideo)}
            canDownload={encoded}
            showEncodeBtn={this.props.showEncodeBtn}
            onReselectFile={this.handleReselectFile}
            onEncode={() => this.handleEncodeVideo(this.state.timeRange)}
            onPlayPauseClick={this.handlePlayPauseVideo}
            processing={encoding}
            playing={this.state.playVideo}
          />
        )}
      </>
    );
  };
  handleDownloadVideo = encodedVideo => {
    const blobURL = readBlobURL(encodedVideo);
    download(blobURL, "trimmed.mp4");
  };
  VideoPlayerNoTrimmer = () => {
    return <this.VideoPlayerWithTrimmer />;
  };
  render() {
    const {
      decoding,
      encoding,
      encoded,
      videoDataURL,
      ffmpegReady
    } = this.state;
    return (
      <div className="rvt-main-container">
        {!ffmpegReady && (
          <Status>
            <Icon name="spin" className="rvt-icon-spin" />
            {this.props.loadingFFMPEGText || "PLEASE WAIT..."}
          </Status>
        )}
        {ffmpegReady && encoded && <this.VideoPlayerNoTrimmer />}
        {ffmpegReady && !encoded && (
          <>
            {!decoding && !encoding && !videoDataURL && (
              <FilePicker
                onFileSelected={this.handleFileSelected}
                minSize={this.props.minSize}
                maxSize={this.props.maxSize}
              />
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

export const preloadWebVideo = webVideoLoader;

export default ReactVideoTrimmer;
