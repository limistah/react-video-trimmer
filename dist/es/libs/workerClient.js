import WorkerFile from "webworker-file";
import workerFile from "./workerFile";
var worker = new WorkerFile(workerFile);
/**
 * use worker to encode audio
 * @param {AudioBuffer} audioBuffer
 * @param {string} type
 * @return {Promise<Blob>}
 */

export var encode = function encode(videoBlob, type) {
  var log = function log(msg) {
    return console.info(msg);
  };

  return new Promise(function(resolve, reject) {
    var aab;
    var buffersReady;
    var workerReady;
    var posted;
    var fileReader = new FileReader();

    fileReader.onload = function() {
      aab = this.result;
      postMessage();
    };

    fileReader.readAsArrayBuffer(videoBlob);

    worker.onmessage = function(event) {
      var message = event.data;

      if (message.type == "ready") {
        log("ffmpeg-asm.js</a> file has been loaded.");
        workerReady = true;
        if (buffersReady) postMessage();
      } else if (message.type == "stdout") {
        log(message.data);
      } else if (message.type == "start") {
        log("file received ffmpeg command.");
      } else if (message.type == "done") {
        var result = message.data[0]; // log(JSON.stringify(result));

        var blob = new File([result.data], "test.mp4", {
          type: "video/mp4"
        }); // log(blob);

        resolve(blob);
      }
    };

    var postMessage = function postMessage() {
      posted = true;
      worker.postMessage({
        type: "command",
        arguments: "-i video.webm -ss 00:00:05 -c copy -t 12 sliced-output.mp4".split(
          " "
        ),
        files: [
          {
            data: new Uint8Array(aab),
            name: "video.webm"
          }
        ]
      });
    };
  });
};
