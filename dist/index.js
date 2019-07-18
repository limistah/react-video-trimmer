!(function(e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports, require("react"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react"], n)
    : n(((e = e || self).reactVideoTrimmer = {}), e.React);
})(this, function(e, o) {
  "use strict";
  var i = "default" in o ? o.default : o;
  function u(e, n) {
    return (
      (function(e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function(e, n) {
        var t = [],
          r = !0,
          o = !1,
          i = void 0;
        try {
          for (
            var u, l = e[Symbol.iterator]();
            !(r = (u = l.next()).done) &&
            (t.push(u.value), !n || t.length !== n);
            r = !0
          );
        } catch (e) {
          (o = !0), (i = e);
        } finally {
          try {
            r || null == l.return || l.return();
          } finally {
            if (o) throw i;
          }
        }
        return t;
      })(e, n) ||
      (function() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  function l(r, e) {
    var o = 1 < arguments.length && void 0 !== e ? e : "ArrayBuffer";
    return new Promise(function(e, n) {
      var t = new FileReader();
      t["readAs" + o](r),
        (t.onload = function() {
          return e(t.result);
        }),
        (t.onerror = function(e) {
          return n(e);
        });
    });
  }
  function r() {}
  function a(t) {
    var e = o.useCallback(function(e) {
      if (e.target.files.length) {
        var n = e.target.files[0];
        if (
          !(function(e) {
            return -1 < e.type.indexOf("video");
          })(n)
        )
          return alert("Unsupported File Type");
        (t.onFileSelected || r)(n);
      }
    });
    return i.createElement(
      "div",
      null,
      i.createElement("input", { type: "file", accept: "video/*", onChange: e })
    );
  }
  function c(e) {
    return i.createElement(
      "div",
      null,
      i.createElement("video", { src: e.src, controls: !1 })
    );
  }
  (e.default = function() {
    var e = u(o.useState(""), 2),
      n = e[0],
      r = e[1],
      t = o.useCallback(function(e) {
        console.log(e),
          (function(e) {
            return l(e, "ArrayBuffer");
          })(e).then(function(e) {
            var n = e.slice(0, 12e4),
              t = new Blob([new Uint8Array(n)], { type: "video/webm" });
            console.log(t),
              (function(e) {
                return l(e, "DataURL");
              })(t).then(function(e) {
                console.log(e), r(e);
              });
          });
      });
    return i.createElement(
      "div",
      null,
      i.createElement(a, { onFileSelected: t }),
      n && i.createElement(c, { src: n })
    );
  }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJzL3V0aWxzLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvRmlsZVBpY2tlci5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGV0ZWN0IGlmIGEgZmlsZSBpcyBhbiB2aWRlby5cbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICovXG5leHBvcnQgY29uc3QgaXNWaWRlbyA9IGZpbGUgPT4gZmlsZS50eXBlLmluZGV4T2YoXCJ2aWRlb1wiKSA+IC0xO1xuXG4vKipcbiAqIGNyZWF0ZSByYW5nZSBbbWluIC4uIG1heF1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKG1pbiwgbWF4KSA9PlxuICBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogbWF4IC0gbWluICsgMSB9KS5tYXAoKHYsIGkpID0+IGkgKyBtaW4pO1xuXG4vKipcbiAqIEZpbGVSZWFkZXIgdmlhIHByb21pc2VcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFUeXBlXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyIHwgc3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRGaWxlID0gKGZpbGUsIGRhdGFUeXBlID0gXCJBcnJheUJ1ZmZlclwiKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXJbXCJyZWFkQXNcIiArIGRhdGFUeXBlXShmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgfSk7XG5cbi8qKlxuICogUmVhZCBGaWxlL0Jsb2IgdG8gQXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG4gKi9cbmV4cG9ydCBjb25zdCByZWFkQXJyYXlCdWZmZXIgPSBmaWxlID0+IHJlYWRGaWxlKGZpbGUsIFwiQXJyYXlCdWZmZXJcIik7XG5cbi8qKlxuICogUmVhZCBGaWxlL0Jsb2IgdG8gQmFzZTY0XG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGVcbiAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWREYXRhVVJMID0gZmlsZSA9PiByZWFkRmlsZShmaWxlLCBcIkRhdGFVUkxcIik7XG5cbmV4cG9ydCBjb25zdCByZWFkQmxvYlVSTCA9IGZpbGUgPT4gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkID0gKHVybCwgbmFtZSkgPT4ge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IHVybDtcbiAgbGluay5kb3dubG9hZCA9IG5hbWU7XG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5hbWUgPSAoZmlsZW5hbWUsIGV4dCwgc3RhbXApID0+XG4gIGAke2ZpbGVuYW1lLnJlcGxhY2UoL1xcLlxcdyskLywgXCJcIil9JHtzdGFtcCB8fCBcIlwifS4ke2V4dH1gO1xuXG4vKipcbiAqIGZvcm1hdCBzZWNvbmRzIHRvIFttaW51dGVzLCBpbnRlZ2VyLCBkZWNpbWFsKDIpXVxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdFNlY29uZHMgPSBzZWNvbmRzID0+IFtcbiAgTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApLFxuICBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCksXG4gIE1hdGgucm91bmQoKHNlY29uZHMgJSAxKSAqIDEwMClcbl07XG5cbmV4cG9ydCBjb25zdCBsZWZ0WmVybyA9IChudW0sIGNvdW50KSA9PiB7XG4gIHJldHVybiAoXCIwMDAwMDBcIiArIG51bSkuc2xpY2UoLWNvdW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBhcnJheUJ1ZmZlclRvQmxvYiA9IChidWZmZXIsIGJ5dGVPZmZzZXQgPSAwLCBsZW5ndGggPSAzMDApID0+XG4gIG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQsIGxlbmd0aCldLCB7XG4gICAgdHlwZTogXCJ2aWRlby9tcDRcIixcbiAgICBuYW1lOiBcInZpZGVvLm1wNFwiXG4gIH0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBpc1ZpZGVvLCBub29wIH0gZnJvbSBcIi4uL2xpYnMvdXRpbHNcIjtcblxuZnVuY3Rpb24gRmlsZVBpY2tlcihwcm9wcykge1xuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgdmlkZW8gPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIGlmIChpc1ZpZGVvKHZpZGVvKSkge1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gcHJvcHMub25GaWxlU2VsZWN0ZWQgfHwgbm9vcDtcbiAgICAgICAgaGFuZGxlcih2aWRlbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWxlcnQoXCJVbnN1cHBvcnRlZCBGaWxlIFR5cGVcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgYWNjZXB0PVwidmlkZW8vKlwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlUGlja2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBWaWRlb1BsYXllcihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8dmlkZW8gc3JjPXtwcm9wcy5zcmN9IGNvbnRyb2xzPXtmYWxzZX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9QbGF5ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmlsZVBpY2tlciBmcm9tIFwiLi9jb21wb25lbnRzL0ZpbGVQaWNrZXJcIjtcbmltcG9ydCB7IHJlYWREYXRhVVJMLCBhcnJheUJ1ZmZlclRvQmxvYiwgcmVhZEFycmF5QnVmZmVyIH0gZnJvbSBcIi4vbGlicy91dGlsc1wiO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gXCIuL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXJcIjtcblxuY29uc3QgUmVhY3RWaWRlb1RyaW1tZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt2aWRlb0RhdGFVUkwsIHVwZGF0ZVZpZGVvRGF0YVVSTF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaGFuZGxlRmlsZVNlbGVjdGVkID0gdXNlQ2FsbGJhY2soZmlsZSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZSk7XG4gICAgcmVhZEFycmF5QnVmZmVyKGZpbGUpLnRoZW4oYXJyYXlCdWZmZXIgPT4ge1xuICAgICAgLy8gY29uc3QgYmxvYiA9IGFycmF5QnVmZmVyVG9CbG9iKGFycmF5QnVmZmVyLCAwLCBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgIGNvbnN0IHNsaWNlZEJsb2JzID0gYXJyYXlCdWZmZXIuc2xpY2UoMCwgMTAwMCAqIDYwICogMik7XG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KHNsaWNlZEJsb2JzKV0sIHtcbiAgICAgICAgdHlwZTogXCJ2aWRlby93ZWJtXCJcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coYmxvYik7XG4gICAgICByZWFkRGF0YVVSTChibG9iKS50aGVuKGRhdGFVUkwgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhVVJMKTtcbiAgICAgICAgdXBkYXRlVmlkZW9EYXRhVVJMKGRhdGFVUkwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RmlsZVBpY2tlciBvbkZpbGVTZWxlY3RlZD17aGFuZGxlRmlsZVNlbGVjdGVkfSAvPlxuICAgICAge3ZpZGVvRGF0YVVSTCAmJiA8VmlkZW9QbGF5ZXIgc3JjPXt2aWRlb0RhdGFVUkx9IC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RWaWRlb1RyaW1tZXI7XG4iXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlIiwiZGF0YVR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyIiwibm9vcCIsIkZpbGVQaWNrZXIiLCJwcm9wcyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInZpZGVvIiwidHlwZSIsImluZGV4T2YiLCJpc1ZpZGVvIiwiYWxlcnQiLCJvbkZpbGVTZWxlY3RlZCIsIlJlYWN0IiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJWaWRlb1BsYXllciIsInNyYyIsImNvbnRyb2xzIiwidXNlU3RhdGUiLCJ2aWRlb0RhdGFVUkwiLCJ1cGRhdGVWaWRlb0RhdGFVUkwiLCJoYW5kbGVGaWxlU2VsZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwicmVhZEFycmF5QnVmZmVyIiwidGhlbiIsImFycmF5QnVmZmVyIiwic2xpY2VkQmxvYnMiLCJzbGljZSIsImJsb2IiLCJCbG9iIiwiVWludDhBcnJheSIsInJlYWREYXRhVVJMIiwiZGF0YVVSTCJdLCJtYXBwaW5ncyI6Im1xQkFrQndCLFNBQVhBLEVBQVlDLEVBQUQsT0FBT0MsK0JBQVAsRUFBQSxFQUFrQixxQkFDeEMsSUFBSUMsUUFBUSxTQUFDQyxFQUFTQyxPQUNkQyxFQUFTLElBQUlDLFdBQ25CRCxFQUFPLFNBQVdKLEdBQVVELEdBQzVCSyxFQUFPRSxPQUFTLGtCQUFNSixFQUFRRSxFQUFPRyxTQUNyQ0gsRUFBT0ksUUFBVSxTQUFBQyxVQUFPTixFQUFPTSxNQTJDZixTQUFQQyxLQy9EYixTQUFTQyxFQUFXQyxPQUNaQyxFQUFtQkMsY0FBWSxTQUFBQyxNQUMvQkEsRUFBRUMsT0FBT0MsTUFBTUMsT0FBUSxLQUNuQkMsRUFBUUosRUFBRUMsT0FBT0MsTUFBTSxPREZaLFNBQUFsQixVQUFzQyxFQUE5QkEsRUFBS3FCLEtBQUtDLFFBQVEsU0NHdkNDLENBQVFILFVBSUhJLE1BQU0sMEJBSEdYLEVBQU1ZLGdCQUFrQmQsR0FDaENTLGFBT1pNLDJCQUNFQSx5QkFBT0wsS0FBSyxPQUFPTSxPQUFPLFVBQVVDLFNBQVVkLEtDZnBELFNBQVNlLEVBQVloQixVQUVqQmEsMkJBQ0VBLHlCQUFPSSxJQUFLakIsRUFBTWlCLElBQUtDLFVBQVUsZUNBYixtQkFDbUJDLFdBQVMsT0FBN0NDLE9BQWNDLE9BQ2ZDLEVBQXFCcEIsY0FBWSxTQUFBZixHQUNyQ29DLFFBQVFDLElBQUlyQyxHSHVCZSxTQUFBQSxVQUFRRCxFQUFTQyxFQUFNLGVHdEJsRHNDLENBQWdCdEMsR0FBTXVDLEtBQUssU0FBQUMsT0FFbkJDLEVBQWNELEVBQVlFLE1BQU0sRUFBRyxNQUNuQ0MsRUFBTyxJQUFJQyxLQUFLLENBQUMsSUFBSUMsV0FBV0osSUFBZSxDQUNuRHBCLEtBQU0sZUFFUmUsUUFBUUMsSUFBSU0sR0h1QlMsU0FBQTNDLFVBQVFELEVBQVNDLEVBQU0sV0d0QjVDOEMsQ0FBWUgsR0FBTUosS0FBSyxTQUFBUSxHQUNyQlgsUUFBUUMsSUFBSVUsR0FDWmIsRUFBbUJhLGdCQUt2QnJCLDJCQUNFQSxnQkFBQ2QsR0FBV2EsZUFBZ0JVLElBQzNCRixHQUFnQlAsZ0JBQUNHLEdBQVlDLElBQUtHIn0=
