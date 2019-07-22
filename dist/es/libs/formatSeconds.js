"use strict";

import zeroFill from "zero-fill";
/**
 * Original from https://www.npmjs.com/package/hh-mm-ss
 */
// Time units with their corresponding values in miliseconds

var HOUR = 3600000;
var MINUTE = 60000;
var SECOND = 1000;
var TIME_FORMAT_ERRMSG = "Time format error"; // =============================================================================
// Export functions
// =============================================================================

export function fromMs(ms) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mm:ss";

  if (typeof ms !== "number" || Number.isNaN(ms)) {
    throw new Error("NaN error");
  }

  var absMs = Math.abs(ms);
  var negative = ms < 0;
  var hours = Math.floor(absMs / HOUR);
  var minutes = Math.floor(absMs % HOUR / MINUTE);
  var seconds = Math.floor(absMs % MINUTE / SECOND);
  var miliseconds = Math.floor(absMs % SECOND);
  return formatTime({
    negative: negative,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    miliseconds: miliseconds
  }, format);
}
export function fromS(s) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mm:ss";

  if (typeof s !== "number" || Number.isNaN(s)) {
    throw new Error("NaN error");
  }

  var ms = s * SECOND;
  return fromMs(ms, format);
}
export function toMs(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mm:ss";
  var re;

  if (["mm:ss", "mm:ss.sss", "hh:mm:ss", "hh:mm:ss.sss"].includes(format)) {
    re = /^(-)?(?:(\d\d+):)?(\d\d):(\d\d)(\.\d+)?$/;
  } else if (format === "hh:mm") {
    re = /^(-)?(\d\d):(\d\d)(?::(\d\d)(?:(\.\d+))?)?$/;
  } else {
    throw new Error(TIME_FORMAT_ERRMSG);
  }

  var result = re.exec(time);
  if (!result) throw new Error();
  var negative = result[1] === "-";
  var hours = result[2] | 0;
  var minutes = result[3] | 0;
  var seconds = result[4] | 0;
  var miliseconds = Math.floor(1000 * result[5] | 0);

  if (minutes > 60 || seconds > 60) {
    throw new Error();
  }

  return (negative ? -1 : 1) * (hours * HOUR + minutes * MINUTE + seconds * SECOND + miliseconds);
}
export function toS(time) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "mm:ss";
  var ms = toMs(time, format);
  return Math.floor(ms / SECOND);
} // =============================================================================
// Utility functions
// =============================================================================

function formatTime(time, format) {
  var showMs;
  var showSc;
  var showHr;

  switch (format.toLowerCase()) {
    case "hh:mm:ss.sss":
      showMs = true;
      showSc = true;
      showHr = true;
      break;

    case "hh:mm:ss":
      showMs = !!time.miliseconds;
      showSc = true;
      showHr = true;
      break;

    case "hh:mm":
      showMs = !!time.miliseconds;
      showSc = showMs || !!time.seconds;
      showHr = true;
      break;

    case "mm:ss":
      showMs = !!time.miliseconds;
      showSc = true;
      showHr = !!time.hours;
      break;

    case "mm:ss.sss":
      showMs = true;
      showSc = true;
      showHr = !!time.hours;
      break;

    default:
      throw new Error(TIME_FORMAT_ERRMSG);
  }

  var hh = zeroFill(2, time.hours);
  var mm = zeroFill(2, time.minutes);
  var ss = zeroFill(2, time.seconds);
  var sss = zeroFill(3, time.miliseconds);
  return (time.negative ? "-" : "") + (showHr ? showMs ? "".concat(hh, ":").concat(mm, ":").concat(ss, ".").concat(sss) : showSc ? "".concat(hh, ":").concat(mm, ":").concat(ss) : "".concat(hh, ":").concat(mm) : showMs ? "".concat(mm, ":").concat(ss, ".").concat(sss) : "".concat(mm, ":").concat(ss));
}