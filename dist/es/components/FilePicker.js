import React, { useCallback } from "react";
import { isVideo, noop } from "../libs/utils";

function FilePicker(props) {
  var handleFileChange = useCallback(function(e) {
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
  return React.createElement(
    "div",
    null,
    React.createElement("input", {
      type: "file",
      accept: "video/*",
      onChange: handleFileChange
    })
  );
}

export default FilePicker;
