import WebVideo from "./WebVideo";
export default (function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new WebVideo(opts);
});