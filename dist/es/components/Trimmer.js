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

import React, { PureComponent } from "react";
import Dragger from "./Dragger";
import { noop, formatSeconds, leftZero } from "../libs/utils";

var TrimmerOverLay = function TrimmerOverLay(props) {
  return React.createElement("div", {
    className: "rvt-trimmer",
    style: {
      width: props.width,
      left: props.left,
      right: props.right
    }
  });
};

var TimeStamp = function TimeStamp(props) {
  var formated = formatSeconds(props.time);
  return React.createElement("div", {
    className: "rvt-player-cursor-current"
  }, React.createElement("span", {
    className: "rvt-player-num"
  }, formated[0]), "'", React.createElement("span", {
    className: "rvt-player-num"
  }, formated[1]), ".", React.createElement("span", {
    className: "rvt-player-num"
  }, leftZero(formated[2], 2)));
};

var Trimmer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Trimmer, _PureComponent);

  function Trimmer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Trimmer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Trimmer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "pos2Time", function (pos) {
      return pos / _this.props.widthDurationRatio;
    });

    _defineProperty(_assertThisInitialized(_this), "time2pos", function (time) {
      return time * _this.props.widthDurationRatio;
    });

    _defineProperty(_assertThisInitialized(_this), "keepInRange", function (x) {
      var containerWidth = _this.props.containerWidth;

      if (x < 0) {
        return 0;
      }

      if (x > containerWidth) {
        return containerWidth;
      }

      return x;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (pos) {
      var pos2Time = _this.pos2Time(_this.keepInRange(pos.x));

      var time = pos2Time;

      _this.props.onStartTimeChange(time);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragEnd", function (pos) {
      var pos2Time = _this.pos2Time(_this.keepInRange(pos.x));

      var time = pos2Time;

      _this.props.onEndTimeChange(time);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function () {
      var handler = _this.props.onGetData || noop;
      handler({
        start: _this.props.startTime,
        end: _this.props.endTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTrimmerWidth", function (width) {
      return _this.props.containerWidth - width;
    });

    return _this;
  }

  _createClass(Trimmer, [{
    key: "render",
    value: function render() {
      var start = this.time2pos(this.props.startTime);
      var end = this.time2pos(this.props.endTime);
      return React.createElement(React.Fragment, null, React.createElement(TrimmerOverLay, {
        left: 0,
        width: start
      }), React.createElement(Dragger, {
        x: start,
        onDrag: this.handleDragStart,
        onDragStop: this.handleDragStop
      }, React.createElement(TimeStamp, {
        time: this.props.startTime
      })), React.createElement(Dragger, {
        x: end,
        onDrag: this.handleDragEnd,
        onDragStop: this.handleDragStop
      }, React.createElement(TimeStamp, {
        time: this.props.endTime
      })), React.createElement(TrimmerOverLay, {
        right: 0,
        width: this.getTrimmerWidth(end)
      }));
    }
  }]);

  return Trimmer;
}(PureComponent);

export var VideoTrimmer =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(VideoTrimmer, _PureComponent2);

  function VideoTrimmer() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, VideoTrimmer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(VideoTrimmer)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      start: 0,
      end: 0
    });

    _defineProperty(_assertThisInitialized(_this2), "handleStartTimeChange", function (time) {
      _this2.setState({
        start: time
      });
    });

    _defineProperty(_assertThisInitialized(_this2), "handleGetTrimData", function () {
      var trimmerHandler = _this2.props.onTrim || noop;
      setTimeout(function () {
        return trimmerHandler({
          start: _this2.state.start || _this2.props.timeRange.start,
          end: _this2.state.end || _this2.props.timeRange.end
        });
      }, 200);
    });

    _defineProperty(_assertThisInitialized(_this2), "handleEndTimeChange", function (time) {
      _this2.setState({
        end: time
      });
    });

    return _this2;
  }

  _createClass(VideoTrimmer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", {
        className: "rvt-trimmer-cont",
        ref: function ref(e) {
          return _this3.containerRef = e;
        }
      }, this.props.showTrimmer && React.createElement(Trimmer, {
        onStartTimeChange: this.handleStartTimeChange,
        onEndTimeChange: this.handleEndTimeChange,
        widthDurationRatio: this.widthDurationRatio,
        containerWidth: this.containerWidth,
        startTime: this.state.start || this.props.timeRange.start,
        endTime: this.state.end || this.props.timeRange.end,
        onGetData: this.handleGetTrimData
      }));
    }
  }, {
    key: "widthDurationRatio",
    get: function get() {
      return this.containerWidth / this.props.duration;
    }
  }, {
    key: "containerWidth",
    get: function get() {
      return this.containerRef.getBoundingClientRect().width;
    }
  }]);

  return VideoTrimmer;
}(PureComponent);
export default VideoTrimmer;