import React from "react";

const Thumbnail = ({ width, src }) => {
  return (
    <span className="rvt-thumb" style={{ width }}>
      <img src={src} width="100%" height="auto" />
    </span>
  );
};

const VideoThumbs = ({ videoFrames }) => {
  // Convert the array to chunks with 5s
  const thumbnails = videoFrames.map(frame => {
    return <Thumbnail src={frame} width={100 / videoFrames.length + "%"} />;
  });

  return <React.Fragment>{thumbnails}</React.Fragment>;
};

export default VideoThumbs;
