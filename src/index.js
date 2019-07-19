import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./libs/utils";
import VideoPlayer from "./components/VideoPlayer";
import VideoThumbs from "./components/VideoThumbs";
import WebVideo from "./libs/WebVideo";

const ReactVideoTrimmer = () => {
  const webVideo = new WebVideo({});
  webVideo.on("processingFile", () => {
    console.log("Processing File");
  });
  webVideo.on("processedFile", () => {
    console.log("Processed File");
  });
  webVideo.on("extractingFrames", () => {
    console.log("extractingFrames");
  });
  webVideo.on("extractedFrames", () => {
    console.log("extractingFrames");
  });

  const initialState = {
    videoDataURL: "",
    videoArrayBuffer: [],
    videoFrames: []
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateVideoDataURL":
        return { ...state, videoDataURL: action.payload };
      case "updateVideoArrayBuffer":
        return { ...state, videoArrayBuffer: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFileSelected = useCallback(file => {
    webVideo.decode(file).then(({ blob, arrayBuffer, dataURL }) => {
      // console.log()
      updateVideoDataURL(dataURL);
      updateVideoArrayBuffer(arrayBuffer);
    });
    webVideo.extractFramesFromVideo().then(frames => {
      console.log({ frames });
      // When chunks arrives
      // Convert each chunk
    });
  });

  const updateVideoDataURL = dataURL =>
    dispatch({ type: "updateVideoDataURL", payload: dataURL });

  const updateVideoArrayBuffer = arrayBuffer =>
    dispatch({ type: "updateVideoArrayBuffer", payload: arrayBuffer });
  return (
    <div>
      <FilePicker onFileSelected={handleFileSelected} />
      {(state.videoFrames.length || "") && (
        <VideoThumbs videoFrames={state.videoFrames} />
      )}
      {state.videoDataURL && <VideoPlayer src={state.videoDataURL} />}
    </div>
  );
};

export default ReactVideoTrimmer;
