function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useCallback, useRef } from "react";
import { isVideo, noop } from "../libs/utils";
import Icon from "./Icon";
import Dropzone from "react-dropzone";

function FilePicker(props) {
  var onDrop = useCallback(function (acceptedFiles) {
    if (acceptedFiles.length) {
      var video = acceptedFiles[0];
      var handler = props.onFileSelected || noop;
      handler(video);
    }
  }, []);
  var MAX_SIZE = props.maxSize || 10000024;
  var MIN_SIZE = props.minSize || 0; // const handleFileChange = useCallback(e => {
  //   if (e.target.files.length) {
  //     const video = e.target.files[0];
  //     if (isVideo(video)) {
  //       const handler = props.onFileSelected || noop;
  //       handler(video);
  //     } else {
  //       return alert("Unsupported File Type");
  //     }
  //   }
  // });

  var toMB = function toMB(_byte) {
    return Math.round(_byte / 1000000);
  };

  return React.createElement(Dropzone, {
    onDrop: onDrop,
    maxSize: MAX_SIZE,
    minSize: MIN_SIZE,
    accept: "video/*"
  }, function (_ref) {
    var getRootProps = _ref.getRootProps,
        getInputProps = _ref.getInputProps,
        isDragActive = _ref.isDragActive;
    return React.createElement("div", _extends({}, getRootProps(), {
      className: "rvt-file-picker"
    }), React.createElement(Icon, {
      name: "music"
    }), React.createElement("input", getInputProps()), isDragActive ? React.createElement("p", null, "Drop the video here ...") : React.createElement(React.Fragment, null, React.createElement("p", null, "Drag 'n' drop a video here, or click to select one"), React.createElement("p", null, React.createElement("small", null, "(", toMB(MIN_SIZE), " - ", toMB(MAX_SIZE), "MB)"))));
  });
}

export default FilePicker;