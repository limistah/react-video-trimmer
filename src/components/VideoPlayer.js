import React from "react";

function VideoPlayer(props) {
  return (
    <div>
      <video src={props.src} controls={false} />
    </div>
  );
}

export default VideoPlayer;
