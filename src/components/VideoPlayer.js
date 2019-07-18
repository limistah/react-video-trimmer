import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer(props) {
  return (
    <div>
      {/* <video src={props.src} controls={false} /> */}
      <ReactPlayer url={props.src} playing />
    </div>
  );
}

export default VideoPlayer;
