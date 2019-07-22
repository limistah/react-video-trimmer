import { EventEmitter } from "events";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./utils";
import workerClient from "ffmpeg-webworker";
import { fromS } from "./formatSeconds";

class WebVideo extends EventEmitter {
  constructor(videoFile) {
    super();
    this.videoFile = videoFile;

    workerClient.on("onReady", () => this.emit("FFMPEGReady"));
    workerClient.on("onStdout", msg => this.emit("FFMPEGStdout", msg));
    workerClient.on("onFileReceived", () => this.emit("FFMPEGFileReceived"));
    workerClient.on("onDone", data => this.emit("FFMPEGDone", data));
  }
  trimVideo = (start = 0, length) => {
    // const startSeconds = fromS(start === 0 ? 1 : start, "hh:mm:ss");
    const startSeconds = fromS(start, "hh:mm:ss");
    workerClient.runCommand(
      `-ss ${startSeconds} -c copy -t ${length} sliced-output.mp4`
    );
  };
  _videoData = {};
  _videoFile = null;
  /**
   * @type {ArrayBuffer}
   */
  _videoBuffer = {};

  readAsArrayBuffer = async () => {
    this._videoBuffer = await readArrayBuffer(this._videoFile);
    return this.videoBuffer;
  };

  /**
   * @returns {Blob}
   * @returns {String}
   */
  convertBufferToBlob = buffer => {
    let blob = null;
    buffer = buffer || this.videoBuffer;
    if (buffer.byteLength) {
      blob = arrayBufferToBlob(buffer);
    }
    return blob;
  };

  /**
   * @returns {File}
   */
  readAsDataURL = async (buffer, blob) => {
    buffer = buffer || this.videoBuffer;
    blob = blob || this.convertBufferToBlob(buffer);
    let dataURL = null;
    if (blob) {
      dataURL = await readDataURL(blob);
    }
    return dataURL;
  };

  set videoFile(file) {
    if (file && file.type) {
      workerClient.inputFile = file;
    }
    this._videoFile = file;
  }

  get videoFile() {
    return this._videoFile;
  }

  get duration() {
    return this._videoData.duration || 0;
  }

  get videoData() {
    return this._videoData;
  }
  get videoBuffer() {
    return this._videoBuffer;
  }

  decode = async file => {
    this.videoFile = file;
    this.emit("processingFile");
    // Read File As ArrayBuffer
    const arrayBuffer = await this.readAsArrayBuffer();
    // convert to dataURL
    const dataURL = await this.readAsDataURL(arrayBuffer);

    let videoObjectUrl = URL.createObjectURL(this.videoFile);
    let video = document.createElement("video");

    video.src = videoObjectUrl;
    while (
      (video.duration === Infinity || isNaN(video.duration)) &&
      video.readyState < 2
    ) {
      await new Promise(r => setTimeout(r, 1000));
      video.currentTime = 10000000 * Math.random();
    }
    this._videoData = video;
    this.emit("processedFile");
    return { dataURL, arrayBuffer, blob: this.convertBufferToBlob() };
  };

  generateBufferChunks = (arrayBuffer = []) => {
    return new Promise((resolve, reject) => {
      try {
        let chunks = [];
        arrayBuffer = arrayBuffer.byteLength ? arrayBuffer : this.videoBuffer;
        const typedBuffer = new Uint8Array(arrayBuffer);
        const microSec = 1000 * 60;
        let startChunk = 0;
        for (let i = microSec; i < typedBuffer.byteLength; i += microSec) {
          const _buffer = arrayBuffer.slice(startChunk, i);
          chunks.push(_buffer);
          startChunk = i;
        }
        resolve(chunks);
      } catch (e) {
        reject(e);
      }
    });
  };
  extractFramesFromVideo = (fps = 25) => {
    return new Promise(async (resolve, reject) => {
      try {
        this.emit("extractingFrames");
        let video = this._videoData;
        let seekResolve;
        video.addEventListener("seeked", async function() {
          if (seekResolve) seekResolve();
        });
        let duration = video.duration;

        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        let [w, h] = [video.videoWidth, video.videoHeight];
        canvas.width = w;
        canvas.height = h;
        let frames = [];
        let interval = 125 / fps;
        let currentTime = 0;

        while (currentTime < duration) {
          video.currentTime = currentTime;
          await new Promise(r => (seekResolve = r));

          context.drawImage(video, 0, 0, w, h);
          let base64ImageData = canvas.toDataURL();
          frames.push(base64ImageData);

          currentTime += interval;
        }
        this.emit("extractedFrames");
        resolve(frames);
      } catch (e) {
        reject(e);
      }
    });
  };
}

export default WebVideo;
