import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import VideoPlayer from "./components/VideoPlayer";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";

const ReactVideoTrimmer = () => {
  const webVideo = new WebVideo({});
  webVideo.on("processingFile", () => updateIsDecoding(true));
  webVideo.on("processedFile", () => updateIsDecoding(false));
  webVideo.on("extractingFrames", () => updateIsExtractingFrame(true));
  webVideo.on("extractedFrames", () => {
    updateVideoDuration(webVideo.videoData.duration);
    updateIsExtractingFrame(false);
  });

  const initialState = {
    videoDataURL: "",
    videoArrayBuffer: [],
    videoFrames: [],
    isExtractingFrame: false,
    isDecoding: false,
    videoDuration: 0
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "updateVideoDataURL":
        return { ...state, videoDataURL: action.payload };
      case "updateIsExtractingFrame":
        return { ...state, isExtractingFrame: action.payload };
      case "updateIsDecoding":
        return { ...state, isDecoding: action.payload };
      case "updateVideoDataURL":
        return { ...state, videoDataURL: action.payload };
      case "updateVideoFrames":
        return { ...state, videoFrames: action.payload };
      case "updateVideoDuration":
        return { ...state, videoDuration: action.payload };
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

  const handleVideoTrim = useCallback(time => {
    console.log(time);
  });

  const dispatchAction = (type, payload) => dispatch({ type, payload });

  const updateVideoDataURL = dataURL =>
    dispatchAction("updateVideoDataURL", dataURL);

  const updateVideoArrayBuffer = arrayBuffer =>
    dispatchAction("updateVideoArrayBuffer", arrayBuffer);

  const updateVideoFrames = frames =>
    dispatchAction("updateVideoFrames", frames);

  const updateIsExtractingFrame = state =>
    dispatchAction("updateIsExtractingFrame", state);

  const updateIsDecoding = state => dispatchAction("updateIsDecoding", state);
  const updateVideoDuration = state =>
    dispatchAction("updateVideoDuration", state);

  return (
    <div>
      <FilePicker onFileSelected={handleFileSelected} />
      <Trimmer
        videoFrames={state.videoFrames}
        duration={state.videoDuration}
        onTrim={handleVideoTrim}
      />
      {state.videoDataURL && <VideoPlayer src={state.videoDataURL} />}
    </div>
  );
};

export default ReactVideoTrimmer;
