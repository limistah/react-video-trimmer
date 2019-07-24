import React from "react";
import Icon from "./Icon";

const Controls = ({
  onPlayPauseClick,
  playing,
  onReselectFile,
  processing,
  onEncode,
  showEncodeBtn,
  canDownload,
  onDownload
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
      {showEncodeBtn && (
        <div className="rvt-controller-dropdown rvt-controller-list-wrap">
          {canDownload ? (
            <a className="rvt-controller-item" onClick={onDownload}>
              <Icon name="download" />
            </a>
          ) : (
            <a className="rvt-controller-item" onClick={onEncode}>
              <Icon name={processing ? "spin" : "replay"} />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Controls;
