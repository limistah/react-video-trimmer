!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports, require("react"), require("prop-types"))
    : "function" == typeof define && define.amd
    ? define(["exports", "react", "prop-types"], t)
    : t(((e = e || self).reactVideoTrimmer = {}), e.React, e.PropTypes);
})(this, function(e, o, f) {
  "use strict";
  var P = "default" in o ? o.default : o;
  function u(e, t, n, r, o, a, i) {
    try {
      var l = e[a](i),
        u = l.value;
    } catch (e) {
      return void n(e);
    }
    l.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function m(l) {
    return function() {
      var e = this,
        i = arguments;
      return new Promise(function(t, n) {
        var r = l.apply(e, i);
        function o(e) {
          u(r, t, n, o, a, "next", e);
        }
        function a(e) {
          u(r, t, n, o, a, "throw", e);
        }
        o(void 0);
      });
    };
  }
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function l(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function s(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n),
      e
    );
  }
  function c(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 }
    })),
      t && n(e, t);
  }
  function p(e) {
    return (p = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function n(e, t) {
    return (n =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function d(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function y(e, t) {
    return !t || ("object" != typeof t && "function" != typeof t) ? d(e) : t;
  }
  f = f && f.hasOwnProperty("default") ? f.default : f;
  function a(r, e) {
    var o = 1 < arguments.length && void 0 !== e ? e : "ArrayBuffer";
    return new Promise(function(e, t) {
      var n = new FileReader();
      n["readAs" + o](r),
        (n.onload = function() {
          return e(n.result);
        }),
        (n.onerror = function(e) {
          return t(e);
        });
    });
  }
  function h() {}
  function g(e) {
    return new Blob([new Uint8Array(e, 0, e.byteLength)], {
      type: "video/webm",
      name: "video.webm"
    });
  }
  function v(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      P.createElement("path", {
        d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
      }),
      P.createElement("path", { d: "M0 0h24v24H0z", fill: "none" })
    );
  }
  function b(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      P.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      P.createElement("path", {
        d:
          "M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"
      })
    );
  }
  function w(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      P.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      P.createElement("path", {
        d:
          "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      })
    );
  }
  function k(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        height: "24",
        viewBox: "0 0 24 24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      P.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      P.createElement("path", {
        d:
          "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
      })
    );
  }
  function E(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      },
      P.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      P.createElement("path", {
        d:
          "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
      })
    );
  }
  function _(e) {
    var t = e.className;
    return P.createElement(
      "svg",
      {
        className: t,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 42 42"
      },
      P.createElement("path", {
        d:
          "M21 37c-4.3 0-8.3-1.7-11.3-4.7S5 25.3 5 21c0-3 .8-6 2.5-8.5C9 10 11.2 8 13.8 6.7l1.3 2.7c-2.1 1.1-3.9 2.7-5.2 4.7-1.3 2.1-2 4.5-2 6.9 0 7.2 5.8 13 13 13s13-5.8 13-13c0-2.5-.7-4.9-2-6.9s-3.1-3.6-5.2-4.7L28 6.7c2.8 1.3 5 3.3 6.5 5.8C36.2 15 37 18 37 21c0 4.3-1.7 8.3-4.7 11.3S25.3 37 21 37z"
      })
    );
  }
  function O(e) {
    var t = v;
    switch (e.name) {
      case "music":
        t = b;
        break;
      case "play":
        t = w;
        break;
      case "pause":
        t = k;
        break;
      case "replay":
        t = E;
        break;
      case "spin":
        t = _;
        break;
      default:
        t = v;
    }
    return P.createElement(t, {
      className: "rvt-icon rat-icon-"
        .concat(e.name, " ")
        .concat(e.className)
        .trim()
    });
  }
  function S(n) {
    var e = o.useRef(),
      t = o.useCallback(function(e) {
        if (e.target.files.length) {
          var t = e.target.files[0];
          if (
            !(function(e) {
              return -1 < e.type.indexOf("video");
            })(t)
          )
            return alert("Unsupported File Type");
          (n.onFileSelected || h)(t);
        }
      }),
      r = o.useCallback(function() {
        e.current.click();
      });
    return P.createElement(
      "div",
      { className: "rvt-file-picker", onClick: r },
      P.createElement(O, { name: "music" }),
      "Pick A Video",
      P.createElement("input", {
        type: "file",
        accept: "video/*",
        onChange: t,
        ref: e
      })
    );
  }
  O.propTypes = { name: f.string };
  function T(e) {
    var t = e.children;
    return P.createElement("div", { className: "rvt-status" }, t);
  }
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self && self;
  function t(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function j(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  function R(e, t, n) {
    var r = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("script");
    "function" == typeof t && ((n = t), (t = {})),
      (t = t || {}),
      (n = n || function() {}),
      (o.type = t.type || "text/javascript"),
      (o.charset = t.charset || "utf8"),
      (o.async = !("async" in t) || !!t.async),
      (o.src = e),
      t.attrs &&
        (function(e, t) {
          for (var n in t) e.setAttribute(n, t[n]);
        })(o, t.attrs),
      t.text && (o.text = "" + t.text),
      ("onload" in o ? D : C)(o, n),
      o.onload || D(o, n),
      r.appendChild(o);
  }
  function D(e, t) {
    (e.onload = function() {
      (this.onerror = this.onload = null), t(null, e);
    }),
      (e.onerror = function() {
        (this.onerror = this.onload = null),
          t(new Error("Failed to load " + this.src), e);
      });
  }
  function C(e, t) {
    e.onreadystatechange = function() {
      ("complete" != this.readyState && "loaded" != this.readyState) ||
        ((this.onreadystatechange = null), t(null, e));
    };
  }
  var L = j(function(e, t) {
      function i(e, t) {
        return !1 !== t.clone && t.isMergeableObject(e)
          ? s(
              (function(e) {
                return Array.isArray(e) ? [] : {};
              })(e),
              e,
              t
            )
          : e;
      }
      function l(e, t, n) {
        return e.concat(t).map(function(e) {
          return i(e, n);
        });
      }
      function a(e) {
        return Object.keys(e).concat(
          (function(t) {
            return Object.getOwnPropertySymbols
              ? Object.getOwnPropertySymbols(t).filter(function(e) {
                  return t.propertyIsEnumerable(e);
                })
              : [];
          })(e)
        );
      }
      function u(t, n, r) {
        var o = {};
        return (
          r.isMergeableObject(t) &&
            a(t).forEach(function(e) {
              o[e] = i(t[e], r);
            }),
          a(n).forEach(function(e) {
            r.isMergeableObject(n[e]) && t[e]
              ? (o[e] = (function(e, t) {
                  if (!t.customMerge) return s;
                  var n = t.customMerge(e);
                  return "function" == typeof n ? n : s;
                })(e, r)(t[e], n[e], r))
              : (o[e] = i(n[e], r));
          }),
          o
        );
      }
      function s(e, t, n) {
        ((n = n || {}).arrayMerge = n.arrayMerge || l),
          (n.isMergeableObject = n.isMergeableObject || c);
        var r = Array.isArray(t),
          o = Array.isArray(e),
          a = r === o;
        return a ? (r ? n.arrayMerge(e, t, n) : u(e, t, n)) : i(t, n);
      }
      var c, n;
      e.exports =
        ((c = function(e) {
          return (
            (function(e) {
              return !!e && "object" == typeof e;
            })(e) &&
            !(function(e) {
              var t = Object.prototype.toString.call(e);
              return (
                "[object RegExp]" === t ||
                "[object Date]" === t ||
                (function(e) {
                  return e.$$typeof === n;
                })(e)
              );
            })(e)
          );
        }),
        (n =
          "function" == typeof Symbol && Symbol.for
            ? Symbol.for("react.element")
            : 60103),
        (s.all = function(e, n) {
          if (!Array.isArray(e))
            throw new Error("first argument should be an array");
          return e.reduce(function(e, t) {
            return s(e, t, n);
          }, {});
        }),
        s);
    }),
    M = j(function(e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.DEPRECATED_CONFIG_PROPS = t.defaultProps = t.propTypes = void 0);
      var n,
        r = (n = f) && n.__esModule ? n : { default: n };
      var o = r.default.string,
        a = r.default.bool,
        i = r.default.number,
        l = r.default.array,
        u = r.default.oneOfType,
        s = r.default.shape,
        c = r.default.object,
        p = r.default.func;
      (t.propTypes = {
        url: u([o, l, c]),
        playing: a,
        loop: a,
        controls: a,
        volume: i,
        muted: a,
        playbackRate: i,
        width: u([o, i]),
        height: u([o, i]),
        style: c,
        progressInterval: i,
        playsinline: a,
        pip: a,
        light: u([a, o]),
        wrapper: u([o, p, s({ render: p.isRequired })]),
        config: s({
          soundcloud: s({ options: c, preload: a }),
          youtube: s({ playerVars: c, embedOptions: c, preload: a }),
          facebook: s({ appId: o }),
          dailymotion: s({ params: c, preload: a }),
          vimeo: s({ playerOptions: c, preload: a }),
          file: s({
            attributes: c,
            tracks: l,
            forceVideo: a,
            forceAudio: a,
            forceHLS: a,
            forceDASH: a,
            hlsOptions: c,
            hlsVersion: o,
            dashVersion: o
          }),
          wistia: s({ options: c }),
          mixcloud: s({ options: c }),
          twitch: s({ options: c })
        }),
        onReady: p,
        onStart: p,
        onPlay: p,
        onPause: p,
        onBuffer: p,
        onBufferEnd: p,
        onEnded: p,
        onError: p,
        onDuration: p,
        onSeek: p,
        onProgress: p,
        onEnablePIP: p,
        onDisablePIP: p
      }),
        (t.defaultProps = {
          playing: !1,
          loop: !1,
          controls: !1,
          volume: null,
          muted: !1,
          playbackRate: 1,
          width: "640px",
          height: "360px",
          style: {},
          progressInterval: 1e3,
          playsinline: !1,
          pip: !1,
          light: !1,
          wrapper: "div",
          config: {
            soundcloud: {
              options: {
                visual: !0,
                buying: !1,
                liking: !1,
                download: !1,
                sharing: !1,
                show_comments: !1,
                show_playcount: !1
              }
            },
            youtube: {
              playerVars: {
                playsinline: 1,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                modestbranding: 1
              },
              embedOptions: {},
              preload: !1
            },
            facebook: { appId: "1309697205772819" },
            dailymotion: {
              params: { api: 1, "endscreen-enable": !1 },
              preload: !1
            },
            vimeo: {
              playerOptions: {
                autopause: !1,
                byline: !1,
                portrait: !1,
                title: !1
              },
              preload: !1
            },
            file: {
              attributes: {},
              tracks: [],
              forceVideo: !1,
              forceAudio: !1,
              forceHLS: !1,
              forceDASH: !1,
              hlsOptions: {},
              hlsVersion: "0.10.1",
              dashVersion: "2.9.2"
            },
            wistia: { options: {} },
            mixcloud: { options: { hide_cover: 1 } },
            twitch: { options: {} }
          },
          onReady: function() {},
          onStart: function() {},
          onPlay: function() {},
          onPause: function() {},
          onBuffer: function() {},
          onBufferEnd: function() {},
          onEnded: function() {},
          onError: function() {},
          onDuration: function() {},
          onSeek: function() {},
          onProgress: function() {},
          onEnablePIP: function() {},
          onDisablePIP: function() {}
        }),
        (t.DEPRECATED_CONFIG_PROPS = [
          "soundcloudConfig",
          "youtubeConfig",
          "facebookConfig",
          "dailymotionConfig",
          "vimeoConfig",
          "fileConfig",
          "wistiaConfig"
        ]);
    });
  t(M);
  M.DEPRECATED_CONFIG_PROPS, M.defaultProps, M.propTypes;
  var x = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && l.return && l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    (t.parseStartTime = function(e) {
      return c(e, a);
    }),
      (t.parseEndTime = function(e) {
        return c(e, l);
      }),
      (t.randomString = function() {
        return Math.random()
          .toString(36)
          .substr(2, 5);
      }),
      (t.queryString = function(t) {
        return Object.keys(t)
          .map(function(e) {
            return e + "=" + t[e];
          })
          .join("&");
      }),
      (t.getSDK = function(o, a) {
        var i =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          e =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : function() {
                  return !0;
                },
          l =
            4 < arguments.length && void 0 !== arguments[4]
              ? arguments[4]
              : r.default;
        if (window[a] && e(window[a])) return Promise.resolve(window[a]);
        return new Promise(function(e, t) {
          if (p[o]) p[o].push(e);
          else {
            p[o] = [e];
            var n = function(t) {
              p[o].forEach(function(e) {
                return e(t);
              });
            };
            if (i) {
              var r = window[i];
              window[i] = function() {
                r && r(), n(window[a]);
              };
            }
            l(o, function(e) {
              e && t(e), i || n(window[a]);
            });
          }
        });
      }),
      (t.getConfig = function(e, t, n) {
        var r = (0, f.default)(t.config, e.config),
          o = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var l, u = M.DEPRECATED_CONFIG_PROPS[Symbol.iterator]();
            !(o = (l = u.next()).done);
            o = !0
          ) {
            var s = l.value;
            if (e[s]) {
              var c = s.replace(/Config$/, "");
              if (((r = (0, f.default)(r, d({}, c, e[s]))), n)) {
                var p =
                  "ReactPlayer: %c" +
                  s +
                  " %cis deprecated, please use the config prop instead – https://github.com/CookPete/react-player#config-prop";
                console.warn(p, "font-weight: bold", "");
              }
            }
          }
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            !o && u.return && u.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      }),
      (t.omit = function(e) {
        for (
          var t, n = arguments.length, r = Array(1 < n ? n - 1 : 0), o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        var a = (t = []).concat.apply(t, r),
          i = {},
          l = Object.keys(e),
          u = !0,
          s = !1,
          c = void 0;
        try {
          for (
            var p, f = l[Symbol.iterator]();
            !(u = (p = f.next()).done);
            u = !0
          ) {
            var d = p.value;
            -1 === a.indexOf(d) && (i[d] = e[d]);
          }
        } catch (e) {
          (s = !0), (c = e);
        } finally {
          try {
            !u && f.return && f.return();
          } finally {
            if (s) throw c;
          }
        }
        return i;
      }),
      (t.callPlayer = function(e) {
        var t;
        if (!this.player || !this.player[e]) {
          var n =
            "ReactPlayer: " +
            this.constructor.displayName +
            " player could not call %c" +
            e +
            "%c – ";
          return (
            this.player
              ? this.player[e] || (n += "The method was not available")
              : (n += "The player was not available"),
            console.warn(n, "font-weight: bold", ""),
            null
          );
        }
        for (
          var r = arguments.length, o = Array(1 < r ? r - 1 : 0), a = 1;
          a < r;
          a++
        )
          o[a - 1] = arguments[a];
        return (t = this.player)[e].apply(t, o);
      }),
      (t.isObject = y),
      (t.isEqual = function e(t, n) {
        if ("function" == typeof t && "function" == typeof n) return !0;
        if (t instanceof Array && n instanceof Array) {
          if (t.length !== n.length) return !1;
          for (var r = 0; r !== t.length; r++) if (!e(t[r], n[r])) return !1;
          return !0;
        }
        if (y(t) && y(n)) {
          if (Object.keys(t).length !== Object.keys(n).length) return !1;
          var o = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var l, u = Object.keys(t)[Symbol.iterator]();
              !(o = (l = u.next()).done);
              o = !0
            ) {
              var s = l.value;
              if (!e(t[s], n[s])) return !1;
            }
          } catch (e) {
            (a = !0), (i = e);
          } finally {
            try {
              !o && u.return && u.return();
            } finally {
              if (a) throw i;
            }
          }
          return !0;
        }
        return t === n;
      }),
      (t.isMediaStream = function(e) {
        return (
          "undefined" != typeof window &&
          void 0 !== window.MediaStream &&
          e instanceof window.MediaStream
        );
      });
    var r = o(R),
      f = o(L);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function d(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    var a = /[?&#](?:start|t)=([0-9hms]+)/,
      l = /[?&#]end=([0-9hms]+)/,
      u = /(\d+)(h|m|s)/g,
      s = /^\d+$/;
    function c(e, t) {
      var n = e.match(t);
      if (n) {
        var r = n[1];
        if (r.match(u))
          return (function(e) {
            var t = 0,
              n = u.exec(e);
            for (; null !== n; ) {
              var r = i(n, 3),
                o = r[1],
                a = r[2];
              "h" === a && (t += 60 * parseInt(o, 10) * 60),
                "m" === a && (t += 60 * parseInt(o, 10)),
                "s" === a && (t += parseInt(o, 10)),
                (n = u.exec(e));
            }
            return t;
          })(r);
        if (s.test(r)) return parseInt(r);
      }
    }
    var p = {};
    function y(e) {
      return null !== e && "object" === (void 0 === e ? "undefined" : n(e));
    }
  });
  t(x);
  x.parseStartTime,
    x.parseEndTime,
    x.randomString,
    x.queryString,
    x.getSDK,
    x.getConfig,
    x.omit,
    x.callPlayer,
    x.isObject,
    x.isEqual,
    x.isMediaStream;
  var F = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      r = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      };
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a,
      i = (a = P) && a.__esModule ? a : { default: a };
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u =
      ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(s, P.Component),
      r(s, [
        {
          key: "componentDidMount",
          value: function() {
            (this.mounted = !0),
              this.player.load(this.props.url),
              this.progress();
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            clearTimeout(this.progressTimeout),
              clearTimeout(this.durationCheckTimeout),
              this.isReady && this.player.stop(),
              this.player.disablePIP && this.player.disablePIP(),
              (this.mounted = !1);
          }
        },
        {
          key: "componentWillReceiveProps",
          value: function(e) {
            var t = this,
              n = this.props,
              r = n.url,
              o = n.playing,
              a = n.volume,
              i = n.muted,
              l = n.playbackRate,
              u = n.pip,
              s = n.loop;
            if (!(0, x.isEqual)(r, e.url)) {
              if (this.isLoading)
                return (
                  console.warn(
                    "ReactPlayer: the attempt to load " +
                      e.url +
                      " is being deferred until the player has loaded"
                  ),
                  void (this.loadOnReady = e.url)
                );
              (this.isLoading = !0),
                (this.startOnPlay = !0),
                (this.onDurationCalled = !1),
                this.player.load(e.url, this.isReady);
            }
            o || !e.playing || this.isPlaying || this.player.play(),
              o && !e.playing && this.isPlaying && this.player.pause(),
              !u && e.pip && this.player.enablePIP
                ? this.player.enablePIP()
                : u &&
                  !e.pip &&
                  this.player.disablePIP &&
                  this.player.disablePIP(),
              a !== e.volume &&
                null !== e.volume &&
                this.player.setVolume(e.volume),
              i !== e.muted &&
                (e.muted
                  ? this.player.mute()
                  : (this.player.unmute(),
                    null !== e.volume &&
                      setTimeout(function() {
                        return t.player.setVolume(e.volume);
                      }))),
              l !== e.playbackRate &&
                this.player.setPlaybackRate &&
                this.player.setPlaybackRate(e.playbackRate),
              s !== e.loop &&
                this.player.setLoop &&
                this.player.setLoop(e.loop);
          }
        },
        {
          key: "getDuration",
          value: function() {
            return this.isReady ? this.player.getDuration() : null;
          }
        },
        {
          key: "getCurrentTime",
          value: function() {
            return this.isReady ? this.player.getCurrentTime() : null;
          }
        },
        {
          key: "getSecondsLoaded",
          value: function() {
            return this.isReady ? this.player.getSecondsLoaded() : null;
          }
        },
        {
          key: "seekTo",
          value: function(e, t) {
            var n = this;
            if (!this.isReady && 0 !== e)
              return (
                (this.seekOnPlay = e),
                void setTimeout(function() {
                  n.seekOnPlay = null;
                }, 5e3)
              );
            if (t ? "fraction" === t : 0 < e && e < 1) {
              var r = this.player.getDuration();
              return r
                ? void this.player.seekTo(r * e)
                : void console.warn(
                    "ReactPlayer: could not seek using fraction – duration not yet available"
                  );
            }
            this.player.seekTo(e);
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props.activePlayer;
            return e
              ? i.default.createElement(
                  e,
                  n({}, this.props, {
                    ref: this.ref,
                    onReady: this.onReady,
                    onPlay: this.onPlay,
                    onPause: this.onPause,
                    onEnded: this.onEnded,
                    onLoaded: this.onLoaded,
                    onError: this.onError
                  })
                )
              : null;
          }
        }
      ]),
      s);
    function s() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, s);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        (t = n = l(
          this,
          (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(
            e,
            [this].concat(o)
          )
        )),
        c.call(n),
        l(n, t)
      );
    }
    (u.displayName = "Player"),
      (u.propTypes = M.propTypes),
      (u.defaultProps = M.defaultProps);
    var c = function() {
      var a = this;
      (this.mounted = !1),
        (this.isReady = !1),
        (this.isPlaying = !1),
        (this.isLoading = !0),
        (this.loadOnReady = null),
        (this.startOnPlay = !0),
        (this.seekOnPlay = null),
        (this.onDurationCalled = !1),
        (this.getInternalPlayer = function(e) {
          return a.player ? a.player[e] : null;
        }),
        (this.progress = function() {
          if (a.props.url && a.player && a.isReady) {
            var e = a.getCurrentTime() || 0,
              t = a.getSecondsLoaded(),
              n = a.getDuration();
            if (n) {
              var r = { playedSeconds: e, played: e / n };
              null !== t && ((r.loadedSeconds = t), (r.loaded = t / n)),
                (r.playedSeconds === a.prevPlayed &&
                  r.loadedSeconds === a.prevLoaded) ||
                  a.props.onProgress(r),
                (a.prevPlayed = r.playedSeconds),
                (a.prevLoaded = r.loadedSeconds);
            }
          }
          a.progressTimeout = setTimeout(
            a.progress,
            a.props.progressFrequency || a.props.progressInterval
          );
        }),
        (this.onReady = function() {
          if (a.mounted) {
            (a.isReady = !0), (a.isLoading = !1);
            var e = a.props,
              t = e.onReady,
              n = e.playing,
              r = e.volume,
              o = e.muted;
            t(),
              o || null === r || a.player.setVolume(r),
              a.loadOnReady
                ? (a.player.load(a.loadOnReady, !0), (a.loadOnReady = null))
                : n && a.player.play(),
              a.onDurationCheck();
          }
        }),
        (this.onPlay = function() {
          (a.isPlaying = !0), (a.isLoading = !1);
          var e = a.props,
            t = e.onStart,
            n = e.onPlay,
            r = e.playbackRate;
          a.startOnPlay &&
            (a.player.setPlaybackRate && a.player.setPlaybackRate(r),
            t(),
            (a.startOnPlay = !1)),
            n(),
            a.seekOnPlay && (a.seekTo(a.seekOnPlay), (a.seekOnPlay = null)),
            a.onDurationCheck();
        }),
        (this.onPause = function(e) {
          (a.isPlaying = !1), a.isLoading || a.props.onPause(e);
        }),
        (this.onEnded = function() {
          var e = a.props,
            t = e.activePlayer,
            n = e.loop,
            r = e.onEnded;
          t.loopOnEnded && n && a.seekTo(0), n || ((a.isPlaying = !1), r());
        }),
        (this.onError = function() {
          var e;
          (a.isLoading = !1), (e = a.props).onError.apply(e, arguments);
        }),
        (this.onDurationCheck = function() {
          clearTimeout(a.durationCheckTimeout);
          var e = a.getDuration();
          e
            ? a.onDurationCalled ||
              (a.props.onDuration(e), (a.onDurationCalled = !0))
            : (a.durationCheckTimeout = setTimeout(a.onDurationCheck, 100));
        }),
        (this.onLoaded = function() {
          a.isLoading = !1;
        }),
        (this.ref = function(e) {
          e && (a.player = e);
        });
    };
    t.default = u;
  });
  t(F);
  var A = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var d =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    t.default = function(f) {
      var e, t;
      return (
        (t = e = (function() {
          function i() {
            var e, t, n;
            !(function(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            return (
              ((t = n = l(
                this,
                (e = i.__proto__ || Object.getPrototypeOf(i)).call.apply(
                  e,
                  [this].concat(o)
                )
              )).config = (0, x.getConfig)(n.props, M.defaultProps, !0)),
              (n.getDuration = function() {
                return n.player ? n.player.getDuration() : null;
              }),
              (n.getCurrentTime = function() {
                return n.player ? n.player.getCurrentTime() : null;
              }),
              (n.getSecondsLoaded = function() {
                return n.player ? n.player.getSecondsLoaded() : null;
              }),
              (n.getInternalPlayer = function() {
                var e =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : "player";
                return n.player ? n.player.getInternalPlayer(e) : null;
              }),
              (n.seekTo = function(e, t) {
                if (!n.player) return null;
                n.player.seekTo(e, t);
              }),
              (n.ref = function(e) {
                n.player = e;
              }),
              l(n, t)
            );
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(i, P.Component),
            n(i, [
              {
                key: "shouldComponentUpdate",
                value: function(e) {
                  return !(0, x.isEqual)(this.props, e);
                }
              },
              {
                key: "componentWillUpdate",
                value: function(e) {
                  this.config = (0, x.getConfig)(e, M.defaultProps);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.config.file,
                    t = e.forceVideo,
                    n = e.forceAudio,
                    r = e.forceHLS,
                    o = e.forceDASH,
                    a = t || n || r || o;
                  if (!f.canPlay(this.props.url) && !a) return null;
                  var i = this.props,
                    l = i.style,
                    u = i.width,
                    s = i.height,
                    c = i.wrapper,
                    p = (0, x.omit)(this.props, v, M.DEPRECATED_CONFIG_PROPS);
                  return y.default.createElement(
                    c,
                    d({ style: d({}, l, { width: u, height: s }) }, p),
                    y.default.createElement(
                      h.default,
                      d({}, this.props, {
                        ref: this.ref,
                        activePlayer: f,
                        config: this.config
                      })
                    )
                  );
                }
              }
            ]),
            i
          );
        })()),
        (e.displayName = f.displayName + "Player"),
        (e.propTypes = M.propTypes),
        (e.defaultProps = M.defaultProps),
        (e.canPlay = f.canPlay),
        t
      );
    };
    var y = o(P),
      h = o(F);
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var v = Object.keys(M.propTypes);
  });
  t(A);
  var V = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.YouTube = void 0);
    var h =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && l.return && l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      a = l(P),
      i = l(A);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var v = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=/,
      m = /list=([a-zA-Z0-9_-]+)/;
    function g(e) {
      if (m.test(e)) {
        var t = e.match(m);
        return { listType: "playlist", list: o(t, 2)[1] };
      }
      return {};
    }
    var s = (t.YouTube =
      ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(c, P.Component),
      n(c, [
        {
          key: "load",
          value: function(t, e) {
            var n = this,
              r = this.props,
              o = r.playing,
              a = r.muted,
              i = r.playsinline,
              l = r.controls,
              u = r.loop,
              s = r.config,
              c = r.onError,
              p = s.youtube,
              f = p.playerVars,
              d = p.embedOptions,
              y = t && t.match(v)[1];
            if (e)
              return m.test(t)
                ? void this.player.loadPlaylist(g(t))
                : void this.player.cueVideoById({
                    videoId: y,
                    startSeconds: (0, x.parseStartTime)(t) || f.start,
                    endSeconds: (0, x.parseEndTime)(t) || f.end
                  });
            (0, x.getSDK)(
              "https://www.youtube.com/iframe_api",
              "YT",
              "onYouTubeIframeAPIReady",
              function(e) {
                return e.loaded;
              }
            ).then(function(e) {
              n.container &&
                (n.player = new e.Player(
                  n.container,
                  h(
                    {
                      width: "100%",
                      height: "100%",
                      videoId: y,
                      playerVars: h(
                        {
                          autoplay: o ? 1 : 0,
                          mute: a ? 1 : 0,
                          controls: l ? 1 : 0,
                          start: (0, x.parseStartTime)(t),
                          end: (0, x.parseEndTime)(t),
                          origin: window.location.origin,
                          playsinline: i
                        },
                        g(t),
                        f
                      ),
                      events: {
                        onReady: function() {
                          u && n.player.setLoop(!0), n.props.onReady();
                        },
                        onStateChange: n.onStateChange,
                        onError: function(e) {
                          return c(e.data);
                        }
                      }
                    },
                    d
                  )
                ));
            }, c);
          }
        },
        {
          key: "play",
          value: function() {
            this.callPlayer("playVideo");
          }
        },
        {
          key: "pause",
          value: function() {
            this.callPlayer("pauseVideo");
          }
        },
        {
          key: "stop",
          value: function() {
            document.body.contains(this.callPlayer("getIframe")) &&
              this.callPlayer("stopVideo");
          }
        },
        {
          key: "seekTo",
          value: function(e) {
            this.callPlayer("seekTo", e), this.props.playing || this.pause();
          }
        },
        {
          key: "setVolume",
          value: function(e) {
            this.callPlayer("setVolume", 100 * e);
          }
        },
        {
          key: "setPlaybackRate",
          value: function(e) {
            this.callPlayer("setPlaybackRate", e);
          }
        },
        {
          key: "setLoop",
          value: function(e) {
            this.callPlayer("setLoop", e);
          }
        },
        {
          key: "getDuration",
          value: function() {
            return this.callPlayer("getDuration");
          }
        },
        {
          key: "getCurrentTime",
          value: function() {
            return this.callPlayer("getCurrentTime");
          }
        },
        {
          key: "getSecondsLoaded",
          value: function() {
            return (
              this.callPlayer("getVideoLoadedFraction") * this.getDuration()
            );
          }
        },
        {
          key: "render",
          value: function() {
            return a.default.createElement(
              "div",
              { style: { width: "100%", height: "100%" } },
              a.default.createElement("div", { ref: this.ref })
            );
          }
        }
      ]),
      c));
    function c() {
      var e, t, m;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, c);
      for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return (
        ((t = m = u(
          this,
          (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(
            e,
            [this].concat(r)
          )
        )).callPlayer = x.callPlayer),
        (m.onStateChange = function(e) {
          var t = e.data,
            n = m.props,
            r = n.onPlay,
            o = n.onPause,
            a = n.onBuffer,
            i = n.onBufferEnd,
            l = n.onEnded,
            u = n.onReady,
            s = n.loop,
            c = window.YT.PlayerState,
            p = c.PLAYING,
            f = c.PAUSED,
            d = c.BUFFERING,
            y = c.ENDED,
            h = c.CUED;
          if (
            (t === p && (r(), i()), t === f && o(), t === d && a(), t === y)
          ) {
            var v = !!m.callPlayer("getPlaylist");
            s && !v && m.play(), l();
          }
          t === h && u();
        }),
        (m.mute = function() {
          m.callPlayer("mute");
        }),
        (m.unmute = function() {
          m.callPlayer("unMute");
        }),
        (m.ref = function(e) {
          m.container = e;
        }),
        u(m, t)
      );
    }
    (s.displayName = "YouTube"),
      (s.canPlay = function(e) {
        return v.test(e);
      }),
      (t.default = (0, i.default)(s));
  });
  t(V);
  V.YouTube;
  var I = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.SoundCloud = void 0);
    var c =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = /(soundcloud\.com|snd\.sc)\/.+$/,
      s = (t.SoundCloud =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(p, P.Component),
        n(p, [
          {
            key: "load",
            value: function(l, u) {
              var s = this;
              (0, x.getSDK)(
                "https://w.soundcloud.com/player/api.js",
                "SC"
              ).then(function(e) {
                if (s.iframe) {
                  var t = e.Widget.Events,
                    n = t.PLAY,
                    r = t.PLAY_PROGRESS,
                    o = t.PAUSE,
                    a = t.FINISH,
                    i = t.ERROR;
                  u ||
                    ((s.player = e.Widget(s.iframe)),
                    s.player.bind(n, s.props.onPlay),
                    s.player.bind(o, s.props.onPause),
                    s.player.bind(r, function(e) {
                      (s.currentTime = e.currentPosition / 1e3),
                        (s.fractionLoaded = e.loadedProgress);
                    }),
                    s.player.bind(a, function() {
                      return s.props.onEnded();
                    }),
                    s.player.bind(i, function(e) {
                      return s.props.onError(e);
                    })),
                    s.player.load(
                      l,
                      c({}, s.props.config.soundcloud.options, {
                        callback: function() {
                          s.player.getDuration(function(e) {
                            (s.duration = e / 1e3), s.props.onReady();
                          });
                        }
                      })
                    );
                }
              });
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          { key: "stop", value: function() {} },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("seekTo", 1e3 * e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", 100 * e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.duration;
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.currentTime;
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return this.fractionLoaded * this.duration;
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement("iframe", {
                ref: this.ref,
                src:
                  "https://w.soundcloud.com/player/?url=" +
                  encodeURIComponent(this.props.url),
                style: { width: "100%", height: "100%" },
                frameBorder: 0,
                allow: "autoplay"
              });
            }
          }
        ]),
        p));
    function p() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, p);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = p.__proto__ || Object.getPrototypeOf(p)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.duration = null),
        (n.currentTime = null),
        (n.fractionLoaded = null),
        (n.mute = function() {
          n.setVolume(0);
        }),
        (n.unmute = function() {
          null !== n.props.volume && n.setVolume(n.props.volume);
        }),
        (n.ref = function(e) {
          n.iframe = e;
        }),
        l(n, t)
      );
    }
    (s.displayName = "SoundCloud"),
      (s.canPlay = function(e) {
        return u.test(e);
      }),
      (s.loopOnEnded = !0),
      (t.default = (0, a.default)(s));
  });
  t(I);
  I.SoundCloud;
  var N = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Vimeo = void 0);
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e;
      };
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a = l(P),
      i = l(A);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var s = /vimeo\.com\/.+/,
      c = /vimeo\.com\/external\/[0-9]+\..+/,
      p = (t.Vimeo =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(f, P.Component),
        n(f, [
          {
            key: "load",
            value: function(t) {
              var n = this;
              (this.duration = null),
                (0, x.getSDK)(
                  "https://player.vimeo.com/api/player.js",
                  "Vimeo"
                ).then(function(e) {
                  n.container &&
                    ((n.player = new e.Player(
                      n.container,
                      r(
                        {
                          url: t,
                          autoplay: n.props.playing,
                          muted: n.props.muted,
                          loop: n.props.loop,
                          playsinline: n.props.playsinline
                        },
                        n.props.config.vimeo.playerOptions
                      )
                    )),
                    n.player
                      .ready()
                      .then(function() {
                        var e = n.container.querySelector("iframe");
                        (e.style.width = "100%"), (e.style.height = "100%");
                      })
                      .catch(n.props.onError),
                    n.player.on("loaded", function() {
                      n.props.onReady(), n.refreshDuration();
                    }),
                    n.player.on("play", function() {
                      n.props.onPlay(), n.refreshDuration();
                    }),
                    n.player.on("pause", n.props.onPause),
                    n.player.on("seeked", function(e) {
                      return n.props.onSeek(e.seconds);
                    }),
                    n.player.on("ended", n.props.onEnded),
                    n.player.on("error", n.props.onError),
                    n.player.on("timeupdate", function(e) {
                      var t = e.seconds;
                      n.currentTime = t;
                    }),
                    n.player.on("progress", function(e) {
                      var t = e.seconds;
                      n.secondsLoaded = t;
                    }));
                }, this.props.onError);
            }
          },
          {
            key: "refreshDuration",
            value: function() {
              var t = this;
              this.player.getDuration().then(function(e) {
                t.duration = e;
              });
            }
          },
          {
            key: "play",
            value: function() {
              var e = this.callPlayer("play");
              e && e.catch(this.props.onError);
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          {
            key: "stop",
            value: function() {
              this.callPlayer("unload");
            }
          },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("setCurrentTime", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", e);
            }
          },
          {
            key: "setLoop",
            value: function(e) {
              this.callPlayer("setLoop", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.duration;
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.currentTime;
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return this.secondsLoaded;
            }
          },
          {
            key: "render",
            value: function() {
              return a.default.createElement("div", {
                key: this.props.url,
                ref: this.ref,
                style: {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  backgroundColor: "black"
                }
              });
            }
          }
        ]),
        f));
    function f() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, f);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = u(
          this,
          (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.duration = null),
        (n.currentTime = null),
        (n.secondsLoaded = null),
        (n.mute = function() {
          n.setVolume(0);
        }),
        (n.unmute = function() {
          null !== n.props.volume && n.setVolume(n.props.volume);
        }),
        (n.ref = function(e) {
          n.container = e;
        }),
        u(n, t)
      );
    }
    (p.displayName = "Vimeo"),
      (p.canPlay = function(e) {
        return !c.test(e) && s.test(e);
      }),
      (t.default = (0, i.default)(p));
  });
  t(N);
  N.Vimeo;
  var B = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Facebook = void 0);
    var n = function(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = "//connect.facebook.net/en_US/sdk.js",
      s = "fbAsyncInit",
      c = /facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,
      p = (t.Facebook =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(f, P.Component),
        n(f, [
          {
            key: "load",
            value: function(e, t) {
              var n = this;
              t
                ? (0, x.getSDK)(u, "FB", s).then(function(e) {
                    return e.XFBML.parse();
                  })
                : (0, x.getSDK)(u, "FB", s).then(function(e) {
                    e.init({
                      appId: n.props.config.facebook.appId,
                      xfbml: !0,
                      version: "v2.5"
                    }),
                      e.Event.subscribe("xfbml.render", function(e) {
                        n.props.onLoaded();
                      }),
                      e.Event.subscribe("xfbml.ready", function(e) {
                        "video" === e.type &&
                          e.id === n.playerID &&
                          ((n.player = e.instance),
                          n.player.subscribe("startedPlaying", n.props.onPlay),
                          n.player.subscribe("paused", n.props.onPause),
                          n.player.subscribe(
                            "finishedPlaying",
                            n.props.onEnded
                          ),
                          n.player.subscribe(
                            "startedBuffering",
                            n.props.onBuffer
                          ),
                          n.player.subscribe(
                            "finishedBuffering",
                            n.props.onBufferEnd
                          ),
                          n.player.subscribe("error", n.props.onError),
                          n.props.muted || n.callPlayer("unmute"),
                          n.props.onReady(),
                          (document
                            .getElementById(n.playerID)
                            .querySelector("iframe").style.visibility =
                            "visible"));
                      });
                  });
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          { key: "stop", value: function() {} },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("seek", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.callPlayer("getDuration");
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.callPlayer("getCurrentPosition");
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return null;
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black"
                },
                id: this.playerID,
                className: "fb-video",
                "data-href": this.props.url,
                "data-autoplay": this.props.playing ? "true" : "false",
                "data-allowfullscreen": "true",
                "data-controls": this.props.controls ? "true" : "false"
              });
            }
          }
        ]),
        f));
    function f() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, f);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.playerID = "facebook-player-" + (0, x.randomString)()),
        (n.mute = function() {
          n.callPlayer("mute");
        }),
        (n.unmute = function() {
          n.callPlayer("unmute");
        }),
        l(n, t)
      );
    }
    (p.displayName = "Facebook"),
      (p.canPlay = function(e) {
        return c.test(e);
      }),
      (p.loopOnEnded = !0),
      (t.default = (0, a.default)(p));
  });
  t(B);
  B.Facebook;
  var U = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Streamable = void 0);
    var n = function(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = /streamable\.com\/([a-z0-9]+)$/,
      s = (t.Streamable =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(c, P.Component),
        n(c, [
          {
            key: "load",
            value: function(e) {
              var r = this;
              (0, x.getSDK)(
                "//cdn.embed.ly/player-0.1.0.min.js",
                "playerjs"
              ).then(function(e) {
                r.iframe &&
                  ((r.player = new e.Player(r.iframe)),
                  r.player.setLoop(r.props.loop),
                  r.player.on("ready", r.props.onReady),
                  r.player.on("play", r.props.onPlay),
                  r.player.on("pause", r.props.onPause),
                  r.player.on("seeked", r.props.onSeek),
                  r.player.on("ended", r.props.onEnded),
                  r.player.on("error", r.props.onError),
                  r.player.on("timeupdate", function(e) {
                    var t = e.duration,
                      n = e.seconds;
                    (r.duration = t), (r.currentTime = n);
                  }),
                  r.player.on("buffered", function(e) {
                    var t = e.percent;
                    r.duration && (r.secondsLoaded = r.duration * t);
                  }),
                  r.props.muted && r.player.mute());
              }, this.props.onError);
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          { key: "stop", value: function() {} },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("setCurrentTime", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", 100 * e);
            }
          },
          {
            key: "setLoop",
            value: function(e) {
              this.callPlayer("setLoop", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.duration;
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.currentTime;
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return this.secondsLoaded;
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.url.match(u)[1];
              return o.default.createElement("iframe", {
                ref: this.ref,
                src: "https://streamable.com/o/" + e,
                frameBorder: "0",
                scrolling: "no",
                style: { width: "100%", height: "100%" },
                allowFullScreen: !0
              });
            }
          }
        ]),
        c));
    function c() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, c);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.duration = null),
        (n.currentTime = null),
        (n.secondsLoaded = null),
        (n.mute = function() {
          n.callPlayer("mute");
        }),
        (n.unmute = function() {
          n.callPlayer("unmute");
        }),
        (n.ref = function(e) {
          n.iframe = e;
        }),
        l(n, t)
      );
    }
    (s.displayName = "Streamable"),
      (s.canPlay = function(e) {
        return u.test(e);
      }),
      (t.default = (0, a.default)(s));
  });
  t(U);
  U.Streamable;
  var W = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Wistia = void 0);
    var d =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = /(?:wistia\.com|wi\.st)\/(?:medias|embed)\/(.*)$/,
      s = (t.Wistia =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(c, P.Component),
        n(c, [
          {
            key: "getID",
            value: function(e) {
              return e && e.match(u)[1];
            }
          },
          {
            key: "load",
            value: function(e) {
              var t = this,
                n = this.props,
                r = n.playing,
                o = n.muted,
                a = n.controls,
                i = n.onReady,
                l = n.onPlay,
                u = n.onPause,
                s = n.onSeek,
                c = n.onEnded,
                p = n.config,
                f = n.onError;
              (0, x.getSDK)(
                "//fast.wistia.com/assets/external/E-v1.js",
                "Wistia"
              ).then(function() {
                (window._wq = window._wq || []),
                  window._wq.push({
                    id: t.getID(e),
                    options: d(
                      {
                        autoPlay: r,
                        silentAutoPlay: "allow",
                        muted: o,
                        controlsVisibleOnLoad: a
                      },
                      p.wistia.options
                    ),
                    onReady: function(e) {
                      (t.player = e),
                        t.unbind(),
                        t.player.bind("play", l),
                        t.player.bind("pause", u),
                        t.player.bind("seek", s),
                        t.player.bind("end", c),
                        i();
                    }
                  });
              }, f);
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          {
            key: "unbind",
            value: function() {
              var e = this.props,
                t = e.onPlay,
                n = e.onPause,
                r = e.onSeek,
                o = e.onEnded;
              this.player.unbind("play", t),
                this.player.unbind("pause", n),
                this.player.unbind("seek", r),
                this.player.unbind("end", o);
            }
          },
          {
            key: "stop",
            value: function() {
              this.unbind(), this.callPlayer("remove");
            }
          },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("time", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("volume", e);
            }
          },
          {
            key: "setPlaybackRate",
            value: function(e) {
              this.callPlayer("playbackRate", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.callPlayer("duration");
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.callPlayer("time");
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return null;
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.getID(this.props.url),
                t = "wistia_embed wistia_async_" + e;
              return o.default.createElement("div", {
                key: e,
                className: t,
                style: { width: "100%", height: "100%" }
              });
            }
          }
        ]),
        c));
    function c() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, c);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.mute = function() {
          n.callPlayer("mute");
        }),
        (n.unmute = function() {
          n.callPlayer("unmute");
        }),
        l(n, t)
      );
    }
    (s.displayName = "Wistia"),
      (s.canPlay = function(e) {
        return u.test(e);
      }),
      (s.loopOnEnded = !0),
      (t.default = (0, a.default)(s));
  });
  t(W);
  W.Wistia;
  var G = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Twitch = void 0);
    var d =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var y = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,
      h = /(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,
      u = (t.Twitch =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(s, P.Component),
        n(s, [
          {
            key: "load",
            value: function(e, t) {
              var u = this,
                n = this.props,
                s = n.playsinline,
                r = n.onError,
                c = n.config,
                p = h.test(e),
                f = p ? e.match(h)[1] : e.match(y)[1];
              t
                ? p
                  ? this.player.setChannel(f)
                  : this.player.setVideo("v" + f)
                : (0, x.getSDK)(
                    "https://player.twitch.tv/js/embed/v1.js",
                    "Twitch"
                  ).then(function(e) {
                    u.player = new e.Player(
                      u.playerID,
                      d(
                        {
                          video: p ? "" : f,
                          channel: p ? f : "",
                          height: "100%",
                          width: "100%",
                          playsinline: s,
                          autoplay: u.props.playing,
                          muted: u.props.muted
                        },
                        c.twitch.options
                      )
                    );
                    var t = e.Player,
                      n = t.READY,
                      r = t.PLAYING,
                      o = t.PAUSE,
                      a = t.ENDED,
                      i = t.ONLINE,
                      l = t.OFFLINE;
                    u.player.addEventListener(n, u.props.onReady),
                      u.player.addEventListener(r, u.props.onPlay),
                      u.player.addEventListener(o, u.props.onPause),
                      u.player.addEventListener(a, u.props.onEnded),
                      u.player.addEventListener(i, u.props.onLoaded),
                      u.player.addEventListener(l, u.props.onLoaded);
                  }, r);
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          {
            key: "stop",
            value: function() {
              this.callPlayer("pause");
            }
          },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("seek", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.callPlayer("getDuration");
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.callPlayer("getCurrentTime");
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return null;
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement("div", {
                style: { width: "100%", height: "100%" },
                id: this.playerID
              });
            }
          }
        ]),
        s));
    function s() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, s);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.playerID = "twitch-player-" + (0, x.randomString)()),
        (n.mute = function() {
          n.callPlayer("setMuted", !0);
        }),
        (n.unmute = function() {
          n.callPlayer("setMuted", !1);
        }),
        l(n, t)
      );
    }
    (u.displayName = "Twitch"),
      (u.canPlay = function(e) {
        return y.test(e) || h.test(e);
      }),
      (u.loopOnEnded = !0),
      (t.default = (0, a.default)(u));
  });
  t(G);
  G.Twitch;
  var H = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.DailyMotion = void 0);
    var s =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      c = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (
                var i, l = e[Symbol.iterator]();
                !(r = (i = l.next()).done) &&
                (n.push(i.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && l.return && l.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = i(P),
      a = i(A);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var p = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,
      u = (t.DailyMotion =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(f, P.Component),
        n(f, [
          {
            key: "load",
            value: function(n) {
              var r = this,
                e = this.props,
                o = e.controls,
                a = e.config,
                i = e.onError,
                t = e.playing,
                l = n.match(p),
                u = c(l, 2)[1];
              this.player
                ? this.player.load(u, {
                    start: (0, x.parseStartTime)(n),
                    autoplay: t
                  })
                : (0, x.getSDK)(
                    "https://api.dmcdn.net/all.js",
                    "DM",
                    "dmAsyncInit",
                    function(e) {
                      return e.player;
                    }
                  ).then(function(e) {
                    if (r.container) {
                      var t = e.player;
                      r.player = new t(r.container, {
                        width: "100%",
                        height: "100%",
                        video: u,
                        params: s(
                          {
                            controls: o,
                            autoplay: r.props.playing,
                            mute: r.props.muted,
                            start: (0, x.parseStartTime)(n),
                            origin: window.location.origin
                          },
                          a.dailymotion.params
                        ),
                        events: {
                          apiready: r.props.onReady,
                          seeked: function() {
                            return r.props.onSeek(r.player.currentTime);
                          },
                          video_end: r.props.onEnded,
                          durationchange: r.onDurationChange,
                          pause: r.props.onPause,
                          playing: r.props.onPlay,
                          waiting: r.props.onBuffer,
                          error: function(e) {
                            return i(e);
                          }
                        }
                      });
                    }
                  }, i);
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          { key: "stop", value: function() {} },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("seek", e);
            }
          },
          {
            key: "setVolume",
            value: function(e) {
              this.callPlayer("setVolume", e);
            }
          },
          {
            key: "getDuration",
            value: function() {
              return this.player.duration || null;
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.player.currentTime;
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return this.player.bufferedTime;
            }
          },
          {
            key: "render",
            value: function() {
              return o.default.createElement(
                "div",
                {
                  style: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black"
                  }
                },
                o.default.createElement("div", { ref: this.ref })
              );
            }
          }
        ]),
        f));
    function f() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, f);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = f.__proto__ || Object.getPrototypeOf(f)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.onDurationChange = function() {
          var e = n.getDuration();
          n.props.onDuration(e);
        }),
        (n.mute = function() {
          n.callPlayer("setMuted", !0);
        }),
        (n.unmute = function() {
          n.callPlayer("setMuted", !1);
        }),
        (n.ref = function(e) {
          n.container = e;
        }),
        l(n, t)
      );
    }
    (u.displayName = "DailyMotion"),
      (u.canPlay = function(e) {
        return p.test(e);
      }),
      (u.loopOnEnded = !0),
      (t.default = (0, a.default)(u));
  });
  t(H);
  H.DailyMotion;
  var z = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.Mixcloud = void 0);
    var a =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var i = l(P),
      o = l(A);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var s = /mixcloud\.com\/([^/]+\/[^/]+)/,
      c = (t.Mixcloud =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(p, P.Component),
        n(p, [
          {
            key: "load",
            value: function(e) {
              var n = this;
              (0, x.getSDK)(
                "//widget.mixcloud.com/media/js/widgetApi.js",
                "Mixcloud"
              ).then(function(e) {
                (n.player = e.PlayerWidget(n.iframe)),
                  n.player.ready.then(function() {
                    n.player.events.play.on(n.props.onPlay),
                      n.player.events.pause.on(n.props.onPause),
                      n.player.events.ended.on(n.props.onEnded),
                      n.player.events.error.on(n.props.error),
                      n.player.events.progress.on(function(e, t) {
                        (n.currentTime = e), (n.duration = t);
                      }),
                      n.props.onReady();
                  });
              }, this.props.onError);
            }
          },
          {
            key: "play",
            value: function() {
              this.callPlayer("play");
            }
          },
          {
            key: "pause",
            value: function() {
              this.callPlayer("pause");
            }
          },
          { key: "stop", value: function() {} },
          {
            key: "seekTo",
            value: function(e) {
              this.callPlayer("seek", e);
            }
          },
          { key: "setVolume", value: function(e) {} },
          {
            key: "getDuration",
            value: function() {
              return this.duration;
            }
          },
          {
            key: "getCurrentTime",
            value: function() {
              return this.currentTime;
            }
          },
          {
            key: "getSecondsLoaded",
            value: function() {
              return null;
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props,
                t = e.url,
                n = e.config,
                r = t.match(s)[1],
                o = (0, x.queryString)(
                  a({}, n.mixcloud.options, { feed: "/" + r + "/" })
                );
              return i.default.createElement("iframe", {
                key: r,
                ref: this.ref,
                style: { width: "100%", height: "100%" },
                src: "https://www.mixcloud.com/widget/iframe/?" + o,
                frameBorder: "0"
              });
            }
          }
        ]),
        p));
    function p() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, p);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = u(
          this,
          (e = p.__proto__ || Object.getPrototypeOf(p)).call.apply(
            e,
            [this].concat(o)
          )
        )).callPlayer = x.callPlayer),
        (n.duration = null),
        (n.currentTime = null),
        (n.secondsLoaded = null),
        (n.mute = function() {}),
        (n.unmute = function() {}),
        (n.ref = function(e) {
          n.iframe = e;
        }),
        u(n, t)
      );
    }
    (c.displayName = "Mixcloud"),
      (c.canPlay = function(e) {
        return s.test(e);
      }),
      (c.loopOnEnded = !0),
      (t.default = (0, o.default)(c));
  });
  t(z);
  z.Mixcloud;
  var Y = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.FilePlayer = void 0);
    var p =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var f = a(P),
      o = a(A);
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var l =
        "undefined" != typeof navigator &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
      u = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,
      s = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i,
      c = /\.(m3u8)($|\?)/i,
      d = /\.(mpd)($|\?)/i,
      y = /www\.dropbox\.com\/.+/;
    function h(e) {
      if (e instanceof Array) {
        var t = !0,
          n = !1,
          r = void 0;
        try {
          for (
            var o, a = e[Symbol.iterator]();
            !(t = (o = a.next()).done);
            t = !0
          ) {
            var i = o.value;
            if ("string" == typeof i && h(i)) return !0;
            if (h(i.src)) return !0;
          }
        } catch (e) {
          (n = !0), (r = e);
        } finally {
          try {
            !t && a.return && a.return();
          } finally {
            if (n) throw r;
          }
        }
        return !1;
      }
      return (
        !!(0, x.isMediaStream)(e) ||
        (u.test(e) || s.test(e) || c.test(e) || d.test(e))
      );
    }
    var v = (t.FilePlayer =
      ((function(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(m, P.Component),
      n(m, [
        {
          key: "componentDidMount",
          value: function() {
            this.addListeners(), l && this.player.load();
          }
        },
        {
          key: "componentWillReceiveProps",
          value: function(e) {
            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
              this.removeListeners();
          }
        },
        {
          key: "componentDidUpdate",
          value: function(e) {
            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
              this.addListeners();
          }
        },
        {
          key: "componentWillUnmount",
          value: function() {
            this.removeListeners();
          }
        },
        {
          key: "addListeners",
          value: function() {
            var e = this.props,
              t = e.onReady,
              n = e.onPlay,
              r = e.onBuffer,
              o = e.onBufferEnd,
              a = e.onPause,
              i = e.onEnded,
              l = e.onError,
              u = e.playsinline,
              s = e.onEnablePIP;
            this.player.addEventListener("canplay", t),
              this.player.addEventListener("play", n),
              this.player.addEventListener("waiting", r),
              this.player.addEventListener("playing", o),
              this.player.addEventListener("pause", a),
              this.player.addEventListener("seeked", this.onSeek),
              this.player.addEventListener("ended", i),
              this.player.addEventListener("error", l),
              this.player.addEventListener("enterpictureinpicture", s),
              this.player.addEventListener(
                "leavepictureinpicture",
                this.onDisablePIP
              ),
              u &&
                (this.player.setAttribute("playsinline", ""),
                this.player.setAttribute("webkit-playsinline", ""),
                this.player.setAttribute("x5-playsinline", ""));
          }
        },
        {
          key: "removeListeners",
          value: function() {
            var e = this.props,
              t = e.onReady,
              n = e.onPlay,
              r = e.onBuffer,
              o = e.onBufferEnd,
              a = e.onPause,
              i = e.onEnded,
              l = e.onError,
              u = e.onEnablePIP;
            this.player.removeEventListener("canplay", t),
              this.player.removeEventListener("play", n),
              this.player.removeEventListener("waiting", r),
              this.player.removeEventListener("playing", o),
              this.player.removeEventListener("pause", a),
              this.player.removeEventListener("seeked", this.onSeek),
              this.player.removeEventListener("ended", i),
              this.player.removeEventListener("error", l),
              this.player.removeEventListener("enterpictureinpicture", u),
              this.player.removeEventListener(
                "leavepictureinpicture",
                this.onDisablePIP
              );
          }
        },
        {
          key: "shouldUseAudio",
          value: function(e) {
            return (
              !e.config.file.forceVideo &&
              !e.config.file.attributes.poster &&
              (u.test(e.url) || e.config.file.forceAudio)
            );
          }
        },
        {
          key: "shouldUseHLS",
          value: function(e) {
            return (c.test(e) && !l) || this.props.config.file.forceHLS;
          }
        },
        {
          key: "shouldUseDASH",
          value: function(e) {
            return d.test(e) || this.props.config.file.forceDASH;
          }
        },
        {
          key: "load",
          value: function(t) {
            var r = this,
              e = this.props.config.file,
              n = e.hlsVersion,
              o = e.dashVersion;
            if (
              (this.shouldUseHLS(t) &&
                (0, x.getSDK)(
                  "https://cdnjs.cloudflare.com/ajax/libs/hls.js/VERSION/hls.min.js".replace(
                    "VERSION",
                    n
                  ),
                  "Hls"
                ).then(function(n) {
                  (r.hls = new n(r.props.config.file.hlsOptions)),
                    r.hls.on(n.Events.ERROR, function(e, t) {
                      r.props.onError(e, t, r.hls, n);
                    }),
                    r.hls.loadSource(t),
                    r.hls.attachMedia(r.player);
                }),
              this.shouldUseDASH(t) &&
                (0, x.getSDK)(
                  "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace(
                    "VERSION",
                    o
                  ),
                  "dashjs"
                ).then(function(e) {
                  (r.dash = e.MediaPlayer().create()),
                    r.dash.initialize(r.player, t, r.props.playing),
                    r.dash.getDebug().setLogToBrowserConsole(!1);
                }),
              t instanceof Array)
            )
              this.player.load();
            else if ((0, x.isMediaStream)(t))
              try {
                this.player.srcObject = t;
              } catch (e) {
                this.player.src = window.URL.createObjectURL(t);
              }
          }
        },
        {
          key: "play",
          value: function() {
            var e = this.player.play();
            e && e.catch(this.props.onError);
          }
        },
        {
          key: "pause",
          value: function() {
            this.player.pause();
          }
        },
        {
          key: "stop",
          value: function() {
            this.player.removeAttribute("src"),
              this.hls && this.hls.destroy(),
              this.dash && this.dash.reset();
          }
        },
        {
          key: "seekTo",
          value: function(e) {
            this.player.currentTime = e;
          }
        },
        {
          key: "setVolume",
          value: function(e) {
            this.player.volume = e;
          }
        },
        {
          key: "enablePIP",
          value: function() {
            this.player.requestPictureInPicture &&
              document.pictureInPictureElement !== this.player &&
              this.player.requestPictureInPicture();
          }
        },
        {
          key: "disablePIP",
          value: function() {
            document.exitPictureInPicture &&
              document.pictureInPictureElement === this.player &&
              document.exitPictureInPicture();
          }
        },
        {
          key: "setPlaybackRate",
          value: function(e) {
            this.player.playbackRate = e;
          }
        },
        {
          key: "getDuration",
          value: function() {
            if (!this.player) return null;
            var e = this.player,
              t = e.duration,
              n = e.seekable;
            return t === 1 / 0 && 0 < n.length ? n.end(n.length - 1) : t;
          }
        },
        {
          key: "getCurrentTime",
          value: function() {
            return this.player ? this.player.currentTime : null;
          }
        },
        {
          key: "getSecondsLoaded",
          value: function() {
            if (!this.player) return null;
            var e = this.player.buffered;
            if (0 === e.length) return 0;
            var t = e.end(e.length - 1),
              n = this.getDuration();
            return n < t ? n : t;
          }
        },
        {
          key: "getSource",
          value: function(e) {
            var t = this.shouldUseHLS(e),
              n = this.shouldUseDASH(e);
            if (!(e instanceof Array || (0, x.isMediaStream)(e) || t || n))
              return y.test(e)
                ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                : e;
          }
        },
        {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.url,
              n = e.playing,
              r = e.loop,
              o = e.controls,
              a = e.muted,
              i = e.config,
              l = e.width,
              u = e.height,
              s = this.shouldUseAudio(this.props) ? "audio" : "video",
              c = {
                width: "auto" === l ? l : "100%",
                height: "auto" === u ? u : "100%"
              };
            return f.default.createElement(
              s,
              p(
                {
                  ref: this.ref,
                  src: this.getSource(t),
                  style: c,
                  preload: "auto",
                  autoPlay: n || void 0,
                  controls: o,
                  muted: a,
                  loop: r
                },
                i.file.attributes
              ),
              t instanceof Array && t.map(this.renderSourceElement),
              i.file.tracks.map(this.renderTrack)
            );
          }
        }
      ]),
      m));
    function m() {
      var e, t, o;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, m);
      for (var n = arguments.length, r = Array(n), a = 0; a < n; a++)
        r[a] = arguments[a];
      return (
        ((t = o = i(
          this,
          (e = m.__proto__ || Object.getPrototypeOf(m)).call.apply(
            e,
            [this].concat(r)
          )
        )).onDisablePIP = function(e) {
          var t = o.props,
            n = t.onDisablePIP,
            r = t.playing;
          n(e), r && o.play();
        }),
        (o.onSeek = function(e) {
          o.props.onSeek(e.target.currentTime);
        }),
        (o.mute = function() {
          o.player.muted = !0;
        }),
        (o.unmute = function() {
          o.player.muted = !1;
        }),
        (o.renderSourceElement = function(e, t) {
          return "string" == typeof e
            ? f.default.createElement("source", { key: t, src: e })
            : f.default.createElement("source", p({ key: t }, e));
        }),
        (o.renderTrack = function(e, t) {
          return f.default.createElement("track", p({ key: t }, e));
        }),
        (o.ref = function(e) {
          o.player = e;
        }),
        i(o, t)
      );
    }
    (v.displayName = "FilePlayer"),
      (v.canPlay = h),
      (v.canEnablePIP = function(e) {
        return h(e) && !!document.pictureInPictureEnabled && !u.test(e);
      }),
      (t.default = (0, o.default)(v));
  });
  t(Y);
  Y.FilePlayer;
  var q = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = [
        V.YouTube,
        I.SoundCloud,
        N.Vimeo,
        B.Facebook,
        U.Streamable,
        W.Wistia,
        G.Twitch,
        H.DailyMotion,
        z.Mixcloud,
        Y.FilePlayer
      ]);
  });
  t(q);
  var K = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      n = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e;
      };
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var a,
      i = (a = P) && a.__esModule ? a : { default: a };
    function l(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var u = "64px",
      s =
        ((function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(c, P.Component),
        n(c, [
          {
            key: "componentDidMount",
            value: function() {
              (this.mounted = !0), this.fetchImage(this.props);
            }
          },
          {
            key: "componentWillReceiveProps",
            value: function(e) {
              var t = this.props,
                n = t.url,
                r = t.light;
              (n === e.url && r === e.light) || this.fetchImage(e);
            }
          },
          {
            key: "componentWillUnmount",
            value: function() {
              this.mounted = !1;
            }
          },
          {
            key: "fetchImage",
            value: function(e) {
              var n = this,
                t = e.url,
                r = e.light;
              if ("string" != typeof r)
                return (
                  this.setState({ image: null }),
                  window
                    .fetch("https://noembed.com/embed?url=" + t)
                    .then(function(e) {
                      return e.json();
                    })
                    .then(function(e) {
                      if (e.thumbnail_url && n.mounted) {
                        var t = e.thumbnail_url.replace(
                          "height=100",
                          "height=480"
                        );
                        n.setState({ image: t });
                      }
                    })
                );
              this.setState({ image: r });
            }
          },
          {
            key: "render",
            value: function() {
              var e = this.props.onClick,
                t = this.state.image,
                n = {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                },
                r = {
                  preview: o(
                    {
                      width: "100%",
                      height: "100%",
                      backgroundImage: t ? "url(" + t + ")" : void 0,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer"
                    },
                    n
                  ),
                  shadow: o(
                    {
                      background:
                        "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                      borderRadius: u,
                      width: u,
                      height: u
                    },
                    n
                  ),
                  playIcon: {
                    borderStyle: "solid",
                    borderWidth: "16px 0 16px 26px",
                    borderColor: "transparent transparent transparent white",
                    marginLeft: "7px"
                  }
                };
              return i.default.createElement(
                "div",
                {
                  style: r.preview,
                  className: "react-player__preview",
                  onClick: e
                },
                i.default.createElement(
                  "div",
                  { style: r.shadow, className: "react-player__shadow" },
                  i.default.createElement("div", {
                    style: r.playIcon,
                    className: "react-player__play-icon"
                  })
                )
              );
            }
          }
        ]),
        c);
    function c() {
      var e, t, n;
      !(function(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, c);
      for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      return (
        ((t = n = l(
          this,
          (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(
            e,
            [this].concat(o)
          )
        )).mounted = !1),
        (n.state = { image: null }),
        l(n, t)
      );
    }
    t.default = s;
  });
  t(K);
  var $ = j(function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t, n) {
        var r = [],
          o = !0,
          a = !1,
          i = void 0;
        try {
          for (
            var l, u = f[Symbol.iterator]();
            !(o = (l = u.next()).done);
            o = !0
          ) {
            var s = l.value;
            !s.Player.canPlay(e) &&
              n[s.configKey].preload &&
              r.push(
                c.default.createElement(p.default, {
                  key: s.Player.displayName,
                  activePlayer: s.Player,
                  url: s.url,
                  controls: t,
                  playing: !0,
                  muted: !0,
                  style: { display: "none" }
                })
              );
          }
        } catch (e) {
          (a = !0), (i = e);
        } finally {
          try {
            !o && u.return && u.return();
          } finally {
            if (a) throw i;
          }
        }
        return r;
      });
    var c = n(P),
      p = n(F);
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = [
      {
        Player: V.YouTube,
        configKey: "youtube",
        url: "https://www.youtube.com/watch?v=GlCmAC4MHek"
      },
      {
        Player: I.SoundCloud,
        configKey: "soundcloud",
        url: "https://soundcloud.com/seucheu/john-cage-433-8-bit-version"
      },
      {
        Player: N.Vimeo,
        configKey: "vimeo",
        url: "https://vimeo.com/300970506"
      },
      {
        Player: H.DailyMotion,
        configKey: "dailymotion",
        url: "http://www.dailymotion.com/video/xqdpyk"
      }
    ];
  });
  t($);
  function X(e) {
    var t = e.onPlayPauseClick,
      n = e.playing,
      r = e.onReselectFile,
      o = e.processing,
      a = e.onEncode,
      i = e.showEncodeBtn,
      l = e.canDownload,
      u = e.onDownload;
    return P.createElement(
      "div",
      { className: "rvt-controls-cont" },
      P.createElement(
        "a",
        { className: "rvt-controller-item", title: "Pause", onClick: t },
        P.createElement(O, { name: n ? "pause" : "play" })
      ),
      P.createElement(
        "a",
        { className: "rvt-controller-item", title: "Select File", onClick: r },
        P.createElement(O, { name: "music" })
      ),
      !i &&
        P.createElement(
          "div",
          { className: "rvt-controller-dropdown rvt-controller-list-wrap" },
          l
            ? P.createElement(
                "a",
                { className: "rvt-controller-item", onClick: u },
                P.createElement(O, { name: "download" })
              )
            : P.createElement(
                "a",
                { className: "rvt-controller-item", onClick: a },
                P.createElement(O, { name: o ? "spin" : "replay" })
              )
        )
    );
  }
  var Z = j(function(e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FilePlayer = t.Mixcloud = t.DailyMotion = t.Twitch = t.Wistia = t.Streamable = t.Facebook = t.Vimeo = t.SoundCloud = t.YouTube = void 0);
      var h =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        n = function(e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        };
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      Object.defineProperty(t, "YouTube", {
        enumerable: !0,
        get: function() {
          return i(V).default;
        }
      }),
        Object.defineProperty(t, "SoundCloud", {
          enumerable: !0,
          get: function() {
            return i(I).default;
          }
        }),
        Object.defineProperty(t, "Vimeo", {
          enumerable: !0,
          get: function() {
            return i(N).default;
          }
        }),
        Object.defineProperty(t, "Facebook", {
          enumerable: !0,
          get: function() {
            return i(B).default;
          }
        }),
        Object.defineProperty(t, "Streamable", {
          enumerable: !0,
          get: function() {
            return i(U).default;
          }
        }),
        Object.defineProperty(t, "Wistia", {
          enumerable: !0,
          get: function() {
            return i(W).default;
          }
        }),
        Object.defineProperty(t, "Twitch", {
          enumerable: !0,
          get: function() {
            return i(G).default;
          }
        }),
        Object.defineProperty(t, "DailyMotion", {
          enumerable: !0,
          get: function() {
            return i(H).default;
          }
        }),
        Object.defineProperty(t, "Mixcloud", {
          enumerable: !0,
          get: function() {
            return i(z).default;
          }
        }),
        Object.defineProperty(t, "FilePlayer", {
          enumerable: !0,
          get: function() {
            return i(Y).default;
          }
        });
      var v = i(P),
        o = i(q),
        a = i(F),
        m = i(K),
        g = i($);
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function b(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      function l(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var w = Object.keys(M.propTypes),
        u = [],
        s =
          ((function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(c, P.Component),
          n(c, [
            {
              key: "componentDidMount",
              value: function() {
                this.props.progressFrequency &&
                  console.warn(
                    "ReactPlayer: %cprogressFrequency%c is deprecated, please use %cprogressInterval%c instead",
                    "font-weight: bold",
                    "",
                    "font-weight: bold",
                    ""
                  );
              }
            },
            {
              key: "shouldComponentUpdate",
              value: function(e, t) {
                return (
                  !(0, x.isEqual)(this.props, e) ||
                  !(0, x.isEqual)(this.state, t)
                );
              }
            },
            {
              key: "componentWillUpdate",
              value: function(e) {
                (this.config = (0, x.getConfig)(e, M.defaultProps)),
                  !this.props.light &&
                    e.light &&
                    this.setState({ showPreview: !0 });
              }
            },
            {
              key: "getActivePlayer",
              value: function(e) {
                for (
                  var t = [].concat(b(u), b(o.default)), n = 0;
                  n < t.length;
                  n++
                ) {
                  var r = t[n];
                  if (r.canPlay(e)) return r;
                }
                return Y.FilePlayer;
              }
            },
            {
              key: "renderActivePlayer",
              value: function(e, t) {
                return e
                  ? v.default.createElement(
                      a.default,
                      h({}, this.props, {
                        key: t.displayName,
                        ref: this.activePlayerRef,
                        config: this.config,
                        activePlayer: t,
                        onReady: this.onReady
                      })
                    )
                  : null;
              }
            },
            {
              key: "sortPlayers",
              value: function(e, t) {
                return e && t ? (e.key < t.key ? -1 : 1) : 0;
              }
            },
            {
              key: "render",
              value: function() {
                var e = this.props,
                  t = e.url,
                  n = e.controls,
                  r = e.style,
                  o = e.width,
                  a = e.height,
                  i = e.light,
                  l = e.wrapper,
                  u = this.state.showPreview && t,
                  s = (0, x.omit)(this.props, w, M.DEPRECATED_CONFIG_PROPS),
                  c = this.getActivePlayer(t),
                  p = this.renderActivePlayer(t, c),
                  f = (0, g.default)(t, n, this.config),
                  d = [p].concat(b(f)).sort(this.sortPlayers),
                  y = v.default.createElement(m.default, {
                    url: t,
                    light: i,
                    onClick: this.onClickPreview
                  });
                return v.default.createElement(
                  l,
                  h(
                    {
                      ref: this.wrapperRef,
                      style: h({}, r, { width: o, height: a })
                    },
                    s
                  ),
                  u ? y : d
                );
              }
            }
          ]),
          c);
      function c() {
        var e, t, n;
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, c);
        for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        return (
          ((t = n = l(
            this,
            (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(
              e,
              [this].concat(o)
            )
          )).config = (0, x.getConfig)(n.props, M.defaultProps, !0)),
          (n.state = { showPreview: !!n.props.light }),
          (n.onClickPreview = function() {
            n.setState({ showPreview: !1 });
          }),
          (n.getDuration = function() {
            return n.player ? n.player.getDuration() : null;
          }),
          (n.getCurrentTime = function() {
            return n.player ? n.player.getCurrentTime() : null;
          }),
          (n.getSecondsLoaded = function() {
            return n.player ? n.player.getSecondsLoaded() : null;
          }),
          (n.getInternalPlayer = function() {
            var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "player";
            return n.player ? n.player.getInternalPlayer(e) : null;
          }),
          (n.seekTo = function(e, t) {
            if (!n.player) return null;
            n.player.seekTo(e, t);
          }),
          (n.onReady = function() {
            n.props.onReady(n);
          }),
          (n.wrapperRef = function(e) {
            n.wrapper = e;
          }),
          (n.activePlayerRef = function(e) {
            n.player = e;
          }),
          l(n, t)
        );
      }
      (s.addCustomPlayer = function(e) {
        u.push(e);
      }),
        (s.removeCustomPlayers = function() {
          u = [];
        }),
        (s.displayName = "ReactPlayer"),
        (s.propTypes = M.propTypes),
        (s.defaultProps = M.defaultProps),
        (s.canPlay = function(e) {
          for (
            var t = [].concat(b(u), b(o.default)), n = 0;
            n < t.length;
            n++
          ) {
            if (t[n].canPlay(e)) return !0;
          }
          return !1;
        }),
        (s.canEnablePIP = function(e) {
          for (
            var t = [].concat(b(u), b(o.default)), n = 0;
            n < t.length;
            n++
          ) {
            var r = t[n];
            if (r.canEnablePIP && r.canEnablePIP(e)) return !0;
          }
          return !1;
        }),
        (t.default = s);
    }),
    J = t(Z),
    Q =
      (Z.FilePlayer,
      Z.Mixcloud,
      Z.DailyMotion,
      Z.Twitch,
      Z.Wistia,
      Z.Streamable,
      Z.Facebook,
      Z.Vimeo,
      Z.SoundCloud,
      Z.YouTube,
      (function() {
        function a() {
          var e, o;
          i(this, a);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            s(
              d((o = y(this, (e = p(a)).call.apply(e, [this].concat(n))))),
              "state",
              { playing: o.props.playVideo || !1 }
            ),
            s(d(o), "handlePlayerProgress", function(e) {
              if (e.loaded) {
                var t = e.playedSeconds,
                  n = o.props.timeRange.start,
                  r = o.props.timeRange.end <= t;
                t <= n && o.player.seekTo(n, "seconds"),
                  r && o.player.seekTo(n, "seconds"),
                  (o.props.onPlayerProgress || h)(t);
              }
            }),
            s(d(o), "handleOnPause", function() {
              (o.props.onPlayerPause || h)();
            }),
            s(d(o), "handleOnPlay", function() {
              (o.props.onPlayerPlay || h)();
            }),
            o
          );
        }
        return (
          c(a, P.Component),
          l(a, [
            {
              key: "componentWillReceiveProps",
              value: function(e) {
                var t = e.timeRange,
                  n = this.props.timeRange,
                  r = (n && t.start !== n.start) || (!n && 0 < t.start);
                r &&
                  (console.log({ canSeek: r }),
                  this.setState({ playing: !1 }),
                  this.player.seekTo(t.start, "seconds")),
                  e.playVideo !== this.props.playVideo &&
                    (console.log("Playing Changed"),
                    this.setState({ playing: e.playVideo }));
              }
            },
            {
              key: "displaySeconds",
              value: function(e) {
                return e.toFixed(2) + "s";
              }
            },
            {
              key: "render",
              value: function() {
                var e,
                  t = this;
                return P.createElement(
                  "div",
                  {
                    className: "rvt-player-cont",
                    onContextMenu: function() {}
                  },
                  P.createElement(
                    J,
                    (s(
                      (e = { onPlay: this.handleOnPause }),
                      "onPlay",
                      this.handleOnPlay
                    ),
                    s(e, "onProgress", this.handlePlayerProgress),
                    s(e, "url", this.props.src),
                    s(e, "ref", function(e) {
                      return (t.player = e);
                    }),
                    s(e, "playing", this.state.playing),
                    s(e, "style", { margin: "0 auto" }),
                    e)
                  ),
                  P.createElement(
                    "div",
                    { className: "rvt-player-time-range-cont" },
                    P.createElement(
                      "span",
                      { className: "rvt-player-time-range" },
                      "From:",
                      " ",
                      P.createElement(
                        "strong",
                        null,
                        this.displaySeconds(this.props.timeRange.start)
                      )
                    ),
                    P.createElement(
                      "span",
                      { className: "rvt-player-time-range" },
                      "To: ",
                      P.createElement(
                        "strong",
                        null,
                        this.displaySeconds(this.props.timeRange.end)
                      )
                    )
                  )
                );
              }
            }
          ]),
          a
        );
      })()),
    ee = (function() {
      function a() {
        var e, t;
        i(this, a);
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          s(
            d((t = y(this, (e = p(a)).call.apply(e, [this].concat(r))))),
            "_screenX",
            null
          ),
          s(d(t), "_screenY", null),
          s(d(t), "_ox", null),
          s(d(t), "_oy", null),
          s(d(t), "handleMouseDown", function(e) {
            (t._screenX = e.screenX),
              (t._screenY = e.screenY),
              (t._ox = t.props.x),
              (t._oy = t.props.y),
              window.addEventListener("mousemove", t.handleMouseMove, !1),
              window.addEventListener("mouseup", t.handleMouseUp, !1);
          }),
          s(d(t), "handleMouseMove", function(e) {
            t.props.onDrag({
              x: e.screenX - t._screenX + t._ox,
              y: e.screenY - t._screenY + t._oy
            });
          }),
          s(d(t), "handleMouseUp", function() {
            window.removeEventListener("mousemove", t.handleMouseMove),
              window.removeEventListener("mouseup", t.handleMouseUp),
              (t.props.onDragStop || function() {})();
          }),
          t
        );
      }
      return (
        c(a, o.PureComponent),
        l(a, [
          {
            key: "render",
            value: function() {
              return P.createElement(
                "div",
                {
                  className: "rvt-dragger " + this.props.className || "",
                  onMouseDown: this.handleMouseDown,
                  style: { left: this.props.x + "px", top: this.props.y + "px" }
                },
                this.props.children
              );
            }
          }
        ]),
        a
      );
    })();
  s(ee, "defaultProps", { onDrag: function() {}, x: 0, y: 0 }),
    s(ee, "propTypes", {
      x: f.number,
      y: f.number,
      onDrag: f.func,
      className: f.string,
      children: f.element
    });
  function te(e) {
    return P.createElement("div", {
      className: "rvt-trimmer",
      style: { width: e.width, left: e.left, right: e.right }
    });
  }
  function ne(e) {
    var t = (function(e) {
      return [
        Math.floor(e / 60),
        Math.floor(e % 60),
        Math.round((e % 1) * 100)
      ];
    })(e.time);
    return P.createElement(
      "div",
      { className: "rvt-player-cursor-current" },
      P.createElement("span", { className: "rvt-player-num" }, t[0]),
      "'",
      P.createElement("span", { className: "rvt-player-num" }, t[1]),
      ".",
      P.createElement(
        "span",
        { className: "rvt-player-num" },
        (function(e, t) {
          return ("000000" + e).slice(-t);
        })(t[2], 2)
      )
    );
  }
  var re = (function() {
      function a() {
        var e, n;
        i(this, a);
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
          r[o] = arguments[o];
        return (
          s(
            d((n = y(this, (e = p(a)).call.apply(e, [this].concat(r))))),
            "pos2Time",
            function(e) {
              return e / n.props.widthDurationRatio;
            }
          ),
          s(d(n), "time2pos", function(e) {
            return e * n.props.widthDurationRatio;
          }),
          s(d(n), "keepInRange", function(e) {
            var t = n.props.containerWidth;
            return e < 0 ? 0 : t < e ? t : e;
          }),
          s(d(n), "handleDragStart", function(e) {
            var t = n.pos2Time(n.keepInRange(e.x));
            n.props.onStartTimeChange(t);
          }),
          s(d(n), "handleDragEnd", function(e) {
            var t = n.pos2Time(n.keepInRange(e.x));
            n.props.onEndTimeChange(t);
          }),
          s(d(n), "handleDragStop", function() {
            (n.props.onGetData ||
              h)({ start: n.props.startTime, end: n.props.endTime });
          }),
          s(d(n), "getTrimmerWidth", function(e) {
            return n.props.containerWidth - e;
          }),
          n
        );
      }
      return (
        c(a, o.PureComponent),
        l(a, [
          {
            key: "render",
            value: function() {
              var e = this.time2pos(this.props.startTime),
                t = this.time2pos(this.props.endTime);
              return P.createElement(
                P.Fragment,
                null,
                P.createElement(te, { left: 0, width: e }),
                P.createElement(
                  ee,
                  {
                    x: e,
                    onDrag: this.handleDragStart,
                    onDragStop: this.handleDragStop
                  },
                  P.createElement(ne, { time: this.props.startTime })
                ),
                P.createElement(
                  ee,
                  {
                    x: t,
                    onDrag: this.handleDragEnd,
                    onDragStop: this.handleDragStop
                  },
                  P.createElement(ne, { time: this.props.endTime })
                ),
                P.createElement(te, {
                  right: 0,
                  width: this.getTrimmerWidth(t)
                })
              );
            }
          }
        ]),
        a
      );
    })(),
    oe = (function() {
      function a() {
        var e, t;
        i(this, a);
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          s(
            d((t = y(this, (e = p(a)).call.apply(e, [this].concat(r))))),
            "state",
            { start: 0, end: 0 }
          ),
          s(d(t), "handleStartTimeChange", function(e) {
            t.setState({ start: e });
          }),
          s(d(t), "handleGetTrimData", function() {
            var e = t.props.onTrim || h;
            setTimeout(function() {
              return e({
                start: t.state.start || t.props.timeRange.start,
                end: t.state.end || t.props.timeRange.end
              });
            }, 200);
          }),
          s(d(t), "handleEndTimeChange", function(e) {
            t.setState({ end: e });
          }),
          t
        );
      }
      return (
        c(a, o.PureComponent),
        l(a, [
          {
            key: "render",
            value: function() {
              var t = this;
              return P.createElement(
                "div",
                {
                  className: "rvt-trimmer-cont",
                  ref: function(e) {
                    return (t.containerRef = e);
                  }
                },
                this.props.showTrimmer &&
                  P.createElement(re, {
                    onStartTimeChange: this.handleStartTimeChange,
                    onEndTimeChange: this.handleEndTimeChange,
                    widthDurationRatio: this.widthDurationRatio,
                    containerWidth: this.containerWidth,
                    startTime: this.state.start || this.props.timeRange.start,
                    endTime: this.state.end || this.props.timeRange.end,
                    onGetData: this.handleGetTrimData
                  })
              );
            }
          },
          {
            key: "widthDurationRatio",
            get: function() {
              return this.containerWidth / this.props.duration;
            }
          },
          {
            key: "containerWidth",
            get: function() {
              return this.containerRef.getBoundingClientRect().width;
            }
          }
        ]),
        a
      );
    })();
  function ae() {}
  function ie() {
    ie.init.call(this);
  }
  function le(e) {
    return void 0 === e._maxListeners
      ? ie.defaultMaxListeners
      : e._maxListeners;
  }
  function ue(e, t, n, r) {
    var o, a, i;
    if ("function" != typeof n)
      throw new TypeError('"listener" argument must be a function');
    if (
      ((a = e._events)
        ? (a.newListener &&
            (e.emit("newListener", t, n.listener ? n.listener : n),
            (a = e._events)),
          (i = a[t]))
        : ((a = e._events = new ae()), (e._eventsCount = 0)),
      i)
    ) {
      if (
        ("function" == typeof i
          ? (i = a[t] = r ? [n, i] : [i, n])
          : r
          ? i.unshift(n)
          : i.push(n),
        !i.warned && (o = le(e)) && 0 < o && i.length > o)
      ) {
        i.warned = !0;
        var l = new Error(
          "Possible EventEmitter memory leak detected. " +
            i.length +
            " " +
            t +
            " listeners added. Use emitter.setMaxListeners() to increase limit"
        );
        (l.name = "MaxListenersExceededWarning"),
          (l.emitter = e),
          (l.type = t),
          (l.count = i.length),
          (function(e) {
            "function" == typeof console.warn
              ? console.warn(e)
              : console.log(e);
          })(l);
      }
    } else (i = a[t] = n), ++e._eventsCount;
    return e;
  }
  function se(e, t, n) {
    var r = !1;
    function o() {
      e.removeListener(t, o), r || ((r = !0), n.apply(e, arguments));
    }
    return (o.listener = n), o;
  }
  function ce(e) {
    var t = this._events;
    if (t) {
      var n = t[e];
      if ("function" == typeof n) return 1;
      if (n) return n.length;
    }
    return 0;
  }
  function pe(e, t) {
    for (var n = new Array(t); t--; ) n[t] = e[t];
    return n;
  }
  (ae.prototype = Object.create(null)),
    ((ie.EventEmitter = ie).usingDomains = !1),
    (ie.prototype.domain = void 0),
    (ie.prototype._events = void 0),
    (ie.prototype._maxListeners = void 0),
    (ie.defaultMaxListeners = 10),
    (ie.init = function() {
      (this.domain = null),
        ie.usingDomains && (void 0).active && (void 0).Domain,
        (this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = new ae()), (this._eventsCount = 0)),
        (this._maxListeners = this._maxListeners || void 0);
    }),
    (ie.prototype.setMaxListeners = function(e) {
      if ("number" != typeof e || e < 0 || isNaN(e))
        throw new TypeError('"n" argument must be a positive number');
      return (this._maxListeners = e), this;
    }),
    (ie.prototype.getMaxListeners = function() {
      return le(this);
    }),
    (ie.prototype.emit = function(e, t, n, r) {
      var o,
        a,
        i,
        l,
        u,
        s,
        c,
        p = "error" === e;
      if ((s = this._events)) p = p && null == s.error;
      else if (!p) return !1;
      if (((c = this.domain), p)) {
        if (((o = t), c))
          return (
            ((o =
              o ||
              new Error(
                'Uncaught, unspecified "error" event'
              )).domainEmitter = this),
            (o.domain = c),
            (o.domainThrown = !1),
            c.emit("error", o),
            !1
          );
        if (o instanceof Error) throw o;
        var f = new Error('Uncaught, unspecified "error" event. (' + o + ")");
        throw ((f.context = o), f);
      }
      if (!(a = s[e])) return !1;
      var d = "function" == typeof a;
      switch ((i = arguments.length)) {
        case 1:
          !(function(e, t, n) {
            if (t) e.call(n);
            else
              for (var r = e.length, o = pe(e, r), a = 0; a < r; ++a)
                o[a].call(n);
          })(a, d, this);
          break;
        case 2:
          !(function(e, t, n, r) {
            if (t) e.call(n, r);
            else
              for (var o = e.length, a = pe(e, o), i = 0; i < o; ++i)
                a[i].call(n, r);
          })(a, d, this, t);
          break;
        case 3:
          !(function(e, t, n, r, o) {
            if (t) e.call(n, r, o);
            else
              for (var a = e.length, i = pe(e, a), l = 0; l < a; ++l)
                i[l].call(n, r, o);
          })(a, d, this, t, n);
          break;
        case 4:
          !(function(e, t, n, r, o, a) {
            if (t) e.call(n, r, o, a);
            else
              for (var i = e.length, l = pe(e, i), u = 0; u < i; ++u)
                l[u].call(n, r, o, a);
          })(a, d, this, t, n, r);
          break;
        default:
          for (l = new Array(i - 1), u = 1; u < i; u++) l[u - 1] = arguments[u];
          !(function(e, t, n, r) {
            if (t) e.apply(n, r);
            else
              for (var o = e.length, a = pe(e, o), i = 0; i < o; ++i)
                a[i].apply(n, r);
          })(a, d, this, l);
      }
      return !0;
    }),
    (ie.prototype.on = ie.prototype.addListener = function(e, t) {
      return ue(this, e, t, !1);
    }),
    (ie.prototype.prependListener = function(e, t) {
      return ue(this, e, t, !0);
    }),
    (ie.prototype.once = function(e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.on(e, se(this, e, t)), this;
    }),
    (ie.prototype.prependOnceListener = function(e, t) {
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      return this.prependListener(e, se(this, e, t)), this;
    }),
    (ie.prototype.removeListener = function(e, t) {
      var n, r, o, a, i;
      if ("function" != typeof t)
        throw new TypeError('"listener" argument must be a function');
      if (!(r = this._events)) return this;
      if (!(n = r[e])) return this;
      if (n === t || (n.listener && n.listener === t))
        0 == --this._eventsCount
          ? (this._events = new ae())
          : (delete r[e],
            r.removeListener &&
              this.emit("removeListener", e, n.listener || t));
      else if ("function" != typeof n) {
        for (o = -1, a = n.length; 0 < a--; )
          if (n[a] === t || (n[a].listener && n[a].listener === t)) {
            (i = n[a].listener), (o = a);
            break;
          }
        if (o < 0) return this;
        if (1 === n.length) {
          if (((n[0] = void 0), 0 == --this._eventsCount))
            return (this._events = new ae()), this;
          delete r[e];
        } else
          !(function(e, t) {
            for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
              e[n] = e[r];
            e.pop();
          })(n, o);
        r.removeListener && this.emit("removeListener", e, i || t);
      }
      return this;
    }),
    (ie.prototype.removeAllListeners = function(e) {
      var t, n;
      if (!(n = this._events)) return this;
      if (!n.removeListener)
        return (
          0 === arguments.length
            ? ((this._events = new ae()), (this._eventsCount = 0))
            : n[e] &&
              (0 == --this._eventsCount
                ? (this._events = new ae())
                : delete n[e]),
          this
        );
      if (0 === arguments.length) {
        for (var r, o = Object.keys(n), a = 0; a < o.length; ++a)
          "removeListener" !== (r = o[a]) && this.removeAllListeners(r);
        return (
          this.removeAllListeners("removeListener"),
          (this._events = new ae()),
          (this._eventsCount = 0),
          this
        );
      }
      if ("function" == typeof (t = n[e])) this.removeListener(e, t);
      else if (t) for (; this.removeListener(e, t[t.length - 1]), t[0]; );
      return this;
    }),
    (ie.prototype.listeners = function(e) {
      var t,
        n = this._events;
      return n && (t = n[e])
        ? "function" == typeof t
          ? [t.listener || t]
          : (function(e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(t)
        : [];
    }),
    (ie.listenerCount = function(e, t) {
      return "function" == typeof e.listenerCount
        ? e.listenerCount(t)
        : ce.call(e, t);
    }),
    (ie.prototype.listenerCount = ce),
    (ie.prototype.eventNames = function() {
      return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
    });
  function fe() {
    importScripts("https://archive.org/download/ffmpeg_asm/ffmpeg_asm.js");
    var i = Date.now;
    function l(e) {
      postMessage({ type: "stdout", data: e });
    }
    (onmessage = function(e) {
      var t = e.data;
      if ("command" === t.type) {
        var n = {
          print: l,
          printErr: l,
          files: t.files || [],
          arguments: t.arguments || [],
          TOTAL_MEMORY: t.TOTAL_MEMORY || !1
        };
        postMessage({ type: "start", data: n.arguments.join(" ") }),
          postMessage({
            type: "stdout",
            data:
              "Received command: " +
              n.arguments.join(" ") +
              (n.TOTAL_MEMORY
                ? ".  Processing with " + n.TOTAL_MEMORY + " bits."
                : "")
          });
        var r = i(),
          o = ffmpeg_run(n),
          a = i() - r;
        postMessage({
          type: "stdout",
          data: "Finished processing (took " + a + "ms)"
        }),
          postMessage({ type: "done", data: o, time: a });
      }
    }),
      postMessage({ type: "ready" });
  }
  var de = t(
    j(function(e, t) {
      var n;
      ((n = t).default = function e(t) {
        if (
          ((function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          "function" != typeof t)
        )
          throw new Error("File content must export a function");
        var n = t.toString(),
          r = new Blob(["(" + n + ")()"], { type: "application/javascript" });
        return new Worker(URL.createObjectURL(r));
      }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    })
  );
  function ye(e) {
    return (ye =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          })(e);
  }
  function he(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function ve(e) {
    return (ve = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function me(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function ge(e, t) {
    return (ge =
      Object.setPrototypeOf ||
      function(e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function be(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (e[t] = n),
      e
    );
  }
  var we = new ((function() {
      function e() {
        var o;
        return (
          (function(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          be(
            me(
              (o = (function(e, t) {
                return !t || ("object" !== ye(t) && "function" != typeof t)
                  ? me(e)
                  : t;
              })(this, ve(e).call(this)))
            ),
            "_worker",
            {}
          ),
          be(me(o), "_inputFile", {}),
          be(me(o), "workerIsReady", !1),
          be(me(o), "readFileAsBufferArray", function(r) {
            return new Promise(function(e, t) {
              var n = new FileReader();
              (n.onload = function() {
                e(this.result);
              }),
                (n.onerror = function() {
                  t(this.error);
                }),
                n.readAsArrayBuffer(r);
            });
          }),
          be(me(o), "runCommand", function(r) {
            if ("string" != typeof r || !r.length)
              throw new Error("command should be string and not empty");
            o.convertInputFileToArrayBuffer().then(function(e) {
              for (; !o.workerIsReady; );
              var t = "video.webm",
                n = "-i ".concat(t, " ").concat(r);
              o.worker.postMessage({
                type: "command",
                arguments: n.split(" "),
                files: [{ data: new Uint8Array(e), name: t }]
              });
            });
          }),
          be(me(o), "log", function(e) {
            return Array.isArray(e)
              ? console.log.call(null, e)
              : console.log(e);
          }),
          be(me(o), "isVideo", function(e) {
            var t = e.type;
            return (
              e instanceof Blob && (t.includes("video") || t.includes("audio"))
            );
          }),
          o.initWebWorker(),
          o
        );
      }
      return (
        (function(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 }
          })),
            t && ge(e, t);
        })(e, ie),
        (function(e, t, n) {
          t && he(e.prototype, t), n && he(e, n);
        })(e, [
          {
            key: "initWebWorker",
            value: function() {
              var n = this;
              (this.worker = new de(fe)),
                (this.worker.onmessage = function(e) {
                  var t = e.data;
                  "ready" == t.type
                    ? (n.emit("onReady", "ffmpeg-asm.js file has been loaded."),
                      (n.workerIsReady = !0))
                    : "stdout" == t.type
                    ? n.emit("onStdout", t.data)
                    : "start" == t.type
                    ? (n.emit("onFileReceived", "File Received"),
                      log("file received ffmpeg command."))
                    : "done" == t.type && n.emit("onDone", t.data);
                });
            }
          },
          {
            key: "inputFileExists",
            value: function() {
              var e = this.inputFile;
              return !!(e && e instanceof Blob && e.size && e.type);
            }
          },
          {
            key: "convertInputFileToArrayBuffer",
            value: function() {
              if (!this.inputFileExists())
                throw new Error("Input File has not been set");
              return this.readFileAsBufferArray(this.inputFile);
            }
          },
          {
            key: "worker",
            set: function(e) {
              this._worker = e;
            },
            get: function() {
              return this._worker;
            }
          },
          {
            key: "inputFile",
            set: function(e) {
              if (!this.isVideo(e))
                throw new Error(
                  "Input file is expected to be an audio or a video"
                );
              this._inputFile = e;
            },
            get: function() {
              return this._inputFile;
            }
          }
        ]),
        e
      );
    })())(),
    Pe = function n(r, e, t) {
      return void 0 === e
        ? function(e, t) {
            return n(r, e, t);
          }
        : (void 0 === t && (t = "0"),
          0 < (r -= e.toString().length)
            ? new Array(r + (/\./.test(e) ? 2 : 1)).join(t) + e
            : e + "");
    },
    ke = 36e5,
    Ee = 6e4,
    _e = 1e3,
    Oe = "Time format error";
  function Se(e, t) {
    var n = 1 < arguments.length && void 0 !== t ? t : "mm:ss";
    if ("number" != typeof e || Number.isNaN(e)) throw new Error("NaN error");
    var r = Math.abs(e);
    return (function(e, t) {
      var n, r, o;
      switch (t.toLowerCase()) {
        case "hh:mm:ss.sss":
          o = r = n = !0;
          break;
        case "hh:mm:ss":
          (n = !!e.miliseconds), (o = r = !0);
          break;
        case "hh:mm":
          (n = !!e.miliseconds), (r = n || !!e.seconds), (o = !0);
          break;
        case "mm:ss":
          (n = !!e.miliseconds), (r = !0), (o = !!e.hours);
          break;
        case "mm:ss.sss":
          (r = n = !0), (o = !!e.hours);
          break;
        default:
          throw new Error(Oe);
      }
      var a = Pe(2, e.hours),
        i = Pe(2, e.minutes),
        l = Pe(2, e.seconds),
        u = Pe(3, e.miliseconds);
      return (
        (e.negative ? "-" : "") +
        (o
          ? n
            ? ""
                .concat(a, ":")
                .concat(i, ":")
                .concat(l, ".")
                .concat(u)
            : r
            ? ""
                .concat(a, ":")
                .concat(i, ":")
                .concat(l)
            : "".concat(a, ":").concat(i)
          : n
          ? ""
              .concat(i, ":")
              .concat(l, ".")
              .concat(u)
          : "".concat(i, ":").concat(l))
      );
    })(
      {
        negative: e < 0,
        hours: Math.floor(r / ke),
        minutes: Math.floor((r % ke) / Ee),
        seconds: Math.floor((r % Ee) / _e),
        miliseconds: Math.floor(r % _e)
      },
      n
    );
  }
  var Te = (function() {
      function t(e) {
        var v;
        return (
          i(this, t),
          s(d((v = y(this, p(t).call(this)))), "trimVideo", function() {
            var e = 1 < arguments.length ? arguments[1] : void 0,
              t = (function(e, t) {
                var n = 1 < arguments.length && void 0 !== t ? t : "mm:ss";
                if ("number" != typeof e || Number.isNaN(e))
                  throw new Error("NaN error");
                return Se(e * _e, n);
              })(
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
                "hh:mm:ss"
              );
            we.runCommand(
              "-ss ".concat(t, " -c copy -t ").concat(e, " sliced-output.mp4")
            );
          }),
          s(d(v), "_videoData", {}),
          s(d(v), "_videoFile", null),
          s(d(v), "_videoBuffer", {}),
          s(
            d(v),
            "readAsArrayBuffer",
            m(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2), (t = v._videoFile), a(t, "ArrayBuffer")
                        );
                      case 2:
                        return (
                          (v._videoBuffer = e.sent),
                          e.abrupt("return", v.videoBuffer)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                  var t;
                }, e);
              })
            )
          ),
          s(d(v), "convertBufferToBlob", function(e) {
            var t = null;
            return (e = e || v.videoBuffer).byteLength && (t = g(e)), t;
          }),
          s(
            d(v),
            "readAsDataURL",
            (function() {
              var n = m(
                regeneratorRuntime.mark(function e(t, n) {
                  var r;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = t || v.videoBuffer),
                            (n = n || v.convertBufferToBlob(t)),
                            (r = null),
                            n)
                          )
                            return (e.next = 6), a(n, "DataURL");
                          e.next = 7;
                          break;
                        case 6:
                          r = e.sent;
                        case 7:
                          return e.abrupt("return", r);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function(e, t) {
                return n.apply(this, arguments);
              };
            })()
          ),
          s(
            d(v),
            "decode",
            (function() {
              var t = m(
                regeneratorRuntime.mark(function e(t) {
                  var n, r, o, a;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (v.videoFile = t),
                            v.emit("processingFile"),
                            (e.next = 4),
                            v.readAsArrayBuffer()
                          );
                        case 4:
                          return (n = e.sent), (e.next = 7), v.readAsDataURL(n);
                        case 7:
                          (r = e.sent),
                            (o = URL.createObjectURL(v.videoFile)),
                            ((a = document.createElement("video")).src = o);
                        case 11:
                          if (
                            (a.duration === 1 / 0 || isNaN(a.duration)) &&
                            a.readyState < 2
                          )
                            return (
                              (e.next = 14),
                              new Promise(function(e) {
                                return setTimeout(e, 1e3);
                              })
                            );
                          e.next = 17;
                          break;
                        case 14:
                          (a.currentTime = 1e7 * Math.random()), (e.next = 11);
                          break;
                        case 17:
                          return (
                            (v._videoData = a),
                            v.emit("processedFile"),
                            e.abrupt("return", {
                              dataURL: r,
                              arrayBuffer: n,
                              blob: v.convertBufferToBlob()
                            })
                          );
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function(e) {
                return t.apply(this, arguments);
              };
            })()
          ),
          s(d(v), "generateBufferChunks", function() {
            var l =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : [];
            return new Promise(function(e, t) {
              try {
                var n = [];
                l = l.byteLength ? l : v.videoBuffer;
                for (
                  var r = new Uint8Array(l), o = 0, a = 6e4;
                  a < r.byteLength;
                  a += 6e4
                ) {
                  var i = l.slice(o, a);
                  n.push(i), (o = a);
                }
                e(n);
              } catch (e) {
                t(e);
              }
            });
          }),
          s(d(v), "extractFramesFromVideo", function() {
            var h =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 25;
            return new Promise(
              (function() {
                var n = m(
                  regeneratorRuntime.mark(function e(t, n) {
                    var r, o, a, i, l, u, s, c, p, f, d, y;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (e.prev = 0),
                                v.emit("extractingFrames"),
                                (r = v._videoData).addEventListener(
                                  "seeked",
                                  m(
                                    regeneratorRuntime.mark(function e() {
                                      return regeneratorRuntime.wrap(function(
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              o && o();
                                            case 1:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  )
                                ),
                                (a = r.duration),
                                (i = document.createElement("canvas")),
                                (l = i.getContext("2d")),
                                (u = [r.videoWidth, r.videoHeight]),
                                (s = u[0]),
                                (c = u[1]),
                                (i.width = s),
                                (i.height = c),
                                (p = []),
                                (f = 125 / h),
                                (d = 0);
                            case 13:
                              if (d < a)
                                return (
                                  (r.currentTime = d),
                                  (e.next = 17),
                                  new Promise(function(e) {
                                    return (o = e);
                                  })
                                );
                              e.next = 23;
                              break;
                            case 17:
                              l.drawImage(r, 0, 0, s, c),
                                (y = i.toDataURL()),
                                p.push(y),
                                (d += f),
                                (e.next = 13);
                              break;
                            case 23:
                              v.emit("extractedFrames"), t(p), (e.next = 30);
                              break;
                            case 27:
                              (e.prev = 27), (e.t0 = e.catch(0)), n(e.t0);
                            case 30:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 27]]
                    );
                  })
                );
                return function(e, t) {
                  return n.apply(this, arguments);
                };
              })()
            );
          }),
          (v.videoFile = e),
          we.on("onReady", function() {
            return v.emit("FFMPEGReady");
          }),
          we.on("onStdout", function(e) {
            return v.emit("FFMPEGStdout", e);
          }),
          we.on("onFileReceived", function() {
            return v.emit("FFMPEGFileReceived");
          }),
          we.on("onDone", function(e) {
            return v.emit("FFMPEGDone", e);
          }),
          v
        );
      }
      return (
        c(t, ie),
        l(t, [
          {
            key: "videoFile",
            set: function(e) {
              e && e.type && (we.inputFile = e), (this._videoFile = e);
            },
            get: function() {
              return this._videoFile;
            }
          },
          {
            key: "duration",
            get: function() {
              return this._videoData.duration || 0;
            }
          },
          {
            key: "videoData",
            get: function() {
              return this._videoData;
            }
          },
          {
            key: "videoBuffer",
            get: function() {
              return this._videoBuffer;
            }
          }
        ]),
        t
      );
    })(),
    je = (function() {
      function n(e) {
        var l,
          t = this;
        return (
          i(this, n),
          s(d((l = y(this, p(n).call(this, e)))), "webVideo", {}),
          s(d(l), "handleFFMPEGStdout", function(e) {}),
          s(d(l), "handleFFMPEGReady", function() {}),
          s(d(l), "handleFFMPEGFileReceived", function() {}),
          s(d(l), "handleFFMPEGDone", function(e) {
            var t = g(e[0].data);
            l.decodeVideoFile(t, function() {
              (l.onVideoEncode || h)(e),
                l.setState({ encoding: !1, encoded: !0, encodedVideo: t });
            });
          }),
          s(d(l), "state", {
            decoding: !1,
            encoding: !1,
            encoded: !1,
            playVideo: !1,
            videoDataURL: "",
            videoFrames: [],
            isDecoding: !1,
            timeRange: { start: 0, end: 0 },
            encodedVideo: null
          }),
          s(d(l), "updateVideoDataURL", function(e) {
            return l.setState({ videoDataURL: e });
          }),
          s(d(l), "updateVideoFrames", function(e) {
            return l.setState({ videoFrames: e });
          }),
          s(d(l), "updateIsExtractingFrame", function(e) {
            return l.setState({ updateIsExtractingFrame: e });
          }),
          s(d(l), "updateIsDecoding", function(e) {
            return l.setState({ updateIsDecoding: e });
          }),
          s(d(l), "updateVideoDuration", function(e) {
            return l.setState({ updateVideoDuration: e });
          }),
          s(d(l), "decodeVideoFile", function(e) {
            var n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : h;
            l.setState({ decoding: !0 });
            var t = l.webVideo;
            (t.videoFile = e),
              t.decode(e).then(function(e) {
                e.blob, e.arrayBuffer;
                var t = e.dataURL;
                l.setState({ decoding: !1 }),
                  l.updateVideoDataURL(t),
                  l.setState({
                    timeRange: { start: 0, end: l.webVideo.videoData.duration }
                  }),
                  n();
              });
          }),
          s(d(l), "handleFileSelected", function(e) {
            l.decodeVideoFile(e);
          }),
          s(d(l), "handleVideoTrim", function(e) {
            l.setState({ timeRange: e });
          }),
          s(d(l), "handleEncodeVideo", function() {
            var e = l.state.timeRange;
            l.setState({ encoding: !0, videoDataURL: "" });
            var t = e.end - e.start;
            l.webVideo.trimVideo(e.start, t);
          }),
          s(d(l), "handlePlayPauseVideo", function() {
            var e = l.state.playVideo;
            l.setState({ playVideo: !e });
          }),
          s(d(l), "handlePlayerPause", function() {
            l.setState({ playVideo: !1 });
          }),
          s(d(l), "handlePlayerPlay", function() {
            l.setState({ playVideo: !0 });
          }),
          s(d(l), "handleReselectFile", function() {
            var e = {
              decoding: !1,
              encoding: !1,
              encoded: !1,
              encodedVideo: null,
              playVideo: !1,
              videoDataURL: "",
              videoFrames: [],
              isExtractingFrame: !1,
              isDecoding: !1,
              timeRange: l.props.timeRange || { start: 0, end: 0 }
            };
            l.setState(e);
          }),
          s(d(l), "VideoPlayerWithTrimmer", function(e) {
            var t = e.showTrimmer,
              n = l.state,
              r = n.decoding,
              o = n.encoding,
              a = n.encoded,
              i = n.videoDataURL;
            return P.createElement(
              P.Fragment,
              null,
              !r &&
                !o &&
                i &&
                P.createElement(Q, {
                  src: l.state.videoDataURL,
                  timeRange: l.state.timeRange,
                  playVideo: l.state.playVideo,
                  onPlayerPlay: l.handlePlayerPlay,
                  onPlayerPause: l.handlePlayerPause
                }),
              t &&
                P.createElement(oe, {
                  showTrimmer: l.state.videoDataURL,
                  duration: l.webVideo.videoData.duration,
                  onTrim: l.handleVideoTrim,
                  timeRange: l.state.timeRange
                }),
              !r &&
                !o &&
                i &&
                P.createElement(X, {
                  onDownload: l.handleDownloadVideo,
                  canDownload: a,
                  showEncodeBtn: l.props.showEncodeBtn,
                  onReselectFile: l.handleReselectFile,
                  onEncode: l.handleEncodeVideo,
                  onPlayPauseClick: l.handlePlayPauseVideo,
                  processing: o,
                  playing: l.state.playVideo
                })
            );
          }),
          s(d(l), "handleDownloadVideo", function() {
            !(function(e, t) {
              var n = document.createElement("a");
              (n.href = e), (n.download = t), n.click();
            })(
              (function(e) {
                return URL.createObjectURL(e);
              })(l.state.encodedVideo),
              "trimmed.mp4"
            );
          }),
          s(d(l), "VideoPlayerNoTrimmer", function() {
            return P.createElement(t.VideoPlayerWithTrimmer, null);
          }),
          (l.webVideo = new Te({})),
          l.webVideo.on("processingFile", function() {
            return l.updateIsDecoding(!0);
          }),
          l.webVideo.on("processedFile", function() {
            return l.updateIsDecoding(!1);
          }),
          l.webVideo.on("FFMPEGStdout", l.handleFFMPEGStdout),
          l.webVideo.on("FFMPEGReady", l.handleFFMPEGReady),
          l.webVideo.on("FFMPEGFileReceived", l.handleFFMPEGFileReceived),
          l.webVideo.on("FFMPEGDone", l.handleFFMPEGDone),
          l
        );
      }
      return (
        c(n, P.PureComponent),
        l(n, [
          {
            key: "render",
            value: function() {
              var e = this.state,
                t = e.decoding,
                n = e.encoding,
                r = e.encoded,
                o = e.videoDataURL;
              return P.createElement(
                "div",
                { className: "rvt-main-container" },
                r
                  ? P.createElement(this.VideoPlayerNoTrimmer, null)
                  : P.createElement(
                      P.Fragment,
                      null,
                      !t &&
                        !n &&
                        !o &&
                        P.createElement(S, {
                          onFileSelected: this.handleFileSelected
                        }),
                      (t || n) &&
                        P.createElement(
                          T,
                          null,
                          P.createElement(O, {
                            name: "spin",
                            className: "rvt-icon-spin"
                          }),
                          n ? "ENCODING VIDEO" : "DECODING VIDEO",
                          "..."
                        ),
                      P.createElement(this.VideoPlayerWithTrimmer, {
                        showTrimmer: !0
                      })
                    )
              );
            }
          }
        ]),
        n
      );
    })();
  (e.default = je), Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJzL3V0aWxzLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvSWNvbi5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0ZpbGVQaWNrZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9TdGF0dXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9hZC1zY3JpcHQvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvdW1kLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcHJvcHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi91dGlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1BsYXllci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3NpbmdsZVBsYXllci5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvWW91VHViZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvU291bmRDbG91ZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVmltZW8uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL0ZhY2Vib29rLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9TdHJlYW1hYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9XaXN0aWEuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL1R3aXRjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRGFpbHlNb3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL01peGNsb3VkLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9GaWxlUGxheWVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL1ByZXZpZXcuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wcmVsb2FkLmpzIiwiLi4vc3JjL2NvbXBvbmVudHMvQ29udHJvbHMuanMiLCIuLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9SZWFjdFBsYXllci5qcyIsIi4uL3NyYy9jb21wb25lbnRzL1BsYXllci5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0RyYWdnZXIuanMiLCIuLi9zcmMvY29tcG9uZW50cy9UcmltbWVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3JvbGx1cC1wbHVnaW4tbm9kZS1idWlsdGlucy9zcmMvZXM2L2V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9mZm1wZWctd2Vid29ya2VyL2Rpc3QvZXMvRkZNUEVHV2ViV29ya2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL3dlYndvcmtlci1maWxlL2Rpc3QvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZmZtcGVnLXdlYndvcmtlci9kaXN0L2VzL0ZGTVBFR1dlYldvcmtlckNsaWVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9mZm1wZWctd2Vid29ya2VyL2Rpc3QvZXMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvemVyby1maWxsL2luZGV4LmpzIiwiLi4vc3JjL2xpYnMvZm9ybWF0U2Vjb25kcy5qcyIsIi4uL3NyYy9saWJzL1dlYlZpZGVvLmpzIiwiLi4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGV0ZWN0IGlmIGEgZmlsZSBpcyBhbiB2aWRlby5cbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICovXG5leHBvcnQgY29uc3QgaXNWaWRlbyA9IGZpbGUgPT4gZmlsZS50eXBlLmluZGV4T2YoXCJ2aWRlb1wiKSA+IC0xO1xuXG4vKipcbiAqIGNyZWF0ZSByYW5nZSBbbWluIC4uIG1heF1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKG1pbiwgbWF4KSA9PlxuICBBcnJheS5hcHBseShudWxsLCB7IGxlbmd0aDogbWF4IC0gbWluICsgMSB9KS5tYXAoKHYsIGkpID0+IGkgKyBtaW4pO1xuXG4vKipcbiAqIEZpbGVSZWFkZXIgdmlhIHByb21pc2VcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFUeXBlXG4gKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyIHwgc3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRGaWxlID0gKGZpbGUsIGRhdGFUeXBlID0gXCJBcnJheUJ1ZmZlclwiKSA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXJbXCJyZWFkQXNcIiArIGRhdGFUeXBlXShmaWxlKTtcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICByZWFkZXIub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgfSk7XG5cbi8qKlxuICogUmVhZCBGaWxlL0Jsb2IgdG8gQXJyYXlCdWZmZXJcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHJldHVybiB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59XG4gKi9cbmV4cG9ydCBjb25zdCByZWFkQXJyYXlCdWZmZXIgPSBmaWxlID0+IHJlYWRGaWxlKGZpbGUsIFwiQXJyYXlCdWZmZXJcIik7XG5cbi8qKlxuICogUmVhZCBGaWxlL0Jsb2IgdG8gQmFzZTY0XG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGVcbiAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWREYXRhVVJMID0gZmlsZSA9PiByZWFkRmlsZShmaWxlLCBcIkRhdGFVUkxcIik7XG5cbmV4cG9ydCBjb25zdCByZWFkQmxvYlVSTCA9IGZpbGUgPT4gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcblxuZXhwb3J0IGNvbnN0IGRvd25sb2FkID0gKHVybCwgbmFtZSkgPT4ge1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IHVybDtcbiAgbGluay5kb3dubG9hZCA9IG5hbWU7XG4gIGxpbmsuY2xpY2soKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5hbWUgPSAoZmlsZW5hbWUsIGV4dCwgc3RhbXApID0+XG4gIGAke2ZpbGVuYW1lLnJlcGxhY2UoL1xcLlxcdyskLywgXCJcIil9JHtzdGFtcCB8fCBcIlwifS4ke2V4dH1gO1xuXG4vKipcbiAqIGZvcm1hdCBzZWNvbmRzIHRvIFttaW51dGVzLCBpbnRlZ2VyLCBkZWNpbWFsKDIpXVxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHNcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdFNlY29uZHMgPSBzZWNvbmRzID0+IFtcbiAgTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApLFxuICBNYXRoLmZsb29yKHNlY29uZHMgJSA2MCksXG4gIE1hdGgucm91bmQoKHNlY29uZHMgJSAxKSAqIDEwMClcbl07XG5cbmV4cG9ydCBjb25zdCBsZWZ0WmVybyA9IChudW0sIGNvdW50KSA9PiB7XG4gIHJldHVybiAoXCIwMDAwMDBcIiArIG51bSkuc2xpY2UoLWNvdW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBub29wID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBhcnJheUJ1ZmZlclRvQmxvYiA9IGJ1ZmZlciA9PlxuICBuZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCAwLCBidWZmZXIuYnl0ZUxlbmd0aCldLCB7XG4gICAgdHlwZTogXCJ2aWRlby93ZWJtXCIsXG4gICAgbmFtZTogXCJ2aWRlby53ZWJtXCJcbiAgfSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaWNvbi5zY3NzXCI7XG5cbmNvbnN0IERvd25sb2FkID0gKHsgY2xhc3NOYW1lIH0pID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPHBhdGggZD1cIk0xOSA5aC00VjNIOXY2SDVsNyA3IDctN3pNNSAxOHYyaDE0di0ySDV6XCIgLz5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBNdXNpYyA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTUgNkgzdjJoMTJWNnptMCA0SDN2MmgxMnYtMnpNMyAxNmg4di0ySDN2MnpNMTcgNnY4LjE4Yy0uMzEtLjExLS42NS0uMTgtMS0uMTgtMS42NiAwLTMgMS4zNC0zIDNzMS4zNCAzIDMgMyAzLTEuMzQgMy0zVjhoM1Y2aC01elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgUGxheSA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBoZWlnaHQ9XCIyNFwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgd2lkdGg9XCIyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICA8cGF0aCBkPVwiTTEwIDE2LjVsNi00LjUtNi00LjV2OXpNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6XCIgLz5cbiAgPC9zdmc+XG4pO1xuXG5jb25zdCBQYXVzZSA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICBoZWlnaHQ9XCIyNFwiXG4gICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgd2lkdGg9XCIyNFwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIgLz5cbiAgICA8cGF0aCBkPVwiTTkgMTZoMlY4SDl2OHptMy0xNEM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTEtNGgyVjhoLTJ2OHpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFJlcGxheSA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgIDxwYXRoIGQ9XCJNMTIgNVYxTDcgNmw1IDVWN2MzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02SDRjMCA0LjQyIDMuNTggOCA4IDhzOC0zLjU4IDgtOC0zLjU4LTgtOC04elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgU3BpbiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDQyIDQyXCJcbiAgPlxuICAgIDxwYXRoIGQ9XCJNMjEgMzdjLTQuMyAwLTguMy0xLjctMTEuMy00LjdTNSAyNS4zIDUgMjFjMC0zIC44LTYgMi41LTguNUM5IDEwIDExLjIgOCAxMy44IDYuN2wxLjMgMi43Yy0yLjEgMS4xLTMuOSAyLjctNS4yIDQuNy0xLjMgMi4xLTIgNC41LTIgNi45IDAgNy4yIDUuOCAxMyAxMyAxM3MxMy01LjggMTMtMTNjMC0yLjUtLjctNC45LTItNi45cy0zLjEtMy42LTUuMi00LjdMMjggNi43YzIuOCAxLjMgNSAzLjMgNi41IDUuOEMzNi4yIDE1IDM3IDE4IDM3IDIxYzAgNC4zLTEuNyA4LjMtNC43IDExLjNTMjUuMyAzNyAyMSAzN3pcIiAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEljb24gPSBwcm9wcyA9PiB7XG4gIGxldCBFbCA9IERvd25sb2FkO1xuICBzd2l0Y2ggKHByb3BzLm5hbWUpIHtcbiAgICBjYXNlIFwibXVzaWNcIjpcbiAgICAgIEVsID0gTXVzaWM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicGxheVwiOlxuICAgICAgRWwgPSBQbGF5O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBhdXNlXCI6XG4gICAgICBFbCA9IFBhdXNlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInJlcGxheVwiOlxuICAgICAgRWwgPSBSZXBsYXk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3BpblwiOlxuICAgICAgRWwgPSBTcGluO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIEVsID0gRG93bmxvYWQ7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gKFxuICAgIDxFbFxuICAgICAgY2xhc3NOYW1lPXtgcnZ0LWljb24gcmF0LWljb24tJHtwcm9wcy5uYW1lfSAke3Byb3BzLmNsYXNzTmFtZX1gLnRyaW0oKX1cbiAgICAvPlxuICApO1xufTtcblxuSWNvbi5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaXNWaWRlbywgbm9vcCB9IGZyb20gXCIuLi9saWJzL3V0aWxzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZmlsZS1waWNrZXIuc2Nzc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvblwiO1xuXG5mdW5jdGlvbiBGaWxlUGlja2VyKHByb3BzKSB7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSB1c2VDYWxsYmFjayhlID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZmlsZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB2aWRlbyA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgaWYgKGlzVmlkZW8odmlkZW8pKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwcm9wcy5vbkZpbGVTZWxlY3RlZCB8fCBub29wO1xuICAgICAgICBoYW5kbGVyKHZpZGVvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhbGVydChcIlVuc3VwcG9ydGVkIEZpbGUgVHlwZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBjb25zdCBoYW5kbGVDb250YWluZXJDbGlja2VkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJydnQtZmlsZS1waWNrZXJcIiBvbkNsaWNrPXtoYW5kbGVDb250YWluZXJDbGlja2VkfT5cbiAgICAgIDxJY29uIG5hbWU9XCJtdXNpY1wiIC8+XG4gICAgICBQaWNrIEEgVmlkZW9cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIGFjY2VwdD1cInZpZGVvLypcIlxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVQaWNrZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3RhdHVzLnNjc3NcIjtcblxuY29uc3QgU3RhdHVzID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJydnQtc3RhdHVzXCI+e2NoaWxkcmVufTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1cztcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsb2FkIChzcmMsIG9wdHMsIGNiKSB7XG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdXG4gIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0c1xuICAgIG9wdHMgPSB7fVxuICB9XG5cbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgY2IgPSBjYiB8fCBmdW5jdGlvbigpIHt9XG5cbiAgc2NyaXB0LnR5cGUgPSBvcHRzLnR5cGUgfHwgJ3RleHQvamF2YXNjcmlwdCdcbiAgc2NyaXB0LmNoYXJzZXQgPSBvcHRzLmNoYXJzZXQgfHwgJ3V0ZjgnO1xuICBzY3JpcHQuYXN5bmMgPSAnYXN5bmMnIGluIG9wdHMgPyAhIW9wdHMuYXN5bmMgOiB0cnVlXG4gIHNjcmlwdC5zcmMgPSBzcmNcblxuICBpZiAob3B0cy5hdHRycykge1xuICAgIHNldEF0dHJpYnV0ZXMoc2NyaXB0LCBvcHRzLmF0dHJzKVxuICB9XG5cbiAgaWYgKG9wdHMudGV4dCkge1xuICAgIHNjcmlwdC50ZXh0ID0gJycgKyBvcHRzLnRleHRcbiAgfVxuXG4gIHZhciBvbmVuZCA9ICdvbmxvYWQnIGluIHNjcmlwdCA/IHN0ZE9uRW5kIDogaWVPbkVuZFxuICBvbmVuZChzY3JpcHQsIGNiKVxuXG4gIC8vIHNvbWUgZ29vZCBsZWdhY3kgYnJvd3NlcnMgKGZpcmVmb3gpIGZhaWwgdGhlICdpbicgZGV0ZWN0aW9uIGFib3ZlXG4gIC8vIHNvIGFzIGEgZmFsbGJhY2sgd2UgYWx3YXlzIHNldCBvbmxvYWRcbiAgLy8gb2xkIElFIHdpbGwgaWdub3JlIHRoaXMgYW5kIG5ldyBJRSB3aWxsIHNldCBvbmxvYWRcbiAgaWYgKCFzY3JpcHQub25sb2FkKSB7XG4gICAgc3RkT25FbmQoc2NyaXB0LCBjYik7XG4gIH1cblxuICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdClcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhzY3JpcHQsIGF0dHJzKSB7XG4gIGZvciAodmFyIGF0dHIgaW4gYXR0cnMpIHtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGF0dHIsIGF0dHJzW2F0dHJdKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGRPbkVuZCAoc2NyaXB0LCBjYikge1xuICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25lcnJvciA9IHRoaXMub25sb2FkID0gbnVsbFxuICAgIGNiKG51bGwsIHNjcmlwdClcbiAgfVxuICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLm9ubG9hZCA9IG51bGwgaGVyZSBpcyBuZWNlc3NhcnlcbiAgICAvLyBiZWNhdXNlIGV2ZW4gSUU5IHdvcmtzIG5vdCBsaWtlIG90aGVyc1xuICAgIHRoaXMub25lcnJvciA9IHRoaXMub25sb2FkID0gbnVsbFxuICAgIGNiKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgJyArIHRoaXMuc3JjKSwgc2NyaXB0KVxuICB9XG59XG5cbmZ1bmN0aW9uIGllT25FbmQgKHNjcmlwdCwgY2IpIHtcbiAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5yZWFkeVN0YXRlICE9ICdjb21wbGV0ZScgJiYgdGhpcy5yZWFkeVN0YXRlICE9ICdsb2FkZWQnKSByZXR1cm5cbiAgICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGxcbiAgICBjYihudWxsLCBzY3JpcHQpIC8vIHRoZXJlIGlzIG5vIHdheSB0byBjYXRjaCBsb2FkaW5nIGVycm9ycyBpbiBJRThcbiAgfVxufVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5kZWVwbWVyZ2UgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCBmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRcdHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpXG5cdFx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuXHRcdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcblx0fVxuXG5cdGZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuXHRcdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0XHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0XHR8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nXG5cdFx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcblx0fVxuXG5cdC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxuXHR2YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xuXHR2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5cdGZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG5cdFx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcblx0fVxuXG5cdGZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh2YWx1ZSwgb3B0aW9ucykge1xuXHRcdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdFx0OiB2YWx1ZVxuXHR9XG5cblx0ZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0XHRyZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0XHR9KVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcblx0XHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRcdHJldHVybiBkZWVwbWVyZ2Vcblx0XHR9XG5cdFx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRcdHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xuXHRcdFx0PyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uKHN5bWJvbCkge1xuXHRcdFx0XHRyZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbClcblx0XHRcdH0pXG5cdFx0XHQ6IFtdXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRLZXlzKHRhcmdldCkge1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpXG5cdH1cblxuXHRmdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXHRcdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRcdGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0aWYgKCFvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSB8fCAhdGFyZ2V0W2tleV0pIHtcblx0XHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uW2tleV0gPSBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gZGVzdGluYXRpb25cblx0fVxuXG5cdGZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRcdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0XHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblxuXHRcdHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuXHRcdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHRcdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRcdGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuXHRcdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0XHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRcdHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0XHR9XG5cdH1cblxuXHRkZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24ocHJldiwgbmV4dCkge1xuXHRcdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHRcdH0sIHt9KVxuXHR9O1xuXG5cdHZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxuXHRyZXR1cm4gZGVlcG1lcmdlXzE7XG5cbn0pKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuREVQUkVDQVRFRF9DT05GSUdfUFJPUFMgPSBleHBvcnRzLmRlZmF1bHRQcm9wcyA9IGV4cG9ydHMucHJvcFR5cGVzID0gdW5kZWZpbmVkO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgc3RyaW5nID0gX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5zdHJpbmcsXG4gICAgYm9vbCA9IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYm9vbCxcbiAgICBudW1iZXIgPSBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLm51bWJlcixcbiAgICBhcnJheSA9IF9wcm9wVHlwZXMyWydkZWZhdWx0J10uYXJyYXksXG4gICAgb25lT2ZUeXBlID0gX3Byb3BUeXBlczJbJ2RlZmF1bHQnXS5vbmVPZlR5cGUsXG4gICAgc2hhcGUgPSBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLnNoYXBlLFxuICAgIG9iamVjdCA9IF9wcm9wVHlwZXMyWydkZWZhdWx0J10ub2JqZWN0LFxuICAgIGZ1bmMgPSBfcHJvcFR5cGVzMlsnZGVmYXVsdCddLmZ1bmM7XG52YXIgcHJvcFR5cGVzID0gZXhwb3J0cy5wcm9wVHlwZXMgPSB7XG4gIHVybDogb25lT2ZUeXBlKFtzdHJpbmcsIGFycmF5LCBvYmplY3RdKSxcbiAgcGxheWluZzogYm9vbCxcbiAgbG9vcDogYm9vbCxcbiAgY29udHJvbHM6IGJvb2wsXG4gIHZvbHVtZTogbnVtYmVyLFxuICBtdXRlZDogYm9vbCxcbiAgcGxheWJhY2tSYXRlOiBudW1iZXIsXG4gIHdpZHRoOiBvbmVPZlR5cGUoW3N0cmluZywgbnVtYmVyXSksXG4gIGhlaWdodDogb25lT2ZUeXBlKFtzdHJpbmcsIG51bWJlcl0pLFxuICBzdHlsZTogb2JqZWN0LFxuICBwcm9ncmVzc0ludGVydmFsOiBudW1iZXIsXG4gIHBsYXlzaW5saW5lOiBib29sLFxuICBwaXA6IGJvb2wsXG4gIGxpZ2h0OiBvbmVPZlR5cGUoW2Jvb2wsIHN0cmluZ10pLFxuICB3cmFwcGVyOiBvbmVPZlR5cGUoW3N0cmluZywgZnVuYywgc2hhcGUoeyByZW5kZXI6IGZ1bmMuaXNSZXF1aXJlZCB9KV0pLFxuICBjb25maWc6IHNoYXBlKHtcbiAgICBzb3VuZGNsb3VkOiBzaGFwZSh7XG4gICAgICBvcHRpb25zOiBvYmplY3QsXG4gICAgICBwcmVsb2FkOiBib29sXG4gICAgfSksXG4gICAgeW91dHViZTogc2hhcGUoe1xuICAgICAgcGxheWVyVmFyczogb2JqZWN0LFxuICAgICAgZW1iZWRPcHRpb25zOiBvYmplY3QsXG4gICAgICBwcmVsb2FkOiBib29sXG4gICAgfSksXG4gICAgZmFjZWJvb2s6IHNoYXBlKHtcbiAgICAgIGFwcElkOiBzdHJpbmdcbiAgICB9KSxcbiAgICBkYWlseW1vdGlvbjogc2hhcGUoe1xuICAgICAgcGFyYW1zOiBvYmplY3QsXG4gICAgICBwcmVsb2FkOiBib29sXG4gICAgfSksXG4gICAgdmltZW86IHNoYXBlKHtcbiAgICAgIHBsYXllck9wdGlvbnM6IG9iamVjdCxcbiAgICAgIHByZWxvYWQ6IGJvb2xcbiAgICB9KSxcbiAgICBmaWxlOiBzaGFwZSh7XG4gICAgICBhdHRyaWJ1dGVzOiBvYmplY3QsXG4gICAgICB0cmFja3M6IGFycmF5LFxuICAgICAgZm9yY2VWaWRlbzogYm9vbCxcbiAgICAgIGZvcmNlQXVkaW86IGJvb2wsXG4gICAgICBmb3JjZUhMUzogYm9vbCxcbiAgICAgIGZvcmNlREFTSDogYm9vbCxcbiAgICAgIGhsc09wdGlvbnM6IG9iamVjdCxcbiAgICAgIGhsc1ZlcnNpb246IHN0cmluZyxcbiAgICAgIGRhc2hWZXJzaW9uOiBzdHJpbmdcbiAgICB9KSxcbiAgICB3aXN0aWE6IHNoYXBlKHtcbiAgICAgIG9wdGlvbnM6IG9iamVjdFxuICAgIH0pLFxuICAgIG1peGNsb3VkOiBzaGFwZSh7XG4gICAgICBvcHRpb25zOiBvYmplY3RcbiAgICB9KSxcbiAgICB0d2l0Y2g6IHNoYXBlKHtcbiAgICAgIG9wdGlvbnM6IG9iamVjdFxuICAgIH0pXG4gIH0pLFxuICBvblJlYWR5OiBmdW5jLFxuICBvblN0YXJ0OiBmdW5jLFxuICBvblBsYXk6IGZ1bmMsXG4gIG9uUGF1c2U6IGZ1bmMsXG4gIG9uQnVmZmVyOiBmdW5jLFxuICBvbkJ1ZmZlckVuZDogZnVuYyxcbiAgb25FbmRlZDogZnVuYyxcbiAgb25FcnJvcjogZnVuYyxcbiAgb25EdXJhdGlvbjogZnVuYyxcbiAgb25TZWVrOiBmdW5jLFxuICBvblByb2dyZXNzOiBmdW5jLFxuICBvbkVuYWJsZVBJUDogZnVuYyxcbiAgb25EaXNhYmxlUElQOiBmdW5jXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0gZXhwb3J0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHBsYXlpbmc6IGZhbHNlLFxuICBsb29wOiBmYWxzZSxcbiAgY29udHJvbHM6IGZhbHNlLFxuICB2b2x1bWU6IG51bGwsXG4gIG11dGVkOiBmYWxzZSxcbiAgcGxheWJhY2tSYXRlOiAxLFxuICB3aWR0aDogJzY0MHB4JyxcbiAgaGVpZ2h0OiAnMzYwcHgnLFxuICBzdHlsZToge30sXG4gIHByb2dyZXNzSW50ZXJ2YWw6IDEwMDAsXG4gIHBsYXlzaW5saW5lOiBmYWxzZSxcbiAgcGlwOiBmYWxzZSxcbiAgbGlnaHQ6IGZhbHNlLFxuICB3cmFwcGVyOiAnZGl2JyxcbiAgY29uZmlnOiB7XG4gICAgc291bmRjbG91ZDoge1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICB2aXN1YWw6IHRydWUsIC8vIFVuZG9jdW1lbnRlZCwgYnV0IG1ha2VzIHBsYXllciBmaWxsIGNvbnRhaW5lciBhbmQgbG9vayBiZXR0ZXJcbiAgICAgICAgYnV5aW5nOiBmYWxzZSxcbiAgICAgICAgbGlraW5nOiBmYWxzZSxcbiAgICAgICAgZG93bmxvYWQ6IGZhbHNlLFxuICAgICAgICBzaGFyaW5nOiBmYWxzZSxcbiAgICAgICAgc2hvd19jb21tZW50czogZmFsc2UsXG4gICAgICAgIHNob3dfcGxheWNvdW50OiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgeW91dHViZToge1xuICAgICAgcGxheWVyVmFyczoge1xuICAgICAgICBwbGF5c2lubGluZTogMSxcbiAgICAgICAgc2hvd2luZm86IDAsXG4gICAgICAgIHJlbDogMCxcbiAgICAgICAgaXZfbG9hZF9wb2xpY3k6IDMsXG4gICAgICAgIG1vZGVzdGJyYW5kaW5nOiAxXG4gICAgICB9LFxuICAgICAgZW1iZWRPcHRpb25zOiB7fSxcbiAgICAgIHByZWxvYWQ6IGZhbHNlXG4gICAgfSxcbiAgICBmYWNlYm9vazoge1xuICAgICAgYXBwSWQ6ICcxMzA5Njk3MjA1NzcyODE5J1xuICAgIH0sXG4gICAgZGFpbHltb3Rpb246IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhcGk6IDEsXG4gICAgICAgICdlbmRzY3JlZW4tZW5hYmxlJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwcmVsb2FkOiBmYWxzZVxuICAgIH0sXG4gICAgdmltZW86IHtcbiAgICAgIHBsYXllck9wdGlvbnM6IHtcbiAgICAgICAgYXV0b3BhdXNlOiBmYWxzZSxcbiAgICAgICAgYnlsaW5lOiBmYWxzZSxcbiAgICAgICAgcG9ydHJhaXQ6IGZhbHNlLFxuICAgICAgICB0aXRsZTogZmFsc2VcbiAgICAgIH0sXG4gICAgICBwcmVsb2FkOiBmYWxzZVxuICAgIH0sXG4gICAgZmlsZToge1xuICAgICAgYXR0cmlidXRlczoge30sXG4gICAgICB0cmFja3M6IFtdLFxuICAgICAgZm9yY2VWaWRlbzogZmFsc2UsXG4gICAgICBmb3JjZUF1ZGlvOiBmYWxzZSxcbiAgICAgIGZvcmNlSExTOiBmYWxzZSxcbiAgICAgIGZvcmNlREFTSDogZmFsc2UsXG4gICAgICBobHNPcHRpb25zOiB7fSxcbiAgICAgIGhsc1ZlcnNpb246ICcwLjEwLjEnLFxuICAgICAgZGFzaFZlcnNpb246ICcyLjkuMidcbiAgICB9LFxuICAgIHdpc3RpYToge1xuICAgICAgb3B0aW9uczoge31cbiAgICB9LFxuICAgIG1peGNsb3VkOiB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGhpZGVfY292ZXI6IDFcbiAgICAgIH1cbiAgICB9LFxuICAgIHR3aXRjaDoge1xuICAgICAgb3B0aW9uczoge31cbiAgICB9XG4gIH0sXG4gIG9uUmVhZHk6IGZ1bmN0aW9uIG9uUmVhZHkoKSB7fSxcbiAgb25TdGFydDogZnVuY3Rpb24gb25TdGFydCgpIHt9LFxuICBvblBsYXk6IGZ1bmN0aW9uIG9uUGxheSgpIHt9LFxuICBvblBhdXNlOiBmdW5jdGlvbiBvblBhdXNlKCkge30sXG4gIG9uQnVmZmVyOiBmdW5jdGlvbiBvbkJ1ZmZlcigpIHt9LFxuICBvbkJ1ZmZlckVuZDogZnVuY3Rpb24gb25CdWZmZXJFbmQoKSB7fSxcbiAgb25FbmRlZDogZnVuY3Rpb24gb25FbmRlZCgpIHt9LFxuICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKCkge30sXG4gIG9uRHVyYXRpb246IGZ1bmN0aW9uIG9uRHVyYXRpb24oKSB7fSxcbiAgb25TZWVrOiBmdW5jdGlvbiBvblNlZWsoKSB7fSxcbiAgb25Qcm9ncmVzczogZnVuY3Rpb24gb25Qcm9ncmVzcygpIHt9LFxuICBvbkVuYWJsZVBJUDogZnVuY3Rpb24gb25FbmFibGVQSVAoKSB7fSxcbiAgb25EaXNhYmxlUElQOiBmdW5jdGlvbiBvbkRpc2FibGVQSVAoKSB7fVxufTtcblxudmFyIERFUFJFQ0FURURfQ09ORklHX1BST1BTID0gZXhwb3J0cy5ERVBSRUNBVEVEX0NPTkZJR19QUk9QUyA9IFsnc291bmRjbG91ZENvbmZpZycsICd5b3V0dWJlQ29uZmlnJywgJ2ZhY2Vib29rQ29uZmlnJywgJ2RhaWx5bW90aW9uQ29uZmlnJywgJ3ZpbWVvQ29uZmlnJywgJ2ZpbGVDb25maWcnLCAnd2lzdGlhQ29uZmlnJ107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxuZXhwb3J0cy5wYXJzZVN0YXJ0VGltZSA9IHBhcnNlU3RhcnRUaW1lO1xuZXhwb3J0cy5wYXJzZUVuZFRpbWUgPSBwYXJzZUVuZFRpbWU7XG5leHBvcnRzLnJhbmRvbVN0cmluZyA9IHJhbmRvbVN0cmluZztcbmV4cG9ydHMucXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZztcbmV4cG9ydHMuZ2V0U0RLID0gZ2V0U0RLO1xuZXhwb3J0cy5nZXRDb25maWcgPSBnZXRDb25maWc7XG5leHBvcnRzLm9taXQgPSBvbWl0O1xuZXhwb3J0cy5jYWxsUGxheWVyID0gY2FsbFBsYXllcjtcbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcbmV4cG9ydHMuaXNFcXVhbCA9IGlzRXF1YWw7XG5leHBvcnRzLmlzTWVkaWFTdHJlYW0gPSBpc01lZGlhU3RyZWFtO1xuXG52YXIgX2xvYWRTY3JpcHQgPSByZXF1aXJlKCdsb2FkLXNjcmlwdCcpO1xuXG52YXIgX2xvYWRTY3JpcHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbG9hZFNjcmlwdCk7XG5cbnZhciBfZGVlcG1lcmdlID0gcmVxdWlyZSgnZGVlcG1lcmdlJyk7XG5cbnZhciBfZGVlcG1lcmdlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBtZXJnZSk7XG5cbnZhciBfcHJvcHMgPSByZXF1aXJlKCcuL3Byb3BzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIE1BVENIX1NUQVJUX1FVRVJZID0gL1s/JiNdKD86c3RhcnR8dCk9KFswLTlobXNdKykvO1xudmFyIE1BVENIX0VORF9RVUVSWSA9IC9bPyYjXWVuZD0oWzAtOWhtc10rKS87XG52YXIgTUFUQ0hfU1RBUlRfU1RBTVAgPSAvKFxcZCspKGh8bXxzKS9nO1xudmFyIE1BVENIX05VTUVSSUMgPSAvXlxcZCskLztcblxuLy8gUGFyc2UgWW91VHViZSBVUkwgZm9yIGEgc3RhcnQgdGltZSBwYXJhbSwgaWUgP3Q9MWgxNG0zMHNcbi8vIGFuZCByZXR1cm4gdGhlIHN0YXJ0IHRpbWUgaW4gc2Vjb25kc1xuZnVuY3Rpb24gcGFyc2VUaW1lUGFyYW0odXJsLCBwYXR0ZXJuKSB7XG4gIHZhciBtYXRjaCA9IHVybC5tYXRjaChwYXR0ZXJuKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHN0YW1wID0gbWF0Y2hbMV07XG4gICAgaWYgKHN0YW1wLm1hdGNoKE1BVENIX1NUQVJUX1NUQU1QKSkge1xuICAgICAgcmV0dXJuIHBhcnNlVGltZVN0cmluZyhzdGFtcCk7XG4gICAgfVxuICAgIGlmIChNQVRDSF9OVU1FUklDLnRlc3Qoc3RhbXApKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc3RhbXApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVTdHJpbmcoc3RhbXApIHtcbiAgdmFyIHNlY29uZHMgPSAwO1xuICB2YXIgYXJyYXkgPSBNQVRDSF9TVEFSVF9TVEFNUC5leGVjKHN0YW1wKTtcbiAgd2hpbGUgKGFycmF5ICE9PSBudWxsKSB7XG4gICAgdmFyIF9hcnJheSA9IGFycmF5LFxuICAgICAgICBfYXJyYXkyID0gX3NsaWNlZFRvQXJyYXkoX2FycmF5LCAzKSxcbiAgICAgICAgY291bnQgPSBfYXJyYXkyWzFdLFxuICAgICAgICBwZXJpb2QgPSBfYXJyYXkyWzJdO1xuXG4gICAgaWYgKHBlcmlvZCA9PT0gJ2gnKSBzZWNvbmRzICs9IHBhcnNlSW50KGNvdW50LCAxMCkgKiA2MCAqIDYwO1xuICAgIGlmIChwZXJpb2QgPT09ICdtJykgc2Vjb25kcyArPSBwYXJzZUludChjb3VudCwgMTApICogNjA7XG4gICAgaWYgKHBlcmlvZCA9PT0gJ3MnKSBzZWNvbmRzICs9IHBhcnNlSW50KGNvdW50LCAxMCk7XG4gICAgYXJyYXkgPSBNQVRDSF9TVEFSVF9TVEFNUC5leGVjKHN0YW1wKTtcbiAgfVxuICByZXR1cm4gc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGFydFRpbWUodXJsKSB7XG4gIHJldHVybiBwYXJzZVRpbWVQYXJhbSh1cmwsIE1BVENIX1NUQVJUX1FVRVJZKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFbmRUaW1lKHVybCkge1xuICByZXR1cm4gcGFyc2VUaW1lUGFyYW0odXJsLCBNQVRDSF9FTkRfUVVFUlkpO1xufVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODYyMjU0NVxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDUpO1xufVxuXG5mdW5jdGlvbiBxdWVyeVN0cmluZyhvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5ICsgJz0nICsgb2JqZWN0W2tleV07XG4gIH0pLmpvaW4oJyYnKTtcbn1cblxuLy8gVXRpbCBmdW5jdGlvbiB0byBsb2FkIGFuIGV4dGVybmFsIFNES1xuLy8gb3IgcmV0dXJuIHRoZSBTREsgaWYgaXQgaXMgYWxyZWFkeSBsb2FkZWRcbnZhciByZXNvbHZlcyA9IHt9O1xuZnVuY3Rpb24gZ2V0U0RLKHVybCwgc2RrR2xvYmFsKSB7XG4gIHZhciBzZGtSZWFkeSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogbnVsbDtcbiAgdmFyIGlzTG9hZGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHZhciBmZXRjaFNjcmlwdCA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogX2xvYWRTY3JpcHQyWydkZWZhdWx0J107XG5cbiAgaWYgKHdpbmRvd1tzZGtHbG9iYWxdICYmIGlzTG9hZGVkKHdpbmRvd1tzZGtHbG9iYWxdKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUod2luZG93W3Nka0dsb2JhbF0pO1xuICB9XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgbG9hZGluZyB0aGUgU0RLLCBhZGQgdGhlIHJlc29sdmVcbiAgICAvLyBmdW5jdGlvbiB0byB0aGUgZXhpc3RpbmcgYXJyYXkgb2YgcmVzb2x2ZSBmdW5jdGlvbnNcbiAgICBpZiAocmVzb2x2ZXNbdXJsXSkge1xuICAgICAgcmVzb2x2ZXNbdXJsXS5wdXNoKHJlc29sdmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXNvbHZlc1t1cmxdID0gW3Jlc29sdmVdO1xuICAgIHZhciBvbkxvYWRlZCA9IGZ1bmN0aW9uIG9uTG9hZGVkKHNkaykge1xuICAgICAgLy8gV2hlbiBsb2FkZWQsIHJlc29sdmUgYWxsIHBlbmRpbmcgcHJvbWlzZXNcbiAgICAgIHJlc29sdmVzW3VybF0uZm9yRWFjaChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShzZGspO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBpZiAoc2RrUmVhZHkpIHtcbiAgICAgIHZhciBwcmV2aW91c09uUmVhZHkgPSB3aW5kb3dbc2RrUmVhZHldO1xuICAgICAgd2luZG93W3Nka1JlYWR5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByZXZpb3VzT25SZWFkeSkgcHJldmlvdXNPblJlYWR5KCk7XG4gICAgICAgIG9uTG9hZGVkKHdpbmRvd1tzZGtHbG9iYWxdKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGZldGNoU2NyaXB0KHVybCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikgcmVqZWN0KGVycik7XG4gICAgICBpZiAoIXNka1JlYWR5KSB7XG4gICAgICAgIG9uTG9hZGVkKHdpbmRvd1tzZGtHbG9iYWxdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpZyhwcm9wcywgZGVmYXVsdFByb3BzLCBzaG93V2FybmluZykge1xuICB2YXIgY29uZmlnID0gKDAsIF9kZWVwbWVyZ2UyWydkZWZhdWx0J10pKGRlZmF1bHRQcm9wcy5jb25maWcsIHByb3BzLmNvbmZpZyk7XG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9wcm9wcy5ERVBSRUNBVEVEX0NPTkZJR19QUk9QU1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmIChwcm9wc1twXSkge1xuICAgICAgICB2YXIga2V5ID0gcC5yZXBsYWNlKC9Db25maWckLywgJycpO1xuICAgICAgICBjb25maWcgPSAoMCwgX2RlZXBtZXJnZTJbJ2RlZmF1bHQnXSkoY29uZmlnLCBfZGVmaW5lUHJvcGVydHkoe30sIGtleSwgcHJvcHNbcF0pKTtcbiAgICAgICAgaWYgKHNob3dXYXJuaW5nKSB7XG4gICAgICAgICAgdmFyIGxpbmsgPSAnaHR0cHM6Ly9naXRodWIuY29tL0Nvb2tQZXRlL3JlYWN0LXBsYXllciNjb25maWctcHJvcCc7XG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnUmVhY3RQbGF5ZXI6ICVjJyArIHAgKyAnICVjaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSB0aGUgY29uZmlnIHByb3AgaW5zdGVhZCBcXHUyMDEzICcgKyBsaW5rO1xuICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlLCAnZm9udC13ZWlnaHQ6IGJvbGQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgX2l0ZXJhdG9yWydyZXR1cm4nXSgpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuZnVuY3Rpb24gb21pdChvYmplY3QpIHtcbiAgdmFyIF9yZWY7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFycmF5cyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcnJheXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIG9taXRLZXlzID0gKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIGFycmF5cyk7XG4gIHZhciBvdXRwdXQgPSB7fTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIgPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IyID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvcjIgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0ga2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIGtleSA9IF9zdGVwMi52YWx1ZTtcblxuICAgICAgaWYgKG9taXRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgb3V0cHV0W2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjJbJ3JldHVybiddKSB7XG4gICAgICAgIF9pdGVyYXRvcjJbJ3JldHVybiddKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNhbGxQbGF5ZXIobWV0aG9kKSB7XG4gIHZhciBfcGxheWVyO1xuXG4gIC8vIFV0aWwgbWV0aG9kIGZvciBjYWxsaW5nIGEgbWV0aG9kIG9uIHRoaXMucGxheWVyXG4gIC8vIGJ1dCBndWFyZCBhZ2FpbnN0IGVycm9ycyBhbmQgY29uc29sZS53YXJuIGluc3RlYWRcbiAgaWYgKCF0aGlzLnBsYXllciB8fCAhdGhpcy5wbGF5ZXJbbWV0aG9kXSkge1xuICAgIHZhciBtZXNzYWdlID0gJ1JlYWN0UGxheWVyOiAnICsgdGhpcy5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSArICcgcGxheWVyIGNvdWxkIG5vdCBjYWxsICVjJyArIG1ldGhvZCArICclYyBcXHUyMDEzICc7XG4gICAgaWYgKCF0aGlzLnBsYXllcikge1xuICAgICAgbWVzc2FnZSArPSAnVGhlIHBsYXllciB3YXMgbm90IGF2YWlsYWJsZSc7XG4gICAgfSBlbHNlIGlmICghdGhpcy5wbGF5ZXJbbWV0aG9kXSkge1xuICAgICAgbWVzc2FnZSArPSAnVGhlIG1ldGhvZCB3YXMgbm90IGF2YWlsYWJsZSc7XG4gICAgfVxuICAgIGNvbnNvbGUud2FybihtZXNzYWdlLCAnZm9udC13ZWlnaHQ6IGJvbGQnLCAnJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiAoX3BsYXllciA9IHRoaXMucGxheWVyKVttZXRob2RdLmFwcGx5KF9wbGF5ZXIsIGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiAodHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsKSkgPT09ICdvYmplY3QnO1xufVxuXG4vLyBEZWVwIGNvbXBhcmlzb24gb2YgdHdvIG9iamVjdHMgYnV0IGlnbm9yaW5nXG4vLyBmdW5jdGlvbnMsIGZvciB1c2UgaW4gc2hvdWxkQ29tcG9uZW50VXBkYXRlXG5mdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgaWYgKHR5cGVvZiBhID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSAmJiBiIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzRXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMoYSkubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IzID0gZmFsc2U7XG4gICAgdmFyIF9pdGVyYXRvckVycm9yMyA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gT2JqZWN0LmtleXMoYSlbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDM7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMgPSAoX3N0ZXAzID0gX2l0ZXJhdG9yMy5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMyA9IHRydWUpIHtcbiAgICAgICAgdmFyIGtleSA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgICBpZiAoIWlzRXF1YWwoYVtrZXldLCBiW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvcjMgPSB0cnVlO1xuICAgICAgX2l0ZXJhdG9yRXJyb3IzID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24zICYmIF9pdGVyYXRvcjNbJ3JldHVybiddKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yM1sncmV0dXJuJ10oKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yMykge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yMztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBhID09PSBiO1xufVxuXG5mdW5jdGlvbiBpc01lZGlhU3RyZWFtKHVybCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5NZWRpYVN0cmVhbSAhPT0gJ3VuZGVmaW5lZCcgJiYgdXJsIGluc3RhbmNlb2Ygd2luZG93Lk1lZGlhU3RyZWFtO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BzNiA9IHJlcXVpcmUoJy4vcHJvcHMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTRUVLX09OX1BMQVlfRVhQSVJZID0gNTAwMDtcblxudmFyIFBsYXllciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQbGF5ZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBsYXllcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGxheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBQbGF5ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQbGF5ZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfSAvLyBUcmFjayBwbGF5aW5nIHN0YXRlIGludGVybmFsbHkgdG8gcHJldmVudCBidWdzXG4gIC8vIFVzZSBpc0xvYWRpbmcgdG8gcHJldmVudCBvblBhdXNlIHdoZW4gc3dpdGNoaW5nIFVSTFxuXG5cbiAgX2NyZWF0ZUNsYXNzKFBsYXllciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheWVyLmxvYWQodGhpcy5wcm9wcy51cmwpO1xuICAgICAgdGhpcy5wcm9ncmVzcygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5wcm9ncmVzc1RpbWVvdXQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZHVyYXRpb25DaGVja1RpbWVvdXQpO1xuICAgICAgaWYgKHRoaXMuaXNSZWFkeSkge1xuICAgICAgICB0aGlzLnBsYXllci5zdG9wKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wbGF5ZXIuZGlzYWJsZVBJUCkge1xuICAgICAgICB0aGlzLnBsYXllci5kaXNhYmxlUElQKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAvLyBJbnZva2UgcGxheWVyIG1ldGhvZHMgYmFzZWQgb24gaW5jb21pbmcgcHJvcHNcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVybCA9IF9wcm9wcy51cmwsXG4gICAgICAgICAgcGxheWluZyA9IF9wcm9wcy5wbGF5aW5nLFxuICAgICAgICAgIHZvbHVtZSA9IF9wcm9wcy52b2x1bWUsXG4gICAgICAgICAgbXV0ZWQgPSBfcHJvcHMubXV0ZWQsXG4gICAgICAgICAgcGxheWJhY2tSYXRlID0gX3Byb3BzLnBsYXliYWNrUmF0ZSxcbiAgICAgICAgICBwaXAgPSBfcHJvcHMucGlwLFxuICAgICAgICAgIGxvb3AgPSBfcHJvcHMubG9vcDtcblxuICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzRXF1YWwpKHVybCwgbmV4dFByb3BzLnVybCkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdSZWFjdFBsYXllcjogdGhlIGF0dGVtcHQgdG8gbG9hZCAnICsgbmV4dFByb3BzLnVybCArICcgaXMgYmVpbmcgZGVmZXJyZWQgdW50aWwgdGhlIHBsYXllciBoYXMgbG9hZGVkJyk7XG4gICAgICAgICAgdGhpcy5sb2FkT25SZWFkeSA9IG5leHRQcm9wcy51cmw7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydE9uUGxheSA9IHRydWU7XG4gICAgICAgIHRoaXMub25EdXJhdGlvbkNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllci5sb2FkKG5leHRQcm9wcy51cmwsIHRoaXMuaXNSZWFkeSk7XG4gICAgICB9XG4gICAgICBpZiAoIXBsYXlpbmcgJiYgbmV4dFByb3BzLnBsYXlpbmcgJiYgIXRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5aW5nICYmICFuZXh0UHJvcHMucGxheWluZyAmJiB0aGlzLmlzUGxheWluZykge1xuICAgICAgICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICAgICAgfVxuICAgICAgaWYgKCFwaXAgJiYgbmV4dFByb3BzLnBpcCAmJiB0aGlzLnBsYXllci5lbmFibGVQSVApIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuZW5hYmxlUElQKCk7XG4gICAgICB9IGVsc2UgaWYgKHBpcCAmJiAhbmV4dFByb3BzLnBpcCAmJiB0aGlzLnBsYXllci5kaXNhYmxlUElQKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmRpc2FibGVQSVAoKTtcbiAgICAgIH1cbiAgICAgIGlmICh2b2x1bWUgIT09IG5leHRQcm9wcy52b2x1bWUgJiYgbmV4dFByb3BzLnZvbHVtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBsYXllci5zZXRWb2x1bWUobmV4dFByb3BzLnZvbHVtZSk7XG4gICAgICB9XG4gICAgICBpZiAobXV0ZWQgIT09IG5leHRQcm9wcy5tdXRlZCkge1xuICAgICAgICBpZiAobmV4dFByb3BzLm11dGVkKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIubXV0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGxheWVyLnVubXV0ZSgpO1xuICAgICAgICAgIGlmIChuZXh0UHJvcHMudm9sdW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBTZXQgdm9sdW1lIG5leHQgdGljayB0byBmaXggYSBidWcgd2l0aCBEYWlseU1vdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIucGxheWVyLnNldFZvbHVtZShuZXh0UHJvcHMudm9sdW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBsYXliYWNrUmF0ZSAhPT0gbmV4dFByb3BzLnBsYXliYWNrUmF0ZSAmJiB0aGlzLnBsYXllci5zZXRQbGF5YmFja1JhdGUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWJhY2tSYXRlKG5leHRQcm9wcy5wbGF5YmFja1JhdGUpO1xuICAgICAgfVxuICAgICAgaWYgKGxvb3AgIT09IG5leHRQcm9wcy5sb29wICYmIHRoaXMucGxheWVyLnNldExvb3ApIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0TG9vcChuZXh0UHJvcHMubG9vcCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXREdXJhdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICBpZiAoIXRoaXMuaXNSZWFkeSkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWNvbmRzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIGlmICghdGhpcy5pc1JlYWR5KSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5nZXRTZWNvbmRzTG9hZGVkKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKGFtb3VudCwgdHlwZSkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIC8vIFdoZW4gc2Vla2luZyBiZWZvcmUgcGxheWVyIGlzIHJlYWR5LCBzdG9yZSB2YWx1ZSBhbmQgc2VlayBsYXRlclxuICAgICAgaWYgKCF0aGlzLmlzUmVhZHkgJiYgYW1vdW50ICE9PSAwKSB7XG4gICAgICAgIHRoaXMuc2Vla09uUGxheSA9IGFtb3VudDtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMzLnNlZWtPblBsYXkgPSBudWxsO1xuICAgICAgICB9LCBTRUVLX09OX1BMQVlfRVhQSVJZKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGlzRnJhY3Rpb24gPSAhdHlwZSA/IGFtb3VudCA+IDAgJiYgYW1vdW50IDwgMSA6IHR5cGUgPT09ICdmcmFjdGlvbic7XG4gICAgICBpZiAoaXNGcmFjdGlvbikge1xuICAgICAgICAvLyBDb252ZXJ0IGZyYWN0aW9uIHRvIHNlY29uZHMgYmFzZWQgb24gZHVyYXRpb25cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5wbGF5ZXIuZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICAgIGNvbnNvbGUud2FybignUmVhY3RQbGF5ZXI6IGNvdWxkIG5vdCBzZWVrIHVzaW5nIGZyYWN0aW9uIOKAk8KgZHVyYXRpb24gbm90IHlldCBhdmFpbGFibGUnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKGR1cmF0aW9uICogYW1vdW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKGFtb3VudCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIFBsYXllciA9IHRoaXMucHJvcHMuYWN0aXZlUGxheWVyO1xuICAgICAgaWYgKCFQbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoUGxheWVyLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBvblJlYWR5OiB0aGlzLm9uUmVhZHksXG4gICAgICAgIG9uUGxheTogdGhpcy5vblBsYXksXG4gICAgICAgIG9uUGF1c2U6IHRoaXMub25QYXVzZSxcbiAgICAgICAgb25FbmRlZDogdGhpcy5vbkVuZGVkLFxuICAgICAgICBvbkxvYWRlZDogdGhpcy5vbkxvYWRlZCxcbiAgICAgICAgb25FcnJvcjogdGhpcy5vbkVycm9yXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFBsYXllcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblBsYXllci5kaXNwbGF5TmFtZSA9ICdQbGF5ZXInO1xuUGxheWVyLnByb3BUeXBlcyA9IF9wcm9wczYucHJvcFR5cGVzO1xuUGxheWVyLmRlZmF1bHRQcm9wcyA9IF9wcm9wczYuZGVmYXVsdFByb3BzO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcbiAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB0aGlzLmxvYWRPblJlYWR5ID0gbnVsbDtcbiAgdGhpcy5zdGFydE9uUGxheSA9IHRydWU7XG4gIHRoaXMuc2Vla09uUGxheSA9IG51bGw7XG4gIHRoaXMub25EdXJhdGlvbkNhbGxlZCA9IGZhbHNlO1xuXG4gIHRoaXMuZ2V0SW50ZXJuYWxQbGF5ZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFfdGhpczQucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM0LnBsYXllcltrZXldO1xuICB9O1xuXG4gIHRoaXMucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKF90aGlzNC5wcm9wcy51cmwgJiYgX3RoaXM0LnBsYXllciAmJiBfdGhpczQuaXNSZWFkeSkge1xuICAgICAgdmFyIHBsYXllZFNlY29uZHMgPSBfdGhpczQuZ2V0Q3VycmVudFRpbWUoKSB8fCAwO1xuICAgICAgdmFyIGxvYWRlZFNlY29uZHMgPSBfdGhpczQuZ2V0U2Vjb25kc0xvYWRlZCgpO1xuICAgICAgdmFyIGR1cmF0aW9uID0gX3RoaXM0LmdldER1cmF0aW9uKCk7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHByb2dyZXNzID0ge1xuICAgICAgICAgIHBsYXllZFNlY29uZHM6IHBsYXllZFNlY29uZHMsXG4gICAgICAgICAgcGxheWVkOiBwbGF5ZWRTZWNvbmRzIC8gZHVyYXRpb25cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxvYWRlZFNlY29uZHMgIT09IG51bGwpIHtcbiAgICAgICAgICBwcm9ncmVzcy5sb2FkZWRTZWNvbmRzID0gbG9hZGVkU2Vjb25kcztcbiAgICAgICAgICBwcm9ncmVzcy5sb2FkZWQgPSBsb2FkZWRTZWNvbmRzIC8gZHVyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gT25seSBjYWxsIG9uUHJvZ3Jlc3MgaWYgdmFsdWVzIGhhdmUgY2hhbmdlZFxuICAgICAgICBpZiAocHJvZ3Jlc3MucGxheWVkU2Vjb25kcyAhPT0gX3RoaXM0LnByZXZQbGF5ZWQgfHwgcHJvZ3Jlc3MubG9hZGVkU2Vjb25kcyAhPT0gX3RoaXM0LnByZXZMb2FkZWQpIHtcbiAgICAgICAgICBfdGhpczQucHJvcHMub25Qcm9ncmVzcyhwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXM0LnByZXZQbGF5ZWQgPSBwcm9ncmVzcy5wbGF5ZWRTZWNvbmRzO1xuICAgICAgICBfdGhpczQucHJldkxvYWRlZCA9IHByb2dyZXNzLmxvYWRlZFNlY29uZHM7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzNC5wcm9ncmVzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KF90aGlzNC5wcm9ncmVzcywgX3RoaXM0LnByb3BzLnByb2dyZXNzRnJlcXVlbmN5IHx8IF90aGlzNC5wcm9wcy5wcm9ncmVzc0ludGVydmFsKTtcbiAgfTtcblxuICB0aGlzLm9uUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFfdGhpczQubW91bnRlZCkgcmV0dXJuO1xuICAgIF90aGlzNC5pc1JlYWR5ID0gdHJ1ZTtcbiAgICBfdGhpczQuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgdmFyIF9wcm9wczIgPSBfdGhpczQucHJvcHMsXG4gICAgICAgIG9uUmVhZHkgPSBfcHJvcHMyLm9uUmVhZHksXG4gICAgICAgIHBsYXlpbmcgPSBfcHJvcHMyLnBsYXlpbmcsXG4gICAgICAgIHZvbHVtZSA9IF9wcm9wczIudm9sdW1lLFxuICAgICAgICBtdXRlZCA9IF9wcm9wczIubXV0ZWQ7XG5cbiAgICBvblJlYWR5KCk7XG4gICAgaWYgKCFtdXRlZCAmJiB2b2x1bWUgIT09IG51bGwpIHtcbiAgICAgIF90aGlzNC5wbGF5ZXIuc2V0Vm9sdW1lKHZvbHVtZSk7XG4gICAgfVxuICAgIGlmIChfdGhpczQubG9hZE9uUmVhZHkpIHtcbiAgICAgIF90aGlzNC5wbGF5ZXIubG9hZChfdGhpczQubG9hZE9uUmVhZHksIHRydWUpO1xuICAgICAgX3RoaXM0LmxvYWRPblJlYWR5ID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKHBsYXlpbmcpIHtcbiAgICAgIF90aGlzNC5wbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgICBfdGhpczQub25EdXJhdGlvbkNoZWNrKCk7XG4gIH07XG5cbiAgdGhpcy5vblBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3RoaXM0LmlzUGxheWluZyA9IHRydWU7XG4gICAgX3RoaXM0LmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHZhciBfcHJvcHMzID0gX3RoaXM0LnByb3BzLFxuICAgICAgICBvblN0YXJ0ID0gX3Byb3BzMy5vblN0YXJ0LFxuICAgICAgICBvblBsYXkgPSBfcHJvcHMzLm9uUGxheSxcbiAgICAgICAgcGxheWJhY2tSYXRlID0gX3Byb3BzMy5wbGF5YmFja1JhdGU7XG5cbiAgICBpZiAoX3RoaXM0LnN0YXJ0T25QbGF5KSB7XG4gICAgICBpZiAoX3RoaXM0LnBsYXllci5zZXRQbGF5YmFja1JhdGUpIHtcbiAgICAgICAgX3RoaXM0LnBsYXllci5zZXRQbGF5YmFja1JhdGUocGxheWJhY2tSYXRlKTtcbiAgICAgIH1cbiAgICAgIG9uU3RhcnQoKTtcbiAgICAgIF90aGlzNC5zdGFydE9uUGxheSA9IGZhbHNlO1xuICAgIH1cbiAgICBvblBsYXkoKTtcbiAgICBpZiAoX3RoaXM0LnNlZWtPblBsYXkpIHtcbiAgICAgIF90aGlzNC5zZWVrVG8oX3RoaXM0LnNlZWtPblBsYXkpO1xuICAgICAgX3RoaXM0LnNlZWtPblBsYXkgPSBudWxsO1xuICAgIH1cbiAgICBfdGhpczQub25EdXJhdGlvbkNoZWNrKCk7XG4gIH07XG5cbiAgdGhpcy5vblBhdXNlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczQuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgaWYgKCFfdGhpczQuaXNMb2FkaW5nKSB7XG4gICAgICBfdGhpczQucHJvcHMub25QYXVzZShlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkVuZGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcHJvcHM0ID0gX3RoaXM0LnByb3BzLFxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBfcHJvcHM0LmFjdGl2ZVBsYXllcixcbiAgICAgICAgbG9vcCA9IF9wcm9wczQubG9vcCxcbiAgICAgICAgb25FbmRlZCA9IF9wcm9wczQub25FbmRlZDtcblxuICAgIGlmIChhY3RpdmVQbGF5ZXIubG9vcE9uRW5kZWQgJiYgbG9vcCkge1xuICAgICAgX3RoaXM0LnNlZWtUbygwKTtcbiAgICB9XG4gICAgaWYgKCFsb29wKSB7XG4gICAgICBfdGhpczQuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICBvbkVuZGVkKCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzNTtcblxuICAgIF90aGlzNC5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAoX3Byb3BzNSA9IF90aGlzNC5wcm9wcykub25FcnJvci5hcHBseShfcHJvcHM1LCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIHRoaXMub25EdXJhdGlvbkNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dChfdGhpczQuZHVyYXRpb25DaGVja1RpbWVvdXQpO1xuICAgIHZhciBkdXJhdGlvbiA9IF90aGlzNC5nZXREdXJhdGlvbigpO1xuICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgaWYgKCFfdGhpczQub25EdXJhdGlvbkNhbGxlZCkge1xuICAgICAgICBfdGhpczQucHJvcHMub25EdXJhdGlvbihkdXJhdGlvbik7XG4gICAgICAgIF90aGlzNC5vbkR1cmF0aW9uQ2FsbGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXM0LmR1cmF0aW9uQ2hlY2tUaW1lb3V0ID0gc2V0VGltZW91dChfdGhpczQub25EdXJhdGlvbkNoZWNrLCAxMDApO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uTG9hZGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNvbWV0aW1lcyB3ZSBrbm93IGxvYWRpbmcgaGFzIHN0b3BwZWQgYnV0IG9uUmVhZHkvb25QbGF5IGFyZSBuZXZlciBjYWxsZWRcbiAgICAvLyBzbyB0aGlzIHByb3ZpZGVzIGEgd2F5IGZvciBwbGF5ZXJzIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2tcbiAgICBfdGhpczQuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5yZWYgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgaWYgKHBsYXllcikge1xuICAgICAgX3RoaXM0LnBsYXllciA9IHBsYXllcjtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBQbGF5ZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVTaW5nbGVQbGF5ZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wczIgPSByZXF1aXJlKCcuL3Byb3BzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKTtcblxudmFyIF9QbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVVBQT1JURURfUFJPUFMgPSBPYmplY3Qua2V5cyhfcHJvcHMyLnByb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpbmdsZVBsYXllcihhY3RpdmVQbGF5ZXIpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXAyO1xuXG4gIHJldHVybiBfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTaW5nbGVQbGF5ZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU2luZ2xlUGxheWVyKCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaW5nbGVQbGF5ZXIpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU2luZ2xlUGxheWVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2luZ2xlUGxheWVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY29uZmlnID0gKDAsIF91dGlscy5nZXRDb25maWcpKF90aGlzLnByb3BzLCBfcHJvcHMyLmRlZmF1bHRQcm9wcywgdHJ1ZSksIF90aGlzLmdldER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5ZXIuZ2V0RHVyYXRpb24oKTtcbiAgICAgIH0sIF90aGlzLmdldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5ZXIuZ2V0Q3VycmVudFRpbWUoKTtcbiAgICAgIH0sIF90aGlzLmdldFNlY29uZHNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXllci5nZXRTZWNvbmRzTG9hZGVkKCk7XG4gICAgICB9LCBfdGhpcy5nZXRJbnRlcm5hbFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ3BsYXllcic7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheWVyLmdldEludGVybmFsUGxheWVyKGtleSk7XG4gICAgICB9LCBfdGhpcy5zZWVrVG8gPSBmdW5jdGlvbiAoZnJhY3Rpb24sIHR5cGUpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgICBfdGhpcy5wbGF5ZXIuc2Vla1RvKGZyYWN0aW9uLCB0eXBlKTtcbiAgICAgIH0sIF90aGlzLnJlZiA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgICAgICAgX3RoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNpbmdsZVBsYXllciwgW3tcbiAgICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICByZXR1cm4gISgwLCBfdXRpbHMuaXNFcXVhbCkodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9ICgwLCBfdXRpbHMuZ2V0Q29uZmlnKShuZXh0UHJvcHMsIF9wcm9wczIuZGVmYXVsdFByb3BzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jb25maWckZmlsZSA9IHRoaXMuY29uZmlnLmZpbGUsXG4gICAgICAgICAgICBmb3JjZVZpZGVvID0gX2NvbmZpZyRmaWxlLmZvcmNlVmlkZW8sXG4gICAgICAgICAgICBmb3JjZUF1ZGlvID0gX2NvbmZpZyRmaWxlLmZvcmNlQXVkaW8sXG4gICAgICAgICAgICBmb3JjZUhMUyA9IF9jb25maWckZmlsZS5mb3JjZUhMUyxcbiAgICAgICAgICAgIGZvcmNlREFTSCA9IF9jb25maWckZmlsZS5mb3JjZURBU0g7XG5cbiAgICAgICAgdmFyIHNraXBDYW5QbGF5ID0gZm9yY2VWaWRlbyB8fCBmb3JjZUF1ZGlvIHx8IGZvcmNlSExTIHx8IGZvcmNlREFTSDtcbiAgICAgICAgaWYgKCFhY3RpdmVQbGF5ZXIuY2FuUGxheSh0aGlzLnByb3BzLnVybCkgJiYgIXNraXBDYW5QbGF5KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHdpZHRoID0gX3Byb3BzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gX3Byb3BzLmhlaWdodCxcbiAgICAgICAgICAgIFdyYXBwZXIgPSBfcHJvcHMud3JhcHBlcjtcblxuICAgICAgICB2YXIgb3RoZXJQcm9wcyA9ICgwLCBfdXRpbHMub21pdCkodGhpcy5wcm9wcywgU1VQUE9SVEVEX1BST1BTLCBfcHJvcHMyLkRFUFJFQ0FURURfQ09ORklHX1BST1BTKTtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFdyYXBwZXIsXG4gICAgICAgICAgX2V4dGVuZHMoeyBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkgfSwgb3RoZXJQcm9wcyksXG4gICAgICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1BsYXllcjJbJ2RlZmF1bHQnXSwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgICAgICBhY3RpdmVQbGF5ZXI6IGFjdGl2ZVBsYXllcixcbiAgICAgICAgICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgICAgICAgICB9KSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2luZ2xlUGxheWVyO1xuICB9KF9yZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBhY3RpdmVQbGF5ZXIuZGlzcGxheU5hbWUgKyAnUGxheWVyJywgX2NsYXNzLnByb3BUeXBlcyA9IF9wcm9wczIucHJvcFR5cGVzLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gX3Byb3BzMi5kZWZhdWx0UHJvcHMsIF9jbGFzcy5jYW5QbGF5ID0gYWN0aXZlUGxheWVyLmNhblBsYXksIF90ZW1wMjtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLllvdVR1YmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xudmFyIFNES19HTE9CQUwgPSAnWVQnO1xudmFyIFNES19HTE9CQUxfUkVBRFkgPSAnb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHknO1xudmFyIE1BVENIX1VSTCA9IC8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmVcXC5jb21cXC8oPzplbWJlZFxcL3x2XFwvfHdhdGNoXFw/dj18d2F0Y2hcXD8uKyZ2PSkpKChcXHd8LSl7MTF9KXx5b3V0dWJlXFwuY29tXFwvcGxheWxpc3RcXD9saXN0PS87XG52YXIgTUFUQ0hfUExBWUxJU1QgPSAvbGlzdD0oW2EtekEtWjAtOV8tXSspLztcblxuZnVuY3Rpb24gcGFyc2VQbGF5bGlzdCh1cmwpIHtcbiAgaWYgKE1BVENIX1BMQVlMSVNULnRlc3QodXJsKSkge1xuICAgIHZhciBfdXJsJG1hdGNoID0gdXJsLm1hdGNoKE1BVENIX1BMQVlMSVNUKSxcbiAgICAgICAgX3VybCRtYXRjaDIgPSBfc2xpY2VkVG9BcnJheShfdXJsJG1hdGNoLCAyKSxcbiAgICAgICAgcGxheWxpc3RJZCA9IF91cmwkbWF0Y2gyWzFdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxpc3RUeXBlOiAncGxheWxpc3QnLFxuICAgICAgbGlzdDogcGxheWxpc3RJZFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG52YXIgWW91VHViZSA9IGV4cG9ydHMuWW91VHViZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhZb3VUdWJlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBZb3VUdWJlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBZb3VUdWJlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBZb3VUdWJlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoWW91VHViZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNhbGxQbGF5ZXIgPSBfdXRpbHMuY2FsbFBsYXllciwgX3RoaXMub25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25QbGF5ID0gX3RoaXMkcHJvcHMub25QbGF5LFxuICAgICAgICAgIG9uUGF1c2UgPSBfdGhpcyRwcm9wcy5vblBhdXNlLFxuICAgICAgICAgIG9uQnVmZmVyID0gX3RoaXMkcHJvcHMub25CdWZmZXIsXG4gICAgICAgICAgb25CdWZmZXJFbmQgPSBfdGhpcyRwcm9wcy5vbkJ1ZmZlckVuZCxcbiAgICAgICAgICBvbkVuZGVkID0gX3RoaXMkcHJvcHMub25FbmRlZCxcbiAgICAgICAgICBvblJlYWR5ID0gX3RoaXMkcHJvcHMub25SZWFkeSxcbiAgICAgICAgICBsb29wID0gX3RoaXMkcHJvcHMubG9vcDtcbiAgICAgIHZhciBfd2luZG93JFNES19HTE9CQUwkUGwgPSB3aW5kb3dbU0RLX0dMT0JBTF0uUGxheWVyU3RhdGUsXG4gICAgICAgICAgUExBWUlORyA9IF93aW5kb3ckU0RLX0dMT0JBTCRQbC5QTEFZSU5HLFxuICAgICAgICAgIFBBVVNFRCA9IF93aW5kb3ckU0RLX0dMT0JBTCRQbC5QQVVTRUQsXG4gICAgICAgICAgQlVGRkVSSU5HID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLkJVRkZFUklORyxcbiAgICAgICAgICBFTkRFRCA9IF93aW5kb3ckU0RLX0dMT0JBTCRQbC5FTkRFRCxcbiAgICAgICAgICBDVUVEID0gX3dpbmRvdyRTREtfR0xPQkFMJFBsLkNVRUQ7XG5cbiAgICAgIGlmIChkYXRhID09PSBQTEFZSU5HKSB7XG4gICAgICAgIG9uUGxheSgpO1xuICAgICAgICBvbkJ1ZmZlckVuZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEgPT09IFBBVVNFRCkgb25QYXVzZSgpO1xuICAgICAgaWYgKGRhdGEgPT09IEJVRkZFUklORykgb25CdWZmZXIoKTtcbiAgICAgIGlmIChkYXRhID09PSBFTkRFRCkge1xuICAgICAgICB2YXIgaXNQbGF5bGlzdCA9ICEhX3RoaXMuY2FsbFBsYXllcignZ2V0UGxheWxpc3QnKTtcbiAgICAgICAgaWYgKGxvb3AgJiYgIWlzUGxheWxpc3QpIHtcbiAgICAgICAgICBfdGhpcy5wbGF5KCk7IC8vIE9ubHkgbG9vcCBtYW51YWxseSBpZiBub3QgcGxheWluZyBhIHBsYXlsaXN0XG4gICAgICAgIH1cbiAgICAgICAgb25FbmRlZCgpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGEgPT09IENVRUQpIG9uUmVhZHkoKTtcbiAgICB9LCBfdGhpcy5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcignbXV0ZScpO1xuICAgIH0sIF90aGlzLnVubXV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3VuTXV0ZScpO1xuICAgIH0sIF90aGlzLnJlZiA9IGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIF90aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhZb3VUdWJlLCBbe1xuICAgIGtleTogJ2xvYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBsYXlpbmcgPSBfcHJvcHMucGxheWluZyxcbiAgICAgICAgICBtdXRlZCA9IF9wcm9wcy5tdXRlZCxcbiAgICAgICAgICBwbGF5c2lubGluZSA9IF9wcm9wcy5wbGF5c2lubGluZSxcbiAgICAgICAgICBjb250cm9scyA9IF9wcm9wcy5jb250cm9scyxcbiAgICAgICAgICBsb29wID0gX3Byb3BzLmxvb3AsXG4gICAgICAgICAgY29uZmlnID0gX3Byb3BzLmNvbmZpZyxcbiAgICAgICAgICBfb25FcnJvciA9IF9wcm9wcy5vbkVycm9yO1xuICAgICAgdmFyIF9jb25maWckeW91dHViZSA9IGNvbmZpZy55b3V0dWJlLFxuICAgICAgICAgIHBsYXllclZhcnMgPSBfY29uZmlnJHlvdXR1YmUucGxheWVyVmFycyxcbiAgICAgICAgICBlbWJlZE9wdGlvbnMgPSBfY29uZmlnJHlvdXR1YmUuZW1iZWRPcHRpb25zO1xuXG4gICAgICB2YXIgaWQgPSB1cmwgJiYgdXJsLm1hdGNoKE1BVENIX1VSTClbMV07XG4gICAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgICBpZiAoTUFUQ0hfUExBWUxJU1QudGVzdCh1cmwpKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIubG9hZFBsYXlsaXN0KHBhcnNlUGxheWxpc3QodXJsKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyLmN1ZVZpZGVvQnlJZCh7XG4gICAgICAgICAgdmlkZW9JZDogaWQsXG4gICAgICAgICAgc3RhcnRTZWNvbmRzOiAoMCwgX3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpIHx8IHBsYXllclZhcnMuc3RhcnQsXG4gICAgICAgICAgZW5kU2Vjb25kczogKDAsIF91dGlscy5wYXJzZUVuZFRpbWUpKHVybCkgfHwgcGxheWVyVmFycy5lbmRcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMLCBTREtfR0xPQkFMX1JFQURZLCBmdW5jdGlvbiAoWVQpIHtcbiAgICAgICAgcmV0dXJuIFlULmxvYWRlZDtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKFlUKSB7XG4gICAgICAgIGlmICghX3RoaXMyLmNvbnRhaW5lcikgcmV0dXJuO1xuICAgICAgICBfdGhpczIucGxheWVyID0gbmV3IFlULlBsYXllcihfdGhpczIuY29udGFpbmVyLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICB2aWRlb0lkOiBpZCxcbiAgICAgICAgICBwbGF5ZXJWYXJzOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBhdXRvcGxheTogcGxheWluZyA/IDEgOiAwLFxuICAgICAgICAgICAgbXV0ZTogbXV0ZWQgPyAxIDogMCxcbiAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyA/IDEgOiAwLFxuICAgICAgICAgICAgc3RhcnQ6ICgwLCBfdXRpbHMucGFyc2VTdGFydFRpbWUpKHVybCksXG4gICAgICAgICAgICBlbmQ6ICgwLCBfdXRpbHMucGFyc2VFbmRUaW1lKSh1cmwpLFxuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICAgICAgcGxheXNpbmxpbmU6IHBsYXlzaW5saW5lXG4gICAgICAgICAgfSwgcGFyc2VQbGF5bGlzdCh1cmwpLCBwbGF5ZXJWYXJzKSxcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgIGlmIChsb29wKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnBsYXllci5zZXRMb29wKHRydWUpOyAvLyBFbmFibGUgcGxheWxpc3QgbG9vcGluZ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TdGF0ZUNoYW5nZTogX3RoaXMyLm9uU3RhdGVDaGFuZ2UsXG4gICAgICAgICAgICBvbkVycm9yOiBmdW5jdGlvbiBvbkVycm9yKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfb25FcnJvcihldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGVtYmVkT3B0aW9ucykpO1xuICAgICAgfSwgX29uRXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwbGF5VmlkZW8nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXVzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwYXVzZVZpZGVvJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5jYWxsUGxheWVyKCdnZXRJZnJhbWUnKSkpIHJldHVybjtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc3RvcFZpZGVvJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKGFtb3VudCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZWVrVG8nLCBhbW91bnQpO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnBsYXlpbmcpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZvbHVtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRWb2x1bWUnLCBmcmFjdGlvbiAqIDEwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UGxheWJhY2tSYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0UGxheWJhY2tSYXRlJywgcmF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0TG9vcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldExvb3AobG9vcCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRMb29wJywgbG9vcCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2dldER1cmF0aW9uJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2dldEN1cnJlbnRUaW1lJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2Vjb25kc0xvYWRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKCdnZXRWaWRlb0xvYWRlZEZyYWN0aW9uJykgKiB0aGlzLmdldER1cmF0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogdGhpcy5yZWYgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFlvdVR1YmU7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Zb3VUdWJlLmRpc3BsYXlOYW1lID0gJ1lvdVR1YmUnO1xuXG5Zb3VUdWJlLmNhblBsYXkgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiBNQVRDSF9VUkwudGVzdCh1cmwpO1xufTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gKDAsIF9zaW5nbGVQbGF5ZXIyWydkZWZhdWx0J10pKFlvdVR1YmUpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuU291bmRDbG91ZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvYXBpLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ1NDJztcbnZhciBNQVRDSF9VUkwgPSAvKHNvdW5kY2xvdWRcXC5jb218c25kXFwuc2MpXFwvLiskLztcblxudmFyIFNvdW5kQ2xvdWQgPSBleHBvcnRzLlNvdW5kQ2xvdWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU291bmRDbG91ZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU291bmRDbG91ZCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU291bmRDbG91ZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU291bmRDbG91ZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvdW5kQ2xvdWQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jYWxsUGxheWVyID0gX3V0aWxzLmNhbGxQbGF5ZXIsIF90aGlzLmR1cmF0aW9uID0gbnVsbCwgX3RoaXMuY3VycmVudFRpbWUgPSBudWxsLCBfdGhpcy5mcmFjdGlvbkxvYWRlZCA9IG51bGwsIF90aGlzLm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRWb2x1bWUoMCk7XG4gICAgfSwgX3RoaXMudW5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZvbHVtZSAhPT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zZXRWb2x1bWUoX3RoaXMucHJvcHMudm9sdW1lKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5yZWYgPSBmdW5jdGlvbiAoaWZyYW1lKSB7XG4gICAgICBfdGhpcy5pZnJhbWUgPSBpZnJhbWU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU291bmRDbG91ZCwgW3tcbiAgICBrZXk6ICdsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwsIGlzUmVhZHkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoU0MpIHtcbiAgICAgICAgaWYgKCFfdGhpczIuaWZyYW1lKSByZXR1cm47XG4gICAgICAgIHZhciBfU0MkV2lkZ2V0JEV2ZW50cyA9IFNDLldpZGdldC5FdmVudHMsXG4gICAgICAgICAgICBQTEFZID0gX1NDJFdpZGdldCRFdmVudHMuUExBWSxcbiAgICAgICAgICAgIFBMQVlfUFJPR1JFU1MgPSBfU0MkV2lkZ2V0JEV2ZW50cy5QTEFZX1BST0dSRVNTLFxuICAgICAgICAgICAgUEFVU0UgPSBfU0MkV2lkZ2V0JEV2ZW50cy5QQVVTRSxcbiAgICAgICAgICAgIEZJTklTSCA9IF9TQyRXaWRnZXQkRXZlbnRzLkZJTklTSCxcbiAgICAgICAgICAgIEVSUk9SID0gX1NDJFdpZGdldCRFdmVudHMuRVJST1I7XG5cbiAgICAgICAgaWYgKCFpc1JlYWR5KSB7XG4gICAgICAgICAgX3RoaXMyLnBsYXllciA9IFNDLldpZGdldChfdGhpczIuaWZyYW1lKTtcbiAgICAgICAgICBfdGhpczIucGxheWVyLmJpbmQoUExBWSwgX3RoaXMyLnByb3BzLm9uUGxheSk7XG4gICAgICAgICAgX3RoaXMyLnBsYXllci5iaW5kKFBBVVNFLCBfdGhpczIucHJvcHMub25QYXVzZSk7XG4gICAgICAgICAgX3RoaXMyLnBsYXllci5iaW5kKFBMQVlfUFJPR1JFU1MsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBfdGhpczIuY3VycmVudFRpbWUgPSBlLmN1cnJlbnRQb3NpdGlvbiAvIDEwMDA7XG4gICAgICAgICAgICBfdGhpczIuZnJhY3Rpb25Mb2FkZWQgPSBlLmxvYWRlZFByb2dyZXNzO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzMi5wbGF5ZXIuYmluZChGSU5JU0gsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMub25FbmRlZCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzMi5wbGF5ZXIuYmluZChFUlJPUiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMub25FcnJvcihlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpczIucGxheWVyLmxvYWQodXJsLCBfZXh0ZW5kcyh7fSwgX3RoaXMyLnByb3BzLmNvbmZpZy5zb3VuZGNsb3VkLm9wdGlvbnMsIHtcbiAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgICBfdGhpczIucGxheWVyLmdldER1cmF0aW9uKGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgICBfdGhpczIuZHVyYXRpb24gPSBkdXJhdGlvbiAvIDEwMDA7XG4gICAgICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwbGF5Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGF1c2UnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIC8vIE5vdGhpbmcgdG8gZG9cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVrVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZWVrVG8nLCBzZWNvbmRzICogMTAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Vm9sdW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFZvbHVtZScsIGZyYWN0aW9uICogMTAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREdXJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlY29uZHNMb2FkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZnJhY3Rpb25Mb2FkZWQgKiB0aGlzLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtcbiAgICAgICAgcmVmOiB0aGlzLnJlZixcbiAgICAgICAgc3JjOiAnaHR0cHM6Ly93LnNvdW5kY2xvdWQuY29tL3BsYXllci8/dXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9wcy51cmwpLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGZyYW1lQm9yZGVyOiAwLFxuICAgICAgICBhbGxvdzogJ2F1dG9wbGF5J1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNvdW5kQ2xvdWQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Tb3VuZENsb3VkLmRpc3BsYXlOYW1lID0gJ1NvdW5kQ2xvdWQnO1xuXG5Tb3VuZENsb3VkLmNhblBsYXkgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHJldHVybiBNQVRDSF9VUkwudGVzdCh1cmwpO1xufTtcblxuU291bmRDbG91ZC5sb29wT25FbmRlZCA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX3NpbmdsZVBsYXllcjJbJ2RlZmF1bHQnXSkoU291bmRDbG91ZCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5WaW1lbyA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS9hcGkvcGxheWVyLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ1ZpbWVvJztcbnZhciBNQVRDSF9VUkwgPSAvdmltZW9cXC5jb21cXC8uKy87XG52YXIgTUFUQ0hfRklMRV9VUkwgPSAvdmltZW9cXC5jb21cXC9leHRlcm5hbFxcL1swLTldK1xcLi4rLztcblxudmFyIFZpbWVvID0gZXhwb3J0cy5WaW1lbyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaW1lbywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmltZW8oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFZpbWVvKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBWaW1lby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFZpbWVvKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY2FsbFBsYXllciA9IF91dGlscy5jYWxsUGxheWVyLCBfdGhpcy5kdXJhdGlvbiA9IG51bGwsIF90aGlzLmN1cnJlbnRUaW1lID0gbnVsbCwgX3RoaXMuc2Vjb25kc0xvYWRlZCA9IG51bGwsIF90aGlzLm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRWb2x1bWUoMCk7XG4gICAgfSwgX3RoaXMudW5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLnZvbHVtZSAhPT0gbnVsbCkge1xuICAgICAgICBfdGhpcy5zZXRWb2x1bWUoX3RoaXMucHJvcHMudm9sdW1lKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5yZWYgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICBfdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmltZW8sIFt7XG4gICAga2V5OiAnbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5kdXJhdGlvbiA9IG51bGw7XG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoVmltZW8pIHtcbiAgICAgICAgaWYgKCFfdGhpczIuY29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIF90aGlzMi5wbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKF90aGlzMi5jb250YWluZXIsIF9leHRlbmRzKHtcbiAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICBhdXRvcGxheTogX3RoaXMyLnByb3BzLnBsYXlpbmcsXG4gICAgICAgICAgbXV0ZWQ6IF90aGlzMi5wcm9wcy5tdXRlZCxcbiAgICAgICAgICBsb29wOiBfdGhpczIucHJvcHMubG9vcCxcbiAgICAgICAgICBwbGF5c2lubGluZTogX3RoaXMyLnByb3BzLnBsYXlzaW5saW5lXG4gICAgICAgIH0sIF90aGlzMi5wcm9wcy5jb25maWcudmltZW8ucGxheWVyT3B0aW9ucykpO1xuICAgICAgICBfdGhpczIucGxheWVyLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGlmcmFtZSA9IF90aGlzMi5jb250YWluZXIucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG4gICAgICAgICAgaWZyYW1lLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH0pWydjYXRjaCddKF90aGlzMi5wcm9wcy5vbkVycm9yKTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5vbignbG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMi5wcm9wcy5vblJlYWR5KCk7XG4gICAgICAgICAgX3RoaXMyLnJlZnJlc2hEdXJhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigncGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25QbGF5KCk7XG4gICAgICAgICAgX3RoaXMyLnJlZnJlc2hEdXJhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigncGF1c2UnLCBfdGhpczIucHJvcHMub25QYXVzZSk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3NlZWtlZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5vblNlZWsoZS5zZWNvbmRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2VuZGVkJywgX3RoaXMyLnByb3BzLm9uRW5kZWQpO1xuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdlcnJvcicsIF90aGlzMi5wcm9wcy5vbkVycm9yKTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5vbigndGltZXVwZGF0ZScsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBzZWNvbmRzID0gX3JlZjIuc2Vjb25kcztcblxuICAgICAgICAgIF90aGlzMi5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdwcm9ncmVzcycsIGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICAgIHZhciBzZWNvbmRzID0gX3JlZjMuc2Vjb25kcztcblxuICAgICAgICAgIF90aGlzMi5zZWNvbmRzTG9hZGVkID0gc2Vjb25kcztcbiAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlZnJlc2hEdXJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlZnJlc2hEdXJhdGlvbigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLnBsYXllci5nZXREdXJhdGlvbigpLnRoZW4oZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIF90aGlzMy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZVsnY2F0Y2gnXSh0aGlzLnByb3BzLm9uRXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhdXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3VubG9hZCcpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlZWtUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWtUbyhzZWNvbmRzKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldEN1cnJlbnRUaW1lJywgc2Vjb25kcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Vm9sdW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFZvbHVtZScsIGZyYWN0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRMb29wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TG9vcChsb29wKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldExvb3AnLCBsb29wKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREdXJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlY29uZHNMb2FkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kc0xvYWRlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICBrZXk6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBWaW1lbztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblZpbWVvLmRpc3BsYXlOYW1lID0gJ1ZpbWVvJztcblxuVmltZW8uY2FuUGxheSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgaWYgKE1BVENIX0ZJTEVfVVJMLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gTUFUQ0hfVVJMLnRlc3QodXJsKTtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfc2luZ2xlUGxheWVyMlsnZGVmYXVsdCddKShWaW1lbyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GYWNlYm9vayA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJy8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ0ZCJztcbnZhciBTREtfR0xPQkFMX1JFQURZID0gJ2ZiQXN5bmNJbml0JztcbnZhciBNQVRDSF9VUkwgPSAvZmFjZWJvb2tcXC5jb21cXC8oW14vP10uK1xcLyk/dmlkZW8oc3xcXC5waHApWy8/XS4qJC87XG52YXIgUExBWUVSX0lEX1BSRUZJWCA9ICdmYWNlYm9vay1wbGF5ZXItJztcblxudmFyIEZhY2Vib29rID0gZXhwb3J0cy5GYWNlYm9vayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhGYWNlYm9vaywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmFjZWJvb2soKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZhY2Vib29rKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBGYWNlYm9vay5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZhY2Vib29rKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY2FsbFBsYXllciA9IF91dGlscy5jYWxsUGxheWVyLCBfdGhpcy5wbGF5ZXJJRCA9IFBMQVlFUl9JRF9QUkVGSVggKyAoMCwgX3V0aWxzLnJhbmRvbVN0cmluZykoKSwgX3RoaXMubXV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ211dGUnKTtcbiAgICB9LCBfdGhpcy51bm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jYWxsUGxheWVyKCd1bm11dGUnKTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhGYWNlYm9vaywgW3tcbiAgICBrZXk6ICdsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwsIGlzUmVhZHkpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAoaXNSZWFkeSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSkudGhlbihmdW5jdGlvbiAoRkIpIHtcbiAgICAgICAgICByZXR1cm4gRkIuWEZCTUwucGFyc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMLCBTREtfR0xPQkFMX1JFQURZKS50aGVuKGZ1bmN0aW9uIChGQikge1xuICAgICAgICBGQi5pbml0KHtcbiAgICAgICAgICBhcHBJZDogX3RoaXMyLnByb3BzLmNvbmZpZy5mYWNlYm9vay5hcHBJZCxcbiAgICAgICAgICB4ZmJtbDogdHJ1ZSxcbiAgICAgICAgICB2ZXJzaW9uOiAndjIuNSdcbiAgICAgICAgfSk7XG4gICAgICAgIEZCLkV2ZW50LnN1YnNjcmliZSgneGZibWwucmVuZGVyJywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgIC8vIEhlcmUgd2Uga25vdyB0aGUgU0RLIGhhcyBsb2FkZWQsIGV2ZW4gaWYgb25SZWFkeS9vblBsYXlcbiAgICAgICAgICAvLyBpcyBub3QgY2FsbGVkIGR1ZSB0byBhIHZpZGVvIHRoYXQgY2Fubm90IGJlIGVtYmVkZGVkXG4gICAgICAgICAgX3RoaXMyLnByb3BzLm9uTG9hZGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBGQi5FdmVudC5zdWJzY3JpYmUoJ3hmYm1sLnJlYWR5JywgZnVuY3Rpb24gKG1zZykge1xuICAgICAgICAgIGlmIChtc2cudHlwZSA9PT0gJ3ZpZGVvJyAmJiBtc2cuaWQgPT09IF90aGlzMi5wbGF5ZXJJRCkge1xuICAgICAgICAgICAgX3RoaXMyLnBsYXllciA9IG1zZy5pbnN0YW5jZTtcbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIuc3Vic2NyaWJlKCdzdGFydGVkUGxheWluZycsIF90aGlzMi5wcm9wcy5vblBsYXkpO1xuICAgICAgICAgICAgX3RoaXMyLnBsYXllci5zdWJzY3JpYmUoJ3BhdXNlZCcsIF90aGlzMi5wcm9wcy5vblBhdXNlKTtcbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIuc3Vic2NyaWJlKCdmaW5pc2hlZFBsYXlpbmcnLCBfdGhpczIucHJvcHMub25FbmRlZCk7XG4gICAgICAgICAgICBfdGhpczIucGxheWVyLnN1YnNjcmliZSgnc3RhcnRlZEJ1ZmZlcmluZycsIF90aGlzMi5wcm9wcy5vbkJ1ZmZlcik7XG4gICAgICAgICAgICBfdGhpczIucGxheWVyLnN1YnNjcmliZSgnZmluaXNoZWRCdWZmZXJpbmcnLCBfdGhpczIucHJvcHMub25CdWZmZXJFbmQpO1xuICAgICAgICAgICAgX3RoaXMyLnBsYXllci5zdWJzY3JpYmUoJ2Vycm9yJywgX3RoaXMyLnByb3BzLm9uRXJyb3IpO1xuICAgICAgICAgICAgaWYgKCFfdGhpczIucHJvcHMubXV0ZWQpIHtcbiAgICAgICAgICAgICAgLy8gUGxheWVyIGlzIG11dGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgICAgX3RoaXMyLmNhbGxQbGF5ZXIoJ3VubXV0ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uUmVhZHkoKTtcblxuICAgICAgICAgICAgLy8gRm9yIHNvbWUgcmVhc29uIEZhY2Vib29rIGhhdmUgYWRkZWQgYHZpc2liaWxpdHk6IGhpZGRlbmBcbiAgICAgICAgICAgIC8vIHRvIHRoZSBpZnJhbWUgd2hlbiBhdXRvcGxheSBmYWlscywgc28gaGVyZSB3ZSBzZXQgaXQgYmFja1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoX3RoaXMyLnBsYXllcklEKS5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhdXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAvLyBOb3RoaW5nIHRvIGRvXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2VlaycsIHNlY29uZHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZvbHVtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRWb2x1bWUnLCBmcmFjdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2dldER1cmF0aW9uJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2dldEN1cnJlbnRQb3NpdGlvbicpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlY29uZHNMb2FkZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWNvbmRzTG9hZGVkKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgaWQ6IHRoaXMucGxheWVySUQsXG4gICAgICAgIGNsYXNzTmFtZTogJ2ZiLXZpZGVvJyxcbiAgICAgICAgJ2RhdGEtaHJlZic6IHRoaXMucHJvcHMudXJsLFxuICAgICAgICAnZGF0YS1hdXRvcGxheSc6IHRoaXMucHJvcHMucGxheWluZyA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdkYXRhLWFsbG93ZnVsbHNjcmVlbic6ICd0cnVlJyxcbiAgICAgICAgJ2RhdGEtY29udHJvbHMnOiB0aGlzLnByb3BzLmNvbnRyb2xzID8gJ3RydWUnIDogJ2ZhbHNlJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZhY2Vib29rO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRmFjZWJvb2suZGlzcGxheU5hbWUgPSAnRmFjZWJvb2snO1xuXG5GYWNlYm9vay5jYW5QbGF5ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gTUFUQ0hfVVJMLnRlc3QodXJsKTtcbn07XG5cbkZhY2Vib29rLmxvb3BPbkVuZGVkID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfc2luZ2xlUGxheWVyMlsnZGVmYXVsdCddKShGYWNlYm9vayk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5TdHJlYW1hYmxlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX3NpbmdsZVBsYXllciA9IHJlcXVpcmUoJy4uL3NpbmdsZVBsYXllcicpO1xuXG52YXIgX3NpbmdsZVBsYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVQbGF5ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNES19VUkwgPSAnLy9jZG4uZW1iZWQubHkvcGxheWVyLTAuMS4wLm1pbi5qcyc7XG52YXIgU0RLX0dMT0JBTCA9ICdwbGF5ZXJqcyc7XG52YXIgTUFUQ0hfVVJMID0gL3N0cmVhbWFibGVcXC5jb21cXC8oW2EtejAtOV0rKSQvO1xuXG52YXIgU3RyZWFtYWJsZSA9IGV4cG9ydHMuU3RyZWFtYWJsZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdHJlYW1hYmxlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdHJlYW1hYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHJlYW1hYmxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTdHJlYW1hYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RyZWFtYWJsZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNhbGxQbGF5ZXIgPSBfdXRpbHMuY2FsbFBsYXllciwgX3RoaXMuZHVyYXRpb24gPSBudWxsLCBfdGhpcy5jdXJyZW50VGltZSA9IG51bGwsIF90aGlzLnNlY29uZHNMb2FkZWQgPSBudWxsLCBfdGhpcy5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcignbXV0ZScpO1xuICAgIH0sIF90aGlzLnVubXV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3VubXV0ZScpO1xuICAgIH0sIF90aGlzLnJlZiA9IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgIF90aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdHJlYW1hYmxlLCBbe1xuICAgIGtleTogJ2xvYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICgwLCBfdXRpbHMuZ2V0U0RLKShTREtfVVJMLCBTREtfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChwbGF5ZXJqcykge1xuICAgICAgICBpZiAoIV90aGlzMi5pZnJhbWUpIHJldHVybjtcbiAgICAgICAgX3RoaXMyLnBsYXllciA9IG5ldyBwbGF5ZXJqcy5QbGF5ZXIoX3RoaXMyLmlmcmFtZSk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIuc2V0TG9vcChfdGhpczIucHJvcHMubG9vcCk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3JlYWR5JywgX3RoaXMyLnByb3BzLm9uUmVhZHkpO1xuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdwbGF5JywgX3RoaXMyLnByb3BzLm9uUGxheSk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ3BhdXNlJywgX3RoaXMyLnByb3BzLm9uUGF1c2UpO1xuICAgICAgICBfdGhpczIucGxheWVyLm9uKCdzZWVrZWQnLCBfdGhpczIucHJvcHMub25TZWVrKTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5vbignZW5kZWQnLCBfdGhpczIucHJvcHMub25FbmRlZCk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2Vycm9yJywgX3RoaXMyLnByb3BzLm9uRXJyb3IpO1xuICAgICAgICBfdGhpczIucGxheWVyLm9uKCd0aW1ldXBkYXRlJywgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIGR1cmF0aW9uID0gX3JlZjIuZHVyYXRpb24sXG4gICAgICAgICAgICAgIHNlY29uZHMgPSBfcmVmMi5zZWNvbmRzO1xuXG4gICAgICAgICAgX3RoaXMyLmR1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgX3RoaXMyLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIub24oJ2J1ZmZlcmVkJywgZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgICAgdmFyIHBlcmNlbnQgPSBfcmVmMy5wZXJjZW50O1xuXG4gICAgICAgICAgaWYgKF90aGlzMi5kdXJhdGlvbikge1xuICAgICAgICAgICAgX3RoaXMyLnNlY29uZHNMb2FkZWQgPSBfdGhpczIuZHVyYXRpb24gKiBwZXJjZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfdGhpczIucHJvcHMubXV0ZWQpIHtcbiAgICAgICAgICBfdGhpczIucGxheWVyLm11dGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5wcm9wcy5vbkVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhdXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAvLyBOb3RoaW5nIHRvIGRvXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0Q3VycmVudFRpbWUnLCBzZWNvbmRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWb2x1bWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0Vm9sdW1lJywgZnJhY3Rpb24gKiAxMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldExvb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRMb29wKGxvb3ApIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2V0TG9vcCcsIGxvb3ApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldER1cmF0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDdXJyZW50VGltZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2Vjb25kc0xvYWRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZWNvbmRzTG9hZGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpZCA9IHRoaXMucHJvcHMudXJsLm1hdGNoKE1BVENIX1VSTClbMV07XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICAgIHJlZjogdGhpcy5yZWYsXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vc3RyZWFtYWJsZS5jb20vby8nICsgaWQsXG4gICAgICAgIGZyYW1lQm9yZGVyOiAnMCcsXG4gICAgICAgIHNjcm9sbGluZzogJ25vJyxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW46IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdHJlYW1hYmxlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU3RyZWFtYWJsZS5kaXNwbGF5TmFtZSA9ICdTdHJlYW1hYmxlJztcblxuU3RyZWFtYWJsZS5jYW5QbGF5ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gTUFUQ0hfVVJMLnRlc3QodXJsKTtcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfc2luZ2xlUGxheWVyMlsnZGVmYXVsdCddKShTdHJlYW1hYmxlKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLldpc3RpYSA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJy8vZmFzdC53aXN0aWEuY29tL2Fzc2V0cy9leHRlcm5hbC9FLXYxLmpzJztcbnZhciBTREtfR0xPQkFMID0gJ1dpc3RpYSc7XG52YXIgTUFUQ0hfVVJMID0gLyg/Ondpc3RpYVxcLmNvbXx3aVxcLnN0KVxcLyg/Om1lZGlhc3xlbWJlZClcXC8oLiopJC87XG5cbnZhciBXaXN0aWEgPSBleHBvcnRzLldpc3RpYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhXaXN0aWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFdpc3RpYSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2lzdGlhKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBXaXN0aWEuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihXaXN0aWEpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5jYWxsUGxheWVyID0gX3V0aWxzLmNhbGxQbGF5ZXIsIF90aGlzLm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jYWxsUGxheWVyKCdtdXRlJyk7XG4gICAgfSwgX3RoaXMudW5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcigndW5tdXRlJyk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoV2lzdGlhLCBbe1xuICAgIGtleTogJ2dldElEJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SUQodXJsKSB7XG4gICAgICByZXR1cm4gdXJsICYmIHVybC5tYXRjaChNQVRDSF9VUkwpWzFdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBsYXlpbmcgPSBfcHJvcHMucGxheWluZyxcbiAgICAgICAgICBtdXRlZCA9IF9wcm9wcy5tdXRlZCxcbiAgICAgICAgICBjb250cm9scyA9IF9wcm9wcy5jb250cm9scyxcbiAgICAgICAgICBfb25SZWFkeSA9IF9wcm9wcy5vblJlYWR5LFxuICAgICAgICAgIG9uUGxheSA9IF9wcm9wcy5vblBsYXksXG4gICAgICAgICAgb25QYXVzZSA9IF9wcm9wcy5vblBhdXNlLFxuICAgICAgICAgIG9uU2VlayA9IF9wcm9wcy5vblNlZWssXG4gICAgICAgICAgb25FbmRlZCA9IF9wcm9wcy5vbkVuZGVkLFxuICAgICAgICAgIGNvbmZpZyA9IF9wcm9wcy5jb25maWcsXG4gICAgICAgICAgb25FcnJvciA9IF9wcm9wcy5vbkVycm9yO1xuXG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fd3EgPSB3aW5kb3cuX3dxIHx8IFtdO1xuICAgICAgICB3aW5kb3cuX3dxLnB1c2goe1xuICAgICAgICAgIGlkOiBfdGhpczIuZ2V0SUQodXJsKSxcbiAgICAgICAgICBvcHRpb25zOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBhdXRvUGxheTogcGxheWluZyxcbiAgICAgICAgICAgIHNpbGVudEF1dG9QbGF5OiAnYWxsb3cnLFxuICAgICAgICAgICAgbXV0ZWQ6IG11dGVkLFxuICAgICAgICAgICAgY29udHJvbHNWaXNpYmxlT25Mb2FkOiBjb250cm9sc1xuICAgICAgICAgIH0sIGNvbmZpZy53aXN0aWEub3B0aW9ucyksXG4gICAgICAgICAgb25SZWFkeTogZnVuY3Rpb24gb25SZWFkeShwbGF5ZXIpIHtcbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgICAgICAgICBfdGhpczIudW5iaW5kKCk7XG4gICAgICAgICAgICBfdGhpczIucGxheWVyLmJpbmQoJ3BsYXknLCBvblBsYXkpO1xuICAgICAgICAgICAgX3RoaXMyLnBsYXllci5iaW5kKCdwYXVzZScsIG9uUGF1c2UpO1xuICAgICAgICAgICAgX3RoaXMyLnBsYXllci5iaW5kKCdzZWVrJywgb25TZWVrKTtcbiAgICAgICAgICAgIF90aGlzMi5wbGF5ZXIuYmluZCgnZW5kJywgb25FbmRlZCk7XG4gICAgICAgICAgICBfb25SZWFkeSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBvbkVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhdXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5iaW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uUGxheSA9IF9wcm9wczIub25QbGF5LFxuICAgICAgICAgIG9uUGF1c2UgPSBfcHJvcHMyLm9uUGF1c2UsXG4gICAgICAgICAgb25TZWVrID0gX3Byb3BzMi5vblNlZWssXG4gICAgICAgICAgb25FbmRlZCA9IF9wcm9wczIub25FbmRlZDtcblxuICAgICAgdGhpcy5wbGF5ZXIudW5iaW5kKCdwbGF5Jywgb25QbGF5KTtcbiAgICAgIHRoaXMucGxheWVyLnVuYmluZCgncGF1c2UnLCBvblBhdXNlKTtcbiAgICAgIHRoaXMucGxheWVyLnVuYmluZCgnc2VlaycsIG9uU2Vlayk7XG4gICAgICB0aGlzLnBsYXllci51bmJpbmQoJ2VuZCcsIG9uRW5kZWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncmVtb3ZlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigndGltZScsIHNlY29uZHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZvbHVtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCd2b2x1bWUnLCBmcmFjdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0UGxheWJhY2tSYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheWJhY2tSYXRlJywgcmF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ2R1cmF0aW9uJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q3VycmVudFRpbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50VGltZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxQbGF5ZXIoJ3RpbWUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWNvbmRzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBpZCA9IHRoaXMuZ2V0SUQodGhpcy5wcm9wcy51cmwpO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9ICd3aXN0aWFfZW1iZWQgd2lzdGlhX2FzeW5jXycgKyBpZDtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiBpZCwgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBzdHlsZSB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gV2lzdGlhO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuV2lzdGlhLmRpc3BsYXlOYW1lID0gJ1dpc3RpYSc7XG5cbldpc3RpYS5jYW5QbGF5ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gTUFUQ0hfVVJMLnRlc3QodXJsKTtcbn07XG5cbldpc3RpYS5sb29wT25FbmRlZCA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX3NpbmdsZVBsYXllcjJbJ2RlZmF1bHQnXSkoV2lzdGlhKTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlR3aXRjaCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJ2h0dHBzOi8vcGxheWVyLnR3aXRjaC50di9qcy9lbWJlZC92MS5qcyc7XG52YXIgU0RLX0dMT0JBTCA9ICdUd2l0Y2gnO1xudmFyIE1BVENIX1ZJREVPX1VSTCA9IC8oPzp3d3dcXC58Z29cXC4pP3R3aXRjaFxcLnR2XFwvdmlkZW9zXFwvKFxcZCspKCR8XFw/KS87XG52YXIgTUFUQ0hfQ0hBTk5FTF9VUkwgPSAvKD86d3d3XFwufGdvXFwuKT90d2l0Y2hcXC50dlxcLyhbYS16MC05X10rKSgkfFxcPykvO1xudmFyIFBMQVlFUl9JRF9QUkVGSVggPSAndHdpdGNoLXBsYXllci0nO1xuXG52YXIgVHdpdGNoID0gZXhwb3J0cy5Ud2l0Y2ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHdpdGNoLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUd2l0Y2goKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3aXRjaCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gVHdpdGNoLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVHdpdGNoKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY2FsbFBsYXllciA9IF91dGlscy5jYWxsUGxheWVyLCBfdGhpcy5wbGF5ZXJJRCA9IFBMQVlFUl9JRF9QUkVGSVggKyAoMCwgX3V0aWxzLnJhbmRvbVN0cmluZykoKSwgX3RoaXMubXV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNhbGxQbGF5ZXIoJ3NldE11dGVkJywgdHJ1ZSk7XG4gICAgfSwgX3RoaXMudW5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcignc2V0TXV0ZWQnLCBmYWxzZSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVHdpdGNoLCBbe1xuICAgIGtleTogJ2xvYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkKHVybCwgaXNSZWFkeSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHBsYXlzaW5saW5lID0gX3Byb3BzLnBsYXlzaW5saW5lLFxuICAgICAgICAgIG9uRXJyb3IgPSBfcHJvcHMub25FcnJvcixcbiAgICAgICAgICBjb25maWcgPSBfcHJvcHMuY29uZmlnO1xuXG4gICAgICB2YXIgaXNDaGFubmVsID0gTUFUQ0hfQ0hBTk5FTF9VUkwudGVzdCh1cmwpO1xuICAgICAgdmFyIGlkID0gaXNDaGFubmVsID8gdXJsLm1hdGNoKE1BVENIX0NIQU5ORUxfVVJMKVsxXSA6IHVybC5tYXRjaChNQVRDSF9WSURFT19VUkwpWzFdO1xuICAgICAgaWYgKGlzUmVhZHkpIHtcbiAgICAgICAgaWYgKGlzQ2hhbm5lbCkge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNldENoYW5uZWwoaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucGxheWVyLnNldFZpZGVvKCd2JyArIGlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoVHdpdGNoKSB7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIgPSBuZXcgVHdpdGNoLlBsYXllcihfdGhpczIucGxheWVySUQsIF9leHRlbmRzKHtcbiAgICAgICAgICB2aWRlbzogaXNDaGFubmVsID8gJycgOiBpZCxcbiAgICAgICAgICBjaGFubmVsOiBpc0NoYW5uZWwgPyBpZCA6ICcnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgcGxheXNpbmxpbmU6IHBsYXlzaW5saW5lLFxuICAgICAgICAgIGF1dG9wbGF5OiBfdGhpczIucHJvcHMucGxheWluZyxcbiAgICAgICAgICBtdXRlZDogX3RoaXMyLnByb3BzLm11dGVkXG4gICAgICAgIH0sIGNvbmZpZy50d2l0Y2gub3B0aW9ucykpO1xuICAgICAgICB2YXIgX1R3aXRjaCRQbGF5ZXIgPSBUd2l0Y2guUGxheWVyLFxuICAgICAgICAgICAgUkVBRFkgPSBfVHdpdGNoJFBsYXllci5SRUFEWSxcbiAgICAgICAgICAgIFBMQVlJTkcgPSBfVHdpdGNoJFBsYXllci5QTEFZSU5HLFxuICAgICAgICAgICAgUEFVU0UgPSBfVHdpdGNoJFBsYXllci5QQVVTRSxcbiAgICAgICAgICAgIEVOREVEID0gX1R3aXRjaCRQbGF5ZXIuRU5ERUQsXG4gICAgICAgICAgICBPTkxJTkUgPSBfVHdpdGNoJFBsYXllci5PTkxJTkUsXG4gICAgICAgICAgICBPRkZMSU5FID0gX1R3aXRjaCRQbGF5ZXIuT0ZGTElORTtcblxuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoUkVBRFksIF90aGlzMi5wcm9wcy5vblJlYWR5KTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5hZGRFdmVudExpc3RlbmVyKFBMQVlJTkcsIF90aGlzMi5wcm9wcy5vblBsYXkpO1xuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoUEFVU0UsIF90aGlzMi5wcm9wcy5vblBhdXNlKTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5hZGRFdmVudExpc3RlbmVyKEVOREVELCBfdGhpczIucHJvcHMub25FbmRlZCk7XG5cbiAgICAgICAgLy8gUHJldmVudCB3ZWlyZCBpc0xvYWRpbmcgYmVoYXZpb3VyIHdoZW4gc3RyZWFtcyBhcmUgb2ZmbGluZVxuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoT05MSU5FLCBfdGhpczIucHJvcHMub25Mb2FkZWQpO1xuICAgICAgICBfdGhpczIucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoT0ZGTElORSwgX3RoaXMyLnByb3BzLm9uTG9hZGVkKTtcbiAgICAgIH0sIG9uRXJyb3IpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwbGF5Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGF1c2UnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdG9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGF1c2UnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWVrVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWVrVG8oc2Vjb25kcykge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZWVrJywgc2Vjb25kcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0Vm9sdW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NldFZvbHVtZScsIGZyYWN0aW9uKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREdXJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcignZ2V0RHVyYXRpb24nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDdXJyZW50VGltZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRUaW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbFBsYXllcignZ2V0Q3VycmVudFRpbWUnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWNvbmRzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHN0eWxlLCBpZDogdGhpcy5wbGF5ZXJJRCB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHdpdGNoO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVHdpdGNoLmRpc3BsYXlOYW1lID0gJ1R3aXRjaCc7XG5cblR3aXRjaC5jYW5QbGF5ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gTUFUQ0hfVklERU9fVVJMLnRlc3QodXJsKSB8fCBNQVRDSF9DSEFOTkVMX1VSTC50ZXN0KHVybCk7XG59O1xuXG5Ud2l0Y2gubG9vcE9uRW5kZWQgPSB0cnVlO1xuZXhwb3J0c1snZGVmYXVsdCddID0gKDAsIF9zaW5nbGVQbGF5ZXIyWydkZWZhdWx0J10pKFR3aXRjaCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5EYWlseU1vdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7IH0gfTsgfSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG52YXIgX3NpbmdsZVBsYXllciA9IHJlcXVpcmUoJy4uL3NpbmdsZVBsYXllcicpO1xuXG52YXIgX3NpbmdsZVBsYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW5nbGVQbGF5ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFNES19VUkwgPSAnaHR0cHM6Ly9hcGkuZG1jZG4ubmV0L2FsbC5qcyc7XG52YXIgU0RLX0dMT0JBTCA9ICdETSc7XG52YXIgU0RLX0dMT0JBTF9SRUFEWSA9ICdkbUFzeW5jSW5pdCc7XG52YXIgTUFUQ0hfVVJMID0gL14oPzooPzpodHRwcz8pOik/KD86XFwvXFwvKT8oPzp3d3dcXC4pPyg/Oig/OmRhaWx5bW90aW9uXFwuY29tKD86XFwvZW1iZWQpP1xcL3ZpZGVvKXxkYWlcXC5seSlcXC8oW2EtekEtWjAtOV0rKSg/Ol9bXFx3Xy1dKyk/JC87XG5cbnZhciBEYWlseU1vdGlvbiA9IGV4cG9ydHMuRGFpbHlNb3Rpb24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRGFpbHlNb3Rpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERhaWx5TW90aW9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEYWlseU1vdGlvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gRGFpbHlNb3Rpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEYWlseU1vdGlvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNhbGxQbGF5ZXIgPSBfdXRpbHMuY2FsbFBsYXllciwgX3RoaXMub25EdXJhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkdXJhdGlvbiA9IF90aGlzLmdldER1cmF0aW9uKCk7XG4gICAgICBfdGhpcy5wcm9wcy5vbkR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICB9LCBfdGhpcy5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2FsbFBsYXllcignc2V0TXV0ZWQnLCB0cnVlKTtcbiAgICB9LCBfdGhpcy51bm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jYWxsUGxheWVyKCdzZXRNdXRlZCcsIGZhbHNlKTtcbiAgICB9LCBfdGhpcy5yZWYgPSBmdW5jdGlvbiAoY29udGFpbmVyKSB7XG4gICAgICBfdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRGFpbHlNb3Rpb24sIFt7XG4gICAga2V5OiAnbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY29udHJvbHMgPSBfcHJvcHMuY29udHJvbHMsXG4gICAgICAgICAgY29uZmlnID0gX3Byb3BzLmNvbmZpZyxcbiAgICAgICAgICBvbkVycm9yID0gX3Byb3BzLm9uRXJyb3IsXG4gICAgICAgICAgcGxheWluZyA9IF9wcm9wcy5wbGF5aW5nO1xuXG4gICAgICB2YXIgX3VybCRtYXRjaCA9IHVybC5tYXRjaChNQVRDSF9VUkwpLFxuICAgICAgICAgIF91cmwkbWF0Y2gyID0gX3NsaWNlZFRvQXJyYXkoX3VybCRtYXRjaCwgMiksXG4gICAgICAgICAgaWQgPSBfdXJsJG1hdGNoMlsxXTtcblxuICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoaWQsIHtcbiAgICAgICAgICBzdGFydDogKDAsIF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKSxcbiAgICAgICAgICBhdXRvcGxheTogcGxheWluZ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgKDAsIF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwsIFNES19HTE9CQUxfUkVBRFksIGZ1bmN0aW9uIChETSkge1xuICAgICAgICByZXR1cm4gRE0ucGxheWVyO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoRE0pIHtcbiAgICAgICAgaWYgKCFfdGhpczIuY29udGFpbmVyKSByZXR1cm47XG4gICAgICAgIHZhciBQbGF5ZXIgPSBETS5wbGF5ZXI7XG4gICAgICAgIF90aGlzMi5wbGF5ZXIgPSBuZXcgUGxheWVyKF90aGlzMi5jb250YWluZXIsIHtcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgIHZpZGVvOiBpZCxcbiAgICAgICAgICBwYXJhbXM6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIGNvbnRyb2xzOiBjb250cm9scyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiBfdGhpczIucHJvcHMucGxheWluZyxcbiAgICAgICAgICAgIG11dGU6IF90aGlzMi5wcm9wcy5tdXRlZCxcbiAgICAgICAgICAgIHN0YXJ0OiAoMCwgX3V0aWxzLnBhcnNlU3RhcnRUaW1lKSh1cmwpLFxuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICAgICAgfSwgY29uZmlnLmRhaWx5bW90aW9uLnBhcmFtcyksXG4gICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICBhcGlyZWFkeTogX3RoaXMyLnByb3BzLm9uUmVhZHksXG4gICAgICAgICAgICBzZWVrZWQ6IGZ1bmN0aW9uIHNlZWtlZCgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5vblNlZWsoX3RoaXMyLnBsYXllci5jdXJyZW50VGltZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmlkZW9fZW5kOiBfdGhpczIucHJvcHMub25FbmRlZCxcbiAgICAgICAgICAgIGR1cmF0aW9uY2hhbmdlOiBfdGhpczIub25EdXJhdGlvbkNoYW5nZSxcbiAgICAgICAgICAgIHBhdXNlOiBfdGhpczIucHJvcHMub25QYXVzZSxcbiAgICAgICAgICAgIHBsYXlpbmc6IF90aGlzMi5wcm9wcy5vblBsYXksXG4gICAgICAgICAgICB3YWl0aW5nOiBfdGhpczIucHJvcHMub25CdWZmZXIsXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBvbkVycm9yKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcigncGxheScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BhdXNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BhdXNlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAvLyBOb3RoaW5nIHRvIGRvXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcignc2VlaycsIHNlY29uZHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZvbHVtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdzZXRWb2x1bWUnLCBmcmFjdGlvbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5kdXJhdGlvbiB8fCBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U2Vjb25kc0xvYWRlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlY29uZHNMb2FkZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYnVmZmVyZWRUaW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHJlZjogdGhpcy5yZWYgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIERhaWx5TW90aW9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGFpbHlNb3Rpb24uZGlzcGxheU5hbWUgPSAnRGFpbHlNb3Rpb24nO1xuXG5EYWlseU1vdGlvbi5jYW5QbGF5ID0gZnVuY3Rpb24gKHVybCkge1xuICByZXR1cm4gTUFUQ0hfVVJMLnRlc3QodXJsKTtcbn07XG5cbkRhaWx5TW90aW9uLmxvb3BPbkVuZGVkID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9ICgwLCBfc2luZ2xlUGxheWVyMlsnZGVmYXVsdCddKShEYWlseU1vdGlvbik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5NaXhjbG91ZCA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTREtfVVJMID0gJy8vd2lkZ2V0Lm1peGNsb3VkLmNvbS9tZWRpYS9qcy93aWRnZXRBcGkuanMnO1xudmFyIFNES19HTE9CQUwgPSAnTWl4Y2xvdWQnO1xudmFyIE1BVENIX1VSTCA9IC9taXhjbG91ZFxcLmNvbVxcLyhbXi9dK1xcL1teL10rKS87XG5cbnZhciBNaXhjbG91ZCA9IGV4cG9ydHMuTWl4Y2xvdWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTWl4Y2xvdWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE1peGNsb3VkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhjbG91ZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTWl4Y2xvdWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNaXhjbG91ZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmNhbGxQbGF5ZXIgPSBfdXRpbHMuY2FsbFBsYXllciwgX3RoaXMuZHVyYXRpb24gPSBudWxsLCBfdGhpcy5jdXJyZW50VGltZSA9IG51bGwsIF90aGlzLnNlY29uZHNMb2FkZWQgPSBudWxsLCBfdGhpcy5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gTm8gdm9sdW1lIHN1cHBvcnRcbiAgICB9LCBfdGhpcy51bm11dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBObyB2b2x1bWUgc3VwcG9ydFxuICAgIH0sIF90aGlzLnJlZiA9IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgIF90aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhNaXhjbG91ZCwgW3tcbiAgICBrZXk6ICdsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZCh1cmwpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAoMCwgX3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCkudGhlbihmdW5jdGlvbiAoTWl4Y2xvdWQpIHtcbiAgICAgICAgX3RoaXMyLnBsYXllciA9IE1peGNsb3VkLlBsYXllcldpZGdldChfdGhpczIuaWZyYW1lKTtcbiAgICAgICAgX3RoaXMyLnBsYXllci5yZWFkeS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIucGxheWVyLmV2ZW50cy5wbGF5Lm9uKF90aGlzMi5wcm9wcy5vblBsYXkpO1xuICAgICAgICAgIF90aGlzMi5wbGF5ZXIuZXZlbnRzLnBhdXNlLm9uKF90aGlzMi5wcm9wcy5vblBhdXNlKTtcbiAgICAgICAgICBfdGhpczIucGxheWVyLmV2ZW50cy5lbmRlZC5vbihfdGhpczIucHJvcHMub25FbmRlZCk7XG4gICAgICAgICAgX3RoaXMyLnBsYXllci5ldmVudHMuZXJyb3Iub24oX3RoaXMyLnByb3BzLmVycm9yKTtcbiAgICAgICAgICBfdGhpczIucGxheWVyLmV2ZW50cy5wcm9ncmVzcy5vbihmdW5jdGlvbiAoc2Vjb25kcywgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzMi5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgICAgICBfdGhpczIuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczIucHJvcHMub25SZWFkeSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3BsYXknKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwYXVzZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgdGhpcy5jYWxsUGxheWVyKCdwYXVzZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgLy8gTm90aGluZyB0byBkb1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlZWtUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlZWtUbyhzZWNvbmRzKSB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoJ3NlZWsnLCBzZWNvbmRzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWb2x1bWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIC8vIE5vIHZvbHVtZSBzdXBwb3J0XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RHVyYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWNvbmRzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVybCA9IF9wcm9wcy51cmwsXG4gICAgICAgICAgY29uZmlnID0gX3Byb3BzLmNvbmZpZztcblxuICAgICAgdmFyIGlkID0gdXJsLm1hdGNoKE1BVENIX1VSTClbMV07XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICB9O1xuICAgICAgdmFyIHF1ZXJ5ID0gKDAsIF91dGlscy5xdWVyeVN0cmluZykoX2V4dGVuZHMoe30sIGNvbmZpZy5taXhjbG91ZC5vcHRpb25zLCB7XG4gICAgICAgIGZlZWQ6ICcvJyArIGlkICsgJy8nXG4gICAgICB9KSk7XG4gICAgICAvLyBXZSBoYXZlIHRvIGdpdmUgdGhlIGlmcmFtZSBhIGtleSBoZXJlIHRvIHByZXZlbnQgYVxuICAgICAgLy8gd2VpcmQgZGlhbG9nIGFwcGVhcmluZyB3aGVuIGxvYWRpbmcgYSBuZXcgdHJhY2tcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuICAgICAgICBrZXk6IGlkLFxuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHNyYzogJ2h0dHBzOi8vd3d3Lm1peGNsb3VkLmNvbS93aWRnZXQvaWZyYW1lLz8nICsgcXVlcnksXG4gICAgICAgIGZyYW1lQm9yZGVyOiAnMCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNaXhjbG91ZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbk1peGNsb3VkLmRpc3BsYXlOYW1lID0gJ01peGNsb3VkJztcblxuTWl4Y2xvdWQuY2FuUGxheSA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgcmV0dXJuIE1BVENIX1VSTC50ZXN0KHVybCk7XG59O1xuXG5NaXhjbG91ZC5sb29wT25FbmRlZCA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX3NpbmdsZVBsYXllcjJbJ2RlZmF1bHQnXSkoTWl4Y2xvdWQpOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuRmlsZVBsYXllciA9IHVuZGVmaW5lZDtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIgPSByZXF1aXJlKCcuLi9zaW5nbGVQbGF5ZXInKTtcblxudmFyIF9zaW5nbGVQbGF5ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2luZ2xlUGxheWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJT1MgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xudmFyIEFVRElPX0VYVEVOU0lPTlMgPSAvXFwuKG00YXxtcDRhfG1wZ2F8bXAyfG1wMmF8bXAzfG0yYXxtM2F8d2F2fHdlYmF8YWFjfG9nYXxzcHgpKCR8XFw/KS9pO1xudmFyIFZJREVPX0VYVEVOU0lPTlMgPSAvXFwuKG1wNHxvZ1tndl18d2VibXxtb3Z8bTR2KSgkfFxcPykvaTtcbnZhciBITFNfRVhURU5TSU9OUyA9IC9cXC4obTN1OCkoJHxcXD8pL2k7XG52YXIgSExTX1NES19VUkwgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvaGxzLmpzL1ZFUlNJT04vaGxzLm1pbi5qcyc7XG52YXIgSExTX0dMT0JBTCA9ICdIbHMnO1xudmFyIERBU0hfRVhURU5TSU9OUyA9IC9cXC4obXBkKSgkfFxcPykvaTtcbnZhciBEQVNIX1NES19VUkwgPSAnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZGFzaGpzL1ZFUlNJT04vZGFzaC5hbGwubWluLmpzJztcbnZhciBEQVNIX0dMT0JBTCA9ICdkYXNoanMnO1xudmFyIE1BVENIX0RST1BCT1hfVVJMID0gL3d3d1xcLmRyb3Bib3hcXC5jb21cXC8uKy87XG5cbmZ1bmN0aW9uIGNhblBsYXkodXJsKSB7XG4gIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gdXJsW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICB2YXIgaXRlbSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiYgY2FuUGxheShpdGVtKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5QbGF5KGl0ZW0uc3JjKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvclsncmV0dXJuJ10pIHtcbiAgICAgICAgICBfaXRlcmF0b3JbJ3JldHVybiddKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICgoMCwgX3V0aWxzLmlzTWVkaWFTdHJlYW0pKHVybCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gQVVESU9fRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgVklERU9fRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgSExTX0VYVEVOU0lPTlMudGVzdCh1cmwpIHx8IERBU0hfRVhURU5TSU9OUy50ZXN0KHVybCk7XG59XG5cbmZ1bmN0aW9uIGNhbkVuYWJsZVBJUCh1cmwpIHtcbiAgcmV0dXJuIGNhblBsYXkodXJsKSAmJiAhIWRvY3VtZW50LnBpY3R1cmVJblBpY3R1cmVFbmFibGVkICYmICFBVURJT19FWFRFTlNJT05TLnRlc3QodXJsKTtcbn1cblxudmFyIEZpbGVQbGF5ZXIgPSBleHBvcnRzLkZpbGVQbGF5ZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRmlsZVBsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmlsZVBsYXllcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsZVBsYXllcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gRmlsZVBsYXllci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZpbGVQbGF5ZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5vbkRpc2FibGVQSVAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgb25EaXNhYmxlUElQID0gX3RoaXMkcHJvcHMub25EaXNhYmxlUElQLFxuICAgICAgICAgIHBsYXlpbmcgPSBfdGhpcyRwcm9wcy5wbGF5aW5nO1xuXG4gICAgICBvbkRpc2FibGVQSVAoZSk7XG4gICAgICBpZiAocGxheWluZykge1xuICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25TZWVrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uU2VlayhlLnRhcmdldC5jdXJyZW50VGltZSk7XG4gICAgfSwgX3RoaXMubXV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnBsYXllci5tdXRlZCA9IHRydWU7XG4gICAgfSwgX3RoaXMudW5tdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucGxheWVyLm11dGVkID0gZmFsc2U7XG4gICAgfSwgX3RoaXMucmVuZGVyU291cmNlRWxlbWVudCA9IGZ1bmN0aW9uIChzb3VyY2UsIGluZGV4KSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzb3VyY2UnLCB7IGtleTogaW5kZXgsIHNyYzogc291cmNlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KCdzb3VyY2UnLCBfZXh0ZW5kcyh7IGtleTogaW5kZXggfSwgc291cmNlKSk7XG4gICAgfSwgX3RoaXMucmVuZGVyVHJhY2sgPSBmdW5jdGlvbiAodHJhY2ssIGluZGV4KSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoJ3RyYWNrJywgX2V4dGVuZHMoeyBrZXk6IGluZGV4IH0sIHRyYWNrKSk7XG4gICAgfSwgX3RoaXMucmVmID0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgICAgX3RoaXMucGxheWVyID0gcGxheWVyO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZpbGVQbGF5ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICBpZiAoSU9TKSB7XG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZUF1ZGlvKHRoaXMucHJvcHMpICE9PSB0aGlzLnNob3VsZFVzZUF1ZGlvKG5leHRQcm9wcykpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VBdWRpbyh0aGlzLnByb3BzKSAhPT0gdGhpcy5zaG91bGRVc2VBdWRpbyhwcmV2UHJvcHMpKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkTGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25SZWFkeSA9IF9wcm9wcy5vblJlYWR5LFxuICAgICAgICAgIG9uUGxheSA9IF9wcm9wcy5vblBsYXksXG4gICAgICAgICAgb25CdWZmZXIgPSBfcHJvcHMub25CdWZmZXIsXG4gICAgICAgICAgb25CdWZmZXJFbmQgPSBfcHJvcHMub25CdWZmZXJFbmQsXG4gICAgICAgICAgb25QYXVzZSA9IF9wcm9wcy5vblBhdXNlLFxuICAgICAgICAgIG9uRW5kZWQgPSBfcHJvcHMub25FbmRlZCxcbiAgICAgICAgICBvbkVycm9yID0gX3Byb3BzLm9uRXJyb3IsXG4gICAgICAgICAgcGxheXNpbmxpbmUgPSBfcHJvcHMucGxheXNpbmxpbmUsXG4gICAgICAgICAgb25FbmFibGVQSVAgPSBfcHJvcHMub25FbmFibGVQSVA7XG5cbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBvblJlYWR5KTtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXknLCBvblBsYXkpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIG9uQnVmZmVyKTtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCBvbkJ1ZmZlckVuZCk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdwYXVzZScsIG9uUGF1c2UpO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgdGhpcy5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBvbkVuZGVkKTtcbiAgICAgIHRoaXMucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdlbnRlcnBpY3R1cmVpbnBpY3R1cmUnLCBvbkVuYWJsZVBJUCk7XG4gICAgICB0aGlzLnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdsZWF2ZXBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgICBpZiAocGxheXNpbmxpbmUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0QXR0cmlidXRlKCd3ZWJraXQtcGxheXNpbmxpbmUnLCAnJyk7XG4gICAgICAgIHRoaXMucGxheWVyLnNldEF0dHJpYnV0ZSgneDUtcGxheXNpbmxpbmUnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uUmVhZHkgPSBfcHJvcHMyLm9uUmVhZHksXG4gICAgICAgICAgb25QbGF5ID0gX3Byb3BzMi5vblBsYXksXG4gICAgICAgICAgb25CdWZmZXIgPSBfcHJvcHMyLm9uQnVmZmVyLFxuICAgICAgICAgIG9uQnVmZmVyRW5kID0gX3Byb3BzMi5vbkJ1ZmZlckVuZCxcbiAgICAgICAgICBvblBhdXNlID0gX3Byb3BzMi5vblBhdXNlLFxuICAgICAgICAgIG9uRW5kZWQgPSBfcHJvcHMyLm9uRW5kZWQsXG4gICAgICAgICAgb25FcnJvciA9IF9wcm9wczIub25FcnJvcixcbiAgICAgICAgICBvbkVuYWJsZVBJUCA9IF9wcm9wczIub25FbmFibGVQSVA7XG5cbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBvblJlYWR5KTtcbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXknLCBvblBsYXkpO1xuICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2FpdGluZycsIG9uQnVmZmVyKTtcbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCBvbkJ1ZmZlckVuZCk7XG4gICAgICB0aGlzLnBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIG9uUGF1c2UpO1xuICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Vla2VkJywgdGhpcy5vblNlZWspO1xuICAgICAgdGhpcy5wbGF5ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBvbkVuZGVkKTtcbiAgICAgIHRoaXMucGxheWVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICB0aGlzLnBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdlbnRlcnBpY3R1cmVpbnBpY3R1cmUnLCBvbkVuYWJsZVBJUCk7XG4gICAgICB0aGlzLnBsYXllci5yZW1vdmVFdmVudExpc3RlbmVyKCdsZWF2ZXBpY3R1cmVpbnBpY3R1cmUnLCB0aGlzLm9uRGlzYWJsZVBJUCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkVXNlQXVkaW8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRVc2VBdWRpbyhwcm9wcykge1xuICAgICAgaWYgKHByb3BzLmNvbmZpZy5maWxlLmZvcmNlVmlkZW8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzLmNvbmZpZy5maWxlLmF0dHJpYnV0ZXMucG9zdGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gVXNlIDx2aWRlbz4gc28gdGhhdCBwb3N0ZXIgaXMgc2hvd25cbiAgICAgIH1cbiAgICAgIHJldHVybiBBVURJT19FWFRFTlNJT05TLnRlc3QocHJvcHMudXJsKSB8fCBwcm9wcy5jb25maWcuZmlsZS5mb3JjZUF1ZGlvO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZFVzZUhMUycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZFVzZUhMUyh1cmwpIHtcbiAgICAgIHJldHVybiBITFNfRVhURU5TSU9OUy50ZXN0KHVybCkgJiYgIUlPUyB8fCB0aGlzLnByb3BzLmNvbmZpZy5maWxlLmZvcmNlSExTO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZFVzZURBU0gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRVc2VEQVNIKHVybCkge1xuICAgICAgcmV0dXJuIERBU0hfRVhURU5TSU9OUy50ZXN0KHVybCkgfHwgdGhpcy5wcm9wcy5jb25maWcuZmlsZS5mb3JjZURBU0g7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWQodXJsKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyRjb25maWckZmlsZSA9IHRoaXMucHJvcHMuY29uZmlnLmZpbGUsXG4gICAgICAgICAgaGxzVmVyc2lvbiA9IF9wcm9wcyRjb25maWckZmlsZS5obHNWZXJzaW9uLFxuICAgICAgICAgIGRhc2hWZXJzaW9uID0gX3Byb3BzJGNvbmZpZyRmaWxlLmRhc2hWZXJzaW9uO1xuXG4gICAgICBpZiAodGhpcy5zaG91bGRVc2VITFModXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoSExTX1NES19VUkwucmVwbGFjZSgnVkVSU0lPTicsIGhsc1ZlcnNpb24pLCBITFNfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChIbHMpIHtcbiAgICAgICAgICBfdGhpczIuaGxzID0gbmV3IEhscyhfdGhpczIucHJvcHMuY29uZmlnLmZpbGUuaGxzT3B0aW9ucyk7XG4gICAgICAgICAgX3RoaXMyLmhscy5vbihIbHMuRXZlbnRzLkVSUk9SLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICAgICAgX3RoaXMyLnByb3BzLm9uRXJyb3IoZSwgZGF0YSwgX3RoaXMyLmhscywgSGxzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczIuaGxzLmxvYWRTb3VyY2UodXJsKTtcbiAgICAgICAgICBfdGhpczIuaGxzLmF0dGFjaE1lZGlhKF90aGlzMi5wbGF5ZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNob3VsZFVzZURBU0godXJsKSkge1xuICAgICAgICAoMCwgX3V0aWxzLmdldFNESykoREFTSF9TREtfVVJMLnJlcGxhY2UoJ1ZFUlNJT04nLCBkYXNoVmVyc2lvbiksIERBU0hfR0xPQkFMKS50aGVuKGZ1bmN0aW9uIChkYXNoanMpIHtcbiAgICAgICAgICBfdGhpczIuZGFzaCA9IGRhc2hqcy5NZWRpYVBsYXllcigpLmNyZWF0ZSgpO1xuICAgICAgICAgIF90aGlzMi5kYXNoLmluaXRpYWxpemUoX3RoaXMyLnBsYXllciwgdXJsLCBfdGhpczIucHJvcHMucGxheWluZyk7XG4gICAgICAgICAgX3RoaXMyLmRhc2guZ2V0RGVidWcoKS5zZXRMb2dUb0Jyb3dzZXJDb25zb2xlKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh1cmwgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAvLyBXaGVuIHNldHRpbmcgbmV3IHVybHMgKDxzb3VyY2U+KSBvbiBhbiBhbHJlYWR5IGxvYWRlZCB2aWRlbyxcbiAgICAgICAgLy8gSFRNTE1lZGlhRWxlbWVudC5sb2FkKCkgaXMgbmVlZGVkIHRvIHJlc2V0IHRoZSBtZWRpYSBlbGVtZW50XG4gICAgICAgIC8vIGFuZCByZXN0YXJ0IHRoZSBtZWRpYSByZXNvdXJjZS4gSnVzdCByZXBsYWNpbmcgY2hpbGRyZW4gc291cmNlXG4gICAgICAgIC8vIGRvbSBub2RlcyBpcyBub3QgZW5vdWdoXG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc01lZGlhU3RyZWFtKSh1cmwpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3JjT2JqZWN0ID0gdXJsO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlWydjYXRjaCddKHRoaXMucHJvcHMub25FcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncGF1c2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLnBsYXllci5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgaWYgKHRoaXMuaGxzKSB7XG4gICAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhc2gpIHtcbiAgICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2Vla1RvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2Vla1RvKHNlY29uZHMpIHtcbiAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWb2x1bWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICAgIHRoaXMucGxheWVyLnZvbHVtZSA9IGZyYWN0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZVBJUCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZVBJUCgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllci5yZXF1ZXN0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCAhPT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVxdWVzdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlUElQJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZVBJUCgpIHtcbiAgICAgIGlmIChkb2N1bWVudC5leGl0UGljdHVyZUluUGljdHVyZSAmJiBkb2N1bWVudC5waWN0dXJlSW5QaWN0dXJlRWxlbWVudCA9PT0gdGhpcy5wbGF5ZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhpdFBpY3R1cmVJblBpY3R1cmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRQbGF5YmFja1JhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRQbGF5YmFja1JhdGUocmF0ZSkge1xuICAgICAgdGhpcy5wbGF5ZXIucGxheWJhY2tSYXRlID0gcmF0ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXREdXJhdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xuICAgICAgaWYgKCF0aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgX3BsYXllciA9IHRoaXMucGxheWVyLFxuICAgICAgICAgIGR1cmF0aW9uID0gX3BsYXllci5kdXJhdGlvbixcbiAgICAgICAgICBzZWVrYWJsZSA9IF9wbGF5ZXIuc2Vla2FibGU7XG4gICAgICAvLyBvbiBpT1MsIGxpdmUgc3RyZWFtcyByZXR1cm4gSW5maW5pdHkgZm9yIHRoZSBkdXJhdGlvblxuICAgICAgLy8gc28gaW5zdGVhZCB3ZSB1c2UgdGhlIGVuZCBvZiB0aGUgc2Vla2FibGUgdGltZXJhbmdlXG5cbiAgICAgIGlmIChkdXJhdGlvbiA9PT0gSW5maW5pdHkgJiYgc2Vla2FibGUubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gc2Vla2FibGUuZW5kKHNlZWthYmxlLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGR1cmF0aW9uO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEN1cnJlbnRUaW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgICBpZiAoIXRoaXMucGxheWVyKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJyZW50VGltZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWNvbmRzTG9hZGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICAgIGlmICghdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgdmFyIGJ1ZmZlcmVkID0gdGhpcy5wbGF5ZXIuYnVmZmVyZWQ7XG5cbiAgICAgIGlmIChidWZmZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB2YXIgZW5kID0gYnVmZmVyZWQuZW5kKGJ1ZmZlcmVkLmxlbmd0aCAtIDEpO1xuICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgICAgaWYgKGVuZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0U291cmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U291cmNlKHVybCkge1xuICAgICAgdmFyIHVzZUhMUyA9IHRoaXMuc2hvdWxkVXNlSExTKHVybCk7XG4gICAgICB2YXIgdXNlREFTSCA9IHRoaXMuc2hvdWxkVXNlREFTSCh1cmwpO1xuICAgICAgaWYgKHVybCBpbnN0YW5jZW9mIEFycmF5IHx8ICgwLCBfdXRpbHMuaXNNZWRpYVN0cmVhbSkodXJsKSB8fCB1c2VITFMgfHwgdXNlREFTSCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgaWYgKE1BVENIX0RST1BCT1hfVVJMLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gdXJsLnJlcGxhY2UoJ3d3dy5kcm9wYm94LmNvbScsICdkbC5kcm9wYm94dXNlcmNvbnRlbnQuY29tJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB1cmwgPSBfcHJvcHMzLnVybCxcbiAgICAgICAgICBwbGF5aW5nID0gX3Byb3BzMy5wbGF5aW5nLFxuICAgICAgICAgIGxvb3AgPSBfcHJvcHMzLmxvb3AsXG4gICAgICAgICAgY29udHJvbHMgPSBfcHJvcHMzLmNvbnRyb2xzLFxuICAgICAgICAgIG11dGVkID0gX3Byb3BzMy5tdXRlZCxcbiAgICAgICAgICBjb25maWcgPSBfcHJvcHMzLmNvbmZpZyxcbiAgICAgICAgICB3aWR0aCA9IF9wcm9wczMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3Byb3BzMy5oZWlnaHQ7XG5cbiAgICAgIHZhciB1c2VBdWRpbyA9IHRoaXMuc2hvdWxkVXNlQXVkaW8odGhpcy5wcm9wcyk7XG4gICAgICB2YXIgRWxlbWVudCA9IHVzZUF1ZGlvID8gJ2F1ZGlvJyA6ICd2aWRlbyc7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCA9PT0gJ2F1dG8nID8gd2lkdGggOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ID09PSAnYXV0bycgPyBoZWlnaHQgOiAnMTAwJSdcbiAgICAgIH07XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEVsZW1lbnQsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICAgIHNyYzogdGhpcy5nZXRTb3VyY2UodXJsKSxcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgcHJlbG9hZDogJ2F1dG8nLFxuICAgICAgICAgIGF1dG9QbGF5OiBwbGF5aW5nIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICBjb250cm9sczogY29udHJvbHMsXG4gICAgICAgICAgbXV0ZWQ6IG11dGVkLFxuICAgICAgICAgIGxvb3A6IGxvb3BcbiAgICAgICAgfSwgY29uZmlnLmZpbGUuYXR0cmlidXRlcyksXG4gICAgICAgIHVybCBpbnN0YW5jZW9mIEFycmF5ICYmIHVybC5tYXAodGhpcy5yZW5kZXJTb3VyY2VFbGVtZW50KSxcbiAgICAgICAgY29uZmlnLmZpbGUudHJhY2tzLm1hcCh0aGlzLnJlbmRlclRyYWNrKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmlsZVBsYXllcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZpbGVQbGF5ZXIuZGlzcGxheU5hbWUgPSAnRmlsZVBsYXllcic7XG5GaWxlUGxheWVyLmNhblBsYXkgPSBjYW5QbGF5O1xuRmlsZVBsYXllci5jYW5FbmFibGVQSVAgPSBjYW5FbmFibGVQSVA7XG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX3NpbmdsZVBsYXllcjJbJ2RlZmF1bHQnXSkoRmlsZVBsYXllcik7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX1lvdVR1YmUgPSByZXF1aXJlKCcuL1lvdVR1YmUnKTtcblxudmFyIF9Tb3VuZENsb3VkID0gcmVxdWlyZSgnLi9Tb3VuZENsb3VkJyk7XG5cbnZhciBfVmltZW8gPSByZXF1aXJlKCcuL1ZpbWVvJyk7XG5cbnZhciBfRmFjZWJvb2sgPSByZXF1aXJlKCcuL0ZhY2Vib29rJyk7XG5cbnZhciBfU3RyZWFtYWJsZSA9IHJlcXVpcmUoJy4vU3RyZWFtYWJsZScpO1xuXG52YXIgX1dpc3RpYSA9IHJlcXVpcmUoJy4vV2lzdGlhJyk7XG5cbnZhciBfVHdpdGNoID0gcmVxdWlyZSgnLi9Ud2l0Y2gnKTtcblxudmFyIF9EYWlseU1vdGlvbiA9IHJlcXVpcmUoJy4vRGFpbHlNb3Rpb24nKTtcblxudmFyIF9NaXhjbG91ZCA9IHJlcXVpcmUoJy4vTWl4Y2xvdWQnKTtcblxudmFyIF9GaWxlUGxheWVyID0gcmVxdWlyZSgnLi9GaWxlUGxheWVyJyk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFtfWW91VHViZS5Zb3VUdWJlLCBfU291bmRDbG91ZC5Tb3VuZENsb3VkLCBfVmltZW8uVmltZW8sIF9GYWNlYm9vay5GYWNlYm9vaywgX1N0cmVhbWFibGUuU3RyZWFtYWJsZSwgX1dpc3RpYS5XaXN0aWEsIF9Ud2l0Y2guVHdpdGNoLCBfRGFpbHlNb3Rpb24uRGFpbHlNb3Rpb24sIF9NaXhjbG91ZC5NaXhjbG91ZCwgX0ZpbGVQbGF5ZXIuRmlsZVBsYXllcl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSUNPTl9TSVpFID0gJzY0cHgnO1xuXG52YXIgUHJldmlldyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQcmV2aWV3LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQcmV2aWV3KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcmV2aWV3KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBQcmV2aWV3Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHJldmlldykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLm1vdW50ZWQgPSBmYWxzZSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpbWFnZTogbnVsbFxuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFByZXZpZXcsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XG4gICAgICB0aGlzLmZldGNoSW1hZ2UodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB1cmwgPSBfcHJvcHMudXJsLFxuICAgICAgICAgIGxpZ2h0ID0gX3Byb3BzLmxpZ2h0O1xuXG4gICAgICBpZiAodXJsICE9PSBuZXh0UHJvcHMudXJsIHx8IGxpZ2h0ICE9PSBuZXh0UHJvcHMubGlnaHQpIHtcbiAgICAgICAgdGhpcy5mZXRjaEltYWdlKG5leHRQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZldGNoSW1hZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmZXRjaEltYWdlKF9yZWYyKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHVybCA9IF9yZWYyLnVybCxcbiAgICAgICAgICBsaWdodCA9IF9yZWYyLmxpZ2h0O1xuXG4gICAgICBpZiAodHlwZW9mIGxpZ2h0ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IGxpZ2h0IH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2U6IG51bGwgfSk7XG4gICAgICByZXR1cm4gd2luZG93LmZldGNoKCdodHRwczovL25vZW1iZWQuY29tL2VtYmVkP3VybD0nICsgdXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS50aHVtYm5haWxfdXJsICYmIF90aGlzMi5tb3VudGVkKSB7XG4gICAgICAgICAgdmFyIGltYWdlID0gZGF0YS50aHVtYm5haWxfdXJsLnJlcGxhY2UoJ2hlaWdodD0xMDAnLCAnaGVpZ2h0PTQ4MCcpO1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGltYWdlOiBpbWFnZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIG9uQ2xpY2sgPSB0aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLnN0YXRlLmltYWdlO1xuXG4gICAgICB2YXIgZmxleENlbnRlciA9IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICB9O1xuICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgcHJldmlldzogX2V4dGVuZHMoe1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBpbWFnZSA/ICd1cmwoJyArIGltYWdlICsgJyknIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgfSwgZmxleENlbnRlciksXG4gICAgICAgIHNoYWRvdzogX2V4dGVuZHMoe1xuICAgICAgICAgIGJhY2tncm91bmQ6ICdyYWRpYWwtZ3JhZGllbnQocmdiKDAsIDAsIDAsIDAuMyksIHJnYmEoMCwgMCwgMCwgMCkgNjAlKScsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBJQ09OX1NJWkUsXG4gICAgICAgICAgd2lkdGg6IElDT05fU0laRSxcbiAgICAgICAgICBoZWlnaHQ6IElDT05fU0laRVxuICAgICAgICB9LCBmbGV4Q2VudGVyKSxcbiAgICAgICAgcGxheUljb246IHtcbiAgICAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogJzE2cHggMCAxNnB4IDI2cHgnLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUnLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc3cHgnXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBzdHlsZXMucHJldmlldywgY2xhc3NOYW1lOiAncmVhY3QtcGxheWVyX19wcmV2aWV3Jywgb25DbGljazogb25DbGljayB9LFxuICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuc2hhZG93LCBjbGFzc05hbWU6ICdyZWFjdC1wbGF5ZXJfX3NoYWRvdycgfSxcbiAgICAgICAgICBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogc3R5bGVzLnBsYXlJY29uLCBjbGFzc05hbWU6ICdyZWFjdC1wbGF5ZXJfX3BsYXktaWNvbicgfSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUHJldmlldztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByZXZpZXc7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gcmVuZGVyUHJlbG9hZFBsYXllcnM7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9QbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuXG52YXIgX1BsYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QbGF5ZXIpO1xuXG52YXIgX1lvdVR1YmUgPSByZXF1aXJlKCcuL3BsYXllcnMvWW91VHViZScpO1xuXG52YXIgX1NvdW5kQ2xvdWQgPSByZXF1aXJlKCcuL3BsYXllcnMvU291bmRDbG91ZCcpO1xuXG52YXIgX1ZpbWVvID0gcmVxdWlyZSgnLi9wbGF5ZXJzL1ZpbWVvJyk7XG5cbnZhciBfRGFpbHlNb3Rpb24gPSByZXF1aXJlKCcuL3BsYXllcnMvRGFpbHlNb3Rpb24nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgUFJFTE9BRF9QTEFZRVJTID0gW3tcbiAgUGxheWVyOiBfWW91VHViZS5Zb3VUdWJlLFxuICBjb25maWdLZXk6ICd5b3V0dWJlJyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1HbENtQUM0TUhlaydcbn0sIHtcbiAgUGxheWVyOiBfU291bmRDbG91ZC5Tb3VuZENsb3VkLFxuICBjb25maWdLZXk6ICdzb3VuZGNsb3VkJyxcbiAgdXJsOiAnaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9zZXVjaGV1L2pvaG4tY2FnZS00MzMtOC1iaXQtdmVyc2lvbidcbn0sIHtcbiAgUGxheWVyOiBfVmltZW8uVmltZW8sXG4gIGNvbmZpZ0tleTogJ3ZpbWVvJyxcbiAgdXJsOiAnaHR0cHM6Ly92aW1lby5jb20vMzAwOTcwNTA2J1xufSwge1xuICBQbGF5ZXI6IF9EYWlseU1vdGlvbi5EYWlseU1vdGlvbixcbiAgY29uZmlnS2V5OiAnZGFpbHltb3Rpb24nLFxuICB1cmw6ICdodHRwOi8vd3d3LmRhaWx5bW90aW9uLmNvbS92aWRlby94cWRweWsnXG59XTtcblxuZnVuY3Rpb24gcmVuZGVyUHJlbG9hZFBsYXllcnModXJsLCBjb250cm9scywgY29uZmlnKSB7XG4gIHZhciBwbGF5ZXJzID0gW107XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gUFJFTE9BRF9QTEFZRVJTW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIHBsYXllciA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoIXBsYXllci5QbGF5ZXIuY2FuUGxheSh1cmwpICYmIGNvbmZpZ1twbGF5ZXIuY29uZmlnS2V5XS5wcmVsb2FkKSB7XG4gICAgICAgIHBsYXllcnMucHVzaChfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfUGxheWVyMlsnZGVmYXVsdCddLCB7XG4gICAgICAgICAga2V5OiBwbGF5ZXIuUGxheWVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgIGFjdGl2ZVBsYXllcjogcGxheWVyLlBsYXllcixcbiAgICAgICAgICB1cmw6IHBsYXllci51cmwsXG4gICAgICAgICAgY29udHJvbHM6IGNvbnRyb2xzLFxuICAgICAgICAgIHBsYXlpbmc6IHRydWUsXG4gICAgICAgICAgbXV0ZWQ6IHRydWUsXG4gICAgICAgICAgc3R5bGU6IHsgZGlzcGxheTogJ25vbmUnIH1cbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yWydyZXR1cm4nXSkge1xuICAgICAgICBfaXRlcmF0b3JbJ3JldHVybiddKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGxheWVycztcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi9JY29uXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY29udHJvbHMuc2Nzc1wiO1xuXG5jb25zdCBDb250cm9scyA9ICh7XG4gIG9uUGxheVBhdXNlQ2xpY2ssXG4gIHBsYXlpbmcsXG4gIG9uUmVzZWxlY3RGaWxlLFxuICBwcm9jZXNzaW5nLFxuICBvbkVuY29kZSxcbiAgc2hvd0VuY29kZUJ0bixcbiAgY2FuRG93bmxvYWQsXG4gIG9uRG93bmxvYWRcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJ2dC1jb250cm9scy1jb250XCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9XCJydnQtY29udHJvbGxlci1pdGVtXCJcbiAgICAgICAgdGl0bGU9XCJQYXVzZVwiXG4gICAgICAgIG9uQ2xpY2s9e29uUGxheVBhdXNlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIDxJY29uIG5hbWU9e3BsYXlpbmcgPyBcInBhdXNlXCIgOiBcInBsYXlcIn0gLz5cbiAgICAgIDwvYT5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwicnZ0LWNvbnRyb2xsZXItaXRlbVwiXG4gICAgICAgIHRpdGxlPVwiU2VsZWN0IEZpbGVcIlxuICAgICAgICBvbkNsaWNrPXtvblJlc2VsZWN0RmlsZX1cbiAgICAgID5cbiAgICAgICAgPEljb24gbmFtZT1cIm11c2ljXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIHshc2hvd0VuY29kZUJ0biAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicnZ0LWNvbnRyb2xsZXItZHJvcGRvd24gcnZ0LWNvbnRyb2xsZXItbGlzdC13cmFwXCI+XG4gICAgICAgICAge2NhbkRvd25sb2FkID8gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicnZ0LWNvbnRyb2xsZXItaXRlbVwiIG9uQ2xpY2s9e29uRG93bmxvYWR9PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiZG93bmxvYWRcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJydnQtY29udHJvbGxlci1pdGVtXCIgb25DbGljaz17b25FbmNvZGV9PlxuICAgICAgICAgICAgICA8SWNvbiBuYW1lPXtwcm9jZXNzaW5nID8gXCJzcGluXCIgOiBcInJlcGxheVwifSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5GaWxlUGxheWVyID0gZXhwb3J0cy5NaXhjbG91ZCA9IGV4cG9ydHMuRGFpbHlNb3Rpb24gPSBleHBvcnRzLlR3aXRjaCA9IGV4cG9ydHMuV2lzdGlhID0gZXhwb3J0cy5TdHJlYW1hYmxlID0gZXhwb3J0cy5GYWNlYm9vayA9IGV4cG9ydHMuVmltZW8gPSBleHBvcnRzLlNvdW5kQ2xvdWQgPSBleHBvcnRzLllvdVR1YmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfWW91VHViZSA9IHJlcXVpcmUoJy4vcGxheWVycy9Zb3VUdWJlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnWW91VHViZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1lvdVR1YmUpWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX1NvdW5kQ2xvdWQgPSByZXF1aXJlKCcuL3BsYXllcnMvU291bmRDbG91ZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NvdW5kQ2xvdWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Tb3VuZENsb3VkKVsnZGVmYXVsdCddO1xuICB9XG59KTtcblxudmFyIF9WaW1lbyA9IHJlcXVpcmUoJy4vcGxheWVycy9WaW1lbycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ZpbWVvJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVmltZW8pWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX0ZhY2Vib29rID0gcmVxdWlyZSgnLi9wbGF5ZXJzL0ZhY2Vib29rJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRmFjZWJvb2snLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GYWNlYm9vaylbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfU3RyZWFtYWJsZSA9IHJlcXVpcmUoJy4vcGxheWVycy9TdHJlYW1hYmxlJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU3RyZWFtYWJsZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N0cmVhbWFibGUpWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX1dpc3RpYSA9IHJlcXVpcmUoJy4vcGxheWVycy9XaXN0aWEnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdXaXN0aWEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9XaXN0aWEpWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX1R3aXRjaCA9IHJlcXVpcmUoJy4vcGxheWVycy9Ud2l0Y2gnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdUd2l0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2l0Y2gpWydkZWZhdWx0J107XG4gIH1cbn0pO1xuXG52YXIgX0RhaWx5TW90aW9uID0gcmVxdWlyZSgnLi9wbGF5ZXJzL0RhaWx5TW90aW9uJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRGFpbHlNb3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EYWlseU1vdGlvbilbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfTWl4Y2xvdWQgPSByZXF1aXJlKCcuL3BsYXllcnMvTWl4Y2xvdWQnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNaXhjbG91ZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01peGNsb3VkKVsnZGVmYXVsdCddO1xuICB9XG59KTtcblxudmFyIF9GaWxlUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXJzL0ZpbGVQbGF5ZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGaWxlUGxheWVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmlsZVBsYXllcilbJ2RlZmF1bHQnXTtcbiAgfVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wczIgPSByZXF1aXJlKCcuL3Byb3BzJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBfcGxheWVycyA9IHJlcXVpcmUoJy4vcGxheWVycycpO1xuXG52YXIgX3BsYXllcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGxheWVycyk7XG5cbnZhciBfUGxheWVyNCA9IHJlcXVpcmUoJy4vUGxheWVyJyk7XG5cbnZhciBfUGxheWVyNSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BsYXllcjQpO1xuXG52YXIgX1ByZXZpZXcgPSByZXF1aXJlKCcuL1ByZXZpZXcnKTtcblxudmFyIF9QcmV2aWV3MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ByZXZpZXcpO1xuXG52YXIgX3ByZWxvYWQgPSByZXF1aXJlKCcuL3ByZWxvYWQnKTtcblxudmFyIF9wcmVsb2FkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWxvYWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTVVBQT1JURURfUFJPUFMgPSBPYmplY3Qua2V5cyhfcHJvcHMyLnByb3BUeXBlcyk7XG5cbnZhciBjdXN0b21QbGF5ZXJzID0gW107XG5cbnZhciBSZWFjdFBsYXllciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSZWFjdFBsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVhY3RQbGF5ZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlYWN0UGxheWVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBSZWFjdFBsYXllci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0UGxheWVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY29uZmlnID0gKDAsIF91dGlscy5nZXRDb25maWcpKF90aGlzLnByb3BzLCBfcHJvcHMyLmRlZmF1bHRQcm9wcywgdHJ1ZSksIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1ByZXZpZXc6ICEhX3RoaXMucHJvcHMubGlnaHRcbiAgICB9LCBfdGhpcy5vbkNsaWNrUHJldmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc2hvd1ByZXZpZXc6IGZhbHNlIH0pO1xuICAgIH0sIF90aGlzLmdldER1cmF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzLnBsYXllci5nZXREdXJhdGlvbigpO1xuICAgIH0sIF90aGlzLmdldEN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wbGF5ZXIpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzLnBsYXllci5nZXRDdXJyZW50VGltZSgpO1xuICAgIH0sIF90aGlzLmdldFNlY29uZHNMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gX3RoaXMucGxheWVyLmdldFNlY29uZHNMb2FkZWQoKTtcbiAgICB9LCBfdGhpcy5nZXRJbnRlcm5hbFBsYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdwbGF5ZXInO1xuXG4gICAgICBpZiAoIV90aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gX3RoaXMucGxheWVyLmdldEludGVybmFsUGxheWVyKGtleSk7XG4gICAgfSwgX3RoaXMuc2Vla1RvID0gZnVuY3Rpb24gKGZyYWN0aW9uLCB0eXBlKSB7XG4gICAgICBpZiAoIV90aGlzLnBsYXllcikgcmV0dXJuIG51bGw7XG4gICAgICBfdGhpcy5wbGF5ZXIuc2Vla1RvKGZyYWN0aW9uLCB0eXBlKTtcbiAgICB9LCBfdGhpcy5vblJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucHJvcHMub25SZWFkeShfdGhpcyk7XG4gICAgfSwgX3RoaXMud3JhcHBlclJlZiA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICBfdGhpcy53cmFwcGVyID0gd3JhcHBlcjtcbiAgICB9LCBfdGhpcy5hY3RpdmVQbGF5ZXJSZWYgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gICAgICBfdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUmVhY3RQbGF5ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByb2dyZXNzRnJlcXVlbmN5KSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJ1JlYWN0UGxheWVyOiAlY3Byb2dyZXNzRnJlcXVlbmN5JWMgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAlY3Byb2dyZXNzSW50ZXJ2YWwlYyBpbnN0ZWFkJztcbiAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2UsICdmb250LXdlaWdodDogYm9sZCcsICcnLCAnZm9udC13ZWlnaHQ6IGJvbGQnLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICByZXR1cm4gISgwLCBfdXRpbHMuaXNFcXVhbCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF91dGlscy5pc0VxdWFsKSh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5jb25maWcgPSAoMCwgX3V0aWxzLmdldENvbmZpZykobmV4dFByb3BzLCBfcHJvcHMyLmRlZmF1bHRQcm9wcyk7XG4gICAgICBpZiAoIXRoaXMucHJvcHMubGlnaHQgJiYgbmV4dFByb3BzLmxpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UHJldmlldzogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRBY3RpdmVQbGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVQbGF5ZXIodXJsKSB7XG4gICAgICB2YXIgX2FyciA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY3VzdG9tUGxheWVycyksIF90b0NvbnN1bWFibGVBcnJheShfcGxheWVyczJbJ2RlZmF1bHQnXSkpO1xuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIF9QbGF5ZXIgPSBfYXJyW19pXTtcbiAgICAgICAgaWYgKF9QbGF5ZXIuY2FuUGxheSh1cmwpKSB7XG4gICAgICAgICAgcmV0dXJuIF9QbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEZhbGwgYmFjayB0byBGaWxlUGxheWVyIGlmIG5vdGhpbmcgZWxzZSBjYW4gcGxheSB0aGUgVVJMXG4gICAgICByZXR1cm4gX0ZpbGVQbGF5ZXIuRmlsZVBsYXllcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXJBY3RpdmVQbGF5ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJBY3RpdmVQbGF5ZXIodXJsLCBhY3RpdmVQbGF5ZXIpIHtcbiAgICAgIGlmICghdXJsKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfUGxheWVyNVsnZGVmYXVsdCddLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICBrZXk6IGFjdGl2ZVBsYXllci5kaXNwbGF5TmFtZSxcbiAgICAgICAgcmVmOiB0aGlzLmFjdGl2ZVBsYXllclJlZixcbiAgICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgICAgYWN0aXZlUGxheWVyOiBhY3RpdmVQbGF5ZXIsXG4gICAgICAgIG9uUmVhZHk6IHRoaXMub25SZWFkeVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NvcnRQbGF5ZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc29ydFBsYXllcnMoYSwgYikge1xuICAgICAgLy8gUmV0YWluIHBsYXllciBvcmRlciB0byBwcmV2ZW50IHdlaXJkIGlmcmFtZSBiZWhhdmlvdXIgd2hlbiBzd2l0Y2hpbmcgcGxheWVyc1xuICAgICAgaWYgKGEgJiYgYikge1xuICAgICAgICByZXR1cm4gYS5rZXkgPCBiLmtleSA/IC0xIDogMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHVybCA9IF9wcm9wcy51cmwsXG4gICAgICAgICAgY29udHJvbHMgPSBfcHJvcHMuY29udHJvbHMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgd2lkdGggPSBfcHJvcHMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0ID0gX3Byb3BzLmhlaWdodCxcbiAgICAgICAgICBsaWdodCA9IF9wcm9wcy5saWdodCxcbiAgICAgICAgICBXcmFwcGVyID0gX3Byb3BzLndyYXBwZXI7XG5cbiAgICAgIHZhciBzaG93UHJldmlldyA9IHRoaXMuc3RhdGUuc2hvd1ByZXZpZXcgJiYgdXJsO1xuICAgICAgdmFyIG90aGVyUHJvcHMgPSAoMCwgX3V0aWxzLm9taXQpKHRoaXMucHJvcHMsIFNVUFBPUlRFRF9QUk9QUywgX3Byb3BzMi5ERVBSRUNBVEVEX0NPTkZJR19QUk9QUyk7XG4gICAgICB2YXIgYWN0aXZlUGxheWVyID0gdGhpcy5nZXRBY3RpdmVQbGF5ZXIodXJsKTtcbiAgICAgIHZhciByZW5kZXJlZEFjdGl2ZVBsYXllciA9IHRoaXMucmVuZGVyQWN0aXZlUGxheWVyKHVybCwgYWN0aXZlUGxheWVyKTtcbiAgICAgIHZhciBwcmVsb2FkUGxheWVycyA9ICgwLCBfcHJlbG9hZDJbJ2RlZmF1bHQnXSkodXJsLCBjb250cm9scywgdGhpcy5jb25maWcpO1xuICAgICAgdmFyIHBsYXllcnMgPSBbcmVuZGVyZWRBY3RpdmVQbGF5ZXJdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkocHJlbG9hZFBsYXllcnMpKS5zb3J0KHRoaXMuc29ydFBsYXllcnMpO1xuICAgICAgdmFyIHByZXZpZXcgPSBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChfUHJldmlldzJbJ2RlZmF1bHQnXSwgeyB1cmw6IHVybCwgbGlnaHQ6IGxpZ2h0LCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tQcmV2aWV3IH0pO1xuICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgICBXcmFwcGVyLFxuICAgICAgICBfZXh0ZW5kcyh7IHJlZjogdGhpcy53cmFwcGVyUmVmLCBzdHlsZTogX2V4dGVuZHMoe30sIHN0eWxlLCB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkgfSwgb3RoZXJQcm9wcyksXG4gICAgICAgIHNob3dQcmV2aWV3ID8gcHJldmlldyA6IHBsYXllcnNcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlYWN0UGxheWVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUmVhY3RQbGF5ZXIuYWRkQ3VzdG9tUGxheWVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICBjdXN0b21QbGF5ZXJzLnB1c2gocGxheWVyKTtcbn07XG5cblJlYWN0UGxheWVyLnJlbW92ZUN1c3RvbVBsYXllcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGN1c3RvbVBsYXllcnMgPSBbXTtcbn07XG5cblJlYWN0UGxheWVyLmRpc3BsYXlOYW1lID0gJ1JlYWN0UGxheWVyJztcblJlYWN0UGxheWVyLnByb3BUeXBlcyA9IF9wcm9wczIucHJvcFR5cGVzO1xuUmVhY3RQbGF5ZXIuZGVmYXVsdFByb3BzID0gX3Byb3BzMi5kZWZhdWx0UHJvcHM7XG5cblJlYWN0UGxheWVyLmNhblBsYXkgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBfYXJyMiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY3VzdG9tUGxheWVycyksIF90b0NvbnN1bWFibGVBcnJheShfcGxheWVyczJbJ2RlZmF1bHQnXSkpO1xuXG4gIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IF9hcnIyLmxlbmd0aDsgX2kyKyspIHtcbiAgICB2YXIgX1BsYXllcjIgPSBfYXJyMltfaTJdO1xuICAgIGlmIChfUGxheWVyMi5jYW5QbGF5KHVybCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5SZWFjdFBsYXllci5jYW5FbmFibGVQSVAgPSBmdW5jdGlvbiAodXJsKSB7XG4gIHZhciBfYXJyMyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY3VzdG9tUGxheWVycyksIF90b0NvbnN1bWFibGVBcnJheShfcGxheWVyczJbJ2RlZmF1bHQnXSkpO1xuXG4gIGZvciAodmFyIF9pMyA9IDA7IF9pMyA8IF9hcnIzLmxlbmd0aDsgX2kzKyspIHtcbiAgICB2YXIgX1BsYXllcjMgPSBfYXJyM1tfaTNdO1xuICAgIGlmIChfUGxheWVyMy5jYW5FbmFibGVQSVAgJiYgX1BsYXllcjMuY2FuRW5hYmxlUElQKHVybCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBSZWFjdFBsYXllcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSBcInJlYWN0LXBsYXllclwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3BsYXllci5zY3NzXCI7XG5pbXBvcnQgeyBmb3JtYXRTZWNvbmRzLCBub29wLCBsZWZ0WmVybyB9IGZyb20gXCIuLi9saWJzL3V0aWxzXCI7XG5cbmNsYXNzIFZpZGVvUGxheWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcGxheWluZzogdGhpcy5wcm9wcy5wbGF5VmlkZW8gfHwgZmFsc2VcbiAgfTtcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGNvbnN0IG5ld1RpbWVSYW5nZSA9IG5ld1Byb3BzLnRpbWVSYW5nZTtcbiAgICBjb25zdCBvbGRUaW1lUmFuZ2UgPSB0aGlzLnByb3BzLnRpbWVSYW5nZTtcbiAgICBjb25zdCBjYW5TZWVrID1cbiAgICAgIChvbGRUaW1lUmFuZ2UgJiYgbmV3VGltZVJhbmdlLnN0YXJ0ICE9PSBvbGRUaW1lUmFuZ2Uuc3RhcnQpIHx8XG4gICAgICAoIW9sZFRpbWVSYW5nZSAmJiBuZXdUaW1lUmFuZ2Uuc3RhcnQgPiAwKTtcbiAgICBpZiAoY2FuU2Vlaykge1xuICAgICAgY29uc29sZS5sb2coeyBjYW5TZWVrIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBsYXlpbmc6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKG5ld1RpbWVSYW5nZS5zdGFydCwgXCJzZWNvbmRzXCIpO1xuICAgIH1cbiAgICBpZiAobmV3UHJvcHMucGxheVZpZGVvICE9PSB0aGlzLnByb3BzLnBsYXlWaWRlbykge1xuICAgICAgY29uc29sZS5sb2coXCJQbGF5aW5nIENoYW5nZWRcIik7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGxheWluZzogbmV3UHJvcHMucGxheVZpZGVvIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVQbGF5ZXJQcm9ncmVzcyA9IGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLmxvYWRlZCkge1xuICAgICAgY29uc3QgeyBwbGF5ZWRTZWNvbmRzIH0gPSBkYXRhO1xuICAgICAgY29uc3Qgc3RhcnRUaW1lUmFuZ2UgPSB0aGlzLnByb3BzLnRpbWVSYW5nZS5zdGFydDtcbiAgICAgIGNvbnN0IGVuZFRpbWVSYW5nZSA9IHRoaXMucHJvcHMudGltZVJhbmdlLmVuZDtcbiAgICAgIGNvbnN0IHBsYXllZFNlY29uZHNJc0xvd2VyVGhhblN0YXJ0VGltZSA9IHBsYXllZFNlY29uZHMgPD0gc3RhcnRUaW1lUmFuZ2U7XG4gICAgICBjb25zdCBwbGF5ZWRTZWNvbmRzSXNHcmVhdGVyVGhhbkVuZFRpbWUgPSBwbGF5ZWRTZWNvbmRzID49IGVuZFRpbWVSYW5nZTtcbiAgICAgIGlmIChwbGF5ZWRTZWNvbmRzSXNMb3dlclRoYW5TdGFydFRpbWUpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2Vla1RvKHN0YXJ0VGltZVJhbmdlLCBcInNlY29uZHNcIik7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVkU2Vjb25kc0lzR3JlYXRlclRoYW5FbmRUaW1lKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnNlZWtUbyhzdGFydFRpbWVSYW5nZSwgXCJzZWNvbmRzXCIpO1xuICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgcGxheWluZzogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5wcm9wcy5vblBsYXllclByb2dyZXNzIHx8IG5vb3A7XG4gICAgICBoYW5kbGVyKHBsYXllZFNlY29uZHMpO1xuICAgIH1cbiAgfTtcbiAgZGlzcGxheVNlY29uZHMoc2Vjb25kcykge1xuICAgIHJldHVybiBzZWNvbmRzLnRvRml4ZWQoMikgKyBcInNcIjtcbiAgfVxuICBoYW5kbGVPblBhdXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnByb3BzLm9uUGxheWVyUGF1c2UgfHwgbm9vcDtcbiAgICBoYW5kbGVyKCk7XG4gIH07XG4gIGhhbmRsZU9uUGxheSA9ICgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5wcm9wcy5vblBsYXllclBsYXkgfHwgbm9vcDtcbiAgICBoYW5kbGVyKCk7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJydnQtcGxheWVyLWNvbnRcIiBvbkNvbnRleHRNZW51PXsoKSA9PiB7fX0+XG4gICAgICAgIHsvKiA8dmlkZW8gc3JjPXtwcm9wcy5zcmN9IGNvbnRyb2xzPXtmYWxzZX0gLz4gKi99XG4gICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgIG9uUGxheT17dGhpcy5oYW5kbGVPblBhdXNlfVxuICAgICAgICAgIG9uUGxheT17dGhpcy5oYW5kbGVPblBsYXl9XG4gICAgICAgICAgb25Qcm9ncmVzcz17dGhpcy5oYW5kbGVQbGF5ZXJQcm9ncmVzc31cbiAgICAgICAgICB1cmw9e3RoaXMucHJvcHMuc3JjfVxuICAgICAgICAgIHJlZj17ZWwgPT4gKHRoaXMucGxheWVyID0gZWwpfVxuICAgICAgICAgIHBsYXlpbmc9e3RoaXMuc3RhdGUucGxheWluZ31cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJydnQtcGxheWVyLXRpbWUtcmFuZ2UtY29udFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ2dC1wbGF5ZXItdGltZS1yYW5nZVwiPlxuICAgICAgICAgICAgRnJvbTp7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPnt0aGlzLmRpc3BsYXlTZWNvbmRzKHRoaXMucHJvcHMudGltZVJhbmdlLnN0YXJ0KX08L3N0cm9uZz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnZ0LXBsYXllci10aW1lLXJhbmdlXCI+XG4gICAgICAgICAgICBUbzogPHN0cm9uZz57dGhpcy5kaXNwbGF5U2Vjb25kcyh0aGlzLnByb3BzLnRpbWVSYW5nZS5lbmQpfTwvc3Ryb25nPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9kcmFnZ2VyLnNjc3NcIjtcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2VyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIF9zY3JlZW5YID0gbnVsbDtcbiAgX3NjcmVlblkgPSBudWxsO1xuICBfb3ggPSBudWxsO1xuICBfb3kgPSBudWxsO1xuXG4gIGhhbmRsZU1vdXNlRG93biA9IGUgPT4ge1xuICAgIHRoaXMuX3NjcmVlblggPSBlLnNjcmVlblg7XG4gICAgdGhpcy5fc2NyZWVuWSA9IGUuc2NyZWVuWTtcbiAgICB0aGlzLl9veCA9IHRoaXMucHJvcHMueDtcbiAgICB0aGlzLl9veSA9IHRoaXMucHJvcHMueTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMuaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcCwgZmFsc2UpO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuICAgIHRoaXMucHJvcHMub25EcmFnKHtcbiAgICAgIHg6IGUuc2NyZWVuWCAtIHRoaXMuX3NjcmVlblggKyB0aGlzLl9veCxcbiAgICAgIHk6IGUuc2NyZWVuWSAtIHRoaXMuX3NjcmVlblkgKyB0aGlzLl9veVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLnByb3BzLm9uRHJhZ1N0b3AgfHwgKCgpID0+IHt9KTtcbiAgICBoYW5kbGVyKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17XCJydnQtZHJhZ2dlciBcIiArIHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8IFwiXCJ9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLmhhbmRsZU1vdXNlRG93bn1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBsZWZ0OiB0aGlzLnByb3BzLnggKyBcInB4XCIsXG4gICAgICAgICAgdG9wOiB0aGlzLnByb3BzLnkgKyBcInB4XCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkRyYWcoKSB7fSxcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgeTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkRyYWc6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnRcbiAgfTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHJhZ2dlciBmcm9tIFwiLi9EcmFnZ2VyXCI7XG5pbXBvcnQgeyBub29wLCBmb3JtYXRTZWNvbmRzLCBsZWZ0WmVybyB9IGZyb20gXCIuLi9saWJzL3V0aWxzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy90cmltbWVyLnNjc3NcIjtcblxuY29uc3QgVHJpbW1lck92ZXJMYXkgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicnZ0LXRyaW1tZXJcIlxuICAgICAgc3R5bGU9e3sgd2lkdGg6IHByb3BzLndpZHRoLCBsZWZ0OiBwcm9wcy5sZWZ0LCByaWdodDogcHJvcHMucmlnaHQgfX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgVGltZVN0YW1wID0gcHJvcHMgPT4ge1xuICBjb25zdCBmb3JtYXRlZCA9IGZvcm1hdFNlY29uZHMocHJvcHMudGltZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJydnQtcGxheWVyLWN1cnNvci1jdXJyZW50XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJydnQtcGxheWVyLW51bVwiPntmb3JtYXRlZFswXX08L3NwYW4+J1xuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicnZ0LXBsYXllci1udW1cIj57Zm9ybWF0ZWRbMV19PC9zcGFuPi5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJ2dC1wbGF5ZXItbnVtXCI+e2xlZnRaZXJvKGZvcm1hdGVkWzJdLCAyKX08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jbGFzcyBUcmltbWVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHBvczJUaW1lID0gcG9zID0+IHtcbiAgICByZXR1cm4gcG9zIC8gdGhpcy5wcm9wcy53aWR0aER1cmF0aW9uUmF0aW87XG4gIH07XG5cbiAgdGltZTJwb3MgPSB0aW1lID0+IHtcbiAgICByZXR1cm4gdGltZSAqIHRoaXMucHJvcHMud2lkdGhEdXJhdGlvblJhdGlvO1xuICB9O1xuXG4gIGtlZXBJblJhbmdlID0geCA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSB0aGlzLnByb3BzLmNvbnRhaW5lcldpZHRoO1xuICAgIGlmICh4IDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKHggPiBjb250YWluZXJXaWR0aCkge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcldpZHRoO1xuICAgIH1cblxuICAgIHJldHVybiB4O1xuICB9O1xuXG4gIGhhbmRsZURyYWdTdGFydCA9IHBvcyA9PiB7XG4gICAgY29uc3QgcG9zMlRpbWUgPSB0aGlzLnBvczJUaW1lKHRoaXMua2VlcEluUmFuZ2UocG9zLngpKTtcbiAgICBsZXQgdGltZSA9IHBvczJUaW1lO1xuICAgIHRoaXMucHJvcHMub25TdGFydFRpbWVDaGFuZ2UodGltZSk7XG4gIH07XG4gIGhhbmRsZURyYWdFbmQgPSBwb3MgPT4ge1xuICAgIGNvbnN0IHBvczJUaW1lID0gdGhpcy5wb3MyVGltZSh0aGlzLmtlZXBJblJhbmdlKHBvcy54KSk7XG4gICAgbGV0IHRpbWUgPSBwb3MyVGltZTtcbiAgICB0aGlzLnByb3BzLm9uRW5kVGltZUNoYW5nZSh0aW1lKTtcbiAgfTtcbiAgaGFuZGxlRHJhZ1N0b3AgPSAoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IHRoaXMucHJvcHMub25HZXREYXRhIHx8IG5vb3A7XG4gICAgaGFuZGxlcih7IHN0YXJ0OiB0aGlzLnByb3BzLnN0YXJ0VGltZSwgZW5kOiB0aGlzLnByb3BzLmVuZFRpbWUgfSk7XG4gIH07XG4gIGdldFRyaW1tZXJXaWR0aCA9IHdpZHRoID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb250YWluZXJXaWR0aCAtIHdpZHRoO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLnRpbWUycG9zKHRoaXMucHJvcHMuc3RhcnRUaW1lKTtcbiAgICBjb25zdCBlbmQgPSB0aGlzLnRpbWUycG9zKHRoaXMucHJvcHMuZW5kVGltZSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFRyaW1tZXJPdmVyTGF5IGxlZnQ9ezB9IHdpZHRoPXtzdGFydH0gLz5cbiAgICAgICAgPERyYWdnZXJcbiAgICAgICAgICB4PXtzdGFydH1cbiAgICAgICAgICBvbkRyYWc9e3RoaXMuaGFuZGxlRHJhZ1N0YXJ0fVxuICAgICAgICAgIG9uRHJhZ1N0b3A9e3RoaXMuaGFuZGxlRHJhZ1N0b3B9XG4gICAgICAgID5cbiAgICAgICAgICA8VGltZVN0YW1wIHRpbWU9e3RoaXMucHJvcHMuc3RhcnRUaW1lfSAvPlxuICAgICAgICA8L0RyYWdnZXI+XG4gICAgICAgIDxEcmFnZ2VyXG4gICAgICAgICAgeD17ZW5kfVxuICAgICAgICAgIG9uRHJhZz17dGhpcy5oYW5kbGVEcmFnRW5kfVxuICAgICAgICAgIG9uRHJhZ1N0b3A9e3RoaXMuaGFuZGxlRHJhZ1N0b3B9XG4gICAgICAgID5cbiAgICAgICAgICA8VGltZVN0YW1wIHRpbWU9e3RoaXMucHJvcHMuZW5kVGltZX0gLz5cbiAgICAgICAgPC9EcmFnZ2VyPlxuICAgICAgICA8VHJpbW1lck92ZXJMYXkgcmlnaHQ9ezB9IHdpZHRoPXt0aGlzLmdldFRyaW1tZXJXaWR0aChlbmQpfSAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1RyaW1tZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgc3RhcnQ6IDAsXG4gICAgZW5kOiAwXG4gIH07XG4gIGdldCB3aWR0aER1cmF0aW9uUmF0aW8oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyV2lkdGggLyB0aGlzLnByb3BzLmR1cmF0aW9uO1xuICB9XG4gIGdldCBjb250YWluZXJXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cblxuICBoYW5kbGVTdGFydFRpbWVDaGFuZ2UgPSB0aW1lID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnQ6IHRpbWUgfSk7XG4gIH07XG4gIGhhbmRsZUdldFRyaW1EYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHRyaW1tZXJIYW5kbGVyID0gdGhpcy5wcm9wcy5vblRyaW0gfHwgbm9vcDtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT5cbiAgICAgICAgdHJpbW1lckhhbmRsZXIoe1xuICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXRlLnN0YXJ0IHx8IHRoaXMucHJvcHMudGltZVJhbmdlLnN0YXJ0LFxuICAgICAgICAgIGVuZDogdGhpcy5zdGF0ZS5lbmQgfHwgdGhpcy5wcm9wcy50aW1lUmFuZ2UuZW5kXG4gICAgICAgIH0pLFxuICAgICAgMjAwXG4gICAgKTtcbiAgfTtcbiAgaGFuZGxlRW5kVGltZUNoYW5nZSA9IHRpbWUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlbmQ6IHRpbWUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ2dC10cmltbWVyLWNvbnRcIiByZWY9e2UgPT4gKHRoaXMuY29udGFpbmVyUmVmID0gZSl9PlxuICAgICAgICB7dGhpcy5wcm9wcy5zaG93VHJpbW1lciAmJiAoXG4gICAgICAgICAgPFRyaW1tZXJcbiAgICAgICAgICAgIG9uU3RhcnRUaW1lQ2hhbmdlPXt0aGlzLmhhbmRsZVN0YXJ0VGltZUNoYW5nZX1cbiAgICAgICAgICAgIG9uRW5kVGltZUNoYW5nZT17dGhpcy5oYW5kbGVFbmRUaW1lQ2hhbmdlfVxuICAgICAgICAgICAgd2lkdGhEdXJhdGlvblJhdGlvPXt0aGlzLndpZHRoRHVyYXRpb25SYXRpb31cbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoPXt0aGlzLmNvbnRhaW5lcldpZHRofVxuICAgICAgICAgICAgc3RhcnRUaW1lPXt0aGlzLnN0YXRlLnN0YXJ0IHx8IHRoaXMucHJvcHMudGltZVJhbmdlLnN0YXJ0fVxuICAgICAgICAgICAgZW5kVGltZT17dGhpcy5zdGF0ZS5lbmQgfHwgdGhpcy5wcm9wcy50aW1lUmFuZ2UuZW5kfVxuICAgICAgICAgICAgb25HZXREYXRhPXt0aGlzLmhhbmRsZUdldFRyaW1EYXRhfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvVHJpbW1lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbWFpbjtcblxuLy8gVGhpcyBjb25zdHJ1Y3RvciBpcyB1c2VkIHRvIHN0b3JlIGV2ZW50IGhhbmRsZXJzLiBJbnN0YW50aWF0aW5nIHRoaXMgaXNcbi8vIGZhc3RlciB0aGFuIGV4cGxpY2l0bHkgY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgdG8gZ2V0IGEgXCJjbGVhblwiIGVtcHR5XG4vLyBvYmplY3QgKHRlc3RlZCB3aXRoIHY4IHY0LjkpLlxuZnVuY3Rpb24gRXZlbnRIYW5kbGVycygpIHt9XG5FdmVudEhhbmRsZXJzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcbmV4cG9ydCB7RXZlbnRFbWl0dGVyfTtcblxuLy8gbm9kZWpzIG9kZGl0eVxuLy8gcmVxdWlyZSgnZXZlbnRzJykgPT09IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlclxuXG5FdmVudEVtaXR0ZXIudXNpbmdEb21haW5zID0gZmFsc2U7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZG9tYWluID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG5FdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmRvbWFpbiA9IG51bGw7XG4gIGlmIChFdmVudEVtaXR0ZXIudXNpbmdEb21haW5zKSB7XG4gICAgLy8gaWYgdGhlcmUgaXMgYW4gYWN0aXZlIGRvbWFpbiwgdGhlbiBhdHRhY2ggdG8gaXQuXG4gICAgaWYgKGRvbWFpbi5hY3RpdmUgJiYgISh0aGlzIGluc3RhbmNlb2YgZG9tYWluLkRvbWFpbikpIHtcbiAgICAgIHRoaXMuZG9tYWluID0gZG9tYWluLmFjdGl2ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcnMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcIm5cIiBhcmd1bWVudCBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbi8vIFRoZXNlIHN0YW5kYWxvbmUgZW1pdCogZnVuY3Rpb25zIGFyZSB1c2VkIHRvIG9wdGltaXplIGNhbGxpbmcgb2YgZXZlbnRcbi8vIGhhbmRsZXJzIGZvciBmYXN0IGNhc2VzIGJlY2F1c2UgZW1pdCgpIGl0c2VsZiBvZnRlbiBoYXMgYSB2YXJpYWJsZSBudW1iZXIgb2Zcbi8vIGFyZ3VtZW50cyBhbmQgY2FuIGJlIGRlb3B0aW1pemVkIGJlY2F1c2Ugb2YgdGhhdC4gVGhlc2UgZnVuY3Rpb25zIGFsd2F5cyBoYXZlXG4vLyB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFuZCB0aHVzIGRvIG5vdCBnZXQgZGVvcHRpbWl6ZWQsIHNvIHRoZSBjb2RlXG4vLyBpbnNpZGUgdGhlbSBjYW4gZXhlY3V0ZSBmYXN0ZXIuXG5mdW5jdGlvbiBlbWl0Tm9uZShoYW5kbGVyLCBpc0ZuLCBzZWxmKSB7XG4gIGlmIChpc0ZuKVxuICAgIGhhbmRsZXIuY2FsbChzZWxmKTtcbiAgZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIGxpc3RlbmVyc1tpXS5jYWxsKHNlbGYpO1xuICB9XG59XG5mdW5jdGlvbiBlbWl0T25lKGhhbmRsZXIsIGlzRm4sIHNlbGYsIGFyZzEpIHtcbiAgaWYgKGlzRm4pXG4gICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZzEpO1xuICBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgbGlzdGVuZXJzW2ldLmNhbGwoc2VsZiwgYXJnMSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVtaXRUd28oaGFuZGxlciwgaXNGbiwgc2VsZiwgYXJnMSwgYXJnMikge1xuICBpZiAoaXNGbilcbiAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJnMSwgYXJnMik7XG4gIGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBsaXN0ZW5lcnNbaV0uY2FsbChzZWxmLCBhcmcxLCBhcmcyKTtcbiAgfVxufVxuZnVuY3Rpb24gZW1pdFRocmVlKGhhbmRsZXIsIGlzRm4sIHNlbGYsIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgaWYgKGlzRm4pXG4gICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgbGlzdGVuZXJzW2ldLmNhbGwoc2VsZiwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdE1hbnkoaGFuZGxlciwgaXNGbiwgc2VsZiwgYXJncykge1xuICBpZiAoaXNGbilcbiAgICBoYW5kbGVyLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgZXZlbnRzLCBkb21haW47XG4gIHZhciBuZWVkRG9tYWluRXhpdCA9IGZhbHNlO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PSBudWxsKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGRvbWFpbiA9IHRoaXMuZG9tYWluO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICBpZiAoZG9tYWluKSB7XG4gICAgICBpZiAoIWVyKVxuICAgICAgICBlciA9IG5ldyBFcnJvcignVW5jYXVnaHQsIHVuc3BlY2lmaWVkIFwiZXJyb3JcIiBldmVudCcpO1xuICAgICAgZXIuZG9tYWluRW1pdHRlciA9IHRoaXM7XG4gICAgICBlci5kb21haW4gPSBkb21haW47XG4gICAgICBlci5kb21haW5UaHJvd24gPSBmYWxzZTtcbiAgICAgIGRvbWFpbi5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICB9IGVsc2UgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKCFoYW5kbGVyKVxuICAgIHJldHVybiBmYWxzZTtcblxuICB2YXIgaXNGbiA9IHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nO1xuICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICBzd2l0Y2ggKGxlbikge1xuICAgIC8vIGZhc3QgY2FzZXNcbiAgICBjYXNlIDE6XG4gICAgICBlbWl0Tm9uZShoYW5kbGVyLCBpc0ZuLCB0aGlzKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGVtaXRPbmUoaGFuZGxlciwgaXNGbiwgdGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGVtaXRUd28oaGFuZGxlciwgaXNGbiwgdGhpcywgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgZW1pdFRocmVlKGhhbmRsZXIsIGlzRm4sIHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgICAgYnJlYWs7XG4gICAgLy8gc2xvd2VyXG4gICAgZGVmYXVsdDpcbiAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgZW1pdE1hbnkoaGFuZGxlciwgaXNGbiwgdGhpcywgYXJncyk7XG4gIH1cblxuICBpZiAobmVlZERvbWFpbkV4aXQpXG4gICAgZG9tYWluLmV4aXQoKTtcblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmICghZXZlbnRzKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBuZXcgRXZlbnRIYW5kbGVycygpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgICAgaWYgKHByZXBlbmQpIHtcbiAgICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIGlmICghZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgICAgaWYgKG0gJiYgbSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSkge1xuICAgICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyB0eXBlICsgJyBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgICBlbWl0V2FybmluZyh3KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gZW1pdFdhcm5pbmcoZSkge1xuICB0eXBlb2YgY29uc29sZS53YXJuID09PSAnZnVuY3Rpb24nID8gY29uc29sZS53YXJuKGUpIDogY29uc29sZS5sb2coZSk7XG59XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBnKCkge1xuICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcbiAgICBpZiAoIWZpcmVkKSB7XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBsaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG4gIGcubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgcmV0dXJuIGc7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJylcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIGVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZmYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKCFldmVudHMpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKCFsaXN0KVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IChsaXN0Lmxpc3RlbmVyICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRIYW5kbGVycygpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHxcbiAgICAgICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgbGlzdFswXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoIWV2ZW50cylcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmICghZXZlbnRzLnJlbW92ZUxpc3RlbmVyKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRIYW5kbGVycygpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwga2V5OyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9IHdoaWxlIChsaXN0ZW5lcnNbMF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHZhciBldmxpc3RlbmVyO1xuICB2YXIgcmV0O1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmICghZXZlbnRzKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIHtcbiAgICBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICAgIGlmICghZXZsaXN0ZW5lcilcbiAgICAgIHJldCA9IFtdO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgICAgcmV0ID0gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl07XG4gICAgZWxzZVxuICAgICAgcmV0ID0gdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0Lm93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuLy8gQWJvdXQgMS41eCBmYXN0ZXIgdGhhbiB0aGUgdHdvLWFyZyB2ZXJzaW9uIG9mIEFycmF5I3NwbGljZSgpLlxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSlcbiAgICBsaXN0W2ldID0gbGlzdFtrXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIGkpIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkoaSk7XG4gIHdoaWxlIChpLS0pXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCJ2YXIgd29ya2VyRmlsZSA9IGZ1bmN0aW9uIHdvcmtlckZpbGUoKSB7XG4gIHZhciB3b3JrZXJQYXRoID0gXCJodHRwczovL2FyY2hpdmUub3JnL2Rvd25sb2FkL2ZmbXBlZ19hc20vZmZtcGVnX2FzbS5qc1wiO1xuICBpbXBvcnRTY3JpcHRzKHdvcmtlclBhdGgpO1xuICB2YXIgbm93ID0gRGF0ZS5ub3c7XG5cbiAgZnVuY3Rpb24gcHJpbnQodGV4dCkge1xuICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IFwic3Rkb3V0XCIsXG4gICAgICBkYXRhOiB0ZXh0XG4gICAgfSk7XG4gIH1cblxuICBvbm1lc3NhZ2UgPSBmdW5jdGlvbiBvbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG5cbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcImNvbW1hbmRcIikge1xuICAgICAgdmFyIE1vZHVsZSA9IHtcbiAgICAgICAgcHJpbnQ6IHByaW50LFxuICAgICAgICBwcmludEVycjogcHJpbnQsXG4gICAgICAgIGZpbGVzOiBtZXNzYWdlLmZpbGVzIHx8IFtdLFxuICAgICAgICBhcmd1bWVudHM6IG1lc3NhZ2UuYXJndW1lbnRzIHx8IFtdLFxuICAgICAgICBUT1RBTF9NRU1PUlk6IG1lc3NhZ2UuVE9UQUxfTUVNT1JZIHx8IGZhbHNlXG4gICAgICB9O1xuICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInN0YXJ0XCIsXG4gICAgICAgIGRhdGE6IE1vZHVsZS5hcmd1bWVudHMuam9pbihcIiBcIilcbiAgICAgIH0pO1xuICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiBcInN0ZG91dFwiLFxuICAgICAgICBkYXRhOiBcIlJlY2VpdmVkIGNvbW1hbmQ6IFwiICsgTW9kdWxlLmFyZ3VtZW50cy5qb2luKFwiIFwiKSArIChNb2R1bGUuVE9UQUxfTUVNT1JZID8gXCIuICBQcm9jZXNzaW5nIHdpdGggXCIgKyBNb2R1bGUuVE9UQUxfTUVNT1JZICsgXCIgYml0cy5cIiA6IFwiXCIpXG4gICAgICB9KTtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgcmVzdWx0ID0gZmZtcGVnX3J1bihNb2R1bGUpO1xuICAgICAgdmFyIHRvdGFsVGltZSA9IG5vdygpIC0gdGltZTtcbiAgICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgdHlwZTogXCJzdGRvdXRcIixcbiAgICAgICAgZGF0YTogXCJGaW5pc2hlZCBwcm9jZXNzaW5nICh0b29rIFwiICsgdG90YWxUaW1lICsgXCJtcylcIlxuICAgICAgfSk7XG4gICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6IFwiZG9uZVwiLFxuICAgICAgICBkYXRhOiByZXN1bHQsXG4gICAgICAgIHRpbWU6IHRvdGFsVGltZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHBvc3RNZXNzYWdlKHtcbiAgICB0eXBlOiBcInJlYWR5XCJcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3b3JrZXJGaWxlOyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoKGU9ZXx8c2VsZikud2Vid29ya2VyRmlsZT17fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5kZWZhdWx0PWZ1bmN0aW9uIGUodCl7aWYoZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IEVycm9yKFwiRmlsZSBjb250ZW50IG11c3QgZXhwb3J0IGEgZnVuY3Rpb25cIik7dmFyIG49dC50b1N0cmluZygpLG89bmV3IEJsb2IoW1wiKFwiK24rXCIpKClcIl0se3R5cGU6XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJ9KTtyZXR1cm4gbmV3IFdvcmtlcihVUkwuY3JlYXRlT2JqZWN0VVJMKG8pKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5cGJtUmxlQzVxY3lKZExDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJYWldKWGIzSnJaWElnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWgzYjNKclpYSXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSGR2Y210bGNpQWhQVDBnWENKbWRXNWpkR2x2Ymx3aUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSkdhV3hsSUdOdmJuUmxiblFnYlhWemRDQmxlSEJ2Y25RZ1lTQm1kVzVqZEdsdmJsd2lLVHRjYmlBZ0lDQjlYRzRnSUNBZ1kyOXVjM1FnWTI5a1pTQTlJSGR2Y210bGNpNTBiMU4wY21sdVp5Z3BPMXh1SUNBZ0lHTnZibk4wSUdKc2IySWdQU0J1WlhjZ1FteHZZaWhiWENJb1hDSWdLeUJqYjJSbElDc2dYQ0lwS0NsY0lsMHNJSHRjYmlBZ0lDQWdJSFI1Y0dVNklGd2lZWEJ3YkdsallYUnBiMjR2YW1GMllYTmpjbWx3ZEZ3aVhHNGdJQ0FnZlNrN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCWGIzSnJaWElvVlZKTUxtTnlaV0YwWlU5aWFtVmpkRlZTVENoaWJHOWlLU2s3WEc0Z0lIMWNibjFjYmlKZExDSnVZVzFsY3lJNld5SjNiM0pyWlhJaUxDSkZjbkp2Y2lJc0ltTnZaR1VpTENKMGIxTjBjbWx1WnlJc0ltSnNiMklpTENKQ2JHOWlJaXdpZEhsd1pTSXNJbGR2Y210bGNpSXNJbFZTVENJc0ltTnlaV0YwWlU5aWFtVmpkRlZTVENKZExDSnRZWEJ3YVc1bmN5STZJbTlPUVVORkxGZEJRVmxCTERKSFFVTlpMRzFDUVVGWVFTeFJRVU5JTEVsQlFVbERMRTFCUVUwc01rTkJSVnBETEVWQlFVOUdMRVZCUVU5SExGZEJRMlJETEVWQlFVOHNTVUZCU1VNc1MwRkJTeXhEUVVGRExFbEJRVTFJTEVWQlFVOHNUMEZCVVN4RFFVTXhRMGtzUzBGQlRTeHJRMEZGUkN4SlFVRkpReXhQUVVGUFF5eEpRVUZKUXl4blFrRkJaMEpNSW4wPVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBXb3JrZXJGaWxlIGZyb20gXCJ3ZWJ3b3JrZXItZmlsZVwiO1xuaW1wb3J0IHdvcmtlckZpbGUgZnJvbSBcIi4vRkZNUEVHV2ViV29ya2VyXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5cbnZhciBGRk1QRUdXZWJ3b3JrZXJDbGllbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9FdmVudEVtaXR0ZXIpIHtcbiAgX2luaGVyaXRzKEZGTVBFR1dlYndvcmtlckNsaWVudCwgX0V2ZW50RW1pdHRlcik7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtXb3JrZXJ9XG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7QmxvYn1cbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gRkZNUEVHV2Vid29ya2VyQ2xpZW50KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGRk1QRUdXZWJ3b3JrZXJDbGllbnQpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoRkZNUEVHV2Vid29ya2VyQ2xpZW50KS5jYWxsKHRoaXMpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfd29ya2VyXCIsIHt9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJfaW5wdXRGaWxlXCIsIHt9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ3b3JrZXJJc1JlYWR5XCIsIGZhbHNlKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJyZWFkRmlsZUFzQnVmZmVyQXJyYXlcIiwgZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXNvbHZlKHRoaXMucmVzdWx0KTtcbiAgICAgICAgfTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMuZXJyb3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJydW5Db21tYW5kXCIsIGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbW1hbmQgIT09IFwic3RyaW5nXCIgfHwgIWNvbW1hbmQubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbW1hbmQgc2hvdWxkIGJlIHN0cmluZyBhbmQgbm90IGVtcHR5XCIpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jb252ZXJ0SW5wdXRGaWxlVG9BcnJheUJ1ZmZlcigpLnRoZW4oZnVuY3Rpb24gKGFycmF5QnVmZmVyKSB7XG4gICAgICAgIHdoaWxlICghX3RoaXMud29ya2VySXNSZWFkeSkge31cblxuICAgICAgICB2YXIgZmlsZW5hbWUgPSBcInZpZGVvLndlYm1cIjtcbiAgICAgICAgdmFyIGlucHV0Q29tbWFuZCA9IFwiLWkgXCIuY29uY2F0KGZpbGVuYW1lLCBcIiBcIikuY29uY2F0KGNvbW1hbmQpO1xuXG4gICAgICAgIF90aGlzLndvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogXCJjb21tYW5kXCIsXG4gICAgICAgICAgYXJndW1lbnRzOiBpbnB1dENvbW1hbmQuc3BsaXQoXCIgXCIpLFxuICAgICAgICAgIGZpbGVzOiBbe1xuICAgICAgICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpLFxuICAgICAgICAgICAgbmFtZTogZmlsZW5hbWVcbiAgICAgICAgICB9XVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImxvZ1wiLCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWVzc2FnZSkgPyBjb25zb2xlLmxvZy5jYWxsKG51bGwsIG1lc3NhZ2UpIDogY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXNWaWRlb1wiLCBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgdmFyIGZpbGVUeXBlID0gZmlsZS50eXBlO1xuICAgICAgcmV0dXJuIGZpbGUgaW5zdGFuY2VvZiBCbG9iICYmIChmaWxlVHlwZS5pbmNsdWRlcyhcInZpZGVvXCIpIHx8IGZpbGVUeXBlLmluY2x1ZGVzKFwiYXVkaW9cIikpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuaW5pdFdlYldvcmtlcigpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEZGTVBFR1dlYndvcmtlckNsaWVudCwgW3tcbiAgICBrZXk6IFwiaW5pdFdlYldvcmtlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0V2ViV29ya2VyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlckZpbGUod29ya2VyRmlsZSk7XG5cbiAgICAgIHRoaXMud29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PSBcInJlYWR5XCIpIHtcbiAgICAgICAgICBfdGhpczIuZW1pdChcIm9uUmVhZHlcIiwgXCJmZm1wZWctYXNtLmpzIGZpbGUgaGFzIGJlZW4gbG9hZGVkLlwiKTtcblxuICAgICAgICAgIF90aGlzMi53b3JrZXJJc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT0gXCJzdGRvdXRcIikge1xuICAgICAgICAgIF90aGlzMi5lbWl0KFwib25TdGRvdXRcIiwgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT0gXCJzdGFydFwiKSB7XG4gICAgICAgICAgX3RoaXMyLmVtaXQoXCJvbkZpbGVSZWNlaXZlZFwiLCBcIkZpbGUgUmVjZWl2ZWRcIik7XG5cbiAgICAgICAgICBsb2coXCJmaWxlIHJlY2VpdmVkIGZmbXBlZyBjb21tYW5kLlwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLnR5cGUgPT0gXCJkb25lXCIpIHtcbiAgICAgICAgICBfdGhpczIuZW1pdChcIm9uRG9uZVwiLCBtZXNzYWdlLmRhdGEpOyAvLyBjb25zdCByZXN1bHQgPSBtZXNzYWdlLmRhdGFbMF07XG4gICAgICAgICAgLy8gbG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgIC8vIGNvbnN0IGJsb2IgPSBuZXcgRmlsZShbcmVzdWx0LmRhdGFdLCBcInRlc3QubXA0XCIsIHtcbiAgICAgICAgICAvLyAgIHR5cGU6IFwidmlkZW8vbXA0XCJcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAvLyAvLyBsb2coYmxvYik7XG4gICAgICAgICAgLy8gcmVzb2x2ZShibG9iKTtcblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnB1dEZpbGVFeGlzdHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5wdXRGaWxlRXhpc3RzKCkge1xuICAgICAgdmFyIGlucHV0RmlsZSA9IHRoaXMuaW5wdXRGaWxlO1xuICAgICAgcmV0dXJuICEhKGlucHV0RmlsZSAmJiBpbnB1dEZpbGUgaW5zdGFuY2VvZiBCbG9iICYmIGlucHV0RmlsZS5zaXplICYmIGlucHV0RmlsZS50eXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdXNlIHdvcmtlciB0byBlbmNvZGUgYXVkaW9cbiAgICAgKiBAcGFyYW0ge0Jsb2J9IGlucHV0RmlsZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY29udmVydElucHV0RmlsZVRvQXJyYXlCdWZmZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29udmVydElucHV0RmlsZVRvQXJyYXlCdWZmZXIoKSB7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRGaWxlRXhpc3RzKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5wdXQgRmlsZSBoYXMgbm90IGJlZW4gc2V0XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZWFkRmlsZUFzQnVmZmVyQXJyYXkodGhpcy5pbnB1dEZpbGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWFuZFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwid29ya2VyXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQod29ya2VyKSB7XG4gICAgICB0aGlzLl93b3JrZXIgPSB3b3JrZXI7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl93b3JrZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlucHV0RmlsZVwiLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGlucHV0RmlsZSkge1xuICAgICAgaWYgKCF0aGlzLmlzVmlkZW8oaW5wdXRGaWxlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBmaWxlIGlzIGV4cGVjdGVkIHRvIGJlIGFuIGF1ZGlvIG9yIGEgdmlkZW9cIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lucHV0RmlsZSA9IGlucHV0RmlsZTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lucHV0RmlsZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogdXNlIHdvcmtlciB0byBlbmNvZGUgYXVkaW9cbiAgICAgKiBAcGFyYW0ge0Jsb2J9IGZpbGVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cbiAgICAgKi9cblxuICB9XSk7XG5cbiAgcmV0dXJuIEZGTVBFR1dlYndvcmtlckNsaWVudDtcbn0oRXZlbnRFbWl0dGVyKTtcblxuZXhwb3J0IHsgRkZNUEVHV2Vid29ya2VyQ2xpZW50IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgV2Vid29ya2VyQ2xpZW50IGZyb20gXCIuL0ZGTVBFR1dlYldvcmtlckNsaWVudFwiO1xuaW1wb3J0IFdlYndvcmtlciBmcm9tIFwiLi9GRk1QRUdXZWJXb3JrZXJcIjtcbmV4cG9ydCB2YXIgRkZNUEVHV2Vid29ya2VyID0gV2Vid29ya2VyO1xuZXhwb3J0IHZhciBGRk1QRUdXZWJ3b3JrZXJDbGllbnQgPSBXZWJ3b3JrZXJDbGllbnQ7XG52YXIgd29ya2VyQ2xpZW50ID0gbmV3IFdlYndvcmtlckNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgd29ya2VyQ2xpZW50OyIsIi8qKlxuICogR2l2ZW4gYSBudW1iZXIsIHJldHVybiBhIHplcm8tZmlsbGVkIHN0cmluZy5cbiAqIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjY3MjgzL1xuICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSBudW1iZXJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB6ZXJvRmlsbCAod2lkdGgsIG51bWJlciwgcGFkKSB7XG4gIGlmIChudW1iZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobnVtYmVyLCBwYWQpIHtcbiAgICAgIHJldHVybiB6ZXJvRmlsbCh3aWR0aCwgbnVtYmVyLCBwYWQpXG4gICAgfVxuICB9XG4gIGlmIChwYWQgPT09IHVuZGVmaW5lZCkgcGFkID0gJzAnXG4gIHdpZHRoIC09IG51bWJlci50b1N0cmluZygpLmxlbmd0aFxuICBpZiAod2lkdGggPiAwKSByZXR1cm4gbmV3IEFycmF5KHdpZHRoICsgKC9cXC4vLnRlc3QobnVtYmVyKSA/IDIgOiAxKSkuam9pbihwYWQpICsgbnVtYmVyXG4gIHJldHVybiBudW1iZXIgKyAnJ1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgemVyb0ZpbGwgZnJvbSBcInplcm8tZmlsbFwiO1xuXG4vKipcbiAqIE9yaWdpbmFsIGZyb20gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvaGgtbW0tc3NcbiAqL1xuXG4vLyBUaW1lIHVuaXRzIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyB2YWx1ZXMgaW4gbWlsaXNlY29uZHNcbmNvbnN0IEhPVVIgPSAzNjAwMDAwO1xuY29uc3QgTUlOVVRFID0gNjAwMDA7XG5jb25zdCBTRUNPTkQgPSAxMDAwO1xuXG5jb25zdCBUSU1FX0ZPUk1BVF9FUlJNU0cgPSBcIlRpbWUgZm9ybWF0IGVycm9yXCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHBvcnQgZnVuY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1zKG1zLCBmb3JtYXQgPSBcIm1tOnNzXCIpIHtcbiAgaWYgKHR5cGVvZiBtcyAhPT0gXCJudW1iZXJcIiB8fCBOdW1iZXIuaXNOYU4obXMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmFOIGVycm9yXCIpO1xuICB9XG5cbiAgbGV0IGFic01zID0gTWF0aC5hYnMobXMpO1xuXG4gIGxldCBuZWdhdGl2ZSA9IG1zIDwgMDtcbiAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihhYnNNcyAvIEhPVVIpO1xuICBsZXQgbWludXRlcyA9IE1hdGguZmxvb3IoKGFic01zICUgSE9VUikgLyBNSU5VVEUpO1xuICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGFic01zICUgTUlOVVRFKSAvIFNFQ09ORCk7XG4gIGxldCBtaWxpc2Vjb25kcyA9IE1hdGguZmxvb3IoYWJzTXMgJSBTRUNPTkQpO1xuXG4gIHJldHVybiBmb3JtYXRUaW1lKFxuICAgIHtcbiAgICAgIG5lZ2F0aXZlLFxuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzLFxuICAgICAgc2Vjb25kcyxcbiAgICAgIG1pbGlzZWNvbmRzXG4gICAgfSxcbiAgICBmb3JtYXRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21TKHMsIGZvcm1hdCA9IFwibW06c3NcIikge1xuICBpZiAodHlwZW9mIHMgIT09IFwibnVtYmVyXCIgfHwgTnVtYmVyLmlzTmFOKHMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTmFOIGVycm9yXCIpO1xuICB9XG5cbiAgbGV0IG1zID0gcyAqIFNFQ09ORDtcblxuICByZXR1cm4gZnJvbU1zKG1zLCBmb3JtYXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Ncyh0aW1lLCBmb3JtYXQgPSBcIm1tOnNzXCIpIHtcbiAgbGV0IHJlO1xuXG4gIGlmIChbXCJtbTpzc1wiLCBcIm1tOnNzLnNzc1wiLCBcImhoOm1tOnNzXCIsIFwiaGg6bW06c3Muc3NzXCJdLmluY2x1ZGVzKGZvcm1hdCkpIHtcbiAgICByZSA9IC9eKC0pPyg/OihcXGRcXGQrKTopPyhcXGRcXGQpOihcXGRcXGQpKFxcLlxcZCspPyQvO1xuICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gXCJoaDptbVwiKSB7XG4gICAgcmUgPSAvXigtKT8oXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSg/OihcXC5cXGQrKSk/KT8kLztcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoVElNRV9GT1JNQVRfRVJSTVNHKTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSByZS5leGVjKHRpbWUpO1xuICBpZiAoIXJlc3VsdCkgdGhyb3cgbmV3IEVycm9yKCk7XG5cbiAgbGV0IG5lZ2F0aXZlID0gcmVzdWx0WzFdID09PSBcIi1cIjtcbiAgbGV0IGhvdXJzID0gcmVzdWx0WzJdIHwgMDtcbiAgbGV0IG1pbnV0ZXMgPSByZXN1bHRbM10gfCAwO1xuICBsZXQgc2Vjb25kcyA9IHJlc3VsdFs0XSB8IDA7XG4gIGxldCBtaWxpc2Vjb25kcyA9IE1hdGguZmxvb3IoKDEwMDAgKiByZXN1bHRbNV0pIHwgMCk7XG5cbiAgaWYgKG1pbnV0ZXMgPiA2MCB8fCBzZWNvbmRzID4gNjApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgKG5lZ2F0aXZlID8gLTEgOiAxKSAqXG4gICAgKGhvdXJzICogSE9VUiArIG1pbnV0ZXMgKiBNSU5VVEUgKyBzZWNvbmRzICogU0VDT05EICsgbWlsaXNlY29uZHMpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1ModGltZSwgZm9ybWF0ID0gXCJtbTpzc1wiKSB7XG4gIGxldCBtcyA9IHRvTXModGltZSwgZm9ybWF0KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBTRUNPTkQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSwgZm9ybWF0KSB7XG4gIGxldCBzaG93TXM7XG4gIGxldCBzaG93U2M7XG4gIGxldCBzaG93SHI7XG5cbiAgc3dpdGNoIChmb3JtYXQudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgXCJoaDptbTpzcy5zc3NcIjpcbiAgICAgIHNob3dNcyA9IHRydWU7XG4gICAgICBzaG93U2MgPSB0cnVlO1xuICAgICAgc2hvd0hyID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJoaDptbTpzc1wiOlxuICAgICAgc2hvd01zID0gISF0aW1lLm1pbGlzZWNvbmRzO1xuICAgICAgc2hvd1NjID0gdHJ1ZTtcbiAgICAgIHNob3dIciA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiaGg6bW1cIjpcbiAgICAgIHNob3dNcyA9ICEhdGltZS5taWxpc2Vjb25kcztcbiAgICAgIHNob3dTYyA9IHNob3dNcyB8fCAhIXRpbWUuc2Vjb25kcztcbiAgICAgIHNob3dIciA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibW06c3NcIjpcbiAgICAgIHNob3dNcyA9ICEhdGltZS5taWxpc2Vjb25kcztcbiAgICAgIHNob3dTYyA9IHRydWU7XG4gICAgICBzaG93SHIgPSAhIXRpbWUuaG91cnM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibW06c3Muc3NzXCI6XG4gICAgICBzaG93TXMgPSB0cnVlO1xuICAgICAgc2hvd1NjID0gdHJ1ZTtcbiAgICAgIHNob3dIciA9ICEhdGltZS5ob3VycztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoVElNRV9GT1JNQVRfRVJSTVNHKTtcbiAgfVxuXG4gIGxldCBoaCA9IHplcm9GaWxsKDIsIHRpbWUuaG91cnMpO1xuICBsZXQgbW0gPSB6ZXJvRmlsbCgyLCB0aW1lLm1pbnV0ZXMpO1xuICBsZXQgc3MgPSB6ZXJvRmlsbCgyLCB0aW1lLnNlY29uZHMpO1xuICBsZXQgc3NzID0gemVyb0ZpbGwoMywgdGltZS5taWxpc2Vjb25kcyk7XG5cbiAgcmV0dXJuIChcbiAgICAodGltZS5uZWdhdGl2ZSA/IFwiLVwiIDogXCJcIikgK1xuICAgIChzaG93SHJcbiAgICAgID8gc2hvd01zXG4gICAgICAgID8gYCR7aGh9OiR7bW19OiR7c3N9LiR7c3NzfWBcbiAgICAgICAgOiBzaG93U2NcbiAgICAgICAgPyBgJHtoaH06JHttbX06JHtzc31gXG4gICAgICAgIDogYCR7aGh9OiR7bW19YFxuICAgICAgOiBzaG93TXNcbiAgICAgID8gYCR7bW19OiR7c3N9LiR7c3NzfWBcbiAgICAgIDogYCR7bW19OiR7c3N9YClcbiAgKTtcbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcbmltcG9ydCB7IHJlYWREYXRhVVJMLCBhcnJheUJ1ZmZlclRvQmxvYiwgcmVhZEFycmF5QnVmZmVyIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB3b3JrZXJDbGllbnQgZnJvbSBcImZmbXBlZy13ZWJ3b3JrZXJcIjtcbmltcG9ydCB7IGZyb21TIH0gZnJvbSBcIi4vZm9ybWF0U2Vjb25kc1wiO1xuXG5jbGFzcyBXZWJWaWRlbyBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHZpZGVvRmlsZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy52aWRlb0ZpbGUgPSB2aWRlb0ZpbGU7XG5cbiAgICB3b3JrZXJDbGllbnQub24oXCJvblJlYWR5XCIsICgpID0+IHRoaXMuZW1pdChcIkZGTVBFR1JlYWR5XCIpKTtcbiAgICB3b3JrZXJDbGllbnQub24oXCJvblN0ZG91dFwiLCBtc2cgPT4gdGhpcy5lbWl0KFwiRkZNUEVHU3Rkb3V0XCIsIG1zZykpO1xuICAgIHdvcmtlckNsaWVudC5vbihcIm9uRmlsZVJlY2VpdmVkXCIsICgpID0+IHRoaXMuZW1pdChcIkZGTVBFR0ZpbGVSZWNlaXZlZFwiKSk7XG4gICAgd29ya2VyQ2xpZW50Lm9uKFwib25Eb25lXCIsIGRhdGEgPT4gdGhpcy5lbWl0KFwiRkZNUEVHRG9uZVwiLCBkYXRhKSk7XG4gIH1cbiAgdHJpbVZpZGVvID0gKHN0YXJ0ID0gMCwgbGVuZ3RoKSA9PiB7XG4gICAgLy8gY29uc3Qgc3RhcnRTZWNvbmRzID0gZnJvbVMoc3RhcnQgPT09IDAgPyAxIDogc3RhcnQsIFwiaGg6bW06c3NcIik7XG4gICAgY29uc3Qgc3RhcnRTZWNvbmRzID0gZnJvbVMoc3RhcnQsIFwiaGg6bW06c3NcIik7XG4gICAgd29ya2VyQ2xpZW50LnJ1bkNvbW1hbmQoXG4gICAgICBgLXNzICR7c3RhcnRTZWNvbmRzfSAtYyBjb3B5IC10ICR7bGVuZ3RofSBzbGljZWQtb3V0cHV0Lm1wNGBcbiAgICApO1xuICB9O1xuICBfdmlkZW9EYXRhID0ge307XG4gIF92aWRlb0ZpbGUgPSBudWxsO1xuICAvKipcbiAgICogQHR5cGUge0FycmF5QnVmZmVyfVxuICAgKi9cbiAgX3ZpZGVvQnVmZmVyID0ge307XG5cbiAgcmVhZEFzQXJyYXlCdWZmZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5fdmlkZW9CdWZmZXIgPSBhd2FpdCByZWFkQXJyYXlCdWZmZXIodGhpcy5fdmlkZW9GaWxlKTtcbiAgICByZXR1cm4gdGhpcy52aWRlb0J1ZmZlcjtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0Jsb2J9XG4gICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAqL1xuICBjb252ZXJ0QnVmZmVyVG9CbG9iID0gYnVmZmVyID0+IHtcbiAgICBsZXQgYmxvYiA9IG51bGw7XG4gICAgYnVmZmVyID0gYnVmZmVyIHx8IHRoaXMudmlkZW9CdWZmZXI7XG4gICAgaWYgKGJ1ZmZlci5ieXRlTGVuZ3RoKSB7XG4gICAgICBibG9iID0gYXJyYXlCdWZmZXJUb0Jsb2IoYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2I7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtGaWxlfVxuICAgKi9cbiAgcmVhZEFzRGF0YVVSTCA9IGFzeW5jIChidWZmZXIsIGJsb2IpID0+IHtcbiAgICBidWZmZXIgPSBidWZmZXIgfHwgdGhpcy52aWRlb0J1ZmZlcjtcbiAgICBibG9iID0gYmxvYiB8fCB0aGlzLmNvbnZlcnRCdWZmZXJUb0Jsb2IoYnVmZmVyKTtcbiAgICBsZXQgZGF0YVVSTCA9IG51bGw7XG4gICAgaWYgKGJsb2IpIHtcbiAgICAgIGRhdGFVUkwgPSBhd2FpdCByZWFkRGF0YVVSTChibG9iKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFVUkw7XG4gIH07XG5cbiAgc2V0IHZpZGVvRmlsZShmaWxlKSB7XG4gICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlKSB7XG4gICAgICB3b3JrZXJDbGllbnQuaW5wdXRGaWxlID0gZmlsZTtcbiAgICB9XG4gICAgdGhpcy5fdmlkZW9GaWxlID0gZmlsZTtcbiAgfVxuXG4gIGdldCB2aWRlb0ZpbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZGVvRmlsZTtcbiAgfVxuXG4gIGdldCBkdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fdmlkZW9EYXRhLmR1cmF0aW9uIHx8IDA7XG4gIH1cblxuICBnZXQgdmlkZW9EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLl92aWRlb0RhdGE7XG4gIH1cbiAgZ2V0IHZpZGVvQnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLl92aWRlb0J1ZmZlcjtcbiAgfVxuXG4gIGRlY29kZSA9IGFzeW5jIGZpbGUgPT4ge1xuICAgIHRoaXMudmlkZW9GaWxlID0gZmlsZTtcbiAgICB0aGlzLmVtaXQoXCJwcm9jZXNzaW5nRmlsZVwiKTtcbiAgICAvLyBSZWFkIEZpbGUgQXMgQXJyYXlCdWZmZXJcbiAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHRoaXMucmVhZEFzQXJyYXlCdWZmZXIoKTtcbiAgICAvLyBjb252ZXJ0IHRvIGRhdGFVUkxcbiAgICBjb25zdCBkYXRhVVJMID0gYXdhaXQgdGhpcy5yZWFkQXNEYXRhVVJMKGFycmF5QnVmZmVyKTtcblxuICAgIGxldCB2aWRlb09iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy52aWRlb0ZpbGUpO1xuICAgIGxldCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ2aWRlb1wiKTtcblxuICAgIHZpZGVvLnNyYyA9IHZpZGVvT2JqZWN0VXJsO1xuICAgIHdoaWxlIChcbiAgICAgICh2aWRlby5kdXJhdGlvbiA9PT0gSW5maW5pdHkgfHwgaXNOYU4odmlkZW8uZHVyYXRpb24pKSAmJlxuICAgICAgdmlkZW8ucmVhZHlTdGF0ZSA8IDJcbiAgICApIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCAxMDAwKSk7XG4gICAgICB2aWRlby5jdXJyZW50VGltZSA9IDEwMDAwMDAwICogTWF0aC5yYW5kb20oKTtcbiAgICB9XG4gICAgdGhpcy5fdmlkZW9EYXRhID0gdmlkZW87XG4gICAgdGhpcy5lbWl0KFwicHJvY2Vzc2VkRmlsZVwiKTtcbiAgICByZXR1cm4geyBkYXRhVVJMLCBhcnJheUJ1ZmZlciwgYmxvYjogdGhpcy5jb252ZXJ0QnVmZmVyVG9CbG9iKCkgfTtcbiAgfTtcblxuICBnZW5lcmF0ZUJ1ZmZlckNodW5rcyA9IChhcnJheUJ1ZmZlciA9IFtdKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBjaHVua3MgPSBbXTtcbiAgICAgICAgYXJyYXlCdWZmZXIgPSBhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoID8gYXJyYXlCdWZmZXIgOiB0aGlzLnZpZGVvQnVmZmVyO1xuICAgICAgICBjb25zdCB0eXBlZEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKTtcbiAgICAgICAgY29uc3QgbWljcm9TZWMgPSAxMDAwICogNjA7XG4gICAgICAgIGxldCBzdGFydENodW5rID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IG1pY3JvU2VjOyBpIDwgdHlwZWRCdWZmZXIuYnl0ZUxlbmd0aDsgaSArPSBtaWNyb1NlYykge1xuICAgICAgICAgIGNvbnN0IF9idWZmZXIgPSBhcnJheUJ1ZmZlci5zbGljZShzdGFydENodW5rLCBpKTtcbiAgICAgICAgICBjaHVua3MucHVzaChfYnVmZmVyKTtcbiAgICAgICAgICBzdGFydENodW5rID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXNvbHZlKGNodW5rcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgZXh0cmFjdEZyYW1lc0Zyb21WaWRlbyA9IChmcHMgPSAyNSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmVtaXQoXCJleHRyYWN0aW5nRnJhbWVzXCIpO1xuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLl92aWRlb0RhdGE7XG4gICAgICAgIGxldCBzZWVrUmVzb2x2ZTtcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcihcInNlZWtlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoc2Vla1Jlc29sdmUpIHNlZWtSZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSB2aWRlby5kdXJhdGlvbjtcblxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBsZXQgW3csIGhdID0gW3ZpZGVvLnZpZGVvV2lkdGgsIHZpZGVvLnZpZGVvSGVpZ2h0XTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdztcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGg7XG4gICAgICAgIGxldCBmcmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IGludGVydmFsID0gMTI1IC8gZnBzO1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSAwO1xuXG4gICAgICAgIHdoaWxlIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IChzZWVrUmVzb2x2ZSA9IHIpKTtcblxuICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCB3LCBoKTtcbiAgICAgICAgICBsZXQgYmFzZTY0SW1hZ2VEYXRhID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgICAgIGZyYW1lcy5wdXNoKGJhc2U2NEltYWdlRGF0YSk7XG5cbiAgICAgICAgICBjdXJyZW50VGltZSArPSBpbnRlcnZhbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoXCJleHRyYWN0ZWRGcmFtZXNcIik7XG4gICAgICAgIHJlc29sdmUoZnJhbWVzKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWJWaWRlbztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWxlUGlja2VyIGZyb20gXCIuL2NvbXBvbmVudHMvRmlsZVBpY2tlclwiO1xuaW1wb3J0IFN0YXR1cyBmcm9tIFwiLi9jb21wb25lbnRzL1N0YXR1c1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9jb21wb25lbnRzL1BsYXllclwiO1xuaW1wb3J0IENvbnRyb2xzIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udHJvbHNcIjtcbmltcG9ydCBUcmltbWVyIGZyb20gXCIuL2NvbXBvbmVudHMvVHJpbW1lclwiO1xuaW1wb3J0IFdlYlZpZGVvIGZyb20gXCIuL2xpYnMvV2ViVmlkZW9cIjtcbmltcG9ydCBcIi4vc3R5bGVzL21haW4tY29udGFpbmVyLnNjc3NcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuL2NvbXBvbmVudHMvSWNvblwiO1xuaW1wb3J0IHsgbm9vcCwgYXJyYXlCdWZmZXJUb0Jsb2IsIHJlYWRCbG9iVVJMLCBkb3dubG9hZCB9IGZyb20gXCIuL2xpYnMvdXRpbHNcIjtcblxuY2xhc3MgUmVhY3RWaWRlb1RyaW1tZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEB0eXBlIHtXZWJWaWRlb31cbiAgICovXG4gIHdlYlZpZGVvID0ge307XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy53ZWJWaWRlbyA9IG5ldyBXZWJWaWRlbyh7fSk7XG4gICAgdGhpcy53ZWJWaWRlby5vbihcInByb2Nlc3NpbmdGaWxlXCIsICgpID0+IHRoaXMudXBkYXRlSXNEZWNvZGluZyh0cnVlKSk7XG4gICAgdGhpcy53ZWJWaWRlby5vbihcInByb2Nlc3NlZEZpbGVcIiwgKCkgPT4gdGhpcy51cGRhdGVJc0RlY29kaW5nKGZhbHNlKSk7XG5cbiAgICB0aGlzLndlYlZpZGVvLm9uKFwiRkZNUEVHU3Rkb3V0XCIsIHRoaXMuaGFuZGxlRkZNUEVHU3Rkb3V0KTtcbiAgICB0aGlzLndlYlZpZGVvLm9uKFwiRkZNUEVHUmVhZHlcIiwgdGhpcy5oYW5kbGVGRk1QRUdSZWFkeSk7XG4gICAgdGhpcy53ZWJWaWRlby5vbihcIkZGTVBFR0ZpbGVSZWNlaXZlZFwiLCB0aGlzLmhhbmRsZUZGTVBFR0ZpbGVSZWNlaXZlZCk7XG4gICAgdGhpcy53ZWJWaWRlby5vbihcIkZGTVBFR0RvbmVcIiwgdGhpcy5oYW5kbGVGRk1QRUdEb25lKTtcbiAgfVxuXG4gIGhhbmRsZUZGTVBFR1N0ZG91dCA9IG1zZyA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cobXNnKTtcbiAgfTtcblxuICBoYW5kbGVGRk1QRUdSZWFkeSA9ICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZGTVBFRyBpcyBSZWFkeVwiKTtcbiAgfTtcblxuICBoYW5kbGVGRk1QRUdGaWxlUmVjZWl2ZWQgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJGRk1QRUcgUmVjZWl2ZWQgRmlsZVwiKTtcbiAgfTtcblxuICBoYW5kbGVGRk1QRUdEb25lID0gcmVzdWx0ID0+IHtcbiAgICBjb25zdCB2aWRlb0Jsb2IgPSBhcnJheUJ1ZmZlclRvQmxvYihyZXN1bHRbMF0uZGF0YSk7XG4gICAgdGhpcy5kZWNvZGVWaWRlb0ZpbGUodmlkZW9CbG9iLCAoKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5vblZpZGVvRW5jb2RlIHx8IG5vb3A7XG4gICAgICBoYW5kbGVyKHJlc3VsdCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW5jb2Rpbmc6IGZhbHNlLFxuICAgICAgICBlbmNvZGVkOiB0cnVlLFxuICAgICAgICBlbmNvZGVkVmlkZW86IHZpZGVvQmxvYlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgZGVjb2Rpbmc6IGZhbHNlLFxuICAgIGVuY29kaW5nOiBmYWxzZSxcbiAgICBlbmNvZGVkOiBmYWxzZSxcbiAgICBwbGF5VmlkZW86IGZhbHNlLFxuICAgIHZpZGVvRGF0YVVSTDogXCJcIixcbiAgICB2aWRlb0ZyYW1lczogW10sXG4gICAgaXNEZWNvZGluZzogZmFsc2UsXG4gICAgdGltZVJhbmdlOiB7IHN0YXJ0OiAwLCBlbmQ6IDAgfSxcbiAgICBlbmNvZGVkVmlkZW86IG51bGxcbiAgfTtcblxuICB1cGRhdGVWaWRlb0RhdGFVUkwgPSBkYXRhVVJMID0+IHRoaXMuc2V0U3RhdGUoeyB2aWRlb0RhdGFVUkw6IGRhdGFVUkwgfSk7XG5cbiAgdXBkYXRlVmlkZW9GcmFtZXMgPSBmcmFtZXMgPT4gdGhpcy5zZXRTdGF0ZSh7IHZpZGVvRnJhbWVzOiBmcmFtZXMgfSk7XG5cbiAgdXBkYXRlSXNFeHRyYWN0aW5nRnJhbWUgPSBzdGF0ZSA9PlxuICAgIHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVJc0V4dHJhY3RpbmdGcmFtZTogc3RhdGUgfSk7XG5cbiAgdXBkYXRlSXNEZWNvZGluZyA9IHN0YXRlID0+IHRoaXMuc2V0U3RhdGUoeyB1cGRhdGVJc0RlY29kaW5nOiBzdGF0ZSB9KTtcbiAgdXBkYXRlVmlkZW9EdXJhdGlvbiA9IGR1cmF0aW9uID0+XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVwZGF0ZVZpZGVvRHVyYXRpb246IGR1cmF0aW9uIH0pO1xuXG4gIGRlY29kZVZpZGVvRmlsZSA9IChmaWxlLCBkb25lQ0IgPSBub29wKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRlY29kaW5nOiB0cnVlIH0pO1xuICAgIGNvbnN0IHdlYlZpZGVvID0gdGhpcy53ZWJWaWRlbztcbiAgICB3ZWJWaWRlby52aWRlb0ZpbGUgPSBmaWxlO1xuICAgIHdlYlZpZGVvLmRlY29kZShmaWxlKS50aGVuKCh7IGJsb2IsIGFycmF5QnVmZmVyLCBkYXRhVVJMIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZWNvZGluZzogZmFsc2UgfSk7XG4gICAgICB0aGlzLnVwZGF0ZVZpZGVvRGF0YVVSTChkYXRhVVJMKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aW1lUmFuZ2U6IHsgc3RhcnQ6IDAsIGVuZDogdGhpcy53ZWJWaWRlby52aWRlb0RhdGEuZHVyYXRpb24gfVxuICAgICAgfSk7XG4gICAgICBkb25lQ0IoKTtcbiAgICB9KTtcbiAgfTtcbiAgaGFuZGxlRmlsZVNlbGVjdGVkID0gZmlsZSA9PiB7XG4gICAgdGhpcy5kZWNvZGVWaWRlb0ZpbGUoZmlsZSk7XG4gIH07XG5cbiAgaGFuZGxlVmlkZW9UcmltID0gdGltZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpbWVSYW5nZTogdGltZSB9KTtcbiAgfTtcbiAgaGFuZGxlRW5jb2RlVmlkZW8gPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0aW1lUmFuZ2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuY29kaW5nOiB0cnVlLCB2aWRlb0RhdGFVUkw6IFwiXCIgfSk7XG4gICAgY29uc3QgdGltZURpZmZlcmVuY2UgPSB0aW1lUmFuZ2UuZW5kIC0gdGltZVJhbmdlLnN0YXJ0O1xuICAgIC8vIGNvbnNvbGUubG9nKHRpbWVSYW5nZSk7XG4gICAgdGhpcy53ZWJWaWRlby50cmltVmlkZW8odGltZVJhbmdlLnN0YXJ0LCB0aW1lRGlmZmVyZW5jZSk7XG4gIH07XG4gIGhhbmRsZVBsYXlQYXVzZVZpZGVvID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGxheVZpZGVvIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5VmlkZW86ICFwbGF5VmlkZW8gfSk7XG4gIH07XG4gIGhhbmRsZVBsYXllclBhdXNlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5VmlkZW86IGZhbHNlIH0pO1xuICB9O1xuICBoYW5kbGVQbGF5ZXJQbGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwbGF5VmlkZW86IHRydWUgfSk7XG4gIH07XG4gIGhhbmRsZVJlc2VsZWN0RmlsZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGRlY29kaW5nOiBmYWxzZSxcbiAgICAgIGVuY29kaW5nOiBmYWxzZSxcbiAgICAgIGVuY29kZWQ6IGZhbHNlLFxuICAgICAgZW5jb2RlZFZpZGVvOiBudWxsLFxuICAgICAgcGxheVZpZGVvOiBmYWxzZSxcbiAgICAgIHZpZGVvRGF0YVVSTDogXCJcIixcbiAgICAgIHZpZGVvRnJhbWVzOiBbXSxcbiAgICAgIGlzRXh0cmFjdGluZ0ZyYW1lOiBmYWxzZSxcbiAgICAgIGlzRGVjb2Rpbmc6IGZhbHNlLFxuICAgICAgdGltZVJhbmdlOiB0aGlzLnByb3BzLnRpbWVSYW5nZSB8fCB7IHN0YXJ0OiAwLCBlbmQ6IDAgfVxuICAgIH07XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG4gIFZpZGVvUGxheWVyV2l0aFRyaW1tZXIgPSAoeyBzaG93VHJpbW1lciB9KSA9PiB7XG4gICAgY29uc3QgeyBkZWNvZGluZywgZW5jb2RpbmcsIGVuY29kZWQsIHZpZGVvRGF0YVVSTCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkZWNvZGluZyAmJiAhZW5jb2RpbmcgJiYgdmlkZW9EYXRhVVJMICYmIChcbiAgICAgICAgICA8UGxheWVyXG4gICAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUudmlkZW9EYXRhVVJMfVxuICAgICAgICAgICAgdGltZVJhbmdlPXt0aGlzLnN0YXRlLnRpbWVSYW5nZX1cbiAgICAgICAgICAgIHBsYXlWaWRlbz17dGhpcy5zdGF0ZS5wbGF5VmlkZW99XG4gICAgICAgICAgICBvblBsYXllclBsYXk9e3RoaXMuaGFuZGxlUGxheWVyUGxheX1cbiAgICAgICAgICAgIG9uUGxheWVyUGF1c2U9e3RoaXMuaGFuZGxlUGxheWVyUGF1c2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dUcmltbWVyICYmIChcbiAgICAgICAgICA8VHJpbW1lclxuICAgICAgICAgICAgc2hvd1RyaW1tZXI9e3RoaXMuc3RhdGUudmlkZW9EYXRhVVJMfVxuICAgICAgICAgICAgZHVyYXRpb249e3RoaXMud2ViVmlkZW8udmlkZW9EYXRhLmR1cmF0aW9ufVxuICAgICAgICAgICAgb25UcmltPXt0aGlzLmhhbmRsZVZpZGVvVHJpbX1cbiAgICAgICAgICAgIHRpbWVSYW5nZT17dGhpcy5zdGF0ZS50aW1lUmFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWRlY29kaW5nICYmICFlbmNvZGluZyAmJiB2aWRlb0RhdGFVUkwgJiYgKFxuICAgICAgICAgIDxDb250cm9sc1xuICAgICAgICAgICAgb25Eb3dubG9hZD17dGhpcy5oYW5kbGVEb3dubG9hZFZpZGVvfVxuICAgICAgICAgICAgY2FuRG93bmxvYWQ9e2VuY29kZWR9XG4gICAgICAgICAgICBzaG93RW5jb2RlQnRuPXt0aGlzLnByb3BzLnNob3dFbmNvZGVCdG59XG4gICAgICAgICAgICBvblJlc2VsZWN0RmlsZT17dGhpcy5oYW5kbGVSZXNlbGVjdEZpbGV9XG4gICAgICAgICAgICBvbkVuY29kZT17dGhpcy5oYW5kbGVFbmNvZGVWaWRlb31cbiAgICAgICAgICAgIG9uUGxheVBhdXNlQ2xpY2s9e3RoaXMuaGFuZGxlUGxheVBhdXNlVmlkZW99XG4gICAgICAgICAgICBwcm9jZXNzaW5nPXtlbmNvZGluZ31cbiAgICAgICAgICAgIHBsYXlpbmc9e3RoaXMuc3RhdGUucGxheVZpZGVvfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuICBoYW5kbGVEb3dubG9hZFZpZGVvID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsb2JVUkwgPSByZWFkQmxvYlVSTCh0aGlzLnN0YXRlLmVuY29kZWRWaWRlbyk7XG4gICAgZG93bmxvYWQoYmxvYlVSTCwgXCJ0cmltbWVkLm1wNFwiKTtcbiAgfTtcbiAgVmlkZW9QbGF5ZXJOb1RyaW1tZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDx0aGlzLlZpZGVvUGxheWVyV2l0aFRyaW1tZXIgLz47XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRlY29kaW5nLCBlbmNvZGluZywgZW5jb2RlZCwgdmlkZW9EYXRhVVJMIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJ2dC1tYWluLWNvbnRhaW5lclwiPlxuICAgICAgICB7ZW5jb2RlZCA/IChcbiAgICAgICAgICA8dGhpcy5WaWRlb1BsYXllck5vVHJpbW1lciAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWRlY29kaW5nICYmICFlbmNvZGluZyAmJiAhdmlkZW9EYXRhVVJMICYmIChcbiAgICAgICAgICAgICAgPEZpbGVQaWNrZXIgb25GaWxlU2VsZWN0ZWQ9e3RoaXMuaGFuZGxlRmlsZVNlbGVjdGVkfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsoZGVjb2RpbmcgfHwgZW5jb2RpbmcpICYmIChcbiAgICAgICAgICAgICAgPFN0YXR1cz5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic3BpblwiIGNsYXNzTmFtZT1cInJ2dC1pY29uLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgIHtlbmNvZGluZyA/IFwiRU5DT0RJTkcgVklERU9cIiA6IFwiREVDT0RJTkcgVklERU9cIn0uLi5cbiAgICAgICAgICAgICAgPC9TdGF0dXM+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHRoaXMuVmlkZW9QbGF5ZXJXaXRoVHJpbW1lciBzaG93VHJpbW1lcj17dHJ1ZX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RWaWRlb1RyaW1tZXI7XG4iXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlIiwiZGF0YVR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJvbmVycm9yIiwiZXJyIiwibm9vcCIsImFycmF5QnVmZmVyVG9CbG9iIiwiYnVmZmVyIiwiQmxvYiIsIlVpbnQ4QXJyYXkiLCJieXRlTGVuZ3RoIiwidHlwZSIsIm5hbWUiLCJEb3dubG9hZCIsImNsYXNzTmFtZSIsIlJlYWN0Iiwidmlld0JveCIsInhtbG5zIiwiZCIsImZpbGwiLCJNdXNpYyIsIlBsYXkiLCJoZWlnaHQiLCJ3aWR0aCIsIlBhdXNlIiwiUmVwbGF5IiwiU3BpbiIsIkljb24iLCJwcm9wcyIsIkVsIiwidHJpbSIsIkZpbGVQaWNrZXIiLCJpbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZUZpbGVDaGFuZ2UiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImxlbmd0aCIsInZpZGVvIiwiaW5kZXhPZiIsImlzVmlkZW8iLCJhbGVydCIsIm9uRmlsZVNlbGVjdGVkIiwiaGFuZGxlQ29udGFpbmVyQ2xpY2tlZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2xpY2siLCJhY2NlcHQiLCJvbkNoYW5nZSIsInJlZiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIlN0YXR1cyIsImNoaWxkcmVuIiwic3JjIiwib3B0cyIsImNiIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwiY2hhcnNldCIsImFzeW5jIiwiYXR0cnMiLCJhdHRyIiwic2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlcyIsInRleHQiLCJzdGRPbkVuZCIsImllT25FbmQiLCJhcHBlbmRDaGlsZCIsInRoaXMiLCJFcnJvciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCIsInZhbHVlIiwib3B0aW9ucyIsImNsb25lIiwiaXNNZXJnZWFibGVPYmplY3QiLCJkZWVwbWVyZ2UiLCJ2YWwiLCJBcnJheSIsImlzQXJyYXkiLCJlbXB0eVRhcmdldCIsImRlZmF1bHRBcnJheU1lcmdlIiwic291cmNlIiwiY29uY2F0IiwibWFwIiwiZWxlbWVudCIsImdldEtleXMiLCJPYmplY3QiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiZmlsdGVyIiwic3ltYm9sIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzIiwibWVyZ2VPYmplY3QiLCJkZXN0aW5hdGlvbiIsImZvckVhY2giLCJrZXkiLCJjdXN0b21NZXJnZSIsImdldE1lcmdlRnVuY3Rpb24iLCJhcnJheU1lcmdlIiwic291cmNlSXNBcnJheSIsInRhcmdldElzQXJyYXkiLCJzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwibW9kdWxlIiwiaXNOb25OdWxsT2JqZWN0Iiwic3RyaW5nVmFsdWUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCIkJHR5cGVvZiIsImlzUmVhY3RFbGVtZW50IiwiaXNTcGVjaWFsIiwiU3ltYm9sIiwiZm9yIiwiYWxsIiwiYXJyYXkiLCJyZWR1Y2UiLCJwcmV2IiwibmV4dCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInVuZGVmaW5lZCIsIm9iaiIsIl9wcm9wVHlwZXMyIiwiX3Byb3BUeXBlcyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiYm9vbCIsIm51bWJlciIsIm9uZU9mVHlwZSIsInNoYXBlIiwib2JqZWN0IiwiZnVuYyIsInVybCIsInBsYXlpbmciLCJsb29wIiwiY29udHJvbHMiLCJ2b2x1bWUiLCJtdXRlZCIsInBsYXliYWNrUmF0ZSIsInN0eWxlIiwicHJvZ3Jlc3NJbnRlcnZhbCIsInBsYXlzaW5saW5lIiwicGlwIiwibGlnaHQiLCJ3cmFwcGVyIiwicmVuZGVyIiwiaXNSZXF1aXJlZCIsImNvbmZpZyIsInNvdW5kY2xvdWQiLCJwcmVsb2FkIiwieW91dHViZSIsInBsYXllclZhcnMiLCJlbWJlZE9wdGlvbnMiLCJmYWNlYm9vayIsImFwcElkIiwiZGFpbHltb3Rpb24iLCJwYXJhbXMiLCJ2aW1lbyIsInBsYXllck9wdGlvbnMiLCJhdHRyaWJ1dGVzIiwidHJhY2tzIiwiZm9yY2VWaWRlbyIsImZvcmNlQXVkaW8iLCJmb3JjZUhMUyIsImZvcmNlREFTSCIsImhsc09wdGlvbnMiLCJobHNWZXJzaW9uIiwiZGFzaFZlcnNpb24iLCJ3aXN0aWEiLCJtaXhjbG91ZCIsInR3aXRjaCIsIm9uUmVhZHkiLCJvblN0YXJ0Iiwib25QbGF5Iiwib25QYXVzZSIsIm9uQnVmZmVyIiwib25CdWZmZXJFbmQiLCJvbkVuZGVkIiwib25FcnJvciIsIm9uRHVyYXRpb24iLCJvblNlZWsiLCJvblByb2dyZXNzIiwib25FbmFibGVQSVAiLCJvbkRpc2FibGVQSVAiLCJ2aXN1YWwiLCJidXlpbmciLCJsaWtpbmciLCJkb3dubG9hZCIsInNoYXJpbmciLCJzaG93X2NvbW1lbnRzIiwic2hvd19wbGF5Y291bnQiLCJzaG93aW5mbyIsInJlbCIsIml2X2xvYWRfcG9saWN5IiwibW9kZXN0YnJhbmRpbmciLCJhcGkiLCJlbmRzY3JlZW4tZW5hYmxlIiwiYXV0b3BhdXNlIiwiYnlsaW5lIiwicG9ydHJhaXQiLCJ0aXRsZSIsImhpZGVfY292ZXIiLCJfdHlwZW9mIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiaSIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJfcyIsIl9pIiwiZG9uZSIsInB1c2giLCJzbGljZUl0ZXJhdG9yIiwiVHlwZUVycm9yIiwicGFyc2VUaW1lUGFyYW0iLCJNQVRDSF9TVEFSVF9RVUVSWSIsIk1BVENIX0VORF9RVUVSWSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJqb2luIiwic2RrR2xvYmFsIiwic2RrUmVhZHkiLCJhcmd1bWVudHMiLCJpc0xvYWRlZCIsImZldGNoU2NyaXB0IiwiX2xvYWRTY3JpcHQyIiwid2luZG93IiwicmVzb2x2ZXMiLCJvbkxvYWRlZCIsInNkayIsInByZXZpb3VzT25SZWFkeSIsImRlZmF1bHRQcm9wcyIsInNob3dXYXJuaW5nIiwiX2RlZXBtZXJnZTIiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwiX3Byb3BzIiwiREVQUkVDQVRFRF9DT05GSUdfUFJPUFMiLCJwIiwicmVwbGFjZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIl9yZWYiLCJfbGVuIiwiYXJyYXlzIiwiX2tleSIsIm9taXRLZXlzIiwiYXBwbHkiLCJvdXRwdXQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJtZXRob2QiLCJfcGxheWVyIiwicGxheWVyIiwiZGlzcGxheU5hbWUiLCJfbGVuMiIsImFyZ3MiLCJfa2V5MiIsImlzT2JqZWN0IiwiaXNFcXVhbCIsImEiLCJiIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjMiLCJfZGlkSXRlcmF0b3JFcnJvcjMiLCJfaXRlcmF0b3JFcnJvcjMiLCJfc3RlcDMiLCJfaXRlcmF0b3IzIiwiTWVkaWFTdHJlYW0iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX2xvYWRTY3JpcHQiLCJfZGVlcG1lcmdlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiTUFUQ0hfU1RBUlRfU1RBTVAiLCJNQVRDSF9OVU1FUklDIiwicGF0dGVybiIsIm1hdGNoIiwic3RhbXAiLCJzZWNvbmRzIiwiZXhlYyIsIl9hcnJheTIiLCJjb3VudCIsInBlcmlvZCIsInBhcnNlSW50IiwicGFyc2VUaW1lU3RyaW5nIiwidGVzdCIsIl9leHRlbmRzIiwiYXNzaWduIiwiaGFzT3duUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsImRlZmluZVByb3BlcnRpZXMiLCJkZXNjcmlwdG9yIiwiX3JlYWN0MiIsIl9yZWFjdCIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiUGxheWVyIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJfaW5oZXJpdHMiLCJDb21wb25lbnQiLCJtb3VudGVkIiwibG9hZCIsInByb2dyZXNzIiwiY2xlYXJUaW1lb3V0IiwicHJvZ3Jlc3NUaW1lb3V0IiwiZHVyYXRpb25DaGVja1RpbWVvdXQiLCJpc1JlYWR5Iiwic3RvcCIsImRpc2FibGVQSVAiLCJuZXh0UHJvcHMiLCJfdGhpczIiLCJfdXRpbHMiLCJpc0xvYWRpbmciLCJsb2FkT25SZWFkeSIsInN0YXJ0T25QbGF5Iiwib25EdXJhdGlvbkNhbGxlZCIsImlzUGxheWluZyIsInBsYXkiLCJwYXVzZSIsImVuYWJsZVBJUCIsInNldFZvbHVtZSIsIm11dGUiLCJ1bm11dGUiLCJzZXRUaW1lb3V0Iiwic2V0UGxheWJhY2tSYXRlIiwic2V0TG9vcCIsImdldER1cmF0aW9uIiwiZ2V0Q3VycmVudFRpbWUiLCJnZXRTZWNvbmRzTG9hZGVkIiwiYW1vdW50IiwiX3RoaXMzIiwic2Vla09uUGxheSIsImR1cmF0aW9uIiwic2Vla1RvIiwiYWN0aXZlUGxheWVyIiwiX3RlbXAiLCJfdGhpcyIsImluc3RhbmNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiZ2V0UHJvdG90eXBlT2YiLCJfaW5pdGlhbGlzZVByb3BzIiwiX3Byb3BzNiIsIl90aGlzNCIsImdldEludGVybmFsUGxheWVyIiwicGxheWVkU2Vjb25kcyIsImxvYWRlZFNlY29uZHMiLCJwbGF5ZWQiLCJsb2FkZWQiLCJwcmV2UGxheWVkIiwicHJldkxvYWRlZCIsInByb2dyZXNzRnJlcXVlbmN5IiwiX3Byb3BzMiIsIm9uRHVyYXRpb25DaGVjayIsIl9wcm9wczMiLCJfcHJvcHM0IiwibG9vcE9uRW5kZWQiLCJfcHJvcHM1IiwiX2NsYXNzIiwiX3RlbXAyIiwiU2luZ2xlUGxheWVyIiwiZ2V0Q29uZmlnIiwiZnJhY3Rpb24iLCJfY29uZmlnJGZpbGUiLCJza2lwQ2FuUGxheSIsImNhblBsYXkiLCJXcmFwcGVyIiwib3RoZXJQcm9wcyIsIm9taXQiLCJTVVBQT1JURURfUFJPUFMiLCJfUGxheWVyMiIsIl9QbGF5ZXIiLCJfc2luZ2xlUGxheWVyMiIsIl9zaW5nbGVQbGF5ZXIiLCJNQVRDSF9VUkwiLCJNQVRDSF9QTEFZTElTVCIsInBhcnNlUGxheWxpc3QiLCJfdXJsJG1hdGNoIiwibGlzdFR5cGUiLCJsaXN0IiwiWW91VHViZSIsIl9vbkVycm9yIiwiX2NvbmZpZyR5b3V0dWJlIiwiaWQiLCJsb2FkUGxheWxpc3QiLCJjdWVWaWRlb0J5SWQiLCJ2aWRlb0lkIiwic3RhcnRTZWNvbmRzIiwicGFyc2VTdGFydFRpbWUiLCJzdGFydCIsImVuZFNlY29uZHMiLCJwYXJzZUVuZFRpbWUiLCJlbmQiLCJnZXRTREsiLCJZVCIsInRoZW4iLCJjb250YWluZXIiLCJhdXRvcGxheSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiZXZlbnRzIiwib25TdGF0ZUNoYW5nZSIsImV2ZW50IiwiZGF0YSIsImNhbGxQbGF5ZXIiLCJib2R5IiwiY29udGFpbnMiLCJyYXRlIiwiX3JlZjIiLCJfdGhpcyRwcm9wcyIsIl93aW5kb3ckU0RLX0dMT0JBTCRQbCIsIlBsYXllclN0YXRlIiwiUExBWUlORyIsIlBBVVNFRCIsIkJVRkZFUklORyIsIkVOREVEIiwiQ1VFRCIsImlzUGxheWxpc3QiLCJTb3VuZENsb3VkIiwiU0MiLCJpZnJhbWUiLCJfU0MkV2lkZ2V0JEV2ZW50cyIsIldpZGdldCIsIkV2ZW50cyIsIlBMQVkiLCJQTEFZX1BST0dSRVNTIiwiUEFVU0UiLCJGSU5JU0giLCJFUlJPUiIsImJpbmQiLCJjdXJyZW50VGltZSIsImN1cnJlbnRQb3NpdGlvbiIsImZyYWN0aW9uTG9hZGVkIiwibG9hZGVkUHJvZ3Jlc3MiLCJjYWxsYmFjayIsImVuY29kZVVSSUNvbXBvbmVudCIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJNQVRDSF9GSUxFX1VSTCIsIlZpbWVvIiwicmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwib24iLCJyZWZyZXNoRHVyYXRpb24iLCJfcmVmMyIsInNlY29uZHNMb2FkZWQiLCJwcm9taXNlIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJTREtfVVJMIiwiU0RLX0dMT0JBTF9SRUFEWSIsIkZhY2Vib29rIiwiRkIiLCJYRkJNTCIsInBhcnNlIiwiaW5pdCIsInhmYm1sIiwidmVyc2lvbiIsIkV2ZW50Iiwic3Vic2NyaWJlIiwibXNnIiwicGxheWVySUQiLCJnZXRFbGVtZW50QnlJZCIsInZpc2liaWxpdHkiLCJkYXRhLWhyZWYiLCJkYXRhLWF1dG9wbGF5IiwiZGF0YS1hbGxvd2Z1bGxzY3JlZW4iLCJkYXRhLWNvbnRyb2xzIiwicmFuZG9tU3RyaW5nIiwiU3RyZWFtYWJsZSIsInBsYXllcmpzIiwicGVyY2VudCIsInNjcm9sbGluZyIsImFsbG93RnVsbFNjcmVlbiIsIldpc3RpYSIsIl9vblJlYWR5IiwiX3dxIiwiZ2V0SUQiLCJhdXRvUGxheSIsInNpbGVudEF1dG9QbGF5IiwiY29udHJvbHNWaXNpYmxlT25Mb2FkIiwidW5iaW5kIiwiTUFUQ0hfVklERU9fVVJMIiwiTUFUQ0hfQ0hBTk5FTF9VUkwiLCJUd2l0Y2giLCJpc0NoYW5uZWwiLCJzZXRDaGFubmVsIiwic2V0VmlkZW8iLCJjaGFubmVsIiwiX1R3aXRjaCRQbGF5ZXIiLCJSRUFEWSIsIk9OTElORSIsIk9GRkxJTkUiLCJhZGRFdmVudExpc3RlbmVyIiwiRGFpbHlNb3Rpb24iLCJETSIsImFwaXJlYWR5Iiwic2Vla2VkIiwidmlkZW9fZW5kIiwiZHVyYXRpb25jaGFuZ2UiLCJvbkR1cmF0aW9uQ2hhbmdlIiwid2FpdGluZyIsImVycm9yIiwiYnVmZmVyZWRUaW1lIiwiTWl4Y2xvdWQiLCJQbGF5ZXJXaWRnZXQiLCJlbmRlZCIsInF1ZXJ5IiwicXVlcnlTdHJpbmciLCJmZWVkIiwiSU9TIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiTVNTdHJlYW0iLCJBVURJT19FWFRFTlNJT05TIiwiVklERU9fRVhURU5TSU9OUyIsIkhMU19FWFRFTlNJT05TIiwiREFTSF9FWFRFTlNJT05TIiwiTUFUQ0hfRFJPUEJPWF9VUkwiLCJpdGVtIiwiaXNNZWRpYVN0cmVhbSIsIkZpbGVQbGF5ZXIiLCJhZGRMaXN0ZW5lcnMiLCJzaG91bGRVc2VBdWRpbyIsInJlbW92ZUxpc3RlbmVycyIsInByZXZQcm9wcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwb3N0ZXIiLCJfcHJvcHMkY29uZmlnJGZpbGUiLCJzaG91bGRVc2VITFMiLCJIbHMiLCJobHMiLCJsb2FkU291cmNlIiwiYXR0YWNoTWVkaWEiLCJzaG91bGRVc2VEQVNIIiwiZGFzaGpzIiwiZGFzaCIsIk1lZGlhUGxheWVyIiwiaW5pdGlhbGl6ZSIsImdldERlYnVnIiwic2V0TG9nVG9Ccm93c2VyQ29uc29sZSIsInNyY09iamVjdCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlbW92ZUF0dHJpYnV0ZSIsImRlc3Ryb3kiLCJyZXNldCIsInJlcXVlc3RQaWN0dXJlSW5QaWN0dXJlIiwicGljdHVyZUluUGljdHVyZUVsZW1lbnQiLCJleGl0UGljdHVyZUluUGljdHVyZSIsInNlZWthYmxlIiwiSW5maW5pdHkiLCJidWZmZXJlZCIsInVzZUhMUyIsInVzZURBU0giLCJFbGVtZW50IiwiZ2V0U291cmNlIiwicmVuZGVyU291cmNlRWxlbWVudCIsInJlbmRlclRyYWNrIiwiaW5kZXgiLCJ0cmFjayIsImNhbkVuYWJsZVBJUCIsInBpY3R1cmVJblBpY3R1cmVFbmFibGVkIiwiX1lvdVR1YmUiLCJfU291bmRDbG91ZCIsIl9WaW1lbyIsIl9GYWNlYm9vayIsIl9TdHJlYW1hYmxlIiwiX1dpc3RpYSIsIl9Ud2l0Y2giLCJfRGFpbHlNb3Rpb24iLCJfTWl4Y2xvdWQiLCJfRmlsZVBsYXllciIsIklDT05fU0laRSIsIlByZXZpZXciLCJmZXRjaEltYWdlIiwic2V0U3RhdGUiLCJpbWFnZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwidGh1bWJuYWlsX3VybCIsInN0YXRlIiwiZmxleENlbnRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzdHlsZXMiLCJwcmV2aWV3IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJjdXJzb3IiLCJzaGFkb3ciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwicGxheUljb24iLCJib3JkZXJTdHlsZSIsImJvcmRlcldpZHRoIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5MZWZ0IiwicGxheWVycyIsIlBSRUxPQURfUExBWUVSUyIsImNvbmZpZ0tleSIsIkNvbnRyb2xzIiwib25QbGF5UGF1c2VDbGljayIsIm9uUmVzZWxlY3RGaWxlIiwicHJvY2Vzc2luZyIsIm9uRW5jb2RlIiwic2hvd0VuY29kZUJ0biIsImNhbkRvd25sb2FkIiwib25Eb3dubG9hZCIsImdldCIsIl9wbGF5ZXJzMiIsIl9wbGF5ZXJzIiwiX1BsYXllcjUiLCJfUGxheWVyNCIsIl9QcmV2aWV3MiIsIl9QcmV2aWV3IiwiX3ByZWxvYWQyIiwiX3ByZWxvYWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIyIiwiZnJvbSIsImN1c3RvbVBsYXllcnMiLCJSZWFjdFBsYXllciIsIm5leHRTdGF0ZSIsInNob3dQcmV2aWV3IiwiYWN0aXZlUGxheWVyUmVmIiwiZ2V0QWN0aXZlUGxheWVyIiwicmVuZGVyZWRBY3RpdmVQbGF5ZXIiLCJyZW5kZXJBY3RpdmVQbGF5ZXIiLCJwcmVsb2FkUGxheWVycyIsInNvcnQiLCJzb3J0UGxheWVycyIsIm9uQ2xpY2tQcmV2aWV3Iiwid3JhcHBlclJlZiIsImFkZEN1c3RvbVBsYXllciIsInJlbW92ZUN1c3RvbVBsYXllcnMiLCJfYXJyMiIsIl9pMiIsIl9hcnIzIiwiX2kzIiwiX1BsYXllcjMiLCJWaWRlb1BsYXllciIsInBsYXlWaWRlbyIsInN0YXJ0VGltZVJhbmdlIiwidGltZVJhbmdlIiwicGxheWVkU2Vjb25kc0lzR3JlYXRlclRoYW5FbmRUaW1lIiwib25QbGF5ZXJQcm9ncmVzcyIsIm9uUGxheWVyUGF1c2UiLCJvblBsYXllclBsYXkiLCJuZXdQcm9wcyIsIm5ld1RpbWVSYW5nZSIsIm9sZFRpbWVSYW5nZSIsImNhblNlZWsiLCJsb2ciLCJ0b0ZpeGVkIiwib25Db250ZXh0TWVudSIsImhhbmRsZU9uUGF1c2UiLCJoYW5kbGVPblBsYXkiLCJoYW5kbGVQbGF5ZXJQcm9ncmVzcyIsImVsIiwibWFyZ2luIiwiZGlzcGxheVNlY29uZHMiLCJEcmFnZ2VyIiwiX3NjcmVlblgiLCJzY3JlZW5YIiwiX3NjcmVlblkiLCJzY3JlZW5ZIiwiX294IiwieCIsIl9veSIsInkiLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwib25EcmFnIiwib25EcmFnU3RvcCIsIlB1cmVDb21wb25lbnQiLCJvbk1vdXNlRG93biIsImhhbmRsZU1vdXNlRG93biIsImxlZnQiLCJ0b3AiLCJUcmltbWVyT3ZlckxheSIsInJpZ2h0IiwiVGltZVN0YW1wIiwiZm9ybWF0ZWQiLCJmbG9vciIsInJvdW5kIiwiZm9ybWF0U2Vjb25kcyIsInRpbWUiLCJudW0iLCJzbGljZSIsImxlZnRaZXJvIiwiVHJpbW1lciIsInBvcyIsIndpZHRoRHVyYXRpb25SYXRpbyIsImNvbnRhaW5lcldpZHRoIiwicG9zMlRpbWUiLCJrZWVwSW5SYW5nZSIsIm9uU3RhcnRUaW1lQ2hhbmdlIiwib25FbmRUaW1lQ2hhbmdlIiwib25HZXREYXRhIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInRpbWUycG9zIiwiRnJhZ21lbnQiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnU3RvcCIsImhhbmRsZURyYWdFbmQiLCJnZXRUcmltbWVyV2lkdGgiLCJWaWRlb1RyaW1tZXIiLCJ0cmltbWVySGFuZGxlciIsIm9uVHJpbSIsImNvbnRhaW5lclJlZiIsInNob3dUcmltbWVyIiwiaGFuZGxlU3RhcnRUaW1lQ2hhbmdlIiwiaGFuZGxlRW5kVGltZUNoYW5nZSIsImhhbmRsZUdldFRyaW1EYXRhIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiRXZlbnRIYW5kbGVycyIsIkV2ZW50RW1pdHRlciIsIiRnZXRNYXhMaXN0ZW5lcnMiLCJ0aGF0IiwiX21heExpc3RlbmVycyIsImRlZmF1bHRNYXhMaXN0ZW5lcnMiLCJfYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInByZXBlbmQiLCJtIiwiZXhpc3RpbmciLCJfZXZlbnRzIiwibmV3TGlzdGVuZXIiLCJlbWl0IiwiX2V2ZW50c0NvdW50IiwidW5zaGlmdCIsIndhcm5lZCIsInciLCJlbWl0dGVyIiwiZW1pdFdhcm5pbmciLCJfb25jZVdyYXAiLCJmaXJlZCIsImciLCJyZW1vdmVMaXN0ZW5lciIsImxpc3RlbmVyQ291bnQiLCJldmxpc3RlbmVyIiwiYXJyYXlDbG9uZSIsImNvcHkiLCJ1c2luZ0RvbWFpbnMiLCJkb21haW4iLCJhY3RpdmUiLCJEb21haW4iLCJzZXRNYXhMaXN0ZW5lcnMiLCJuIiwiaXNOYU4iLCJnZXRNYXhMaXN0ZW5lcnMiLCJlciIsImhhbmRsZXIiLCJsZW4iLCJkb0Vycm9yIiwiZG9tYWluRW1pdHRlciIsImRvbWFpblRocm93biIsImNvbnRleHQiLCJpc0ZuIiwibGlzdGVuZXJzIiwiZW1pdE5vbmUiLCJhcmcxIiwiZW1pdE9uZSIsImFyZzIiLCJlbWl0VHdvIiwiYXJnMyIsImVtaXRUaHJlZSIsImVtaXRNYW55IiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJvbmNlIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsInBvc2l0aW9uIiwib3JpZ2luYWxMaXN0ZW5lciIsImsiLCJwb3AiLCJzcGxpY2VPbmUiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZXQiLCJ1bndyYXBMaXN0ZW5lcnMiLCJldmVudE5hbWVzIiwiUmVmbGVjdCIsIm93bktleXMiLCJ3b3JrZXJGaWxlIiwiaW1wb3J0U2NyaXB0cyIsIm5vdyIsIkRhdGUiLCJwcmludCIsInBvc3RNZXNzYWdlIiwib25tZXNzYWdlIiwiTW9kdWxlIiwicHJpbnRFcnIiLCJUT1RBTF9NRU1PUlkiLCJmZm1wZWdfcnVuIiwidG90YWxUaW1lIiwidCIsIm8iLCJXb3JrZXIiLCJfZGVmaW5lUHJvcGVydGllcyIsIl9nZXRQcm90b3R5cGVPZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJfc2V0UHJvdG90eXBlT2YiLCJ3b3JrZXJDbGllbnQiLCJGRk1QRUdXZWJ3b3JrZXJDbGllbnQiLCJmaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJjb21tYW5kIiwiY29udmVydElucHV0RmlsZVRvQXJyYXlCdWZmZXIiLCJhcnJheUJ1ZmZlciIsIndvcmtlcklzUmVhZHkiLCJmaWxlbmFtZSIsImlucHV0Q29tbWFuZCIsIndvcmtlciIsInNwbGl0IiwiZmlsZVR5cGUiLCJpbmNsdWRlcyIsImluaXRXZWJXb3JrZXIiLCJXb3JrZXJGaWxlIiwiaW5wdXRGaWxlIiwic2l6ZSIsImlucHV0RmlsZUV4aXN0cyIsInJlYWRGaWxlQXNCdWZmZXJBcnJheSIsInNldCIsIl93b3JrZXIiLCJfaW5wdXRGaWxlIiwiemVyb0ZpbGwiLCJwYWQiLCJIT1VSIiwiTUlOVVRFIiwiU0VDT05EIiwiVElNRV9GT1JNQVRfRVJSTVNHIiwiZnJvbU1zIiwibXMiLCJmb3JtYXQiLCJOdW1iZXIiLCJhYnNNcyIsImFicyIsInNob3dNcyIsInNob3dTYyIsInNob3dIciIsInRvTG93ZXJDYXNlIiwibWlsaXNlY29uZHMiLCJob3VycyIsImhoIiwibW0iLCJtaW51dGVzIiwic3MiLCJzc3MiLCJuZWdhdGl2ZSIsImZvcm1hdFRpbWUiLCJXZWJWaWRlbyIsInZpZGVvRmlsZSIsInMiLCJmcm9tUyIsInJ1bkNvbW1hbmQiLCJfdmlkZW9GaWxlIiwiX3ZpZGVvQnVmZmVyIiwidmlkZW9CdWZmZXIiLCJibG9iIiwiY29udmVydEJ1ZmZlclRvQmxvYiIsImRhdGFVUkwiLCJyZWFkQXNEYXRhVVJMIiwidmlkZW9PYmplY3RVcmwiLCJyIiwiX3ZpZGVvRGF0YSIsImNodW5rcyIsInR5cGVkQnVmZmVyIiwic3RhcnRDaHVuayIsIl9idWZmZXIiLCJmcHMiLCJzZWVrUmVzb2x2ZSIsImNhbnZhcyIsImdldENvbnRleHQiLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJoIiwiZnJhbWVzIiwiaW50ZXJ2YWwiLCJkcmF3SW1hZ2UiLCJiYXNlNjRJbWFnZURhdGEiLCJ0b0RhdGFVUkwiLCJSZWFjdFZpZGVvVHJpbW1lciIsInZpZGVvQmxvYiIsImRlY29kZVZpZGVvRmlsZSIsIm9uVmlkZW9FbmNvZGUiLCJlbmNvZGluZyIsImVuY29kZWQiLCJlbmNvZGVkVmlkZW8iLCJkZWNvZGluZyIsInZpZGVvRGF0YVVSTCIsInZpZGVvRnJhbWVzIiwiaXNEZWNvZGluZyIsInVwZGF0ZUlzRXh0cmFjdGluZ0ZyYW1lIiwidXBkYXRlSXNEZWNvZGluZyIsInVwZGF0ZVZpZGVvRHVyYXRpb24iLCJkb25lQ0IiLCJ3ZWJWaWRlbyIsImRlY29kZSIsInVwZGF0ZVZpZGVvRGF0YVVSTCIsInZpZGVvRGF0YSIsInRpbWVEaWZmZXJlbmNlIiwidHJpbVZpZGVvIiwiaXNFeHRyYWN0aW5nRnJhbWUiLCJoYW5kbGVQbGF5ZXJQbGF5IiwiaGFuZGxlUGxheWVyUGF1c2UiLCJoYW5kbGVWaWRlb1RyaW0iLCJoYW5kbGVEb3dubG9hZFZpZGVvIiwiaGFuZGxlUmVzZWxlY3RGaWxlIiwiaGFuZGxlRW5jb2RlVmlkZW8iLCJoYW5kbGVQbGF5UGF1c2VWaWRlbyIsImxpbmsiLCJocmVmIiwicmVhZEJsb2JVUkwiLCJWaWRlb1BsYXllcldpdGhUcmltbWVyIiwiaGFuZGxlRkZNUEVHU3Rkb3V0IiwiaGFuZGxlRkZNUEVHUmVhZHkiLCJoYW5kbGVGRk1QRUdGaWxlUmVjZWl2ZWQiLCJoYW5kbGVGRk1QRUdEb25lIiwiVmlkZW9QbGF5ZXJOb1RyaW1tZXIiLCJoYW5kbGVGaWxlU2VsZWN0ZWQiXSwibWFwcGluZ3MiOiJvdURBa0J3QixTQUFYQSxFQUFZQyxFQUFELE9BQU9DLCtCQUFQLEVBQUEsRUFBa0IscUJBQ3hDLElBQUlDLFFBQVEsU0FBQ0MsRUFBU0MsT0FDZEMsRUFBUyxJQUFJQyxXQUNuQkQsRUFBTyxTQUFXSixHQUFVRCxHQUM1QkssRUFBT0UsT0FBUyxrQkFBTUosRUFBUUUsRUFBT0csU0FDckNILEVBQU9JLFFBQVUsU0FBQUMsVUFBT04sRUFBT00sTUEyQ2YsU0FBUEMsS0FFb0IsU0FBcEJDLEVBQW9CQyxVQUMvQixJQUFJQyxLQUFLLENBQUMsSUFBSUMsV0FBV0YsRUFBUSxFQUFHQSxFQUFPRyxhQUFjLENBQ3ZEQyxLQUFNLGFBQ05DLEtBQU0sZUNuRU8sU0FBWEMsU0FBY0MsSUFBQUEsaUJBQ2xCQyx1QkFDRUQsVUFBV0EsRUFDWEUsUUFBUSxZQUNSQyxNQUFNLDhCQUVORix3QkFBTUcsRUFBRSw4Q0FDUkgsd0JBQU1HLEVBQUUsZ0JBQWdCQyxLQUFLLFVBSW5CLFNBQVJDLFNBQVdOLElBQUFBLGlCQUNmQyx1QkFDRUQsVUFBV0EsRUFDWEUsUUFBUSxZQUNSQyxNQUFNLDhCQUVORix3QkFBTUcsRUFBRSxnQkFBZ0JDLEtBQUssU0FDN0JKLHdCQUFNRyxFQUFFLHNJQUlDLFNBQVBHLFNBQVVQLElBQUFBLGlCQUNkQyx1QkFDRUQsVUFBV0EsRUFDWFEsT0FBTyxLQUNQTixRQUFRLFlBQ1JPLE1BQU0sS0FDTk4sTUFBTSw4QkFFTkYsd0JBQU1HLEVBQUUsZ0JBQWdCQyxLQUFLLFNBQzdCSix3QkFBTUcsRUFBRSx5SkFJRSxTQUFSTSxTQUFXVixJQUFBQSxpQkFDZkMsdUJBQ0VELFVBQVdBLEVBQ1hRLE9BQU8sS0FDUE4sUUFBUSxZQUNSTyxNQUFNLEtBQ05OLE1BQU0sOEJBRU5GLHdC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
