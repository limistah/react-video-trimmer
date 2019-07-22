function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from "react";
import FilePicker from "./components/FilePicker";
import Status from "./components/Status";
import Player from "./components/Player";
import Controls from "./components/Controls";
import Trimmer from "./components/Trimmer";
import WebVideo from "./libs/WebVideo";
import Icon from "./components/Icon";
import { noop, arrayBufferToBlob, readBlobURL, download } from "./libs/utils";
import "./style.js";

var ReactVideoTrimmer =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ReactVideoTrimmer, _React$PureComponent);

  /**
   * @type {WebVideo}
   */
  function ReactVideoTrimmer(props) {
    var _this2 = this;

    var _this;

    _classCallCheck(this, ReactVideoTrimmer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactVideoTrimmer).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "webVideo", new WebVideo({}));

    _defineProperty(_assertThisInitialized(_this), "handleFFMPEGStdout", function (msg) {// console.log(msg);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFFMPEGReady", function () {// console.log("FFMPEG is Ready");
    });

    _defineProperty(_assertThisInitialized(_this), "handleFFMPEGFileReceived", function () {// console.log("FFMPEG Received File");
    });

    _defineProperty(_assertThisInitialized(_this), "handleFFMPEGDone", function (result) {
      var videoBlob = arrayBufferToBlob(result[0].data);

      _this.decodeVideoFile(videoBlob, function () {
        var handler = _this.onVideoEncode || noop;
        handler(result);

        _this.setState({
          encoding: false,
          encoded: true,
          encodedVideo: videoBlob
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      decoding: false,
      encoding: false,
      encoded: false,
      playVideo: false,
      videoDataURL: "",
      videoFrames: [],
      isDecoding: false,
      timeRange: {
        start: 0,
        end: 0
      },
      encodedVideo: null
    });

    _defineProperty(_assertThisInitialized(_this), "updateVideoDataURL", function (dataURL) {
      return _this.setState({
        videoDataURL: dataURL
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateVideoFrames", function (frames) {
      return _this.setState({
        videoFrames: frames
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateIsExtractingFrame", function (state) {
      return _this.setState({
        updateIsExtractingFrame: state
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateIsDecoding", function (state) {
      return _this.setState({
        updateIsDecoding: state
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateVideoDuration", function (duration) {
      return _this.setState({
        updateVideoDuration: duration
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decodeVideoFile", function (file) {
      var doneCB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      _this.setState({
        decoding: true
      });

      var webVideo = _this.webVideo;
      webVideo.videoFile = file;
      webVideo.decode(file).then(function (_ref) {
        var blob = _ref.blob,
            arrayBuffer = _ref.arrayBuffer,
            dataURL = _ref.dataURL;

        _this.setState({
          decoding: false
        });

        _this.updateVideoDataURL(dataURL);

        _this.setState({
          timeRange: {
            start: 0,
            end: _this.webVideo.videoData.duration
          }
        });

        doneCB();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileSelected", function (file) {
      _this.decodeVideoFile(file);
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoTrim", function (time) {
      _this.setState({
        timeRange: time
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEncodeVideo", function () {
      var timeRange = _this.state.timeRange;

      _this.setState({
        encoding: true,
        videoDataURL: ""
      });

      var timeDifference = timeRange.end - timeRange.start; // console.log(timeRange);

      _this.webVideo.trimVideo(timeRange.start, timeDifference);
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayPauseVideo", function () {
      var playVideo = _this.state.playVideo;

      _this.setState({
        playVideo: !playVideo
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayerPause", function () {
      _this.setState({
        playVideo: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayerPlay", function () {
      _this.setState({
        playVideo: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleReselectFile", function () {
      var state = {
        decoding: false,
        encoding: false,
        encoded: false,
        encodedVideo: null,
        playVideo: false,
        videoDataURL: "",
        videoFrames: [],
        isExtractingFrame: false,
        isDecoding: false,
        timeRange: _this.props.timeRange || {
          start: 0,
          end: 0
        }
      };

      _this.setState(state);
    });

    _defineProperty(_assertThisInitialized(_this), "VideoPlayerWithTrimmer", function (_ref2) {
      var showTrimmer = _ref2.showTrimmer;
      var _this$state = _this.state,
          decoding = _this$state.decoding,
          encoding = _this$state.encoding,
          encoded = _this$state.encoded,
          videoDataURL = _this$state.videoDataURL;
      return React.createElement(React.Fragment, null, !decoding && !encoding && videoDataURL && React.createElement(Player, {
        src: _this.state.videoDataURL,
        timeRange: _this.state.timeRange,
        playVideo: _this.state.playVideo,
        onPlayerPlay: _this.handlePlayerPlay,
        onPlayerPause: _this.handlePlayerPause
      }), showTrimmer && React.createElement(Trimmer, {
        showTrimmer: _this.state.videoDataURL,
        duration: _this.webVideo.videoData.duration,
        onTrim: _this.handleVideoTrim,
        timeRange: _this.state.timeRange
      }), !decoding && !encoding && videoDataURL && React.createElement(Controls, {
        onDownload: _this.handleDownloadVideo,
        canDownload: encoded,
        showEncodeBtn: _this.props.showEncodeBtn,
        onReselectFile: _this.handleReselectFile,
        onEncode: _this.handleEncodeVideo,
        onPlayPauseClick: _this.handlePlayPauseVideo,
        processing: encoding,
        playing: _this.state.playVideo
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleDownloadVideo", function () {
      var blobURL = readBlobURL(_this.state.encodedVideo);
      download(blobURL, "trimmed.mp4");
    });

    _defineProperty(_assertThisInitialized(_this), "VideoPlayerNoTrimmer", function () {
      return React.createElement(_this2.VideoPlayerWithTrimmer, null);
    });

    _this.webVideo.on("processingFile", function () {
      return _this.updateIsDecoding(true);
    });

    _this.webVideo.on("processedFile", function () {
      return _this.updateIsDecoding(false);
    });

    _this.webVideo.on("FFMPEGStdout", _this.handleFFMPEGStdout);

    _this.webVideo.on("FFMPEGReady", _this.handleFFMPEGReady);

    _this.webVideo.on("FFMPEGFileReceived", _this.handleFFMPEGFileReceived);

    _this.webVideo.on("FFMPEGDone", _this.handleFFMPEGDone);

    return _this;
  }

  _createClass(ReactVideoTrimmer, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          decoding = _this$state2.decoding,
          encoding = _this$state2.encoding,
          encoded = _this$state2.encoded,
          videoDataURL = _this$state2.videoDataURL;
      return React.createElement("div", {
        className: "rvt-main-container"
      }, encoded ? React.createElement(this.VideoPlayerNoTrimmer, null) : React.createElement(React.Fragment, null, !decoding && !encoding && !videoDataURL && React.createElement(FilePicker, {
        onFileSelected: this.handleFileSelected
      }), (decoding || encoding) && React.createElement(Status, null, React.createElement(Icon, {
        name: "spin",
        className: "rvt-icon-spin"
      }), encoding ? "ENCODING VIDEO" : "DECODING VIDEO", "..."), React.createElement(this.VideoPlayerWithTrimmer, {
        showTrimmer: true
      })));
    }
  }]);

  return ReactVideoTrimmer;
}(React.PureComponent);

export default ReactVideoTrimmer;