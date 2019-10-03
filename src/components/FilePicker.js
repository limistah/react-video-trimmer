import React, { useCallback, useRef } from "react";
import { isVideo, noop } from "../libs/utils";
import Icon from "./Icon";
import Dropzone from "react-dropzone";

function FilePicker(props) {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) {
      const video = acceptedFiles[0];
      const handler = props.onFileSelected || noop;
      handler(video);
    }
  }, []);
  const MAX_SIZE = props.maxSize || 10000024;
  const MIN_SIZE = props.minSize || 0;
  // const handleFileChange = useCallback(e => {
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
  const toMB = byte => Math.round(byte / 1000000);
  return (
    <Dropzone
      onDrop={onDrop}
      maxSize={MAX_SIZE}
      minSize={MIN_SIZE}
      accept="video/*"
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div {...getRootProps()} className="rvt-file-picker">
          <Icon name="music" />
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the video here ...</p>
          ) : (
            <>
              <p>Drag 'n' drop a video here, or click to select one</p>
              <p>
                <small>
                  ({toMB(MIN_SIZE)} - {toMB(MAX_SIZE)}MB)
                </small>
              </p>
            </>
          )}
        </div>
      )}
    </Dropzone>
  );
}

export default FilePicker;
