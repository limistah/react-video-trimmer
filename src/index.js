import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import VideoPlayer from "./components/VideoPlayer";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";

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
    const webVideo = this.webVideo;
    webVideo.decode(file).then(({ blob, arrayBuffer, dataURL }) => {
      this.updateVideoDataURL(dataURL);
      this.setState({
        timeRange: { start: 0, end: this.webVideo.videoData.duration }
      });
      webVideo.extractFramesFromVideo().then(frames => {
        this.updateVideoFrames(frames);
      });
    });
  };

  handleVideoTrim = time => {
    // convert start time and end time to index of array buffers
    const secondsToMilliseconds = seconds => seconds * 1000;
    const startToMilliseconds = secondsToMilliseconds(time.start);
    const endToMilliseconds = secondsToMilliseconds(time.end);
    // Slice the available buffer
    this.webVideo
      .sliceVideoBuffer(startToMilliseconds, endToMilliseconds)
      .then(async slicedBuffer => {
        // convert sliced buffer to dataURL
        const dataURL = await this.webVideo.readAsDataURL(slicedBuffer);
        // Update data URL
        this.updateVideoDataURL(dataURL);
      });
  };

  render() {
    return (
      <div>
        <FilePicker onFileSelected={this.handleFileSelected} />
        <Trimmer
          videoFrames={this.state.videoFrames}
          duration={this.webVideo.videoData.duration}
          onTrim={this.handleVideoTrim}
          timeRange={this.state.timeRange}
        />
        {this.state.videoDataURL && (
          <VideoPlayer
            src={this.state.videoDataURL}
            timeRange={this.state.timeRange}
          />
        )}
      </div>
    );
  }
}

export default ReactVideoTrimmer;
