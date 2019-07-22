import React, { useCallback, useRef } from "react";
import { isVideo, noop } from "../libs/utils";
import Icon from "./Icon";

function FilePicker(props) {
  const inputRef = useRef();
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
  const handleContainerClicked = useCallback(() => {
    inputRef.current.click();
  });
  return (
    <div className="rvt-file-picker" onClick={handleContainerClicked}>
      <Icon name="music" />
      Pick A Video
      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        ref={inputRef}
      />
    </div>
  );
}

export default FilePicker;
