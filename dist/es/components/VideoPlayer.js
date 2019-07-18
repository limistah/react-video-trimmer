import React from "react";

function VideoPlayer(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("video", {
      src: props.src,
      controls: false
    })
  );
}

export default VideoPlayer;
