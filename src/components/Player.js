import React from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
  state = {
    playing: this.props.playVideo || false
  };
  componentWillReceiveProps(newProps) {
    const newTimeRange = newProps.timeRange;
    const oldTimeRange = this.props.timeRange;
    const canSeek =
      (oldTimeRange && newTimeRange.start !== oldTimeRange.start) ||
      (!oldTimeRange && newTimeRange.start > 0);
    if (canSeek) {
      this.setState({ playing: false });
      this.player.seekTo(newTimeRange.start, "seconds");
    }
    if (newProps.playVideo && !this.props.playVideo) {
      this.setState({ playing: true });
    } else if (newProps.playVideo && !this.props.playVideo) {
      this.setState({ playing: false });
    }
  }
  handlePlayerProgress = data => {
    if (data.loaded) {
      const { playedSeconds } = data;
      const startTimeRange = this.props.timeRange.start;
      const endTimeRange = this.props.timeRange.end;
      const playedSecondsIsLowerThanStartTime = playedSeconds <= startTimeRange;
      const playedSecondsIsGreaterThanEndTime = playedSeconds >= endTimeRange;
      if (playedSecondsIsLowerThanStartTime) {
        this.player.seekTo(startTimeRange, "seconds");
      }
      if (playedSecondsIsGreaterThanEndTime) {
        this.player.seekTo(startTimeRange, "seconds");
        this.setState({ playing: false });
      }
      const handler = this.props.onPlayerProgress || (() => {});
      handler(playedSeconds);
    }
  };
  render() {
    return (
      <div>
        {/* <video src={props.src} controls={false} /> */}
        <ReactPlayer
          onProgress={this.handlePlayerProgress}
          url={this.props.src}
          ref={el => (this.player = el)}
          playing={this.state.playing}
        />
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
