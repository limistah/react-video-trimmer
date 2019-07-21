import React from "react";
import Icon from "./Icon";
import "../styles/controls.scss";

const Controls = ({
  onPauseClick,
  paused,
  // onReplayClick,
  processing,
  onEncode,
  showEncodeBtn
}) => {
  return (
    <div className="rvt-controls-cont">
      <a className="rvt-controller-item" title="Pause" onClick={onPauseClick}>
        <Icon name={paused ? "play" : "pause"} />
      </a>

      {/* <a className="rvt-controller-item" title="Replay" onClick={onReplayClick}>
        <Icon name="replay" />
      </a> */}
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
