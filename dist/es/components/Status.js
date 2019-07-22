import React from "react";
import "../styles/status.scss";

var Status = function Status(_ref) {
  var children = _ref.children;
  return React.createElement(
    "div",
    {
      className: "rvt-status"
    },
    children
  );
};

export default Status;
