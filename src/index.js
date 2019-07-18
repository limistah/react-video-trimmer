import React, { useCallback, useState, useReducer } from "react";
import FilePicker from "./components/FilePicker";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./libs/utils";
import VideoPlayer from "./components/VideoPlayer";
import VideoThumbs from "./components/VideoThumbs";

const ReactVideoTrimmer = () => {
  const initialState = {
    videoDataURL: "",
    videoArrayBuffer: []
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
    readArrayBuffer(file).then(arrayBuffer => {
      updateVideoArrayBuffer(arrayBuffer);
      const blob = arrayBufferToBlob(arrayBuffer);
      readDataURL(blob).then(dataURL => {
        updateVideoDataURL(dataURL);
      });
    });
  });

  const updateVideoDataURL = dataURL =>
    dispatch({ type: "updateVideoDataURL", payload: dataURL });

  const updateVideoArrayBuffer = arrayBuffer =>
    dispatch({ type: "updateVideoArrayBuffer", payload: arrayBuffer });

  return (
    <div>
      <FilePicker onFileSelected={handleFileSelected} />
      {(state.videoArrayBuffer.byteLength || "") && (
        <VideoThumbs videoArrayBuffer={state.videoArrayBuffer} />
      )}
      {state.videoDataURL && <VideoPlayer src={state.videoDataURL} />}
    </div>
  );
};

export default ReactVideoTrimmer;
