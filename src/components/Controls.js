import React from "react";
import Icon from "./Icon";
import "../styles/controls.scss";

const Controls = ({
  onPlayPauseClick,
  playing,
  onReselectFile,
  processing,
  onEncode,
  showEncodeBtn
}) => {
  return (
    <div className="rvt-controls-cont">
      <a
        className="rvt-controller-item"
        title="Pause"
        onClick={onPlayPauseClick}
      >
        <Icon name={playing ? "pause" : "play"} />
      </a>

      <a
        className="rvt-controller-item"
        title="Select File"
        onClick={onReselectFile}
      >
        <Icon name="music" />
      </a>
      {!showEncodeBtn && (
        <div className="rvt-controller-dropdown rvt-controller-list-wrap">
          <a className="rvt-controller-item" onClick={onEncode}>
            <Icon name={processing ? "spin" : "download"} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Controls;
