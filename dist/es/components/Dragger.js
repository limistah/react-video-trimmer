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
import "../styles/dragger.scss";
import PropTypes from "prop-types";

var Dragger =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Dragger, _PureComponent);

  function Dragger() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dragger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dragger)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_screenX", null);

    _defineProperty(_assertThisInitialized(_this), "_screenY", null);

    _defineProperty(_assertThisInitialized(_this), "_ox", null);

    _defineProperty(_assertThisInitialized(_this), "_oy", null);

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      _this._screenX = e.screenX;
      _this._screenY = e.screenY;
      _this._ox = _this.props.x;
      _this._oy = _this.props.y;
      window.addEventListener("mousemove", _this.handleMouseMove, false);
      window.addEventListener("mouseup", _this.handleMouseUp, false);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      _this.props.onDrag({
        x: e.screenX - _this._screenX + _this._ox,
        y: e.screenY - _this._screenY + _this._oy
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      window.removeEventListener("mousemove", _this.handleMouseMove);
      window.removeEventListener("mouseup", _this.handleMouseUp);

      var handler = _this.props.onDragStop || function () {};

      handler();
    });

    return _this;
  }

  _createClass(Dragger, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "rvt-dragger " + this.props.className || "",
        onMouseDown: this.handleMouseDown,
        style: {
          left: this.props.x + "px",
          top: this.props.y + "px"
        }
      }, this.props.children);
    }
  }]);

  return Dragger;
}(PureComponent);

_defineProperty(Dragger, "defaultProps", {
  onDrag: function onDrag() {},
  x: 0,
  y: 0
});

_defineProperty(Dragger, "propTypes", {
  x: PropTypes.number,
  y: PropTypes.number,
  onDrag: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element
});

export { Dragger as default };