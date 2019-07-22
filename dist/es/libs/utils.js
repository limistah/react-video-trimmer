/**
 * detect if a file is an video.
 * @param {File} file
 */
export var isVideo = function isVideo(file) {
  return file.type.indexOf("video") > -1;
};
/**
 * create range [min .. max]
 */

export var range = function range(min, max) {
  return Array.apply(null, {
    length: max - min + 1
  }).map(function (v, i) {
    return i + min;
  });
};
/**
 * FileReader via promise
 * @param {File} file
 * @param {string} dataType
 * @return {Promise<ArrayBuffer | string>}
 */

export var readFile = function readFile(file) {
  var dataType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "ArrayBuffer";
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader["readAs" + dataType](file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (err) {
      return reject(err);
    };
  });
};
/**
 * Read File/Blob to ArrayBuffer
 * @param {File} file
 * @return {Promise<ArrayBuffer>}
 */

export var readArrayBuffer = function readArrayBuffer(file) {
  return readFile(file, "ArrayBuffer");
};
/**
 * Read File/Blob to Base64
 * @param {File} file
 * @return {Promise<string>}
 */

export var readDataURL = function readDataURL(file) {
  return readFile(file, "DataURL");
};
export var readBlobURL = function readBlobURL(file) {
  return URL.createObjectURL(file);
};
export var download = function download(url, name) {
  var link = document.createElement("a");
  link.href = url;
  link.download = name;
  link.click();
};
export var rename = function rename(filename, ext, stamp) {
  return "".concat(filename.replace(/\.\w+$/, "")).concat(stamp || "", ".").concat(ext);
};
/**
 * format seconds to [minutes, integer, decimal(2)]
 * @param {number} seconds
 */

export var formatSeconds = function formatSeconds(seconds) {
  return [Math.floor(seconds / 60), Math.floor(seconds % 60), Math.round(seconds % 1 * 100)];
};
export var leftZero = function leftZero(num, count) {
  return ("000000" + num).slice(-count);
};
export var noop = function noop() {};
export var arrayBufferToBlob = function arrayBufferToBlob(buffer) {
  return new Blob([new Uint8Array(buffer, 0, buffer.byteLength)], {
    type: "video/webm",
    name: "video.webm"
  });
};