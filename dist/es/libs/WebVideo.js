function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { EventEmitter } from "events";
import { readDataURL, arrayBufferToBlob, readArrayBuffer } from "./utils";
import workerClient from "ffmpeg-webworker";
import { fromS } from "./formatSeconds";

var WebVideo =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(WebVideo, _EventEmitter);

  function WebVideo(videoFile) {
    var _this;

    _classCallCheck(this, WebVideo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebVideo).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleDoneClientDone", function (result) {
      // console.log(result);
      // if (!this.optimizedVideo) {
      //   this.optimizedVideo = true;
      //   const converted = arrayBufferToBlob(result[0].data);
      //   // console.log(converted);
      //   workerClient.inputFile = converted;
      //   setTimeout(this.optimizeVideo, 500);
      // } else {
      var converted = arrayBufferToBlob(result[0].data);

      _this.emit("FFMPEGDone", result); // }

    });

    _defineProperty(_assertThisInitialized(_this), "trimVideo", function () {
      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var length = arguments.length > 1 ? arguments[1] : undefined;
      var startSeconds = fromS(start, "hh:mm:ss");
      workerClient.runCommand("-ss ".concat(startSeconds, " -c copy -t ").concat(length, " sliced-output.mp4"));
    });

    _defineProperty(_assertThisInitialized(_this), "optimizeVideo", function () {
      workerClient.runCommand("-strict -2 -vcodec libx264 -crf 23 output.mp4", 253554432);
    });

    _defineProperty(_assertThisInitialized(_this), "_videoData", {});

    _defineProperty(_assertThisInitialized(_this), "_videoFile", null);

    _defineProperty(_assertThisInitialized(_this), "optimizedVideo", false);

    _defineProperty(_assertThisInitialized(_this), "_videoBuffer", {});

    _defineProperty(_assertThisInitialized(_this), "readAsArrayBuffer",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return readArrayBuffer(_this._videoFile);

            case 2:
              _this._videoBuffer = _context.sent;
              return _context.abrupt("return", _this.videoBuffer);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "convertBufferToBlob", function (buffer) {
      var blob = null;
      buffer = buffer || _this.videoBuffer;

      if (buffer.byteLength) {
        blob = arrayBufferToBlob(buffer);
      }

      return blob;
    });

    _defineProperty(_assertThisInitialized(_this), "readAsDataURL",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(buffer, blob) {
        var dataURL;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                buffer = buffer || _this.videoBuffer;
                blob = blob || _this.convertBufferToBlob(buffer);
                dataURL = null;

                if (!blob) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return readDataURL(blob);

              case 6:
                dataURL = _context2.sent;

              case 7:
                return _context2.abrupt("return", dataURL);

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "decode",
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(file) {
        var arrayBuffer, dataURL, videoObjectUrl, video;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this.videoFile = file;

                _this.emit("processingFile"); // Read File As ArrayBuffer


                _context3.next = 4;
                return _this.readAsArrayBuffer();

              case 4:
                arrayBuffer = _context3.sent;
                _context3.next = 7;
                return _this.readAsDataURL(arrayBuffer);

              case 7:
                dataURL = _context3.sent;
                videoObjectUrl = URL.createObjectURL(_this.videoFile);
                video = document.createElement("video");
                video.src = videoObjectUrl;

              case 11:
                if (!((video.duration === Infinity || isNaN(video.duration)) && video.readyState < 2)) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 14;
                return new Promise(function (r) {
                  return setTimeout(r, 1000);
                });

              case 14:
                video.currentTime = 10000000 * Math.random();
                _context3.next = 11;
                break;

              case 17:
                _this._videoData = video;

                _this.emit("processedFile");

                return _context3.abrupt("return", {
                  dataURL: dataURL,
                  arrayBuffer: arrayBuffer,
                  blob: _this.convertBufferToBlob()
                });

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "generateBufferChunks", function () {
      var arrayBuffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return new Promise(function (resolve, reject) {
        try {
          var chunks = [];
          arrayBuffer = arrayBuffer.byteLength ? arrayBuffer : _this.videoBuffer;
          var typedBuffer = new Uint8Array(arrayBuffer);
          var microSec = 1000 * 60;
          var startChunk = 0;

          for (var i = microSec; i < typedBuffer.byteLength; i += microSec) {
            var _buffer = arrayBuffer.slice(startChunk, i);

            chunks.push(_buffer);
            startChunk = i;
          }

          resolve(chunks);
        } catch (e) {
          reject(e);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "extractFramesFromVideo", function () {
      var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 25;
      return new Promise(
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5(resolve, reject) {
          var video, seekResolve, duration, canvas, context, _ref6, w, h, frames, interval, currentTime, base64ImageData;

          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;

                  _this.emit("extractingFrames");

                  video = _this._videoData;
                  video.addEventListener("seeked",
                  /*#__PURE__*/
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            if (seekResolve) seekResolve();

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  })));
                  duration = video.duration;
                  canvas = document.createElement("canvas");
                  context = canvas.getContext("2d");
                  _ref6 = [video.videoWidth, video.videoHeight], w = _ref6[0], h = _ref6[1];
                  canvas.width = w;
                  canvas.height = h;
                  frames = [];
                  interval = 125 / fps;
                  currentTime = 0;

                case 13:
                  if (!(currentTime < duration)) {
                    _context5.next = 23;
                    break;
                  }

                  video.currentTime = currentTime;
                  _context5.next = 17;
                  return new Promise(function (r) {
                    return seekResolve = r;
                  });

                case 17:
                  context.drawImage(video, 0, 0, w, h);
                  base64ImageData = canvas.toDataURL();
                  frames.push(base64ImageData);
                  currentTime += interval;
                  _context5.next = 13;
                  break;

                case 23:
                  _this.emit("extractedFrames");

                  resolve(frames);
                  _context5.next = 30;
                  break;

                case 27:
                  _context5.prev = 27;
                  _context5.t0 = _context5["catch"](0);
                  reject(_context5.t0);

                case 30:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[0, 27]]);
        }));

        return function (_x4, _x5) {
          return _ref4.apply(this, arguments);
        };
      }());
    });

    _this.videoFile = videoFile;
    _this.workerClient = workerClient;
    workerClient.on("onReady", function () {
      return _this.emit("FFMPEGReady");
    });
    workerClient.on("onStdout", function (msg) {
      return _this.emit("FFMPEGStdout", msg);
    });
    workerClient.on("onFileReceived", function () {
      return _this.emit("FFMPEGFileReceived");
    });
    workerClient.on("onDone", _this.handleDoneClientDone);
    return _this;
  }

  _createClass(WebVideo, [{
    key: "videoFile",
    set: function set(file) {
      if (file && file.type) {
        workerClient.inputFile = file;
      }

      this._videoFile = file;
    },
    get: function get() {
      return this._videoFile;
    }
  }, {
    key: "duration",
    get: function get() {
      return this._videoData.duration || 0;
    }
  }, {
    key: "videoData",
    get: function get() {
      return this._videoData;
    }
  }, {
    key: "videoBuffer",
    get: function get() {
      return this._videoBuffer;
    }
  }]);

  return WebVideo;
}(EventEmitter);

export default WebVideo;