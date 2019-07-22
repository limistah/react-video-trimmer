import React, { useCallback, useRef } from "react";
import { isVideo, noop } from "../libs/utils";
import "../styles/file-picker.scss";
import Icon from "./Icon";

function FilePicker(props) {
  var inputRef = useRef();
  var handleFileChange = useCallback(function (e) {
    if (e.target.files.length) {
      var video = e.target.files[0];

      if (isVideo(video)) {
        var handler = props.onFileSelected || noop;
        handler(video);
      } else {
        return alert("Unsupported File Type");
      }
    }
  });
  var handleContainerClicked = useCallback(function () {
    inputRef.current.click();
  });
  return React.createElement("div", {
    className: "rvt-file-picker",
    onClick: handleContainerClicked
  }, React.createElement(Icon, {
    name: "music"
  }), "Pick A Video", React.createElement("input", {
    type: "file",
    accept: "video/*",
    onChange: handleFileChange,
    ref: inputRef
  }));
}

export default FilePicker;