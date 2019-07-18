import React, { useCallback, useState } from "react";
import FilePicker from "./components/FilePicker";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./libs/utils";
import VideoPlayer from "./components/VideoPlayer";

const ReactVideoTrimmer = () => {
  const [videoDataURL, updateVideoDataURL] = useState("");
  const handleFileSelected = useCallback(file => {
    console.log(file);
    readArrayBuffer(file).then(arrayBuffer => {
      // const blob = arrayBufferToBlob(arrayBuffer, 0, arrayBuffer.byteLength);
      const slicedBlobs = arrayBuffer.slice(0, 1000 * 60 * 2);
      const blob = new Blob([new Uint8Array(slicedBlobs)], {
        type: "video/webm"
      });
      console.log(blob);
      readDataURL(blob).then(dataURL => {
        console.log(dataURL);
        updateVideoDataURL(dataURL);
      });
    });
  });
  return (
    <div>
      <FilePicker onFileSelected={handleFileSelected} />
      {videoDataURL && <VideoPlayer src={videoDataURL} />}
    </div>
  );
};

export default ReactVideoTrimmer;
