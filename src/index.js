import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import Status from "./components/Status";
import Player from "./components/Player";
import Controls from "./components/Controls";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";
import { encode } from "./libs/workerClient";
import "./styles/video-trimmer.scss";

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
    this.webVideo.on("extractingFrames", () =>
      this.updateIsExtractingFrame(true)
    );
    this.webVideo.on("extractedFrames", () => {
      this.updateIsExtractingFrame(false);
    });
  }

  state = {
    decoding: false,
    videoDataURL: "",
    videoFrames: [],
    isExtractingFrame: false,
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

    webVideo.decode(file).then(({ blob, arrayBuffer, dataURL }) => {
      //   // encode(file).then(_blob => {
      //   //   const dataURL = URL.createObjectURL(_blob);
      //   //   this.updateVideoDataURL(dataURL);
      //   // });

      this.setState({ decoding: false });
      this.updateVideoDataURL(dataURL);
      this.setState({
        // timeRange: { start: 10, end: this.webVideo.videoData.duration }
        timeRange: { start: 10, end: 20 }
      });
      //   webVideo.extractFramesFromVideo().then(frames => {
      //     this.updateVideoFrames(frames);
      //   });
    });
  };

  handleVideoTrim = time => {
    // convert start time and end time to index of array buffers
    const secondsToMilliseconds = seconds => seconds * 10000;
    const startToMilliseconds = secondsToMilliseconds(time.start);
    const endToMilliseconds = secondsToMilliseconds(time.end);
    this.setState({ timeRange: time });
    // Slice the available buffer
    this.webVideo
      .sliceVideoBuffer(startToMilliseconds, endToMilliseconds)
      .then(async slicedBuffer => {
        // convert sliced buffer to dataURL
        this.webVideo.readAsDataURL(slicedBuffer).then(dataURL => {
          // Update data URL
          this.updateVideoDataURL(dataURL);
        });
      });
  };

  render() {
    const { decoding, encoding, videoDataURL } = this.state;
    return (
      <div className="rvt-main-container">
        {!decoding && !videoDataURL && (
          <FilePicker onFileSelected={this.handleFileSelected} />
        )}
        {decoding && !videoDataURL && <Status statusMessage="DECODING..." />}
        {/* {!decoding && videoDataURL && (
          <Trimmer
            videoFrames={this.state.videoFrames}
            duration={this.webVideo.videoData.duration}
            onTrim={this.handleVideoTrim}
            timeRange={this.state.timeRange}
          />
        )} */}

        {!decoding && !encoding && videoDataURL && (
          <Player
            src={this.state.videoDataURL}
            timeRange={this.state.timeRange}
          />
        )}
        <Controls />
      </div>
    );
  }
}

export default ReactVideoTrimmer;
