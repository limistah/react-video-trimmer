import React from "react";
import ReactPlayer from "react-player";
import { formatSeconds, noop, leftZero } from "../libs/utils";

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
      console.log({ canSeek });
      this.setState({ playing: false });
      this.player.seekTo(newTimeRange.start, "seconds");
    }
    if (newProps.playVideo !== this.props.playVideo) {
      console.log("Playing Changed");
      this.setState({ playing: newProps.playVideo });
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
        // this.setState({ playing: false });
      }
      const handler = this.props.onPlayerProgress || noop;
      handler(playedSeconds);
    }
  };
  displaySeconds(seconds) {
    return seconds.toFixed(2) + "s";
  }
  handleOnPause = () => {
    const handler = this.props.onPlayerPause || noop;
    handler();
  };
  handleOnPlay = () => {
    const handler = this.props.onPlayerPlay || noop;
    handler();
  };
  render() {
    return (
      <div className="rvt-player-cont" onContextMenu={() => {}}>
        {/* <video src={props.src} controls={false} /> */}
        <ReactPlayer
          onPlay={this.handleOnPause}
          onPlay={this.handleOnPlay}
          onProgress={this.handlePlayerProgress}
          url={this.props.src}
          ref={el => (this.player = el)}
          playing={this.state.playing}
          style={{
            margin: "0 auto"
          }}
        />
        <div className="rvt-player-time-range-cont">
          <span className="rvt-player-time-range">
            From:{" "}
            <strong>{this.displaySeconds(this.props.timeRange.start)}</strong>
          </span>
          <span className="rvt-player-time-range">
            To: <strong>{this.displaySeconds(this.props.timeRange.end)}</strong>
          </span>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
