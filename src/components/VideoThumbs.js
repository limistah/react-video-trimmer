import React from "react";

const VideoThumbs = ({ videoFrames }) => {
  // Convert the array to chunks with 5s
  const Imgs = videoFrames.map(frame => {
    return <img src={frame} />;
  });

  return <div>{Imgs}</div>;
};

export default VideoThumbs;
