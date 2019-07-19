import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
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

      case "updateVideoDataURL":
        return { ...state, videoDataURL: action.payload };
      case "updateVideoFrames":
        return { ...state, videoFrames: action.payload };
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
      webVideo.extractFramesFromVideo().then(frames => {
        updateVideoFrames(frames);
      });
    });
  });

  const updateVideoDataURL = dataURL =>
    dispatch({ type: "updateVideoDataURL", payload: dataURL });

  const updateVideoArrayBuffer = arrayBuffer =>
    dispatch({ type: "updateVideoArrayBuffer", payload: arrayBuffer });

  const updateVideoFrames = frames =>
    dispatch({ type: "updateVideoFrames", payload: frames });
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
