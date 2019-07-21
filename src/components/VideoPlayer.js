import React from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
  componentWillReceiveProps(newProps) {
    const newTimeRange = newProps.timeRange;
    const oldTimeRange = this.timeRange;
    const canSeek =
      (oldTimeRange && newTimeRange.start !== oldTimeRange.start) ||
      (!oldTimeRange && newTimeRange.start > 0);
    if (canSeek) {
      // || newTimeRange.end !== oldTimeRange.end
      console.log(newTimeRange.start);
      this.player.seekTo(newTimeRange.start, "seconds");
      // this.player.
    }
  }
  render() {
    return (
      <div>
        {/* <video src={props.src} controls={false} /> */}
        <ReactPlayer url={this.props.src} ref={el => (this.player = el)} />
        <span>
          Starting At:
          {this.props.timeRange.start}
        </span>{" "}
        <span>
          Ending At:
          {this.props.timeRange.end}{" "}
        </span>
      </div>
    );
  }
}

export default VideoPlayer;
