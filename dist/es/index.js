function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import React, { useCallback, useState } from "react";
import FilePicker from "./components/FilePicker";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./libs/utils";
import VideoPlayer from "./components/VideoPlayer";

var ReactVideoTrimmer = function ReactVideoTrimmer() {
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    videoDataURL = _useState2[0],
    updateVideoDataURL = _useState2[1];

  var handleFileSelected = useCallback(function(file) {
    console.log(file);
    readArrayBuffer(file).then(function(arrayBuffer) {
      // const blob = arrayBufferToBlob(arrayBuffer, 0, arrayBuffer.byteLength);
      var slicedBlobs = arrayBuffer.slice(0, 1000 * 60 * 2);
      var blob = new Blob([new Uint8Array(slicedBlobs)], {
        type: "video/webm"
      });
      console.log(blob);
      readDataURL(blob).then(function(dataURL) {
        console.log(dataURL);
        updateVideoDataURL(dataURL);
      });
    });
  });
  return React.createElement(
    "div",
    null,
    React.createElement(FilePicker, {
      onFileSelected: handleFileSelected
    }),
    videoDataURL &&
      React.createElement(VideoPlayer, {
        src: videoDataURL
      })
  );
};

export default ReactVideoTrimmer;
