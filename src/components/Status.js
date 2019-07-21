import React from "react";
import "../styles/status.scss";

const Status = ({ statusMessage }) => {
  return <div className="rvt-status">{statusMessage}</div>;
};

export default Status;
