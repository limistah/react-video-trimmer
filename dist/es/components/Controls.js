import React from "react";
import Icon from "./Icon";
import "../styles/controls.scss";

var Controls = function Controls(_ref) {
  var onPlayPauseClick = _ref.onPlayPauseClick,
    playing = _ref.playing,
    onReselectFile = _ref.onReselectFile,
    processing = _ref.processing,
    onEncode = _ref.onEncode,
    showEncodeBtn = _ref.showEncodeBtn,
    canDownload = _ref.canDownload,
    onDownload = _ref.onDownload;
  return React.createElement(
    "div",
    {
      className: "rvt-controls-cont"
    },
    React.createElement(
      "a",
      {
        className: "rvt-controller-item",
        title: "Pause",
        onClick: onPlayPauseClick
      },
      React.createElement(Icon, {
        name: playing ? "pause" : "play"
      })
    ),
    React.createElement(
      "a",
      {
        className: "rvt-controller-item",
        title: "Select File",
        onClick: onReselectFile
      },
      React.createElement(Icon, {
        name: "music"
      })
    ),
    !showEncodeBtn &&
      React.createElement(
        "div",
        {
          className: "rvt-controller-dropdown rvt-controller-list-wrap"
        },
        canDownload
          ? React.createElement(
              "a",
              {
                className: "rvt-controller-item",
                onClick: onDownload
              },
              React.createElement(Icon, {
                name: "download"
              })
            )
          : React.createElement(
              "a",
              {
                className: "rvt-controller-item",
                onClick: onEncode
              },
              React.createElement(Icon, {
                name: processing ? "spin" : "replay"
              })
            )
      )
  );
};

export default Controls;
