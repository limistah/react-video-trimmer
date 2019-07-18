import React, { useCallback } from "react";
import { isVideo, noop } from "../libs/utils";

function FilePicker(props) {
  const handleFileChange = useCallback(e => {
    if (e.target.files.length) {
      const video = e.target.files[0];
      if (isVideo(video)) {
        const handler = props.onFileSelected || noop;
        handler(video);
      } else {
        return alert("Unsupported File Type");
      }
    }
  });
  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
}

export default FilePicker;
