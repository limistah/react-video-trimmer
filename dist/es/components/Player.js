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
import ReactPlayer from "react-player";
import { formatSeconds, noop, leftZero } from "../libs/utils";

var Player =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Player, _React$Component);

  function Player() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Player)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      playing: _this.props.playVideo || false
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayerProgress", function (data) {
      if (data.loaded) {
        var playedSeconds = data.playedSeconds;
        var startTimeRange = _this.props.timeRange.start;
        var endTimeRange = _this.props.timeRange.end;
        var playedSecondsIsLowerThanStartTime = playedSeconds <= startTimeRange;
        var playedSecondsIsGreaterThanEndTime = playedSeconds >= endTimeRange;

        if (playedSecondsIsLowerThanStartTime) {
          _this.player.seekTo(startTimeRange, "seconds");
        }

        if (playedSecondsIsGreaterThanEndTime) {
          _this.player.seekTo(startTimeRange, "seconds"); // this.setState({ playing: false });

        }

        var handler = _this.props.onPlayerProgress || noop;
        handler(playedSeconds);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnPause", function () {
      var handler = _this.props.onPlayerPause || noop;
      handler();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnPlay", function () {
      var handler = _this.props.onPlayerPlay || noop;
      handler();
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var newTimeRange = newProps.timeRange;
      var oldTimeRange = this.props.timeRange;
      var canSeek = oldTimeRange && newTimeRange.start !== oldTimeRange.start || !oldTimeRange && newTimeRange.start > 0;

      if (canSeek) {
        this.setState({
          playing: false
        });
        this.player.seekTo(newTimeRange.start, "seconds");
      }

      if (newProps.playVideo !== this.props.playVideo) {
        this.setState({
          playing: newProps.playVideo
        });
      }
    }
  }, {
    key: "displaySeconds",
    value: function displaySeconds(seconds) {
      return seconds.toFixed(2) + "s";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      var _this$props$timeRange = this.props.timeRange,
          start = _this$props$timeRange.start,
          end = _this$props$timeRange.end;
      return React.createElement("div", {
        className: "rvt-player-cont",
        onContextMenu: function onContextMenu() {}
      }, React.createElement(ReactPlayer, (_React$createElement = {
        onPlay: this.handleOnPause
      }, _defineProperty(_React$createElement, "onPlay", this.handleOnPlay), _defineProperty(_React$createElement, "onProgress", this.handlePlayerProgress), _defineProperty(_React$createElement, "url", this.props.src), _defineProperty(_React$createElement, "ref", function ref(el) {
        return _this2.player = el;
      }), _defineProperty(_React$createElement, "playing", this.state.playing), _defineProperty(_React$createElement, "style", {
        margin: "0 auto"
      }), _React$createElement)), React.createElement("div", {
        className: "rvt-player-time-range-cont"
      }, React.createElement("span", {
        className: "rvt-player-time-range"
      }, "From: ", React.createElement("strong", null, this.displaySeconds(start))), React.createElement("span", {
        className: "rvt-player-time-range"
      }, "To: ", React.createElement("strong", null, this.displaySeconds(end))), React.createElement("span", {
        className: "rvt-player-time-range"
      }, "Selected ", React.createElement("strong", null, this.displaySeconds(end - start)), " of", " ", React.createElement("strong", null, this.displaySeconds(this.props.timeLimit)), " allowed")));
    }
  }]);

  return Player;
}(React.Component);

export default Player;