import React from "react";
import Icon from "./Icon";
import "../styles/controls.scss";

const Controls = ({
  onFileChange,
  onPauseClick,
  paused,
  onReplayClick,
  processing,
  onEncode,
  showEncodeBtn
}) => {
  return (
    <div className="rvt-controls-cont">
      <a className="rvt-controller-item" title="Pause" onClick={onPauseClick}>
        <Icon name={paused ? "play" : "pause"} />
      </a>

      <a className="rvt-controller-item" title="Replay" onClick={onReplayClick}>
        <Icon name="replay" />
      </a>
      {!showEncodeBtn && (
        <div className="rvt-controller-dropdown rvt-controller-list-wrap">
          <a className="rvt-controller-item" onClick={onEncode} data-type="wav">
            <Icon name={processing ? "spin" : "download"} />
          </a>
          {/* {!processing && (
          <ul className="rvt-controller-list">
            <li>
              <a onClick={onEncode} data-type="wav">
                Wav
              </a>
            </li>
            <li>
              <a onClick={onEncode} data-type="mp3">
                MP3
              </a>
            </li>
          </ul>
        )} */}
        </div>
      )}
    </div>
  );
};

export default Controls;
