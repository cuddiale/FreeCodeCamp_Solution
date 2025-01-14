import { r as m, R as p, g as xt, u as gt, B as Ce } from "./index.55bf5780.js";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var N = function () {
  return (
    (N =
      Object.assign ||
      function (t) {
        for (var r, a = 1, n = arguments.length; a < n; a++) {
          r = arguments[a];
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
        }
        return t;
      }),
    N.apply(this, arguments)
  );
};
function wt(e, t) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
      t.indexOf(a[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
        (r[a[n]] = e[a[n]]);
  return r;
}
var Rt = function () {
    return Math.random().toString(36).substring(6);
  },
  Ye = function (e) {
    var t = e.animate,
      r = e.animateBegin,
      a = e.backgroundColor,
      n = e.backgroundOpacity,
      i = e.baseUrl,
      o = e.children,
      s = e.foregroundColor,
      l = e.foregroundOpacity,
      c = e.gradientRatio,
      d = e.gradientDirection,
      h = e.uniqueKey,
      u = e.interval,
      y = e.rtl,
      G = e.speed,
      C = e.style,
      S = e.title,
      O = e.beforeMask,
      P = wt(e, [
        "animate",
        "animateBegin",
        "backgroundColor",
        "backgroundOpacity",
        "baseUrl",
        "children",
        "foregroundColor",
        "foregroundOpacity",
        "gradientRatio",
        "gradientDirection",
        "uniqueKey",
        "interval",
        "rtl",
        "speed",
        "style",
        "title",
        "beforeMask",
      ]),
      R = h || Rt(),
      I = R + "-diff",
      f = R + "-animated-diff",
      M = R + "-aria",
      Y = y
        ? {
            transform: "scaleX(-1)",
          }
        : null,
      D = "0; " + u + "; 1",
      B = G + "s",
      H = d === "top-bottom" ? "rotate(90)" : void 0;
    return m.exports.createElement(
      "svg",
      N(
        {
          "aria-labelledby": M,
          role: "img",
          style: N(N({}, C), Y),
        },
        P
      ),
      S
        ? m.exports.createElement(
            "title",
            {
              id: M,
            },
            S
          )
        : null,
      O && m.exports.isValidElement(O) ? O : null,
      m.exports.createElement("rect", {
        role: "presentation",
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        clipPath: "url(" + i + "#" + I + ")",
        style: {
          fill: "url(" + i + "#" + f + ")",
        },
      }),
      m.exports.createElement(
        "defs",
        null,
        m.exports.createElement(
          "clipPath",
          {
            id: I,
          },
          o
        ),
        m.exports.createElement(
          "linearGradient",
          {
            id: f,
            gradientTransform: H,
          },
          m.exports.createElement(
            "stop",
            {
              offset: "0%",
              stopColor: a,
              stopOpacity: n,
            },
            t &&
              m.exports.createElement("animate", {
                attributeName: "offset",
                values: -c + "; " + -c + "; 1",
                keyTimes: D,
                dur: B,
                repeatCount: "indefinite",
                begin: r,
              })
          ),
          m.exports.createElement(
            "stop",
            {
              offset: "50%",
              stopColor: s,
              stopOpacity: l,
            },
            t &&
              m.exports.createElement("animate", {
                attributeName: "offset",
                values: -c / 2 + "; " + -c / 2 + "; " + (1 + c / 2),
                keyTimes: D,
                dur: B,
                repeatCount: "indefinite",
                begin: r,
              })
          ),
          m.exports.createElement(
            "stop",
            {
              offset: "100%",
              stopColor: a,
              stopOpacity: n,
            },
            t &&
              m.exports.createElement("animate", {
                attributeName: "offset",
                values: "0; 0; " + (1 + c),
                keyTimes: D,
                dur: B,
                repeatCount: "indefinite",
                begin: r,
              })
          )
        )
      )
    );
  };
Ye.defaultProps = {
  animate: !0,
  backgroundColor: "#f5f6f7",
  backgroundOpacity: 1,
  baseUrl: "",
  foregroundColor: "#eee",
  foregroundOpacity: 1,
  gradientRatio: 2,
  gradientDirection: "left-right",
  id: null,
  interval: 0.25,
  rtl: !1,
  speed: 1.2,
  style: {},
  title: "Loading...",
  beforeMask: null,
};
var Ze = function (e) {
    return e.children
      ? m.exports.createElement(Ye, N({}, e))
      : m.exports.createElement(Ot, N({}, e));
  },
  Ot = function (e) {
    return m.exports.createElement(
      Ze,
      N(
        {
          viewBox: "0 0 476 124",
        },
        e
      ),
      m.exports.createElement("rect", {
        x: "48",
        y: "8",
        width: "88",
        height: "6",
        rx: "3",
      }),
      m.exports.createElement("rect", {
        x: "48",
        y: "26",
        width: "52",
        height: "6",
        rx: "3",
      }),
      m.exports.createElement("rect", {
        x: "0",
        y: "56",
        width: "410",
        height: "6",
        rx: "3",
      }),
      m.exports.createElement("rect", {
        x: "0",
        y: "72",
        width: "380",
        height: "6",
        rx: "3",
      }),
      m.exports.createElement("rect", {
        x: "0",
        y: "88",
        width: "178",
        height: "6",
        rx: "3",
      }),
      m.exports.createElement("circle", {
        cx: "20",
        cy: "20",
        r: "20",
      })
    );
  };
const Se = Ze;
var et = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Ae = p.createContext && p.createContext(et),
  T =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (T =
          Object.assign ||
          function (e) {
            for (var t, r = 1, a = arguments.length; r < a; r++) {
              t = arguments[r];
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }),
        T.apply(this, arguments)
      );
    },
  Ct =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var r = {};
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) &&
          t.indexOf(a) < 0 &&
          (r[a] = e[a]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var n = 0, a = Object.getOwnPropertySymbols(e); n < a.length; n++)
          t.indexOf(a[n]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, a[n]) &&
            (r[a[n]] = e[a[n]]);
      return r;
    };
function tt(e) {
  return (
    e &&
    e.map(function (t, r) {
      return p.createElement(
        t.tag,
        T(
          {
            key: r,
          },
          t.attr
        ),
        tt(t.child)
      );
    })
  );
}
function St(e) {
  return function (t) {
    return p.createElement(
      At,
      T(
        {
          attr: T({}, e.attr),
        },
        t
      ),
      tt(e.child)
    );
  };
}
function At(e) {
  var t = function (r) {
    var a = e.attr,
      n = e.size,
      i = e.title,
      o = Ct(e, ["attr", "size", "title"]),
      s = n || r.size || "1em",
      l;
    return (
      r.className && (l = r.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      p.createElement(
        "svg",
        T(
          {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
          },
          r.attr,
          a,
          o,
          {
            className: l,
            style: T(
              T(
                {
                  color: e.color || r.color,
                },
                r.style
              ),
              e.style
            ),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i && p.createElement("title", null, i),
        e.children
      )
    );
  };
  return Ae !== void 0
    ? p.createElement(Ae.Consumer, null, function (r) {
        return t(r);
      })
    : t(et);
}
function Nt(e) {
  return St({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
var rt = {
    exports: {},
  },
  Ee = {
    exports: {},
  },
  nt = function (t, r) {
    return function () {
      for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
        n[i] = arguments[i];
      return t.apply(r, n);
    };
  },
  Tt = nt,
  ye = Object.prototype.toString,
  be = (function (e) {
    return function (t) {
      var r = ye.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));
function _(e) {
  return (
    (e = e.toLowerCase()),
    function (r) {
      return be(r) === e;
    }
  );
}
function xe(e) {
  return Array.isArray(e);
}
function V(e) {
  return typeof e > "u";
}
function Pt(e) {
  return (
    e !== null &&
    !V(e) &&
    e.constructor !== null &&
    !V(e.constructor) &&
    typeof e.constructor.isBuffer == "function" &&
    e.constructor.isBuffer(e)
  );
}
var at = _("ArrayBuffer");
function Dt(e) {
  var t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && at(e.buffer)),
    t
  );
}
function Ut(e) {
  return typeof e == "string";
}
function _t(e) {
  return typeof e == "number";
}
function it(e) {
  return e !== null && typeof e == "object";
}
function z(e) {
  if (be(e) !== "object") return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
var Bt = _("Date"),
  Lt = _("File"),
  qt = _("Blob"),
  jt = _("FileList");
function ge(e) {
  return ye.call(e) === "[object Function]";
}
function kt(e) {
  return it(e) && ge(e.pipe);
}
function Ft(e) {
  var t = "[object FormData]";
  return (
    e &&
    ((typeof FormData == "function" && e instanceof FormData) ||
      ye.call(e) === t ||
      (ge(e.toString) && e.toString() === t))
  );
}
var $t = _("URLSearchParams");
function It(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function Mt() {
  return typeof navigator < "u" &&
    (navigator.product === "ReactNative" ||
      navigator.product === "NativeScript" ||
      navigator.product === "NS")
    ? !1
    : typeof window < "u" && typeof document < "u";
}
function we(e, t) {
  if (!(e === null || typeof e > "u"))
    if ((typeof e != "object" && (e = [e]), xe(e)))
      for (var r = 0, a = e.length; r < a; r++) t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e);
}
function ve() {
  var e = {};
  function t(n, i) {
    z(e[i]) && z(n)
      ? (e[i] = ve(e[i], n))
      : z(n)
      ? (e[i] = ve({}, n))
      : xe(n)
      ? (e[i] = n.slice())
      : (e[i] = n);
  }
  for (var r = 0, a = arguments.length; r < a; r++) we(arguments[r], t);
  return e;
}
function Ht(e, t, r) {
  return (
    we(t, function (n, i) {
      r && typeof n == "function" ? (e[i] = Tt(n, r)) : (e[i] = n);
    }),
    e
  );
}
function zt(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function Jt(e, t, r, a) {
  (e.prototype = Object.create(t.prototype, a)),
    (e.prototype.constructor = e),
    r && Object.assign(e.prototype, r);
}
function Vt(e, t, r) {
  var a,
    n,
    i,
    o = {};
  t = t || {};
  do {
    for (a = Object.getOwnPropertyNames(e), n = a.length; n-- > 0; )
      (i = a[n]), o[i] || ((t[i] = e[i]), (o[i] = !0));
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}
function Wt(e, t, r) {
  (e = String(e)),
    (r === void 0 || r > e.length) && (r = e.length),
    (r -= t.length);
  var a = e.indexOf(t, r);
  return a !== -1 && a === r;
}
function Qt(e) {
  if (!e) return null;
  var t = e.length;
  if (V(t)) return null;
  for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
  return r;
}
var Xt = (function (e) {
    return function (t) {
      return e && t instanceof e;
    };
  })(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
  E = {
    isArray: xe,
    isArrayBuffer: at,
    isBuffer: Pt,
    isFormData: Ft,
    isArrayBufferView: Dt,
    isString: Ut,
    isNumber: _t,
    isObject: it,
    isPlainObject: z,
    isUndefined: V,
    isDate: Bt,
    isFile: Lt,
    isBlob: qt,
    isFunction: ge,
    isStream: kt,
    isURLSearchParams: $t,
    isStandardBrowserEnv: Mt,
    forEach: we,
    merge: ve,
    extend: Ht,
    trim: It,
    stripBOM: zt,
    inherits: Jt,
    toFlatObject: Vt,
    kindOf: be,
    kindOfTest: _,
    endsWith: Wt,
    toArray: Qt,
    isTypedArray: Xt,
    isFileList: jt,
  },
  q = E;
function Ne(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
var ot = function (t, r, a) {
    if (!r) return t;
    var n;
    if (a) n = a(r);
    else if (q.isURLSearchParams(r)) n = r.toString();
    else {
      var i = [];
      q.forEach(r, function (l, c) {
        l === null ||
          typeof l > "u" ||
          (q.isArray(l) ? (c = c + "[]") : (l = [l]),
          q.forEach(l, function (h) {
            q.isDate(h)
              ? (h = h.toISOString())
              : q.isObject(h) && (h = JSON.stringify(h)),
              i.push(Ne(c) + "=" + Ne(h));
          }));
      }),
        (n = i.join("&"));
    }
    if (n) {
      var o = t.indexOf("#");
      o !== -1 && (t = t.slice(0, o)),
        (t += (t.indexOf("?") === -1 ? "?" : "&") + n);
    }
    return t;
  },
  Kt = E;
function W() {
  this.handlers = [];
}
W.prototype.use = function (t, r, a) {
  return (
    this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null,
    }),
    this.handlers.length - 1
  );
};
W.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null);
};
W.prototype.forEach = function (t) {
  Kt.forEach(this.handlers, function (a) {
    a !== null && t(a);
  });
};
var Gt = W,
  Yt = E,
  Zt = function (t, r) {
    Yt.forEach(t, function (n, i) {
      i !== r &&
        i.toUpperCase() === r.toUpperCase() &&
        ((t[r] = n), delete t[i]);
    });
  },
  st = E;
function k(e, t, r, a, n) {
  Error.call(this),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    r && (this.config = r),
    a && (this.request = a),
    n && (this.response = n);
}
st.inherits(k, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
var ut = k.prototype,
  lt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
].forEach(function (e) {
  lt[e] = {
    value: e,
  };
});
Object.defineProperties(k, lt);
Object.defineProperty(ut, "isAxiosError", {
  value: !0,
});
k.from = function (e, t, r, a, n, i) {
  var o = Object.create(ut);
  return (
    st.toFlatObject(e, o, function (l) {
      return l !== Error.prototype;
    }),
    k.call(o, e.message, t, r, a, n),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
var $ = k,
  ft = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  w = E;
function er(e, t) {
  t = t || new FormData();
  var r = [];
  function a(i) {
    return i === null
      ? ""
      : w.isDate(i)
      ? i.toISOString()
      : w.isArrayBuffer(i) || w.isTypedArray(i)
      ? typeof Blob == "function"
        ? new Blob([i])
        : Buffer.from(i)
      : i;
  }
  function n(i, o) {
    if (w.isPlainObject(i) || w.isArray(i)) {
      if (r.indexOf(i) !== -1)
        throw Error("Circular reference detected in " + o);
      r.push(i),
        w.forEach(i, function (l, c) {
          if (!w.isUndefined(l)) {
            var d = o ? o + "." + c : c,
              h;
            if (l && !o && typeof l == "object") {
              if (w.endsWith(c, "{}")) l = JSON.stringify(l);
              else if (w.endsWith(c, "[]") && (h = w.toArray(l))) {
                h.forEach(function (u) {
                  !w.isUndefined(u) && t.append(d, a(u));
                });
                return;
              }
            }
            n(l, d);
          }
        }),
        r.pop();
    } else t.append(o, a(i));
  }
  return n(e), t;
}
var ct = er,
  te,
  Te;
function tr() {
  if (Te) return te;
  Te = 1;
  var e = $;
  return (
    (te = function (r, a, n) {
      var i = n.config.validateStatus;
      !n.status || !i || i(n.status)
        ? r(n)
        : a(
            new e(
              "Request failed with status code " + n.status,
              [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][
                Math.floor(n.status / 100) - 4
              ],
              n.config,
              n.request,
              n
            )
          );
    }),
    te
  );
}
var re, Pe;
function rr() {
  if (Pe) return re;
  Pe = 1;
  var e = E;
  return (
    (re = e.isStandardBrowserEnv()
      ? (function () {
          return {
            write: function (a, n, i, o, s, l) {
              var c = [];
              c.push(a + "=" + encodeURIComponent(n)),
                e.isNumber(i) && c.push("expires=" + new Date(i).toGMTString()),
                e.isString(o) && c.push("path=" + o),
                e.isString(s) && c.push("domain=" + s),
                l === !0 && c.push("secure"),
                (document.cookie = c.join("; "));
            },
            read: function (a) {
              var n = document.cookie.match(
                new RegExp("(^|;\\s*)(" + a + ")=([^;]*)")
              );
              return n ? decodeURIComponent(n[3]) : null;
            },
            remove: function (a) {
              this.write(a, "", Date.now() - 864e5);
            },
          };
        })()
      : (function () {
          return {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
        })()),
    re
  );
}
var nr = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
  },
  ar = function (t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t;
  },
  ir = nr,
  or = ar,
  dt = function (t, r) {
    return t && !ir(r) ? or(t, r) : r;
  },
  ne,
  De;
function sr() {
  if (De) return ne;
  De = 1;
  var e = E,
    t = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ];
  return (
    (ne = function (a) {
      var n = {},
        i,
        o,
        s;
      return (
        a &&
          e.forEach(
            a.split(`
`),
            function (c) {
              if (
                ((s = c.indexOf(":")),
                (i = e.trim(c.substr(0, s)).toLowerCase()),
                (o = e.trim(c.substr(s + 1))),
                i)
              ) {
                if (n[i] && t.indexOf(i) >= 0) return;
                i === "set-cookie"
                  ? (n[i] = (n[i] ? n[i] : []).concat([o]))
                  : (n[i] = n[i] ? n[i] + ", " + o : o);
              }
            }
          ),
        n
      );
    }),
    ne
  );
}
var ae, Ue;
function ur() {
  if (Ue) return ae;
  Ue = 1;
  var e = E;
  return (
    (ae = e.isStandardBrowserEnv()
      ? (function () {
          var r = /(msie|trident)/i.test(navigator.userAgent),
            a = document.createElement("a"),
            n;
          function i(o) {
            var s = o;
            return (
              r && (a.setAttribute("href", s), (s = a.href)),
              a.setAttribute("href", s),
              {
                href: a.href,
                protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                host: a.host,
                search: a.search ? a.search.replace(/^\?/, "") : "",
                hash: a.hash ? a.hash.replace(/^#/, "") : "",
                hostname: a.hostname,
                port: a.port,
                pathname:
                  a.pathname.charAt(0) === "/" ? a.pathname : "/" + a.pathname,
              }
            );
          }
          return (
            (n = i(window.location.href)),
            function (s) {
              var l = e.isString(s) ? i(s) : s;
              return l.protocol === n.protocol && l.host === n.host;
            }
          );
        })()
      : (function () {
          return function () {
            return !0;
          };
        })()),
    ae
  );
}
var ie, _e;
function Q() {
  if (_e) return ie;
  _e = 1;
  var e = $,
    t = E;
  function r(a) {
    e.call(this, a == null ? "canceled" : a, e.ERR_CANCELED),
      (this.name = "CanceledError");
  }
  return (
    t.inherits(r, e, {
      __CANCEL__: !0,
    }),
    (ie = r),
    ie
  );
}
var oe, Be;
function lr() {
  return (
    Be ||
      ((Be = 1),
      (oe = function (t) {
        var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
        return (r && r[1]) || "";
      })),
    oe
  );
}
var se, Le;
function qe() {
  if (Le) return se;
  Le = 1;
  var e = E,
    t = tr(),
    r = rr(),
    a = ot,
    n = dt,
    i = sr(),
    o = ur(),
    s = ft,
    l = $,
    c = Q(),
    d = lr();
  return (
    (se = function (u) {
      return new Promise(function (G, C) {
        var S = u.data,
          O = u.headers,
          P = u.responseType,
          R;
        function I() {
          u.cancelToken && u.cancelToken.unsubscribe(R),
            u.signal && u.signal.removeEventListener("abort", R);
        }
        e.isFormData(S) && e.isStandardBrowserEnv() && delete O["Content-Type"];
        var f = new XMLHttpRequest();
        if (u.auth) {
          var M = u.auth.username || "",
            Y = u.auth.password
              ? unescape(encodeURIComponent(u.auth.password))
              : "";
          O.Authorization = "Basic " + btoa(M + ":" + Y);
        }
        var D = n(u.baseURL, u.url);
        f.open(u.method.toUpperCase(), a(D, u.params, u.paramsSerializer), !0),
          (f.timeout = u.timeout);
        function B() {
          if (!!f) {
            var g =
                "getAllResponseHeaders" in f
                  ? i(f.getAllResponseHeaders())
                  : null,
              L =
                !P || P === "text" || P === "json"
                  ? f.responseText
                  : f.response,
              U = {
                data: L,
                status: f.status,
                statusText: f.statusText,
                headers: g,
                config: u,
                request: f,
              };
            t(
              function (ee) {
                G(ee), I();
              },
              function (ee) {
                C(ee), I();
              },
              U
            ),
              (f = null);
          }
        }
        if (
          ("onloadend" in f
            ? (f.onloadend = B)
            : (f.onreadystatechange = function () {
                !f ||
                  f.readyState !== 4 ||
                  (f.status === 0 &&
                    !(f.responseURL && f.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(B);
              }),
          (f.onabort = function () {
            !f ||
              (C(new l("Request aborted", l.ECONNABORTED, u, f)), (f = null));
          }),
          (f.onerror = function () {
            C(new l("Network Error", l.ERR_NETWORK, u, f, f)), (f = null);
          }),
          (f.ontimeout = function () {
            var L = u.timeout
                ? "timeout of " + u.timeout + "ms exceeded"
                : "timeout exceeded",
              U = u.transitional || s;
            u.timeoutErrorMessage && (L = u.timeoutErrorMessage),
              C(
                new l(
                  L,
                  U.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
                  u,
                  f
                )
              ),
              (f = null);
          }),
          e.isStandardBrowserEnv())
        ) {
          var H =
            (u.withCredentials || o(D)) && u.xsrfCookieName
              ? r.read(u.xsrfCookieName)
              : void 0;
          H && (O[u.xsrfHeaderName] = H);
        }
        "setRequestHeader" in f &&
          e.forEach(O, function (L, U) {
            typeof S > "u" && U.toLowerCase() === "content-type"
              ? delete O[U]
              : f.setRequestHeader(U, L);
          }),
          e.isUndefined(u.withCredentials) ||
            (f.withCredentials = !!u.withCredentials),
          P && P !== "json" && (f.responseType = u.responseType),
          typeof u.onDownloadProgress == "function" &&
            f.addEventListener("progress", u.onDownloadProgress),
          typeof u.onUploadProgress == "function" &&
            f.upload &&
            f.upload.addEventListener("progress", u.onUploadProgress),
          (u.cancelToken || u.signal) &&
            ((R = function (g) {
              !f ||
                (C(!g || (g && g.type) ? new c() : g), f.abort(), (f = null));
            }),
            u.cancelToken && u.cancelToken.subscribe(R),
            u.signal &&
              (u.signal.aborted ? R() : u.signal.addEventListener("abort", R))),
          S || (S = null);
        var Z = d(D);
        if (Z && ["http", "https", "file"].indexOf(Z) === -1) {
          C(new l("Unsupported protocol " + Z + ":", l.ERR_BAD_REQUEST, u));
          return;
        }
        f.send(S);
      });
    }),
    se
  );
}
var ue, je;
function fr() {
  return je || ((je = 1), (ue = null)), ue;
}
var v = E,
  ke = Zt,
  Fe = $,
  cr = ft,
  dr = ct,
  hr = {
    "Content-Type": "application/x-www-form-urlencoded",
  };
function $e(e, t) {
  !v.isUndefined(e) &&
    v.isUndefined(e["Content-Type"]) &&
    (e["Content-Type"] = t);
}
function pr() {
  var e;
  return (
    (typeof XMLHttpRequest < "u" ||
      (typeof process < "u" &&
        Object.prototype.toString.call(process) === "[object process]")) &&
      (e = qe()),
    e
  );
}
function mr(e, t, r) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError") throw a;
    }
  return (r || JSON.stringify)(e);
}
var X = {
  transitional: cr,
  adapter: pr(),
  transformRequest: [
    function (t, r) {
      if (
        (ke(r, "Accept"),
        ke(r, "Content-Type"),
        v.isFormData(t) ||
          v.isArrayBuffer(t) ||
          v.isBuffer(t) ||
          v.isStream(t) ||
          v.isFile(t) ||
          v.isBlob(t))
      )
        return t;
      if (v.isArrayBufferView(t)) return t.buffer;
      if (v.isURLSearchParams(t))
        return (
          $e(r, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()
        );
      var a = v.isObject(t),
        n = r && r["Content-Type"],
        i;
      if ((i = v.isFileList(t)) || (a && n === "multipart/form-data")) {
        var o = this.env && this.env.FormData;
        return dr(
          i
            ? {
                "files[]": t,
              }
            : t,
          o && new o()
        );
      } else if (a || n === "application/json")
        return $e(r, "application/json"), mr(t);
      return t;
    },
  ],
  transformResponse: [
    function (t) {
      var r = this.transitional || X.transitional,
        a = r && r.silentJSONParsing,
        n = r && r.forcedJSONParsing,
        i = !a && this.responseType === "json";
      if (i || (n && v.isString(t) && t.length))
        try {
          return JSON.parse(t);
        } catch (o) {
          if (i)
            throw o.name === "SyntaxError"
              ? Fe.from(o, Fe.ERR_BAD_RESPONSE, this, null, this.response)
              : o;
        }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: fr(),
  },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
    },
  },
};
v.forEach(["delete", "get", "head"], function (t) {
  X.headers[t] = {};
});
v.forEach(["post", "put", "patch"], function (t) {
  X.headers[t] = v.merge(hr);
});
var Re = X,
  vr = E,
  Er = Re,
  yr = function (t, r, a) {
    var n = this || Er;
    return (
      vr.forEach(a, function (o) {
        t = o.call(n, t, r);
      }),
      t
    );
  },
  le,
  Ie;
function ht() {
  return (
    Ie ||
      ((Ie = 1),
      (le = function (t) {
        return !!(t && t.__CANCEL__);
      })),
    le
  );
}
var Me = E,
  fe = yr,
  br = ht(),
  xr = Re,
  gr = Q();
function ce(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new gr();
}
var wr = function (t) {
    ce(t),
      (t.headers = t.headers || {}),
      (t.data = fe.call(t, t.data, t.headers, t.transformRequest)),
      (t.headers = Me.merge(
        t.headers.common || {},
        t.headers[t.method] || {},
        t.headers
      )),
      Me.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function (n) {
          delete t.headers[n];
        }
      );
    var r = t.adapter || xr.adapter;
    return r(t).then(
      function (n) {
        return (
          ce(t),
          (n.data = fe.call(t, n.data, n.headers, t.transformResponse)),
          n
        );
      },
      function (n) {
        return (
          br(n) ||
            (ce(t),
            n &&
              n.response &&
              (n.response.data = fe.call(
                t,
                n.response.data,
                n.response.headers,
                t.transformResponse
              ))),
          Promise.reject(n)
        );
      }
    );
  },
  x = E,
  pt = function (t, r) {
    r = r || {};
    var a = {};
    function n(d, h) {
      return x.isPlainObject(d) && x.isPlainObject(h)
        ? x.merge(d, h)
        : x.isPlainObject(h)
        ? x.merge({}, h)
        : x.isArray(h)
        ? h.slice()
        : h;
    }
    function i(d) {
      if (x.isUndefined(r[d])) {
        if (!x.isUndefined(t[d])) return n(void 0, t[d]);
      } else return n(t[d], r[d]);
    }
    function o(d) {
      if (!x.isUndefined(r[d])) return n(void 0, r[d]);
    }
    function s(d) {
      if (x.isUndefined(r[d])) {
        if (!x.isUndefined(t[d])) return n(void 0, t[d]);
      } else return n(void 0, r[d]);
    }
    function l(d) {
      if (d in r) return n(t[d], r[d]);
      if (d in t) return n(void 0, t[d]);
    }
    var c = {
      url: o,
      method: o,
      data: o,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: l,
    };
    return (
      x.forEach(Object.keys(t).concat(Object.keys(r)), function (h) {
        var u = c[h] || i,
          y = u(h);
        (x.isUndefined(y) && u !== l) || (a[h] = y);
      }),
      a
    );
  },
  de,
  He;
function mt() {
  return (
    He ||
      ((He = 1),
      (de = {
        version: "0.27.2",
      })),
    de
  );
}
var Rr = mt().version,
  A = $,
  Oe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  function (e, t) {
    Oe[e] = function (a) {
      return typeof a === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
var ze = {};
Oe.transitional = function (t, r, a) {
  function n(i, o) {
    return (
      "[Axios v" +
      Rr +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (a ? ". " + a : "")
    );
  }
  return function (i, o, s) {
    if (t === !1)
      throw new A(
        n(o, " has been removed" + (r ? " in " + r : "")),
        A.ERR_DEPRECATED
      );
    return (
      r &&
        !ze[o] &&
        ((ze[o] = !0),
        console.warn(
          n(
            o,
            " has been deprecated since v" +
              r +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, s) : !0
    );
  };
};
function Or(e, t, r) {
  if (typeof e != "object")
    throw new A("options must be an object", A.ERR_BAD_OPTION_VALUE);
  for (var a = Object.keys(e), n = a.length; n-- > 0; ) {
    var i = a[n],
      o = t[i];
    if (o) {
      var s = e[i],
        l = s === void 0 || o(s, i, e);
      if (l !== !0)
        throw new A("option " + i + " must be " + l, A.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new A("Unknown option " + i, A.ERR_BAD_OPTION);
  }
}
var Cr = {
    assertOptions: Or,
    validators: Oe,
  },
  vt = E,
  Sr = ot,
  Je = Gt,
  Ve = wr,
  K = pt,
  Ar = dt,
  Et = Cr,
  j = Et.validators;
function F(e) {
  (this.defaults = e),
    (this.interceptors = {
      request: new Je(),
      response: new Je(),
    });
}
F.prototype.request = function (t, r) {
  typeof t == "string" ? ((r = r || {}), (r.url = t)) : (r = t || {}),
    (r = K(this.defaults, r)),
    r.method
      ? (r.method = r.method.toLowerCase())
      : this.defaults.method
      ? (r.method = this.defaults.method.toLowerCase())
      : (r.method = "get");
  var a = r.transitional;
  a !== void 0 &&
    Et.assertOptions(
      a,
      {
        silentJSONParsing: j.transitional(j.boolean),
        forcedJSONParsing: j.transitional(j.boolean),
        clarifyTimeoutError: j.transitional(j.boolean),
      },
      !1
    );
  var n = [],
    i = !0;
  this.interceptors.request.forEach(function (y) {
    (typeof y.runWhen == "function" && y.runWhen(r) === !1) ||
      ((i = i && y.synchronous), n.unshift(y.fulfilled, y.rejected));
  });
  var o = [];
  this.interceptors.response.forEach(function (y) {
    o.push(y.fulfilled, y.rejected);
  });
  var s;
  if (!i) {
    var l = [Ve, void 0];
    for (
      Array.prototype.unshift.apply(l, n),
        l = l.concat(o),
        s = Promise.resolve(r);
      l.length;

    )
      s = s.then(l.shift(), l.shift());
    return s;
  }
  for (var c = r; n.length; ) {
    var d = n.shift(),
      h = n.shift();
    try {
      c = d(c);
    } catch (u) {
      h(u);
      break;
    }
  }
  try {
    s = Ve(c);
  } catch (u) {
    return Promise.reject(u);
  }
  for (; o.length; ) s = s.then(o.shift(), o.shift());
  return s;
};
F.prototype.getUri = function (t) {
  t = K(this.defaults, t);
  var r = Ar(t.baseURL, t.url);
  return Sr(r, t.params, t.paramsSerializer);
};
vt.forEach(["delete", "get", "head", "options"], function (t) {
  F.prototype[t] = function (r, a) {
    return this.request(
      K(a || {}, {
        method: t,
        url: r,
        data: (a || {}).data,
      })
    );
  };
});
vt.forEach(["post", "put", "patch"], function (t) {
  function r(a) {
    return function (i, o, s) {
      return this.request(
        K(s || {}, {
          method: t,
          headers: a
            ? {
                "Content-Type": "multipart/form-data",
              }
            : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (F.prototype[t] = r()), (F.prototype[t + "Form"] = r(!0));
});
var Nr = F,
  he,
  We;
function Tr() {
  if (We) return he;
  We = 1;
  var e = Q();
  function t(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var a;
    this.promise = new Promise(function (o) {
      a = o;
    });
    var n = this;
    this.promise.then(function (i) {
      if (!!n._listeners) {
        var o,
          s = n._listeners.length;
        for (o = 0; o < s; o++) n._listeners[o](i);
        n._listeners = null;
      }
    }),
      (this.promise.then = function (i) {
        var o,
          s = new Promise(function (l) {
            n.subscribe(l), (o = l);
          }).then(i);
        return (
          (s.cancel = function () {
            n.unsubscribe(o);
          }),
          s
        );
      }),
      r(function (o) {
        n.reason || ((n.reason = new e(o)), a(n.reason));
      });
  }
  return (
    (t.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
    (t.prototype.subscribe = function (a) {
      if (this.reason) {
        a(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
    }),
    (t.prototype.unsubscribe = function (a) {
      if (!!this._listeners) {
        var n = this._listeners.indexOf(a);
        n !== -1 && this._listeners.splice(n, 1);
      }
    }),
    (t.source = function () {
      var a,
        n = new t(function (o) {
          a = o;
        });
      return {
        token: n,
        cancel: a,
      };
    }),
    (he = t),
    he
  );
}
var pe, Qe;
function Pr() {
  return (
    Qe ||
      ((Qe = 1),
      (pe = function (t) {
        return function (a) {
          return t.apply(null, a);
        };
      })),
    pe
  );
}
var me, Xe;
function Dr() {
  if (Xe) return me;
  Xe = 1;
  var e = E;
  return (
    (me = function (r) {
      return e.isObject(r) && r.isAxiosError === !0;
    }),
    me
  );
}
var Ke = E,
  Ur = nt,
  J = Nr,
  _r = pt,
  Br = Re;
function yt(e) {
  var t = new J(e),
    r = Ur(J.prototype.request, t);
  return (
    Ke.extend(r, J.prototype, t),
    Ke.extend(r, t),
    (r.create = function (n) {
      return yt(_r(e, n));
    }),
    r
  );
}
var b = yt(Br);
b.Axios = J;
b.CanceledError = Q();
b.CancelToken = Tr();
b.isCancel = ht();
b.VERSION = mt().version;
b.toFormData = ct;
b.AxiosError = $;
b.Cancel = b.CanceledError;
b.all = function (t) {
  return Promise.all(t);
};
b.spread = Pr();
b.isAxiosError = Dr();
Ee.exports = b;
Ee.exports.default = b;
(function (e) {
  e.exports = Ee.exports;
})(rt);
const Lr = xt(rt.exports),
  qr = Lr.create({
    baseURL:
      "https://gist.githubusercontent.com/DouglasdeMoura/0368ba416d94512f6ab3a32d80c148d6/raw/2c9567c96c4eb6e7b2d564a0af2f6ceac5c1cdba",
  });
function Ge(e) {
  const t = Math.floor(Math.random() * e.length);
  return e[t];
}
const jr = () => qr.get("/quotes").then((e) => e.data),
  kr = () =>
    gt(["quotes"], jr, {
      retry: !1,
      refetchOnWindowFocus: !1,
      refetchOnReconnect: !1,
      refetchOnMount: !1,
    }),
  Fr = () => {
    const [e, t] = m.exports.useState(),
      { data: r } = kr(),
      a = () => {
        if (r) {
          const n = Ge(r);
          (e == null ? void 0 : e.text) === (n == null ? void 0 : n.text)
            ? a()
            : t(n);
        }
      };
    return (
      m.exports.useEffect(() => {
        r && t(Ge(r));
      }, [r]),
      {
        quote: r && e,
        getNewRandomQuote: a,
      }
    );
  },
  $r = (e, t) => {
    const r = new URL("https://twitter.com/intent/tweet");
    return r.searchParams.set("text", `"${e}" ${t}`), r.toString();
  },
  Mr = () => {
    const { quote: e, getNewRandomQuote: t } = Fr();
    return p.createElement(
      p.Fragment,
      null,
      p.createElement(
        "div",
        {
          id: "quote-box",
          className: "flex max-w-md flex-col gap-4 rounded-lg bg-slate-200 p-6",
        },
        p.createElement(
          "figure",
          {
            className: "flex flex-col gap-2",
          },
          p.createElement(
            "blockquote",
            {
              id: "text",
              className: "flex justify-between gap-4 text-xl",
              "data-testid": "text",
            },
            e != null && e.text
              ? e == null
                ? void 0
                : e.text
              : p.createElement(
                  Se,
                  {
                    viewBox: "0 0 380 60",
                  },
                  p.createElement("rect", {
                    x: "0",
                    y: "0",
                    rx: "4",
                    ry: "4",
                    width: "300",
                    height: "25",
                  }),
                  p.createElement("rect", {
                    x: "0",
                    y: "36",
                    rx: "4",
                    ry: "4",
                    width: "280",
                    height: "25",
                  })
                )
          ),
          p.createElement(
            "figcaption",
            {
              id: "author",
              className: "flex justify-between gap-4 font-bold",
              "data-testid": "author",
            },
            e != null && e.author
              ? e == null
                ? void 0
                : e.author
              : p.createElement(
                  Se,
                  {
                    viewBox: "0 0 380 32",
                  },
                  p.createElement("rect", {
                    x: "0",
                    y: "16",
                    rx: "4",
                    ry: "4",
                    width: "300",
                    height: "16",
                  })
                )
          )
        ),
        p.createElement(
          "div",
          {
            className: "flex justify-between gap-4 align-middle",
          },
          p.createElement(
            Ce,
            {
              variant: "secondary",
              asChild: !0,
            },
            p.createElement(
              "a",
              {
                href: $r(
                  (e == null ? void 0 : e.text) || "",
                  (e == null ? void 0 : e.author) || ""
                ),
                id: "tweet-quote",
                target: "_blank",
                rel: "noreferrer",
              },
              p.createElement(Nt, {
                size: 16,
              }),
              p.createElement(
                "span",
                {
                  className: "sr-only",
                },
                "Tweet this quote!"
              )
            )
          ),
          p.createElement(
            Ce,
            {
              id: "new-quote",
              onClick: () => t(),
              type: "button",
            },
            "New Quote"
          )
        )
      )
    );
  };
export { Mr as default };
