function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebWorker = function WebWorker(worker) {
  _classCallCheck(this, WebWorker);

  var code = worker.toString();
  var blob = new Blob(["(" + code + ")()"], {
    type: "application/javascript"
  });
  return new Worker(URL.createObjectURL(blob));
};

export { WebWorker as default };