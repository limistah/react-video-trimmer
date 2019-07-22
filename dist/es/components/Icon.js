import React from "react";
import PropTypes from "prop-types";
import "../styles/icon.scss";

var Download = function Download(_ref) {
  var className = _ref.className;
  return React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
};

var Music = function Music(_ref2) {
  var className = _ref2.className;
  return React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"
  }));
};

var Play = function Play(_ref3) {
  var className = _ref3.className;
  return React.createElement("svg", {
    className: className,
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
  }));
};

var Pause = function Pause(_ref4) {
  var className = _ref4.className;
  return React.createElement("svg", {
    className: className,
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
  }));
};

var Replay = function Replay(_ref5) {
  var className = _ref5.className;
  return React.createElement("svg", {
    className: className,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), React.createElement("path", {
    d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
  }));
};

var Spin = function Spin(_ref6) {
  var className = _ref6.className;
  return React.createElement("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 42 42"
  }, React.createElement("path", {
    d: "M21 37c-4.3 0-8.3-1.7-11.3-4.7S5 25.3 5 21c0-3 .8-6 2.5-8.5C9 10 11.2 8 13.8 6.7l1.3 2.7c-2.1 1.1-3.9 2.7-5.2 4.7-1.3 2.1-2 4.5-2 6.9 0 7.2 5.8 13 13 13s13-5.8 13-13c0-2.5-.7-4.9-2-6.9s-3.1-3.6-5.2-4.7L28 6.7c2.8 1.3 5 3.3 6.5 5.8C36.2 15 37 18 37 21c0 4.3-1.7 8.3-4.7 11.3S25.3 37 21 37z"
  }));
};

var Icon = function Icon(props) {
  var El = Download;

  switch (props.name) {
    case "music":
      El = Music;
      break;

    case "play":
      El = Play;
      break;

    case "pause":
      El = Pause;
      break;

    case "replay":
      El = Replay;
      break;

    case "spin":
      El = Spin;
      break;

    default:
      El = Download;
      break;
  }

  return React.createElement(El, {
    className: "rvt-icon rat-icon-".concat(props.name, " ").concat(props.className).trim()
  });
};

Icon.propTypes = {
  name: PropTypes.string
};
export default Icon;