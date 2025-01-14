(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerpolicy && (i.referrerPolicy = l.referrerpolicy),
      l.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
const kf = "modulepreload",
  Ef = function (e) {
    return "/FreeCodeCamp-Front-End-Development-Libraries-Projects/" + e;
  },
  gu = {},
  sr = function (t, n, r) {
    return !n || n.length === 0
      ? t()
      : Promise.all(
          n.map((l) => {
            if (((l = Ef(l)), l in gu)) return;
            gu[l] = !0;
            const i = l.endsWith(".css"),
              o = i ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${l}"]${o}`)) return;
            const u = document.createElement("link");
            if (
              ((u.rel = i ? "stylesheet" : kf),
              i || ((u.as = "script"), (u.crossOrigin = "")),
              (u.href = l),
              document.head.appendChild(u),
              i)
            )
              return new Promise((s, a) => {
                u.addEventListener("load", s),
                  u.addEventListener("error", () =>
                    a(new Error(`Unable to preload CSS for ${l}`))
                  );
              });
          })
        ).then(() => t());
  };
var Rm =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Cf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function Nm(e) {
  var t = e.default;
  if (typeof t == "function") {
    var n = function () {
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", {
      value: !0,
    }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var x = {
    exports: {},
  },
  z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Symbol.for("react.element"),
  xf = Symbol.for("react.portal"),
  Pf = Symbol.for("react.fragment"),
  _f = Symbol.for("react.strict_mode"),
  Of = Symbol.for("react.profiler"),
  Rf = Symbol.for("react.provider"),
  Nf = Symbol.for("react.context"),
  Tf = Symbol.for("react.forward_ref"),
  Lf = Symbol.for("react.suspense"),
  Ff = Symbol.for("react.memo"),
  zf = Symbol.for("react.lazy"),
  wu = Symbol.iterator;
function Df(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wu && e[wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Hs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ws = Object.assign,
  Ks = {};
function wn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ks),
    (this.updater = n || Hs);
}
wn.prototype.isReactComponent = {};
wn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {}
qs.prototype = wn.prototype;
function wo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ks),
    (this.updater = n || Hs);
}
var So = (wo.prototype = new qs());
So.constructor = wo;
Ws(So, wn.prototype);
So.isPureReactComponent = !0;
var Su = Array.isArray,
  Gs = Object.prototype.hasOwnProperty,
  ko = {
    current: null,
  },
  Ys = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function Xs(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Gs.call(t, r) && !Ys.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: ar,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: ko.current,
  };
}
function Mf(e, t) {
  return {
    $$typeof: ar,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Eo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function If(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ku = /\/+/g;
function Wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? If("" + e.key)
    : t.toString(36);
}
function jr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ar:
          case xf:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Wl(o, 0) : r),
      Su(l)
        ? ((n = ""),
          e != null && (n = e.replace(ku, "$&/") + "/"),
          jr(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (Eo(l) &&
            (l = Mf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ku, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Su(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Wl(i, u);
      o += jr(i, t, n, s, l);
    }
  else if (((s = Df(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Wl(i, u++)), (o += jr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    jr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function jf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = {
    current: null,
  },
  Ur = {
    transition: null,
  },
  Uf = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Ur,
    ReactCurrentOwner: ko,
  };
z.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Eo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
z.Component = wn;
z.Fragment = Pf;
z.Profiler = Of;
z.PureComponent = wo;
z.StrictMode = _f;
z.Suspense = Lf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uf;
z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ws({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = ko.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Gs.call(t, s) &&
        !Ys.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return {
    $$typeof: ar,
    type: e.type,
    key: l,
    ref: i,
    props: r,
    _owner: o,
  };
};
z.createContext = function (e) {
  return (
    (e = {
      $$typeof: Nf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: Rf,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
z.createElement = Xs;
z.createFactory = function (e) {
  var t = Xs.bind(null, e);
  return (t.type = e), t;
};
z.createRef = function () {
  return {
    current: null,
  };
};
z.forwardRef = function (e) {
  return {
    $$typeof: Tf,
    render: e,
  };
};
z.isValidElement = Eo;
z.lazy = function (e) {
  return {
    $$typeof: zf,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: jf,
  };
};
z.memo = function (e, t) {
  return {
    $$typeof: Ff,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
z.startTransition = function (e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
z.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
z.useContext = function (e) {
  return de.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
z.useId = function () {
  return de.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
z.useRef = function (e) {
  return de.current.useRef(e);
};
z.useState = function (e) {
  return de.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
  return de.current.useTransition();
};
z.version = "18.2.0";
(function (e) {
  e.exports = z;
})(x);
const D = Cf(x.exports);
var Zs = {
    exports: {},
  },
  Ce = {},
  Js = {
    exports: {},
  },
  bs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(O, L) {
    var F = O.length;
    O.push(L);
    e: for (; 0 < F; ) {
      var K = (F - 1) >>> 1,
        J = O[K];
      if (0 < l(J, L)) (O[K] = L), (O[F] = J), (F = K);
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var L = O[0],
      F = O.pop();
    if (F !== L) {
      O[0] = F;
      e: for (var K = 0, J = O.length, gr = J >>> 1; K < gr; ) {
        var _t = 2 * (K + 1) - 1,
          Hl = O[_t],
          Ot = _t + 1,
          wr = O[Ot];
        if (0 > l(Hl, F))
          Ot < J && 0 > l(wr, Hl)
            ? ((O[K] = wr), (O[Ot] = F), (K = Ot))
            : ((O[K] = Hl), (O[_t] = F), (K = _t));
        else if (Ot < J && 0 > l(wr, F)) (O[K] = wr), (O[Ot] = F), (K = Ot);
        else break e;
      }
    }
    return L;
  }
  function l(O, L) {
    var F = O.sortIndex - L.sortIndex;
    return F !== 0 ? F : O.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    m = null,
    h = 3,
    v = !1,
    S = !1,
    k = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(O) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= O)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function y(O) {
    if (((k = !1), f(O), !S))
      if (n(s) !== null) (S = !0), yr(P);
      else {
        var L = n(a);
        L !== null && Vl(y, L.startTime - O);
      }
  }
  function P(O, L) {
    (S = !1), k && ((k = !1), d(g), (g = -1)), (v = !0);
    var F = h;
    try {
      for (
        f(L), m = n(s);
        m !== null && (!(m.expirationTime > L) || (O && !I()));

      ) {
        var K = m.callback;
        if (typeof K == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var J = K(m.expirationTime <= L);
          (L = e.unstable_now()),
            typeof J == "function" ? (m.callback = J) : m === n(s) && r(s),
            f(L);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var gr = !0;
      else {
        var _t = n(a);
        _t !== null && Vl(y, _t.startTime - L), (gr = !1);
      }
      return gr;
    } finally {
      (m = null), (h = F), (v = !1);
    }
  }
  var w = !1,
    C = null,
    g = -1,
    N = 5,
    T = -1;
  function I() {
    return !(e.unstable_now() - T < N);
  }
  function ie() {
    if (C !== null) {
      var O = e.unstable_now();
      T = O;
      var L = !0;
      try {
        L = C(!0, O);
      } finally {
        L ? te() : ((w = !1), (C = null));
      }
    } else w = !1;
  }
  var te;
  if (typeof c == "function")
    te = function () {
      c(ie);
    };
  else if (typeof MessageChannel < "u") {
    var nt = new MessageChannel(),
      Qe = nt.port2;
    (nt.port1.onmessage = ie),
      (te = function () {
        Qe.postMessage(null);
      });
  } else
    te = function () {
      R(ie, 0);
    };
  function yr(O) {
    (C = O), w || ((w = !0), te());
  }
  function Vl(O, L) {
    g = R(function () {
      O(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || v || ((S = !0), yr(P));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (N = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (O) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var F = h;
      h = L;
      try {
        return O();
      } finally {
        h = F;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, L) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var F = h;
      h = O;
      try {
        return L();
      } finally {
        h = F;
      }
    }),
    (e.unstable_scheduleCallback = function (O, L, F) {
      var K = e.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? K + F : K))
          : (F = K),
        O)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = F + J),
        (O = {
          id: p++,
          callback: L,
          priorityLevel: O,
          startTime: F,
          expirationTime: J,
          sortIndex: -1,
        }),
        F > K
          ? ((O.sortIndex = F),
            t(a, O),
            n(s) === null &&
              O === n(a) &&
              (k ? (d(g), (g = -1)) : (k = !0), Vl(y, F - K)))
          : ((O.sortIndex = J), t(s, O), S || v || ((S = !0), yr(P))),
        O
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (O) {
      var L = h;
      return function () {
        var F = h;
        h = L;
        try {
          return O.apply(this, arguments);
        } finally {
          h = F;
        }
      };
    });
})(bs);
(function (e) {
  e.exports = bs;
})(Js);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ea = x.exports,
  Ee = Js.exports;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ta = new Set(),
  Hn = {};
function Bt(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) ta.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  gi = Object.prototype.hasOwnProperty,
  Qf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Eu = {},
  Cu = {};
function Af(e) {
  return gi.call(Cu, e)
    ? !0
    : gi.call(Eu, e)
    ? !1
    : Qf.test(e)
    ? (Cu[e] = !0)
    : ((Eu[e] = !0), !1);
}
function $f(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bf(e, t, n, r) {
  if (t === null || typeof t > "u" || $f(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Co = /[\-:]([a-z])/g;
function xo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Co, xo);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Co, xo);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Co, xo);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Po(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bf(t, n, l, r) && (n = null),
    r || l === null
      ? Af(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Wt = Symbol.for("react.portal"),
  Kt = Symbol.for("react.fragment"),
  _o = Symbol.for("react.strict_mode"),
  wi = Symbol.for("react.profiler"),
  na = Symbol.for("react.provider"),
  ra = Symbol.for("react.context"),
  Oo = Symbol.for("react.forward_ref"),
  Si = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  Ro = Symbol.for("react.memo"),
  lt = Symbol.for("react.lazy"),
  la = Symbol.for("react.offscreen"),
  xu = Symbol.iterator;
function En(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xu && e[xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var H = Object.assign,
  Kl;
function Tn(e) {
  if (Kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Kl = (t && t[1]) || "";
    }
  return (
    `
` +
    Kl +
    e
  );
}
var ql = !1;
function Gl(e, t) {
  if (!e || ql) return "";
  ql = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (ql = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function Vf(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ei(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Wt:
      return "Portal";
    case wi:
      return "Profiler";
    case _o:
      return "StrictMode";
    case Si:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ra:
        return (e.displayName || "Context") + ".Consumer";
      case na:
        return (e._context.displayName || "Context") + ".Provider";
      case Oo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ro:
        return (
          (t = e.displayName || null), t !== null ? t : Ei(e.type) || "Memo"
        );
      case lt:
        (t = e._payload), (e = e._init);
        try {
          return Ei(e(t));
        } catch {}
    }
  return null;
}
function Hf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ei(t);
    case 8:
      return t === _o ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function St(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ia(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wf(e) {
  var t = ia(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Er(e) {
  e._valueTracker || (e._valueTracker = Wf(e));
}
function oa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ia(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ci(e, t) {
  var n = t.checked;
  return H({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked,
  });
}
function Pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ua(e, t) {
  (t = t.checked), t != null && Po(e, "checked", t, !1);
}
function xi(e, t) {
  ua(e, t);
  var n = St(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Pi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Pi(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function _u(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pi(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function rn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return H({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ou(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {
    initialValue: St(n),
  };
}
function sa(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ru(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function aa(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Oi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? aa(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Cr,
  ca = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Cr = Cr || document.createElement("div"),
          Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Cr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Wn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (e) {
  Kf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
  });
});
function fa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dn.hasOwnProperty(e) && Dn[e])
    ? ("" + t).trim()
    : t + "px";
}
function da(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = fa(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var qf = H(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ri(e, t) {
  if (t) {
    if (qf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Ni(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ti = null;
function No(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Li = null,
  ln = null,
  on = null;
function Nu(e) {
  if ((e = dr(e))) {
    if (typeof Li != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Li(e.stateNode, e.type, t));
  }
}
function pa(e) {
  ln ? (on ? on.push(e) : (on = [e])) : (ln = e);
}
function ha() {
  if (ln) {
    var e = ln,
      t = on;
    if (((on = ln = null), Nu(e), t)) for (e = 0; e < t.length; e++) Nu(t[e]);
  }
}
function ma(e, t) {
  return e(t);
}
function va() {}
var Yl = !1;
function ya(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return ma(e, t, n);
  } finally {
    (Yl = !1), (ln !== null || on !== null) && (va(), ha());
  }
}
function Kn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Fi = !1;
if (Ze)
  try {
    var Cn = {};
    Object.defineProperty(Cn, "passive", {
      get: function () {
        Fi = !0;
      },
    }),
      window.addEventListener("test", Cn, Cn),
      window.removeEventListener("test", Cn, Cn);
  } catch {
    Fi = !1;
  }
function Gf(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Mn = !1,
  br = null,
  el = !1,
  zi = null,
  Yf = {
    onError: function (e) {
      (Mn = !0), (br = e);
    },
  };
function Xf(e, t, n, r, l, i, o, u, s) {
  (Mn = !1), (br = null), Gf.apply(Yf, arguments);
}
function Zf(e, t, n, r, l, i, o, u, s) {
  if ((Xf.apply(this, arguments), Mn)) {
    if (Mn) {
      var a = br;
      (Mn = !1), (br = null);
    } else throw Error(E(198));
    el || ((el = !0), (zi = a));
  }
}
function Vt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ga(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tu(e) {
  if (Vt(e) !== e) throw Error(E(188));
}
function Jf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Tu(l), e;
        if (i === r) return Tu(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function wa(e) {
  return (e = Jf(e)), e !== null ? Sa(e) : null;
}
function Sa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Sa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ka = Ee.unstable_scheduleCallback,
  Lu = Ee.unstable_cancelCallback,
  bf = Ee.unstable_shouldYield,
  ed = Ee.unstable_requestPaint,
  q = Ee.unstable_now,
  td = Ee.unstable_getCurrentPriorityLevel,
  To = Ee.unstable_ImmediatePriority,
  Ea = Ee.unstable_UserBlockingPriority,
  tl = Ee.unstable_NormalPriority,
  nd = Ee.unstable_LowPriority,
  Ca = Ee.unstable_IdlePriority,
  Pl = null,
  Ve = null;
function rd(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function")
    try {
      Ve.onCommitFiberRoot(Pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : od,
  ld = Math.log,
  id = Math.LN2;
function od(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ld(e) / id) | 0)) | 0;
}
var xr = 64,
  Pr = 4194304;
function Fn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function nl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Fn(u)) : ((i &= o), i !== 0 && (r = Fn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Fn(o)) : i !== 0 && (r = Fn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    (t & l) === 0 &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function ud(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sd(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Ie(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? ((u & n) === 0 || (u & r) !== 0) && (l[o] = ud(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xa() {
  var e = xr;
  return (xr <<= 1), (xr & 4194240) === 0 && (xr = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function ad(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ie(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Lo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var j = 0;
function Pa(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  );
}
var _a,
  Fo,
  Oa,
  Ra,
  Na,
  Mi = !1,
  _r = [],
  ft = null,
  dt = null,
  pt = null,
  qn = new Map(),
  Gn = new Map(),
  ut = [],
  cd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Fu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && Fo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function fd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = xn(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (dt = xn(dt, e, t, n, r, l)), !0;
    case "mouseover":
      return (pt = xn(pt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return qn.set(i, xn(qn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Gn.set(i, xn(Gn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ta(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ga(n)), t !== null)) {
          (e.blockedOn = t),
            Na(e.priority, function () {
              Oa(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ii(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ti = r), n.target.dispatchEvent(r), (Ti = null);
    } else return (t = dr(n)), t !== null && Fo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zu(e, t, n) {
  Qr(e) && n.delete(t);
}
function dd() {
  (Mi = !1),
    ft !== null && Qr(ft) && (ft = null),
    dt !== null && Qr(dt) && (dt = null),
    pt !== null && Qr(pt) && (pt = null),
    qn.forEach(zu),
    Gn.forEach(zu);
}
function Pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mi ||
      ((Mi = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, dd)));
}
function Yn(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < _r.length) {
    Pn(_r[0], e);
    for (var n = 1; n < _r.length; n++) {
      var r = _r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Pn(ft, e),
      dt !== null && Pn(dt, e),
      pt !== null && Pn(pt, e),
      qn.forEach(t),
      Gn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    Ta(n), n.blockedOn === null && ut.shift();
}
var un = tt.ReactCurrentBatchConfig,
  rl = !0;
function pd(e, t, n, r) {
  var l = j,
    i = un.transition;
  un.transition = null;
  try {
    (j = 1), zo(e, t, n, r);
  } finally {
    (j = l), (un.transition = i);
  }
}
function hd(e, t, n, r) {
  var l = j,
    i = un.transition;
  un.transition = null;
  try {
    (j = 4), zo(e, t, n, r);
  } finally {
    (j = l), (un.transition = i);
  }
}
function zo(e, t, n, r) {
  if (rl) {
    var l = Ii(e, t, n, r);
    if (l === null) oi(e, t, r, ll, n), Fu(e, r);
    else if (fd(l, e, t, n, r)) r.stopPropagation();
    else if ((Fu(e, r), t & 4 && -1 < cd.indexOf(e))) {
      for (; l !== null; ) {
        var i = dr(l);
        if (
          (i !== null && _a(i),
          (i = Ii(e, t, n, r)),
          i === null && oi(e, t, r, ll, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var ll = null;
function Ii(e, t, n, r) {
  if (((ll = null), (e = No(r)), (e = Tt(e)), e !== null))
    if (((t = Vt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ga(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ll = e), null;
}
function La(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (td()) {
        case To:
          return 1;
        case Ea:
          return 4;
        case tl:
        case nd:
          return 16;
        case Ca:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Do = null,
  Ar = null;
function Fa() {
  if (Ar) return Ar;
  var e,
    t = Do,
    n = t.length,
    r,
    l = "value" in at ? at.value : at.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Ar = l.slice(e, 1 < r ? 1 - r : void 0));
}
function $r(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Or() {
  return !0;
}
function Du() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Or
        : Du),
      (this.isPropagationStopped = Du),
      this
    );
  }
  return (
    H(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Or));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Or));
      },
      persist: function () {},
      isPersistent: Or,
    }),
    t
  );
}
var Sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Mo = xe(Sn),
  fr = H({}, Sn, {
    view: 0,
    detail: 0,
  }),
  md = xe(fr),
  Zl,
  Jl,
  _n,
  _l = H({}, fr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Io,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _n &&
            (_n && e.type === "mousemove"
              ? ((Zl = e.screenX - _n.screenX), (Jl = e.screenY - _n.screenY))
              : (Jl = Zl = 0),
            (_n = e)),
          Zl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Jl;
    },
  }),
  Mu = xe(_l),
  vd = H({}, _l, {
    dataTransfer: 0,
  }),
  yd = xe(vd),
  gd = H({}, fr, {
    relatedTarget: 0,
  }),
  bl = xe(gd),
  wd = H({}, Sn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Sd = xe(wd),
  kd = H({}, Sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ed = xe(kd),
  Cd = H({}, Sn, {
    data: 0,
  }),
  Iu = xe(Cd),
  xd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Pd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _d = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Od(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _d[e]) ? !!t[e] : !1;
}
function Io() {
  return Od;
}
var Rd = H({}, fr, {
    key: function (e) {
      if (e.key) {
        var t = xd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $r(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Pd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Io,
    charCode: function (e) {
      return e.type === "keypress" ? $r(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $r(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Nd = xe(Rd),
  Td = H({}, _l, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ju = xe(Td),
  Ld = H({}, fr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Io,
  }),
  Fd = xe(Ld),
  zd = H({}, Sn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Dd = xe(zd),
  Md = H({}, _l, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Id = xe(Md),
  jd = [9, 13, 27, 32],
  jo = Ze && "CompositionEvent" in window,
  In = null;
Ze && "documentMode" in document && (In = document.documentMode);
var Ud = Ze && "TextEvent" in window && !In,
  za = Ze && (!jo || (In && 8 < In && 11 >= In)),
  Uu = String.fromCharCode(32),
  Qu = !1;
function Da(e, t) {
  switch (e) {
    case "keyup":
      return jd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ma(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var qt = !1;
function Qd(e, t) {
  switch (e) {
    case "compositionend":
      return Ma(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qu = !0), Uu);
    case "textInput":
      return (e = t.data), e === Uu && Qu ? null : e;
    default:
      return null;
  }
}
function Ad(e, t) {
  if (qt)
    return e === "compositionend" || (!jo && Da(e, t))
      ? ((e = Fa()), (Ar = Do = at = null), (qt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return za && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $d = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$d[e.type] : t === "textarea";
}
function Ia(e, t, n, r) {
  pa(r),
    (t = il(t, "onChange")),
    0 < t.length &&
      ((n = new Mo("onChange", "change", null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var jn = null,
  Xn = null;
function Bd(e) {
  qa(e, 0);
}
function Ol(e) {
  var t = Xt(e);
  if (oa(t)) return e;
}
function Vd(e, t) {
  if (e === "change") return t;
}
var ja = !1;
if (Ze) {
  var ei;
  if (Ze) {
    var ti = "oninput" in document;
    if (!ti) {
      var $u = document.createElement("div");
      $u.setAttribute("oninput", "return;"),
        (ti = typeof $u.oninput == "function");
    }
    ei = ti;
  } else ei = !1;
  ja = ei && (!document.documentMode || 9 < document.documentMode);
}
function Bu() {
  jn && (jn.detachEvent("onpropertychange", Ua), (Xn = jn = null));
}
function Ua(e) {
  if (e.propertyName === "value" && Ol(Xn)) {
    var t = [];
    Ia(t, Xn, e, No(e)), ya(Bd, t);
  }
}
function Hd(e, t, n) {
  e === "focusin"
    ? (Bu(), (jn = t), (Xn = n), jn.attachEvent("onpropertychange", Ua))
    : e === "focusout" && Bu();
}
function Wd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(Xn);
}
function Kd(e, t) {
  if (e === "click") return Ol(t);
}
function qd(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function Gd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : Gd;
function Zn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!gi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Vu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Hu(e, t) {
  var n = Vu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Vu(n);
  }
}
function Qa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Aa() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Uo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yd(e) {
  var t = Aa(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uo(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Hu(n, i));
        var o = Hu(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Xd = Ze && "documentMode" in document && 11 >= document.documentMode,
  Gt = null,
  ji = null,
  Un = null,
  Ui = !1;
function Wu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ui ||
    Gt == null ||
    Gt !== Jr(r) ||
    ((r = Gt),
    "selectionStart" in r && Uo(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Un && Zn(Un, r)) ||
      ((Un = r),
      (r = il(ji, "onSelect")),
      0 < r.length &&
        ((t = new Mo("onSelect", "select", null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = Gt))));
}
function Rr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yt = {
    animationend: Rr("Animation", "AnimationEnd"),
    animationiteration: Rr("Animation", "AnimationIteration"),
    animationstart: Rr("Animation", "AnimationStart"),
    transitionend: Rr("Transition", "TransitionEnd"),
  },
  ni = {},
  $a = {};
Ze &&
  (($a = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yt.animationend.animation,
    delete Yt.animationiteration.animation,
    delete Yt.animationstart.animation),
  "TransitionEvent" in window || delete Yt.transitionend.transition);
function Rl(e) {
  if (ni[e]) return ni[e];
  if (!Yt[e]) return e;
  var t = Yt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $a) return (ni[e] = t[n]);
  return e;
}
var Ba = Rl("animationend"),
  Va = Rl("animationiteration"),
  Ha = Rl("animationstart"),
  Wa = Rl("transitionend"),
  Ka = new Map(),
  Ku =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ct(e, t) {
  Ka.set(e, t), Bt(t, [e]);
}
for (var ri = 0; ri < Ku.length; ri++) {
  var li = Ku[ri],
    Zd = li.toLowerCase(),
    Jd = li[0].toUpperCase() + li.slice(1);
  Ct(Zd, "on" + Jd);
}
Ct(Ba, "onAnimationEnd");
Ct(Va, "onAnimationIteration");
Ct(Ha, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(Wa, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
Bt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Bt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Bt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Bt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Bt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  bd = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function qu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Zf(r, t, void 0, e), (e.currentTarget = null);
}
function qa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          qu(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          qu(l, u, a), (i = s);
        }
    }
  }
  if (el) throw ((e = zi), (el = !1), (zi = null), e);
}
function Q(e, t) {
  var n = t[Vi];
  n === void 0 && (n = t[Vi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ga(t, e, 2, !1), n.add(r));
}
function ii(e, t, n) {
  var r = 0;
  t && (r |= 4), Ga(n, e, r, t);
}
var Nr = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[Nr]) {
    (e[Nr] = !0),
      ta.forEach(function (n) {
        n !== "selectionchange" && (bd.has(n) || ii(n, !1, e), ii(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nr] || ((t[Nr] = !0), ii("selectionchange", !1, t));
  }
}
function Ga(e, t, n, r) {
  switch (La(t)) {
    case 1:
      var l = pd;
      break;
    case 4:
      l = hd;
      break;
    default:
      l = zo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Fi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {
          passive: l,
        })
      : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
  var i = r;
  if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Tt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  ya(function () {
    var a = i,
      p = No(n),
      m = [];
    e: {
      var h = Ka.get(e);
      if (h !== void 0) {
        var v = Mo,
          S = e;
        switch (e) {
          case "keypress":
            if ($r(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Nd;
            break;
          case "focusin":
            (S = "focus"), (v = bl);
            break;
          case "focusout":
            (S = "blur"), (v = bl);
            break;
          case "beforeblur":
          case "afterblur":
            v = bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Mu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Fd;
            break;
          case Ba:
          case Va:
          case Ha:
            v = Sd;
            break;
          case Wa:
            v = Dd;
            break;
          case "scroll":
            v = md;
            break;
          case "wheel":
            v = Id;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ed;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ju;
        }
        var k = (t & 4) !== 0,
          R = !k && e === "scroll",
          d = k ? (h !== null ? h + "Capture" : null) : h;
        k = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var y = f.stateNode;
          if (
            (f.tag === 5 &&
              y !== null &&
              ((f = y),
              d !== null && ((y = Kn(c, d)), y != null && k.push(bn(c, y, f)))),
            R)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((h = new v(h, S, null, n, p)),
          m.push({
            event: h,
            listeners: k,
          }));
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== Ti &&
            (S = n.relatedTarget || n.fromElement) &&
            (Tt(S) || S[Je]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((S = n.relatedTarget || n.toElement),
              (v = a),
              (S = S ? Tt(S) : null),
              S !== null &&
                ((R = Vt(S)), S !== R || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = a)),
          v !== S)
        ) {
          if (
            ((k = Mu),
            (y = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = ju),
              (y = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (R = v == null ? h : Xt(v)),
            (f = S == null ? h : Xt(S)),
            (h = new k(y, c + "leave", v, n, p)),
            (h.target = R),
            (h.relatedTarget = f),
            (y = null),
            Tt(p) === a &&
              ((k = new k(d, c + "enter", S, n, p)),
              (k.target = f),
              (k.relatedTarget = R),
              (y = k)),
            (R = y),
            v && S)
          )
            t: {
              for (k = v, d = S, c = 0, f = k; f; f = Ht(f)) c++;
              for (f = 0, y = d; y; y = Ht(y)) f++;
              for (; 0 < c - f; ) (k = Ht(k)), c--;
              for (; 0 < f - c; ) (d = Ht(d)), f--;
              for (; c--; ) {
                if (k === d || (d !== null && k === d.alternate)) break t;
                (k = Ht(k)), (d = Ht(d));
              }
              k = null;
            }
          else k = null;
          v !== null && Gu(m, h, v, k, !1),
            S !== null && R !== null && Gu(m, R, S, k, !0);
        }
      }
      e: {
        if (
          ((h = a ? Xt(a) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var P = Vd;
        else if (Au(h))
          if (ja) P = qd;
          else {
            P = Wd;
            var w = Hd;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (P = Kd);
        if (P && (P = P(e, a))) {
          Ia(m, P, n, p);
          break e;
        }
        w && w(e, h, a),
          e === "focusout" &&
            (w = h._wrapperState) &&
            w.controlled &&
            h.type === "number" &&
            Pi(h, "number", h.value);
      }
      switch (((w = a ? Xt(a) : window), e)) {
        case "focusin":
          (Au(w) || w.contentEditable === "true") &&
            ((Gt = w), (ji = a), (Un = null));
          break;
        case "focusout":
          Un = ji = Gt = null;
          break;
        case "mousedown":
          Ui = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ui = !1), Wu(m, n, p);
          break;
        case "selectionchange":
          if (Xd) break;
        case "keydown":
        case "keyup":
          Wu(m, n, p);
      }
      var C;
      if (jo)
        e: {
          switch (e) {
            case "compositionstart":
              var g = "onCompositionStart";
              break e;
            case "compositionend":
              g = "onCompositionEnd";
              break e;
            case "compositionupdate":
              g = "onCompositionUpdate";
              break e;
          }
          g = void 0;
        }
      else
        qt
          ? Da(e, n) && (g = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (g = "onCompositionStart");
      g &&
        (za &&
          n.locale !== "ko" &&
          (qt || g !== "onCompositionStart"
            ? g === "onCompositionEnd" && qt && (C = Fa())
            : ((at = p),
              (Do = "value" in at ? at.value : at.textContent),
              (qt = !0))),
        (w = il(a, g)),
        0 < w.length &&
          ((g = new Iu(g, e, null, n, p)),
          m.push({
            event: g,
            listeners: w,
          }),
          C ? (g.data = C) : ((C = Ma(n)), C !== null && (g.data = C)))),
        (C = Ud ? Qd(e, n) : Ad(e, n)) &&
          ((a = il(a, "onBeforeInput")),
          0 < a.length &&
            ((p = new Iu("onBeforeInput", "beforeinput", null, n, p)),
            m.push({
              event: p,
              listeners: a,
            }),
            (p.data = C)));
    }
    qa(m, t);
  });
}
function bn(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Kn(e, n)),
      i != null && r.unshift(bn(e, i, l)),
      (i = Kn(e, t)),
      i != null && r.push(bn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Gu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Kn(n, i)), s != null && o.unshift(bn(n, s, u)))
        : l || ((s = Kn(n, i)), s != null && o.push(bn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 &&
    e.push({
      event: t,
      listeners: o,
    });
}
var ep = /\r\n?/g,
  tp = /\u0000|\uFFFD/g;
function Yu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ep,
      `
`
    )
    .replace(tp, "");
}
function Tr(e, t, n) {
  if (((t = Yu(t)), Yu(e) !== t && n)) throw Error(E(425));
}
function ol() {}
var Qi = null,
  Ai = null;
function $i(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0,
  np = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xu = typeof Promise == "function" ? Promise : void 0,
  rp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xu < "u"
      ? function (e) {
          return Xu.resolve(null).then(e).catch(lp);
        }
      : Bi;
function lp(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yn(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + kn,
  er = "__reactProps$" + kn,
  Je = "__reactContainer$" + kn,
  Vi = "__reactEvents$" + kn,
  ip = "__reactListeners$" + kn,
  op = "__reactHandles$" + kn;
function Tt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Zu(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = Zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[Be] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Nl(e) {
  return e[er] || null;
}
var Hi = [],
  Zt = -1;
function xt(e) {
  return {
    current: e,
  };
}
function A(e) {
  0 > Zt || ((e.current = Hi[Zt]), (Hi[Zt] = null), Zt--);
}
function U(e, t) {
  Zt++, (Hi[Zt] = e.current), (e.current = t);
}
var kt = {},
  ae = xt(kt),
  ve = xt(!1),
  jt = kt;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function ul() {
  A(ve), A(ae);
}
function Ju(e, t, n) {
  if (ae.current !== kt) throw Error(E(168));
  U(ae, t), U(ve, n);
}
function Ya(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Hf(e) || "Unknown", l));
  return H({}, n, r);
}
function sl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (jt = ae.current),
    U(ae, e),
    U(ve, ve.current),
    !0
  );
}
function bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Ya(e, t, jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      A(ve),
      A(ae),
      U(ae, e))
    : A(ve),
    U(ve, n);
}
var qe = null,
  Tl = !1,
  si = !1;
function Xa(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function up(e) {
  (Tl = !0), Xa(e);
}
function Pt() {
  if (!si && qe !== null) {
    si = !0;
    var e = 0,
      t = j;
    try {
      var n = qe;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Tl = !1);
    } catch (l) {
      throw (qe !== null && (qe = qe.slice(e + 1)), ka(To, Pt), l);
    } finally {
      (j = t), (si = !1);
    }
  }
  return null;
}
var Jt = [],
  bt = 0,
  al = null,
  cl = 0,
  _e = [],
  Oe = 0,
  Ut = null,
  Ge = 1,
  Ye = "";
function Rt(e, t) {
  (Jt[bt++] = cl), (Jt[bt++] = al), (al = e), (cl = t);
}
function Za(e, t, n) {
  (_e[Oe++] = Ge), (_e[Oe++] = Ye), (_e[Oe++] = Ut), (Ut = e);
  var r = Ge;
  e = Ye;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ie(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ge = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ye = i + e);
  } else (Ge = (1 << i) | (n << l) | r), (Ye = e);
}
function Qo(e) {
  e.return !== null && (Rt(e, 1), Za(e, 1, 0));
}
function Ao(e) {
  for (; e === al; )
    (al = Jt[--bt]), (Jt[bt] = null), (cl = Jt[--bt]), (Jt[bt] = null);
  for (; e === Ut; )
    (Ut = _e[--Oe]),
      (_e[Oe] = null),
      (Ye = _e[--Oe]),
      (_e[Oe] = null),
      (Ge = _e[--Oe]),
      (_e[Oe] = null);
}
var ke = null,
  Se = null,
  $ = !1,
  Me = null;
function Ja(e, t) {
  var n = Re(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function es(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ke = e), (Se = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (Se = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Ut !== null
                ? {
                    id: Ge,
                    overflow: Ye,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Re(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (Se = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ki(e) {
  if ($) {
    var t = Se;
    if (t) {
      var n = t;
      if (!es(e, t)) {
        if (Wi(e)) throw Error(E(418));
        t = ht(n.nextSibling);
        var r = ke;
        t && es(e, t)
          ? Ja(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (ke = e));
      }
    } else {
      if (Wi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (ke = e);
    }
  }
}
function ts(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ke = e;
}
function Lr(e) {
  if (e !== ke) return !1;
  if (!$) return ts(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps))),
    t && (t = Se))
  ) {
    if (Wi(e)) throw (ba(), Error(E(418)));
    for (; t; ) Ja(e, t), (t = ht(t.nextSibling));
  }
  if ((ts(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = ke ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ba() {
  for (var e = Se; e; ) e = ht(e.nextSibling);
}
function dn() {
  (Se = ke = null), ($ = !1);
}
function $o(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var sp = tt.ReactCurrentBatchConfig;
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = H({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var fl = xt(null),
  dl = null,
  en = null,
  Bo = null;
function Vo() {
  Bo = en = dl = null;
}
function Ho(e) {
  var t = fl.current;
  A(fl), (e._currentValue = t);
}
function qi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function sn(e, t) {
  (dl = e),
    (Bo = en = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (me = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (Bo !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      en === null)
    ) {
      if (dl === null) throw Error(E(308));
      (en = e),
        (dl.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else en = en.next = e;
  return t;
}
var Lt = null;
function Wo(e) {
  Lt === null ? (Lt = [e]) : Lt.push(e);
}
function ec(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Wo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function Ko(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function tc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Xe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), (M & 2) !== 0)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Wo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Br(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lo(e, n);
  }
}
function ns(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function pl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var m = l.baseState;
    (o = 0), (p = a = s = null), (u = i);
    do {
      var h = u.lane,
        v = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            k = u;
          switch (((h = t), (v = n), k.tag)) {
            case 1:
              if (((S = k.payload), typeof S == "function")) {
                m = S.call(v, m, h);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = k.payload),
                (h = typeof S == "function" ? S.call(v, m, h) : S),
                h == null)
              )
                break e;
              m = H({}, m, h);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = v), (s = m)) : (p = p.next = v),
          (o |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (At |= o), (e.lanes = o), (e.memoizedState = m);
  }
}
function rs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var nc = new ea.Component().refs;
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : H({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = yt(e),
      i = Xe(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = mt(e, i, l)),
      t !== null && (je(t, e, l, r), Br(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      l = yt(e),
      i = Xe(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = mt(e, i, l)),
      t !== null && (je(t, e, l, r), Br(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = yt(e),
      l = Xe(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = mt(e, l, r)),
      t !== null && (je(t, e, r, n), Br(t, e, r));
  },
};
function ls(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zn(n, r) || !Zn(l, i)
      : !0
  );
}
function rc(e, t, n) {
  var r = !1,
    l = kt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Te(i))
      : ((l = ye(t) ? jt : ae.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? fn(e, l) : kt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ll),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function is(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function Yi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = nc), Ko(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Te(i))
    : ((i = ye(t) ? jt : ae.current), (l.context = fn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Gi(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ll.enqueueReplaceState(l, l.state, null),
      pl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === nc && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Fr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function os(e) {
  var t = e._init;
  return t(e._payload);
}
function lc(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = gt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, y) {
    return c === null || c.tag !== 6
      ? ((c = mi(f, d.mode, y)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, y) {
    var P = f.type;
    return P === Kt
      ? p(d, c, f.props.children, y, f.key)
      : c !== null &&
        (c.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === lt &&
            os(P) === c.type))
      ? ((y = l(c, f.props)), (y.ref = On(d, c, f)), (y.return = d), y)
      : ((y = Gr(f.type, f.key, f.props, null, d.mode, y)),
        (y.ref = On(d, c, f)),
        (y.return = d),
        y);
  }
  function a(d, c, f, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = vi(f, d.mode, y)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function p(d, c, f, y, P) {
    return c === null || c.tag !== 7
      ? ((c = It(f, d.mode, y, P)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function m(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = mi("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case kr:
          return (
            (f = Gr(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = On(d, null, c)),
            (f.return = d),
            f
          );
        case Wt:
          return (c = vi(c, d.mode, f)), (c.return = d), c;
        case lt:
          var y = c._init;
          return m(d, y(c._payload), f);
      }
      if (Ln(c) || En(c))
        return (c = It(c, d.mode, f, null)), (c.return = d), c;
      Fr(d, c);
    }
    return null;
  }
  function h(d, c, f, y) {
    var P = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return P !== null ? null : u(d, c, "" + f, y);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kr:
          return f.key === P ? s(d, c, f, y) : null;
        case Wt:
          return f.key === P ? a(d, c, f, y) : null;
        case lt:
          return (P = f._init), h(d, c, P(f._payload), y);
      }
      if (Ln(f) || En(f)) return P !== null ? null : p(d, c, f, y, null);
      Fr(d, f);
    }
    return null;
  }
  function v(d, c, f, y, P) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (d = d.get(f) || null), u(c, d, "" + y, P);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case kr:
          return (d = d.get(y.key === null ? f : y.key) || null), s(c, d, y, P);
        case Wt:
          return (d = d.get(y.key === null ? f : y.key) || null), a(c, d, y, P);
        case lt:
          var w = y._init;
          return v(d, c, f, w(y._payload), P);
      }
      if (Ln(y) || En(y)) return (d = d.get(f) || null), p(c, d, y, P, null);
      Fr(c, y);
    }
    return null;
  }
  function S(d, c, f, y) {
    for (
      var P = null, w = null, C = c, g = (c = 0), N = null;
      C !== null && g < f.length;
      g++
    ) {
      C.index > g ? ((N = C), (C = null)) : (N = C.sibling);
      var T = h(d, C, f[g], y);
      if (T === null) {
        C === null && (C = N);
        break;
      }
      e && C && T.alternate === null && t(d, C),
        (c = i(T, c, g)),
        w === null ? (P = T) : (w.sibling = T),
        (w = T),
        (C = N);
    }
    if (g === f.length) return n(d, C), $ && Rt(d, g), P;
    if (C === null) {
      for (; g < f.length; g++)
        (C = m(d, f[g], y)),
          C !== null &&
            ((c = i(C, c, g)), w === null ? (P = C) : (w.sibling = C), (w = C));
      return $ && Rt(d, g), P;
    }
    for (C = r(d, C); g < f.length; g++)
      (N = v(C, d, g, f[g], y)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? g : N.key),
          (c = i(N, c, g)),
          w === null ? (P = N) : (w.sibling = N),
          (w = N));
    return (
      e &&
        C.forEach(function (I) {
          return t(d, I);
        }),
      $ && Rt(d, g),
      P
    );
  }
  function k(d, c, f, y) {
    var P = En(f);
    if (typeof P != "function") throw Error(E(150));
    if (((f = P.call(f)), f == null)) throw Error(E(151));
    for (
      var w = (P = null), C = c, g = (c = 0), N = null, T = f.next();
      C !== null && !T.done;
      g++, T = f.next()
    ) {
      C.index > g ? ((N = C), (C = null)) : (N = C.sibling);
      var I = h(d, C, T.value, y);
      if (I === null) {
        C === null && (C = N);
        break;
      }
      e && C && I.alternate === null && t(d, C),
        (c = i(I, c, g)),
        w === null ? (P = I) : (w.sibling = I),
        (w = I),
        (C = N);
    }
    if (T.done) return n(d, C), $ && Rt(d, g), P;
    if (C === null) {
      for (; !T.done; g++, T = f.next())
        (T = m(d, T.value, y)),
          T !== null &&
            ((c = i(T, c, g)), w === null ? (P = T) : (w.sibling = T), (w = T));
      return $ && Rt(d, g), P;
    }
    for (C = r(d, C); !T.done; g++, T = f.next())
      (T = v(C, d, g, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? g : T.key),
          (c = i(T, c, g)),
          w === null ? (P = T) : (w.sibling = T),
          (w = T));
    return (
      e &&
        C.forEach(function (ie) {
          return t(d, ie);
        }),
      $ && Rt(d, g),
      P
    );
  }
  function R(d, c, f, y) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Kt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case kr:
          e: {
            for (var P = f.key, w = c; w !== null; ) {
              if (w.key === P) {
                if (((P = f.type), P === Kt)) {
                  if (w.tag === 7) {
                    n(d, w.sibling),
                      (c = l(w, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  w.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === lt &&
                    os(P) === w.type)
                ) {
                  n(d, w.sibling),
                    (c = l(w, f.props)),
                    (c.ref = On(d, w, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, w);
                break;
              } else t(d, w);
              w = w.sibling;
            }
            f.type === Kt
              ? ((c = It(f.props.children, d.mode, y, f.key)),
                (c.return = d),
                (d = c))
              : ((y = Gr(f.type, f.key, f.props, null, d.mode, y)),
                (y.ref = On(d, c, f)),
                (y.return = d),
                (d = y));
          }
          return o(d);
        case Wt:
          e: {
            for (w = f.key; c !== null; ) {
              if (c.key === w)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = vi(f, d.mode, y)), (c.return = d), (d = c);
          }
          return o(d);
        case lt:
          return (w = f._init), R(d, c, w(f._payload), y);
      }
      if (Ln(f)) return S(d, c, f, y);
      if (En(f)) return k(d, c, f, y);
      Fr(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = mi(f, d.mode, y)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return R;
}
var pn = lc(!0),
  ic = lc(!1),
  pr = {},
  He = xt(pr),
  tr = xt(pr),
  nr = xt(pr);
function Ft(e) {
  if (e === pr) throw Error(E(174));
  return e;
}
function qo(e, t) {
  switch ((U(nr, t), U(tr, e), U(He, pr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Oi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Oi(t, e));
  }
  A(He), U(He, t);
}
function hn() {
  A(He), A(tr), A(nr);
}
function oc(e) {
  Ft(nr.current);
  var t = Ft(He.current),
    n = Oi(t, e.type);
  t !== n && (U(tr, e), U(He, n));
}
function Go(e) {
  tr.current === e && (A(He), A(tr));
}
var B = xt(0);
function hl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ai = [];
function Yo() {
  for (var e = 0; e < ai.length; e++)
    ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var Vr = tt.ReactCurrentDispatcher,
  ci = tt.ReactCurrentBatchConfig,
  Qt = 0,
  V = null,
  X = null,
  b = null,
  ml = !1,
  Qn = !1,
  rr = 0,
  ap = 0;
function oe() {
  throw Error(E(321));
}
function Xo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Zo(e, t, n, r, l, i) {
  if (
    ((Qt = i),
    (V = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vr.current = e === null || e.memoizedState === null ? pp : hp),
    (e = n(r, l)),
    Qn)
  ) {
    i = 0;
    do {
      if (((Qn = !1), (rr = 0), 25 <= i)) throw Error(E(301));
      (i += 1),
        (b = X = null),
        (t.updateQueue = null),
        (Vr.current = mp),
        (e = n(r, l));
    } while (Qn);
  }
  if (
    ((Vr.current = vl),
    (t = X !== null && X.next !== null),
    (Qt = 0),
    (b = X = V = null),
    (ml = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Jo() {
  var e = rr !== 0;
  return (rr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (V.memoizedState = b = e) : (b = b.next = e), b;
}
function Le() {
  if (X === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) (b = t), (X = e);
  else {
    if (e === null) throw Error(E(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      b === null ? (V.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function lr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var p = a.lane;
      if ((Qt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var m = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (o = r)) : (s = s.next = m),
          (V.lanes |= p),
          (At |= p);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      Ue(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (V.lanes |= i), (At |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function di(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ue(i, t.memoizedState) || (me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function uc() {}
function sc(e, t) {
  var n = V,
    r = Le(),
    l = t(),
    i = !Ue(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    bo(fc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ir(9, cc.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(E(349));
    (Qt & 30) !== 0 || ac(n, t, l);
  }
  return l;
}
function ac(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = V.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (V.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function cc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), dc(t) && pc(e);
}
function fc(e, t, n) {
  return n(function () {
    dc(t) && pc(e);
  });
}
function dc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = be(e, 1);
  t !== null && je(t, e, 1, -1);
}
function us(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = dp.bind(null, V, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = V.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (V.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function hc() {
  return Le().memoizedState;
}
function Hr(e, t, n, r) {
  var l = $e();
  (V.flags |= e),
    (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (((i = o.destroy), r !== null && Xo(r, o.deps))) {
      l.memoizedState = ir(t, n, i, r);
      return;
    }
  }
  (V.flags |= e), (l.memoizedState = ir(1 | t, n, i, r));
}
function ss(e, t) {
  return Hr(8390656, 8, e, t);
}
function bo(e, t) {
  return Fl(2048, 8, e, t);
}
function mc(e, t) {
  return Fl(4, 2, e, t);
}
function vc(e, t) {
  return Fl(4, 4, e, t);
}
function yc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fl(4, 4, yc.bind(null, t, e), n)
  );
}
function eu() {}
function wc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kc(e, t, n) {
  return (Qt & 21) === 0
    ? (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n))
    : (Ue(n, t) || ((n = xa()), (V.lanes |= n), (At |= n), (e.baseState = !0)),
      t);
}
function cp(e, t) {
  var n = j;
  (j = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ci.transition;
  ci.transition = {};
  try {
    e(!1), t();
  } finally {
    (j = n), (ci.transition = r);
  }
}
function Ec() {
  return Le().memoizedState;
}
function fp(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cc(e))
  )
    xc(t, n);
  else if (((n = ec(e, t, n, r)), n !== null)) {
    var l = fe();
    je(n, e, r, l), Pc(n, t, r);
  }
}
function dp(e, t, n) {
  var r = yt(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (Cc(e)) xc(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Wo(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ec(e, t, l, r)),
      n !== null && ((l = fe()), je(n, e, r, l), Pc(n, t, r));
  }
}
function Cc(e) {
  var t = e.alternate;
  return e === V || (t !== null && t === V);
}
function xc(e, t) {
  Qn = ml = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Pc(e, t, n) {
  if ((n & 4194240) !== 0) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lo(e, n);
  }
}
var vl = {
    readContext: Te,
    useCallback: oe,
    useContext: oe,
    useEffect: oe,
    useImperativeHandle: oe,
    useInsertionEffect: oe,
    useLayoutEffect: oe,
    useMemo: oe,
    useReducer: oe,
    useRef: oe,
    useState: oe,
    useDebugValue: oe,
    useDeferredValue: oe,
    useTransition: oe,
    useMutableSource: oe,
    useSyncExternalStore: oe,
    useId: oe,
    unstable_isNewReconciler: !1,
  },
  pp = {
    readContext: Te,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hr(4194308, 4, yc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = fp.bind(null, V, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: us,
    useDebugValue: eu,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = us(!1),
        t = e[0];
      return (e = cp.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = V,
        l = $e();
      if ($) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(E(349));
        (Qt & 30) !== 0 || ac(r, t, n);
      }
      l.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = i),
        ss(fc.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ir(9, cc.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = ee.identifierPrefix;
      if ($) {
        var n = Ye,
          r = Ge;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ap++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hp = {
    readContext: Te,
    useCallback: wc,
    useContext: Te,
    useEffect: bo,
    useImperativeHandle: gc,
    useInsertionEffect: mc,
    useLayoutEffect: vc,
    useMemo: Sc,
    useReducer: fi,
    useRef: hc,
    useState: function () {
      return fi(lr);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Le();
      return kc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: sc,
    useId: Ec,
    unstable_isNewReconciler: !1,
  },
  mp = {
    readContext: Te,
    useCallback: wc,
    useContext: Te,
    useEffect: bo,
    useImperativeHandle: gc,
    useInsertionEffect: mc,
    useLayoutEffect: vc,
    useMemo: Sc,
    useReducer: di,
    useRef: hc,
    useState: function () {
      return di(lr);
    },
    useDebugValue: eu,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : kc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = di(lr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: uc,
    useSyncExternalStore: sc,
    useId: Ec,
    unstable_isNewReconciler: !1,
  };
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Vf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function pi(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null,
  };
}
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var vp = typeof WeakMap == "function" ? WeakMap : Map;
function _c(e, t, n) {
  (n = Xe(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      gl || ((gl = !0), (oo = r)), Xi(e, t);
    }),
    n
  );
}
function Oc(e, t, n) {
  (n = Xe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xi(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xi(e, t),
          typeof r != "function" &&
            (vt === null ? (vt = new Set([this])) : vt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function as(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new vp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Tp.bind(null, e, t, n)), t.then(e, e));
}
function cs(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function fs(e, t, n, r, l) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Xe(-1, 1)), (t.tag = 2), mt(n, t, 1))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = l), e);
}
var yp = tt.ReactCurrentOwner,
  me = !1;
function ce(e, t, n, r) {
  t.child = e === null ? ic(t, null, n, r) : pn(t, e.child, n, r);
}
function ds(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    sn(t, l),
    (r = Zo(e, t, n, r, i, l)),
    (n = Jo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : ($ && n && Qo(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function ps(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !su(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Rc(e, t, i, r, l))
      : ((e = Gr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), (e.lanes & l) === 0)) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Zn), n(o, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = gt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Rc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Zn(i, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        (e.flags & 131072) !== 0 && (me = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function Nc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if ((t.mode & 1) === 0)
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        U(nn, we),
        (we |= n);
    else {
      if ((n & 1073741824) === 0)
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(nn, we),
          (we |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = i !== null ? i.baseLanes : n),
        U(nn, we),
        (we |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(nn, we),
      (we |= r);
  return ce(e, t, l, n), t.child;
}
function Tc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zi(e, t, n, r, l) {
  var i = ye(n) ? jt : ae.current;
  return (
    (i = fn(t, i)),
    sn(t, l),
    (n = Zo(e, t, n, r, i, l)),
    (r = Jo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : ($ && r && Qo(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function hs(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    sl(t);
  } else i = !1;
  if ((sn(t, l), t.stateNode === null))
    Wr(e, t), rc(t, n, r), Yi(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Te(a))
      : ((a = ye(n) ? jt : ae.current), (a = fn(t, a)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && is(t, o, r, a)),
      (it = !1);
    var h = t.memoizedState;
    (o.state = h),
      pl(t, r, o, l),
      (s = t.memoizedState),
      u !== r || h !== s || ve.current || it
        ? (typeof p == "function" && (Gi(t, n, p, r), (s = t.memoizedState)),
          (u = it || ls(t, n, u, r, h, s, a))
            ? (m ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      tc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = a),
      (m = t.pendingProps),
      (h = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = ye(n) ? jt : ae.current), (s = fn(t, s)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== m || h !== s) && is(t, o, r, s)),
      (it = !1),
      (h = t.memoizedState),
      (o.state = h),
      pl(t, r, o, l);
    var S = t.memoizedState;
    u !== m || h !== S || ve.current || it
      ? (typeof v == "function" && (Gi(t, n, v, r), (S = t.memoizedState)),
        (a = it || ls(t, n, a, r, h, S, s) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ji(e, t, n, r, i, l);
}
function Ji(e, t, n, r, l, i) {
  Tc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && bu(t, n, !1), et(e, t, i);
  (r = t.stateNode), (yp.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = pn(t, e.child, null, i)), (t.child = pn(t, null, u, i)))
      : ce(e, t, u, i),
    (t.memoizedState = r.state),
    l && bu(t, n, !0),
    t.child
  );
}
function Lc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ju(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ju(e, t.context, !1),
    qo(e, t.containerInfo);
}
function ms(e, t, n, r, l) {
  return dn(), $o(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var bi = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function eo(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Fc(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(B, l & 1),
    e === null)
  )
    return (
      Ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === "$!"
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = {
                mode: "hidden",
                children: o,
              }),
              (r & 1) === 0 && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ml(o, r, 0, null)),
              (e = It(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = eo(n)),
              (t.memoizedState = bi),
              e)
            : tu(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return gp(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = {
      mode: "hidden",
      children: r.children,
    };
    return (
      (o & 1) === 0 && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = gt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = gt(u, i)) : ((i = It(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? eo(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = bi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = gt(i, {
      mode: "visible",
      children: r.children,
    })),
    (t.mode & 1) === 0 && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function tu(e, t) {
  return (
    (t = Ml(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function zr(e, t, n, r) {
  return (
    r !== null && $o(r),
    pn(t, e.child, null, n),
    (e = tu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = pi(Error(E(422)))), zr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ml(
          {
            mode: "visible",
            children: r.children,
          },
          l,
          0,
          null
        )),
        (i = It(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        (t.mode & 1) !== 0 && pn(t, e.child, null, o),
        (t.child.memoizedState = eo(o)),
        (t.memoizedState = bi),
        i);
  if ((t.mode & 1) === 0) return zr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(E(419))), (r = pi(i, r, void 0)), zr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), me || u)) {
    if (((r = ee), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), be(e, l), je(r, e, l, -1));
    }
    return uu(), (r = pi(Error(E(421)))), zr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lp.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Se = ht(l.nextSibling)),
      (ke = t),
      ($ = !0),
      (Me = null),
      e !== null &&
        ((_e[Oe++] = Ge),
        (_e[Oe++] = Ye),
        (_e[Oe++] = Ut),
        (Ge = e.id),
        (Ye = e.overflow),
        (Ut = t)),
      (t = tu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qi(e.return, t, n);
}
function hi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function zc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), (r & 2) !== 0))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vs(e, n, t);
        else if (e.tag === 19) vs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((U(B, r), (t.mode & 1) === 0)) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && hl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          hi(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && hl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        hi(t, !0, n, null, i);
        break;
      case "together":
        hi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wr(e, t) {
  (t.mode & 1) === 0 &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (At |= t.lanes),
    (n & t.childLanes) === 0)
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wp(e, t, n) {
  switch (t.tag) {
    case 3:
      Lc(t), dn();
      break;
    case 5:
      oc(t);
      break;
    case 1:
      ye(t.type) && sl(t);
      break;
    case 4:
      qo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(fl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(B, B.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? Fc(e, t, n)
          : (U(B, B.current & 1),
            (e = et(e, t, n)),
            e !== null ? e.sibling : null);
      U(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (r) return zc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Nc(e, t, n);
  }
  return et(e, t, n);
}
var Dc, to, Mc, Ic;
Dc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
to = function () {};
Mc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ft(He.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Ci(e, l)), (r = Ci(e, r)), (i = []);
        break;
      case "select":
        (l = H({}, l, {
          value: void 0,
        })),
          (r = H({}, r, {
            value: void 0,
          })),
          (i = []);
        break;
      case "textarea":
        (l = _i(e, l)), (r = _i(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ol);
    }
    Ri(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Hn.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Hn.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && Q("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Ic = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Sp(e, t, n) {
  var r = t.pendingProps;
  switch ((Ao(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return ye(t.type) && ul(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        hn(),
        A(ve),
        A(ae),
        Yo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Lr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), Me !== null && (ao(Me), (Me = null)))),
        to(e, t),
        ue(t),
        null
      );
    case 5:
      Go(t);
      var l = Ft(nr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Ft(He.current)), Lr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Be] = t), (r[er] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < zn.length; l++) Q(zn[l], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              Pu(r, i), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!i.multiple,
              }),
                Q("invalid", r);
              break;
            case "textarea":
              Ou(r, i), Q("invalid", r);
          }
          Ri(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Tr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Hn.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Er(r), _u(r, i, !0);
              break;
            case "textarea":
              Er(r), Ru(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ol);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = aa(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, {
                    is: r.is,
                  }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Be] = t),
            (e[er] = r),
            Dc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ni(n, r)), n)) {
              case "dialog":
                Q("cancel", e), Q("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++) Q(zn[l], e);
                l = r;
                break;
              case "source":
                Q("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", e), Q("load", e), (l = r);
                break;
              case "details":
                Q("toggle", e), (l = r);
                break;
              case "input":
                Pu(e, r), (l = Ci(e, r)), Q("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = H({}, r, {
                    value: void 0,
                  })),
                  Q("invalid", e);
                break;
              case "textarea":
                Ou(e, r), (l = _i(e, r)), Q("invalid", e);
                break;
              default:
                l = r;
            }
            Ri(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? da(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ca(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Wn(e, s)
                    : typeof s == "number" && Wn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hn.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && Q("scroll", e)
                      : s != null && Po(e, i, s, o));
              }
            switch (n) {
              case "input":
                Er(e), _u(e, r, !1);
                break;
              case "textarea":
                Er(e), Ru(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? rn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      rn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Ic(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ft(nr.current)), Ft(He.current), Lr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (i = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Tr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (A(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Se !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
          ba(), dn(), (t.flags |= 98560), (i = !1);
        else if (((i = Lr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(E(317));
            i[Be] = t;
          } else
            dn(),
              (t.flags & 128) === 0 && (t.memoizedState = null),
              (t.flags |= 4);
          ue(t), (i = !1);
        } else Me !== null && (ao(Me), (Me = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return (t.flags & 128) !== 0
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            (t.mode & 1) !== 0 &&
              (e === null || (B.current & 1) !== 0
                ? Z === 0 && (Z = 3)
                : uu())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        hn(), to(e, t), e === null && Jn(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Ho(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && ul(), ue(t), null;
    case 19:
      if ((A(B), (i = t.memoizedState), i === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Rn(i, !1);
        else {
          if (Z !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((o = hl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Rn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            q() > vn &&
            ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = hl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !$)
            )
              return ue(t), null;
          } else
            2 * q() - i.renderingStartTime > vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = q()),
          (t.sibling = null),
          (n = B.current),
          U(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        ou(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && (t.mode & 1) !== 0
          ? (we & 1073741824) !== 0 &&
            (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function kp(e, t) {
  switch ((Ao(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && ul(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        hn(),
        A(ve),
        A(ae),
        Yo(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return Go(t), null;
    case 13:
      if ((A(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return A(B), null;
    case 4:
      return hn(), null;
    case 10:
      return Ho(t.type._context), null;
    case 22:
    case 23:
      return ou(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Dr = !1,
  se = !1,
  Ep = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function no(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var ys = !1;
function Cp(e, t) {
  if (((Qi = rl), (e = Aa()), Uo(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = o + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (s = o + r),
                m.nodeType === 3 && (o += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (h = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++a === l && (u = o),
                h === i && ++p === r && (s = o),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = v;
          }
          n =
            u === -1 || s === -1
              ? null
              : {
                  start: u,
                  end: s,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    Ai = {
      focusedElem: e,
      selectionRange: n,
    },
      rl = !1,
      _ = t;
    _ !== null;

  )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var S = t.alternate;
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var k = S.memoizedProps,
                    R = S.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      R
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (y) {
          W(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (S = ys), (ys = !1), S;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && no(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ro(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[er], delete t[Vi], delete t[ip], delete t[op])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uc(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), (e = e.sibling);
}
function io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (io(e, t, n), e = e.sibling; e !== null; ) io(e, t, n), (e = e.sibling);
}
var ne = null,
  De = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) Qc(e, t, n), (n = n.sibling);
}
function Qc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function")
    try {
      Ve.onCommitFiberUnmount(Pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || tn(n, t);
    case 6:
      var r = ne,
        l = De;
      (ne = null),
        rt(e, t, n),
        (ne = r),
        (De = l),
        ne !== null &&
          (De
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (De
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ui(e.parentNode, n)
              : e.nodeType === 1 && ui(e, n),
            Yn(e))
          : ui(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = De),
        (ne = n.stateNode.containerInfo),
        (De = !0),
        rt(e, t, n),
        (ne = r),
        (De = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && no(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), rt(e, t, n), (se = r))
        : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function ws(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ep()),
      t.forEach(function (r) {
        var l = Fp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Fe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (De = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (De = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(E(160));
        Qc(i, o, l), (ne = null), (De = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ac(t, e), (t = t.sibling);
}
function Ac(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Ae(e), r & 4)) {
        try {
          An(3, e, e.return), zl(3, e);
        } catch (k) {
          W(e, e.return, k);
        }
        try {
          An(5, e, e.return);
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 1:
      Fe(t, e), Ae(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (
        (Fe(t, e),
        Ae(e),
        r & 512 && n !== null && tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Wn(l, "");
        } catch (k) {
          W(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && ua(l, i),
              Ni(u, o);
            var a = Ni(u, i);
            for (o = 0; o < s.length; o += 2) {
              var p = s[o],
                m = s[o + 1];
              p === "style"
                ? da(l, m)
                : p === "dangerouslySetInnerHTML"
                ? ca(l, m)
                : p === "children"
                ? Wn(l, m)
                : Po(l, p, m, a);
            }
            switch (u) {
              case "input":
                xi(l, i);
                break;
              case "textarea":
                sa(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var v = i.value;
                v != null
                  ? rn(l, !!i.multiple, v, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? rn(l, !!i.multiple, i.defaultValue, !0)
                      : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[er] = i;
          } catch (k) {
            W(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          W(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Fe(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yn(t.containerInfo);
        } catch (k) {
          W(e, e.return, k);
        }
      break;
    case 4:
      Fe(t, e), Ae(e);
      break;
    case 13:
      Fe(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (lu = q())),
        r & 4 && ws(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (a = se) || p), Fe(t, e), (se = a)) : Fe(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && (e.mode & 1) !== 0)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (m = _ = p; _ !== null; ) {
              switch (((h = _), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  An(4, h, h.return);
                  break;
                case 1:
                  tn(h, h.return);
                  var S = h.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (k) {
                      W(r, n, k);
                    }
                  }
                  break;
                case 5:
                  tn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ks(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (_ = v)) : ks(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = fa("display", o)));
              } catch (k) {
                W(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = a ? "" : m.memoizedProps;
              } catch (k) {
                W(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Ae(e), r & 4 && ws(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Uc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Wn(l, ""), (r.flags &= -33));
          var i = gs(e);
          io(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = gs(e);
          lo(e, u, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xp(e, t, n) {
  (_ = e), $c(e);
}
function $c(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Dr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = Dr;
        var a = se;
        if (((Dr = o), (se = s) && !a))
          for (_ = l; _ !== null; )
            (o = _),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Es(l)
                : s !== null
                ? ((s.return = o), (_ = s))
                : Es(l);
        for (; i !== null; ) (_ = i), $c(i), (i = i.sibling);
        (_ = l), (Dr = u), (se = a);
      }
      Ss(e);
    } else
      (l.subtreeFlags & 8772) !== 0 && i !== null
        ? ((i.return = l), (_ = i))
        : Ss(e);
  }
}
function Ss(e) {
  for (; _ !== null; ) {
    var t = _;
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate;
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && rs(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                rs(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Yn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        se || (t.flags & 512 && ro(t));
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function ks(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Es(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var i = t.return;
          try {
            ro(t);
          } catch (s) {
            W(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            ro(t);
          } catch (s) {
            W(t, o, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (_ = u);
      break;
    }
    _ = t.return;
  }
}
var Pp = Math.ceil,
  yl = tt.ReactCurrentDispatcher,
  nu = tt.ReactCurrentOwner,
  Ne = tt.ReactCurrentBatchConfig,
  M = 0,
  ee = null,
  Y = null,
  re = 0,
  we = 0,
  nn = xt(0),
  Z = 0,
  or = null,
  At = 0,
  Dl = 0,
  ru = 0,
  $n = null,
  he = null,
  lu = 0,
  vn = 1 / 0,
  Ke = null,
  gl = !1,
  oo = null,
  vt = null,
  Mr = !1,
  ct = null,
  wl = 0,
  Bn = 0,
  uo = null,
  Kr = -1,
  qr = 0;
function fe() {
  return (M & 6) !== 0 ? q() : Kr !== -1 ? Kr : (Kr = q());
}
function yt(e) {
  return (e.mode & 1) === 0
    ? 1
    : (M & 2) !== 0 && re !== 0
    ? re & -re
    : sp.transition !== null
    ? (qr === 0 && (qr = xa()), qr)
    : ((e = j),
      e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : La(e.type))),
      e);
}
function je(e, t, n, r) {
  if (50 < Bn) throw ((Bn = 0), (uo = null), Error(E(185)));
  cr(e, n, r),
    ((M & 2) === 0 || e !== ee) &&
      (e === ee && ((M & 2) === 0 && (Dl |= n), Z === 4 && st(e, re)),
      ge(e, r),
      n === 1 &&
        M === 0 &&
        (t.mode & 1) === 0 &&
        ((vn = q() + 500), Tl && Pt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  sd(e, t);
  var r = nl(e, e === ee ? re : 0);
  if (r === 0)
    n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Lu(n), t === 1))
      e.tag === 0 ? up(Cs.bind(null, e)) : Xa(Cs.bind(null, e)),
        rp(function () {
          (M & 6) === 0 && Pt();
        }),
        (n = null);
    else {
      switch (Pa(r)) {
        case 1:
          n = To;
          break;
        case 4:
          n = Ea;
          break;
        case 16:
          n = tl;
          break;
        case 536870912:
          n = Ca;
          break;
        default:
          n = tl;
      }
      n = Yc(n, Bc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bc(e, t) {
  if (((Kr = -1), (qr = 0), (M & 6) !== 0)) throw Error(E(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = nl(e, e === ee ? re : 0);
  if (r === 0) return null;
  if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Sl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Hc();
    (ee !== e || re !== t) && ((Ke = null), (vn = q() + 500), Mt(e, t));
    do
      try {
        Rp();
        break;
      } catch (u) {
        Vc(e, u);
      }
    while (1);
    Vo(),
      (yl.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((ee = null), (re = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Di(e)), l !== 0 && ((r = l), (t = so(e, l)))), t === 1)
    )
      throw ((n = or), Mt(e, 0), st(e, r), ge(e, q()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        (r & 30) === 0 &&
          !_p(l) &&
          ((t = Sl(e, r)),
          t === 2 && ((i = Di(e)), i !== 0 && ((r = i), (t = so(e, i)))),
          t === 1))
      )
        throw ((n = or), Mt(e, 0), st(e, r), ge(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Nt(e, he, Ke);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = lu + 500 - q()), 10 < t))
          ) {
            if (nl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Bi(Nt.bind(null, e, he, Ke), t);
            break;
          }
          Nt(e, he, Ke);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ie(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Pp(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Bi(Nt.bind(null, e, he, Ke), r);
            break;
          }
          Nt(e, he, Ke);
          break;
        case 5:
          Nt(e, he, Ke);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ge(e, q()), e.callbackNode === n ? Bc.bind(null, e) : null;
}
function so(e, t) {
  var n = $n;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = Sl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && ao(t)),
    e
  );
}
function ao(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function _p(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~ru,
      t &= ~Dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cs(e) {
  if ((M & 6) !== 0) throw Error(E(327));
  an();
  var t = nl(e, 0);
  if ((t & 1) === 0) return ge(e, q()), null;
  var n = Sl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = so(e, r)));
  }
  if (n === 1) throw ((n = or), Mt(e, 0), st(e, t), ge(e, q()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Nt(e, he, Ke),
    ge(e, q()),
    null
  );
}
function iu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((vn = q() + 500), Tl && Pt());
  }
}
function $t(e) {
  ct !== null && ct.tag === 0 && (M & 6) === 0 && an();
  var t = M;
  M |= 1;
  var n = Ne.transition,
    r = j;
  try {
    if (((Ne.transition = null), (j = 1), e)) return e();
  } finally {
    (j = r), (Ne.transition = n), (M = t), (M & 6) === 0 && Pt();
  }
}
function ou() {
  (we = nn.current), A(nn);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), np(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ul();
          break;
        case 3:
          hn(), A(ve), A(ae), Yo();
          break;
        case 5:
          Go(r);
          break;
        case 4:
          hn();
          break;
        case 13:
          A(B);
          break;
        case 19:
          A(B);
          break;
        case 10:
          Ho(r.type._context);
          break;
        case 22:
        case 23:
          ou();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Y = e = gt(e.current, null)),
    (re = we = t),
    (Z = 0),
    (or = null),
    (ru = Dl = At = 0),
    (he = $n = null),
    Lt !== null)
  ) {
    for (t = 0; t < Lt.length; t++)
      if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    Lt = null;
  }
  return e;
}
function Vc(e, t) {
  do {
    var n = Y;
    try {
      if ((Vo(), (Vr.current = vl), ml)) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        ml = !1;
      }
      if (
        ((Qt = 0),
        (b = X = V = null),
        (Qn = !1),
        (rr = 0),
        (nu.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (or = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            p = u,
            m = p.tag;
          if ((p.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = cs(o);
          if (v !== null) {
            (v.flags &= -257),
              fs(v, o, u, i, t),
              v.mode & 1 && as(i, a, t),
              (t = v),
              (s = a);
            var S = t.updateQueue;
            if (S === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else S.add(s);
            break e;
          } else {
            if ((t & 1) === 0) {
              as(i, a, t), uu();
              break e;
            }
            s = Error(E(426));
          }
        } else if ($ && u.mode & 1) {
          var R = cs(o);
          if (R !== null) {
            (R.flags & 65536) === 0 && (R.flags |= 256),
              fs(R, o, u, i, t),
              $o(mn(s, u));
            break e;
          }
        }
        (i = s = mn(s, u)),
          Z !== 4 && (Z = 2),
          $n === null ? ($n = [i]) : $n.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = _c(i, s, t);
              ns(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type,
                f = i.stateNode;
              if (
                (i.flags & 128) === 0 &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (vt === null || !vt.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = Oc(i, u, t);
                ns(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Kc(n);
    } catch (P) {
      (t = P), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Hc() {
  var e = yl.current;
  return (yl.current = vl), e === null ? vl : e;
}
function uu() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    ee === null ||
      ((At & 268435455) === 0 && (Dl & 268435455) === 0) ||
      st(ee, re);
}
function Sl(e, t) {
  var n = M;
  M |= 2;
  var r = Hc();
  (ee !== e || re !== t) && ((Ke = null), Mt(e, t));
  do
    try {
      Op();
      break;
    } catch (l) {
      Vc(e, l);
    }
  while (1);
  if ((Vo(), (M = n), (yl.current = r), Y !== null)) throw Error(E(261));
  return (ee = null), (re = 0), Z;
}
function Op() {
  for (; Y !== null; ) Wc(Y);
}
function Rp() {
  for (; Y !== null && !bf(); ) Wc(Y);
}
function Wc(e) {
  var t = Gc(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? Kc(e) : (Y = t),
    (nu.current = null);
}
function Kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Sp(n, t, we)), n !== null)) {
        Y = n;
        return;
      }
    } else {
      if (((n = kp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Nt(e, t, n) {
  var r = j,
    l = Ne.transition;
  try {
    (Ne.transition = null), (j = 1), Np(e, t, n, r);
  } finally {
    (Ne.transition = l), (j = r);
  }
  return null;
}
function Np(e, t, n, r) {
  do an();
  while (ct !== null);
  if ((M & 6) !== 0) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ad(e, i),
    e === ee && ((Y = ee = null), (re = 0)),
    ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
      Mr ||
      ((Mr = !0),
      Yc(tl, function () {
        return an(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    (n.subtreeFlags & 15990) !== 0 || i)
  ) {
    (i = Ne.transition), (Ne.transition = null);
    var o = j;
    j = 1;
    var u = M;
    (M |= 4),
      (nu.current = null),
      Cp(e, n),
      Ac(n, e),
      Yd(Ai),
      (rl = !!Qi),
      (Ai = Qi = null),
      (e.current = n),
      xp(n),
      ed(),
      (M = u),
      (j = o),
      (Ne.transition = i);
  } else e.current = n;
  if (
    (Mr && ((Mr = !1), (ct = e), (wl = l)),
    (i = e.pendingLanes),
    i === 0 && (vt = null),
    rd(n.stateNode),
    ge(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (gl) throw ((gl = !1), (e = oo), (oo = null), e);
  return (
    (wl & 1) !== 0 && e.tag !== 0 && an(),
    (i = e.pendingLanes),
    (i & 1) !== 0 ? (e === uo ? Bn++ : ((Bn = 0), (uo = e))) : (Bn = 0),
    Pt(),
    null
  );
}
function an() {
  if (ct !== null) {
    var e = Pa(wl),
      t = Ne.transition,
      n = j;
    try {
      if (((Ne.transition = null), (j = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (wl = 0), (M & 6) !== 0))
          throw Error(E(331));
        var l = M;
        for (M |= 4, _ = e.current; _ !== null; ) {
          var i = _,
            o = i.child;
          if ((_.flags & 16) !== 0) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (_ = a; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, p, i);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (_ = m);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var h = p.sibling,
                        v = p.return;
                      if ((jc(p), p === a)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (_ = h);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var k = S.child;
                if (k !== null) {
                  S.child = null;
                  do {
                    var R = k.sibling;
                    (k.sibling = null), (k = R);
                  } while (k !== null);
                }
              }
              _ = i;
            }
          }
          if ((i.subtreeFlags & 2064) !== 0 && o !== null)
            (o.return = i), (_ = o);
          else
            e: for (; _ !== null; ) {
              if (((i = _), (i.flags & 2048) !== 0))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    An(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (_ = d);
                break e;
              }
              _ = i.return;
            }
        }
        var c = e.current;
        for (_ = c; _ !== null; ) {
          o = _;
          var f = o.child;
          if ((o.subtreeFlags & 2064) !== 0 && f !== null)
            (f.return = o), (_ = f);
          else
            e: for (o = c; _ !== null; ) {
              if (((u = _), (u.flags & 2048) !== 0))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zl(9, u);
                  }
                } catch (P) {
                  W(u, u.return, P);
                }
              if (u === o) {
                _ = null;
                break e;
              }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (_ = y);
                break e;
              }
              _ = u.return;
            }
        }
        if (
          ((M = l), Pt(), Ve && typeof Ve.onPostCommitFiberRoot == "function")
        )
          try {
            Ve.onPostCommitFiberRoot(Pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (j = n), (Ne.transition = t);
    }
  }
  return !1;
}
function xs(e, t, n) {
  (t = mn(n, t)),
    (t = _c(e, t, 1)),
    (e = mt(e, t, 1)),
    (t = fe()),
    e !== null && (cr(e, 1, t), ge(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) xs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (vt === null || !vt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = Oc(t, e, 1)),
            (t = mt(t, e, 1)),
            (e = fe()),
            t !== null && (cr(t, 1, e), ge(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (re & n) === n &&
      (Z === 4 || (Z === 3 && (re & 130023424) === re && 500 > q() - lu)
        ? Mt(e, 0)
        : (ru |= n)),
    ge(e, t);
}
function qc(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = Pr), (Pr <<= 1), (Pr & 130023424) === 0 && (Pr = 4194304)));
  var n = fe();
  (e = be(e, t)), e !== null && (cr(e, t, n), ge(e, n));
}
function Lp(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qc(e, n);
}
function Fp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), qc(e, n);
}
var Gc;
Gc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) me = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
        return (me = !1), wp(e, t, n);
      me = (e.flags & 131072) !== 0;
    }
  else (me = !1), $ && (t.flags & 1048576) !== 0 && Za(t, cl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wr(e, t), (e = t.pendingProps);
      var l = fn(t, ae.current);
      sn(t, n), (l = Zo(null, t, r, e, l, n));
      var i = Jo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((i = !0), sl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ko(t),
            (l.updater = Ll),
            (t.stateNode = l),
            (l._reactInternals = t),
            Yi(t, r, e, n),
            (t = Ji(null, t, r, !0, i, n)))
          : ((t.tag = 0), $ && i && Qo(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Dp(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = hs(null, t, r, e, n);
            break e;
          case 11:
            t = ds(null, t, r, e, n);
            break e;
          case 14:
            t = ps(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Zi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        hs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Lc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          tc(e, t),
          pl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = mn(Error(E(423)), t)), (t = ms(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(E(424)), t)), (t = ms(e, t, r, n, l));
            break e;
          } else
            for (
              Se = ht(t.stateNode.containerInfo.firstChild),
                ke = t,
                $ = !0,
                Me = null,
                n = ic(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        oc(t),
        e === null && Ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        $i(r, l) ? (o = null) : i !== null && $i(r, i) && (t.flags |= 32),
        Tc(e, t),
        ce(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ki(t), null;
    case 13:
      return Fc(e, t, n);
    case 4:
      return (
        qo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        ds(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          U(fl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ue(i.value, o)) {
            if (i.children === l.children && !ve.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Xe(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      qi(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  qi(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        sn(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        ps(e, t, r, l, n)
      );
    case 15:
      return Rc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Wr(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), sl(t)) : (e = !1),
        sn(t, n),
        rc(t, r, l),
        Yi(t, r, l, n),
        Ji(null, t, r, !0, e, n)
      );
    case 19:
      return zc(e, t, n);
    case 22:
      return Nc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Yc(e, t) {
  return ka(e, t);
}
function zp(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Re(e, t, n, r) {
  return new zp(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dp(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oo)) return 11;
    if (e === Ro) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Re(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Gr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) su(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Kt:
        return It(n.children, l, i, t);
      case _o:
        (o = 8), (l |= 8);
        break;
      case wi:
        return (
          (e = Re(12, n, t, l | 2)), (e.elementType = wi), (e.lanes = i), e
        );
      case Si:
        return (e = Re(13, n, t, l)), (e.elementType = Si), (e.lanes = i), e;
      case ki:
        return (e = Re(19, n, t, l)), (e.elementType = ki), (e.lanes = i), e;
      case la:
        return Ml(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case na:
              o = 10;
              break e;
            case ra:
              o = 9;
              break e;
            case Oo:
              o = 11;
              break e;
            case Ro:
              o = 14;
              break e;
            case lt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Re(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function It(e, t, n, r) {
  return (e = Re(7, e, r, t)), (e.lanes = n), e;
}
function Ml(e, t, n, r) {
  return (
    (e = Re(22, e, r, t)),
    (e.elementType = la),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function mi(e, t, n) {
  return (e = Re(6, e, null, t)), (e.lanes = n), e;
}
function vi(e, t, n) {
  return (
    (t = Re(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Mp(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xl(0)),
    (this.expirationTimes = Xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function au(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new Mp(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Re(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ko(i),
    e
  );
}
function Ip(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xc(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Ya(e, n, t);
  }
  return t;
}
function Zc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = au(n, r, !0, e, l, i, o, u, s)),
    (e.context = Xc(null)),
    (n = e.current),
    (r = fe()),
    (l = yt(n)),
    (i = Xe(r, l)),
    (i.callback = t != null ? t : null),
    mt(n, i, l),
    (e.current.lanes = l),
    cr(e, l, r),
    ge(e, r),
    e
  );
}
function Il(e, t, n, r) {
  var l = t.current,
    i = fe(),
    o = yt(l);
  return (
    (n = Xc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Xe(i, o)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mt(l, t, o)),
    e !== null && (je(e, l, o, i), Br(e, l, o)),
    o
  );
}
function kl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ps(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Ps(e, t), (e = e.alternate) && Ps(e, t);
}
function jp() {
  return null;
}
var Jc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
jl.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Il(e, t, null, null);
};
jl.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $t(function () {
      Il(null, e, null, null);
    }),
      (t[Je] = null);
  }
};
function jl(e) {
  this._internalRoot = e;
}
jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ra();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && Ta(e);
  }
};
function du(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _s() {}
function Up(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = kl(o);
        i.call(a);
      };
    }
    var o = Zc(t, r, e, 0, null, !1, !1, "", _s);
    return (
      (e._reactRootContainer = o),
      (e[Je] = o.current),
      Jn(e.nodeType === 8 ? e.parentNode : e),
      $t(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = kl(s);
      u.call(a);
    };
  }
  var s = au(e, 0, !1, null, null, !1, !1, "", _s);
  return (
    (e._reactRootContainer = s),
    (e[Je] = s.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    $t(function () {
      Il(t, s, n, r);
    }),
    s
  );
}
function Ql(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = kl(o);
        u.call(s);
      };
    }
    Il(t, o, e, l);
  } else o = Up(n, t, e, l, r);
  return kl(o);
}
_a = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 &&
          (Lo(t, n | 1), ge(t, q()), (M & 6) === 0 && ((vn = q() + 500), Pt()));
      }
      break;
    case 13:
      $t(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = fe();
          je(r, e, 1, l);
        }
      }),
        cu(e, 1);
  }
};
Fo = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = fe();
      je(t, e, 134217728, n);
    }
    cu(e, 134217728);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = be(e, t);
    if (n !== null) {
      var r = fe();
      je(n, e, t, r);
    }
    cu(e, t);
  }
};
Ra = function () {
  return j;
};
Na = function (e, t) {
  var n = j;
  try {
    return (j = e), t();
  } finally {
    j = n;
  }
};
Li = function (e, t, n) {
  switch (t) {
    case "input":
      if ((xi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(E(90));
            oa(r), xi(r, l);
          }
        }
      }
      break;
    case "textarea":
      sa(e, n);
      break;
    case "select":
      (t = n.value), t != null && rn(e, !!n.multiple, t, !1);
  }
};
ma = iu;
va = $t;
var Qp = {
    usingClientEntryPoint: !1,
    Events: [dr, Xt, Nl, pa, ha, iu],
  },
  Nn = {
    findFiberByHostInstance: Tt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ap = {
    bundleType: Nn.bundleType,
    version: Nn.version,
    rendererPackageName: Nn.rendererPackageName,
    rendererConfig: Nn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Nn.findFiberByHostInstance || jp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber)
    try {
      (Pl = Ir.inject(Ap)), (Ve = Ir);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!du(t)) throw Error(E(200));
  return Ip(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!du(e)) throw Error(E(299));
  var n = !1,
    r = "",
    l = Jc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = au(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new fu(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = wa(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return $t(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(E(200));
  return Ql(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!du(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Jc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Zc(t, null, e, 1, n != null ? n : null, l, !1, i, o)),
    (e[Je] = t.current),
    Jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new jl(t);
};
Ce.render = function (e, t, n) {
  if (!Ul(t)) throw Error(E(200));
  return Ql(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(E(40));
  return e._reactRootContainer
    ? ($t(function () {
        Ql(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Je] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = iu;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Ql(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Ce);
})(Zs);
var bc,
  Os = Zs.exports;
(bc = Os.createRoot), Os.hydrateRoot;
function yn() {
  return (
    (yn = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    yn.apply(this, arguments)
  );
}
var zt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(zt || (zt = {}));
var Rs = function (e) {
    return e;
  },
  Ns = "beforeunload",
  $p = "hashchange",
  Bp = "popstate";
function Vp(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.window,
    r = n === void 0 ? document.defaultView : n,
    l = r.history;
  function i() {
    var g = Et(r.location.hash.substr(1)),
      N = g.pathname,
      T = N === void 0 ? "/" : N,
      I = g.search,
      ie = I === void 0 ? "" : I,
      te = g.hash,
      nt = te === void 0 ? "" : te,
      Qe = l.state || {};
    return [
      Qe.idx,
      Rs({
        pathname: T,
        search: ie,
        hash: nt,
        state: Qe.usr || null,
        key: Qe.key || "default",
      }),
    ];
  }
  var o = null;
  function u() {
    if (o) v.call(o), (o = null);
    else {
      var g = zt.Pop,
        N = i(),
        T = N[0],
        I = N[1];
      if (v.length) {
        if (T != null) {
          var ie = p - T;
          ie &&
            ((o = {
              action: g,
              location: I,
              retry: function () {
                w(ie * -1);
              },
            }),
            w(ie));
        }
      } else f(g);
    }
  }
  r.addEventListener(Bp, u),
    r.addEventListener($p, function () {
      var g = i(),
        N = g[1];
      Vn(N) !== Vn(m) && u();
    });
  var s = zt.Pop,
    a = i(),
    p = a[0],
    m = a[1],
    h = Ls(),
    v = Ls();
  p == null &&
    ((p = 0),
    l.replaceState(
      yn({}, l.state, {
        idx: p,
      }),
      ""
    ));
  function S() {
    var g = document.querySelector("base"),
      N = "";
    if (g && g.getAttribute("href")) {
      var T = r.location.href,
        I = T.indexOf("#");
      N = I === -1 ? T : T.slice(0, I);
    }
    return N;
  }
  function k(g) {
    return S() + "#" + (typeof g == "string" ? g : Vn(g));
  }
  function R(g, N) {
    return (
      N === void 0 && (N = null),
      Rs(
        yn(
          {
            pathname: m.pathname,
            hash: "",
            search: "",
          },
          typeof g == "string" ? Et(g) : g,
          {
            state: N,
            key: Hp(),
          }
        )
      )
    );
  }
  function d(g, N) {
    return [
      {
        usr: g.state,
        key: g.key,
        idx: N,
      },
      k(g),
    ];
  }
  function c(g, N, T) {
    return (
      !v.length ||
      (v.call({
        action: g,
        location: N,
        retry: T,
      }),
      !1)
    );
  }
  function f(g) {
    s = g;
    var N = i();
    (p = N[0]),
      (m = N[1]),
      h.call({
        action: s,
        location: m,
      });
  }
  function y(g, N) {
    var T = zt.Push,
      I = R(g, N);
    function ie() {
      y(g, N);
    }
    if (c(T, I, ie)) {
      var te = d(I, p + 1),
        nt = te[0],
        Qe = te[1];
      try {
        l.pushState(nt, "", Qe);
      } catch {
        r.location.assign(Qe);
      }
      f(T);
    }
  }
  function P(g, N) {
    var T = zt.Replace,
      I = R(g, N);
    function ie() {
      P(g, N);
    }
    if (c(T, I, ie)) {
      var te = d(I, p),
        nt = te[0],
        Qe = te[1];
      l.replaceState(nt, "", Qe), f(T);
    }
  }
  function w(g) {
    l.go(g);
  }
  var C = {
    get action() {
      return s;
    },
    get location() {
      return m;
    },
    createHref: k,
    push: y,
    replace: P,
    go: w,
    back: function () {
      w(-1);
    },
    forward: function () {
      w(1);
    },
    listen: function (N) {
      return h.push(N);
    },
    block: function (N) {
      var T = v.push(N);
      return (
        v.length === 1 && r.addEventListener(Ns, Ts),
        function () {
          T(), v.length || r.removeEventListener(Ns, Ts);
        }
      );
    },
  };
  return C;
}
function Ts(e) {
  e.preventDefault(), (e.returnValue = "");
}
function Ls() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (r) {
            return r !== n;
          });
        }
      );
    },
    call: function (n) {
      e.forEach(function (r) {
        return r && r(n);
      });
    },
  };
}
function Hp() {
  return Math.random().toString(36).substr(2, 8);
}
function Vn(e) {
  var t = e.pathname,
    n = t === void 0 ? "/" : t,
    r = e.search,
    l = r === void 0 ? "" : r,
    i = e.hash,
    o = i === void 0 ? "" : i;
  return (
    l && l !== "?" && (n += l.charAt(0) === "?" ? l : "?" + l),
    o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o),
    n
  );
}
function Et(e) {
  var t = {};
  if (e) {
    var n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    var r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const pu = x.exports.createContext(null),
  hu = x.exports.createContext(null),
  hr = x.exports.createContext({
    outlet: null,
    matches: [],
  });
function We(e, t) {
  if (!e) throw new Error(t);
}
function Wp(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Et(t) : t,
    l = nf(r.pathname || "/", n);
  if (l == null) return null;
  let i = ef(e);
  Kp(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = th(i[u], l);
  return o;
}
function ef(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((l, i) => {
      let o = {
        relativePath: l.path || "",
        caseSensitive: l.caseSensitive === !0,
        childrenIndex: i,
        route: l,
      };
      o.relativePath.startsWith("/") &&
        (o.relativePath.startsWith(r) || We(!1),
        (o.relativePath = o.relativePath.slice(r.length)));
      let u = wt([r, o.relativePath]),
        s = n.concat(o);
      l.children &&
        l.children.length > 0 &&
        (l.index === !0 && We(!1), ef(l.children, t, s, u)),
        !(l.path == null && !l.index) &&
          t.push({
            path: u,
            score: bp(u, l.index),
            routesMeta: s,
          });
    }),
    t
  );
}
function Kp(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : eh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const qp = /^:\w+$/,
  Gp = 3,
  Yp = 2,
  Xp = 1,
  Zp = 10,
  Jp = -2,
  Fs = (e) => e === "*";
function bp(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Fs) && (r += Jp),
    t && (r += Yp),
    n
      .filter((l) => !Fs(l))
      .reduce((l, i) => l + (qp.test(i) ? Gp : i === "" ? Xp : Zp), r)
  );
}
function eh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function th(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      s = o === n.length - 1,
      a = l === "/" ? t : t.slice(l.length) || "/",
      p = nh(
        {
          path: u.relativePath,
          caseSensitive: u.caseSensitive,
          end: s,
        },
        a
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let m = u.route;
    i.push({
      params: r,
      pathname: wt([l, p.pathname]),
      pathnameBase: rf(wt([l, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== "/" && (l = wt([l, p.pathnameBase]));
  }
  return i;
}
function nh(e, t) {
  typeof e == "string" &&
    (e = {
      path: e,
      caseSensitive: !1,
      end: !0,
    });
  let [n, r] = rh(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, m) => {
      if (p === "*") {
        let h = u[m] || "";
        o = i.slice(0, i.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (a[p] = lh(u[m] || "")), a;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function rh(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0);
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (o, u) => (r.push(u), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : (l += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function lh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function ih(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Et(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : oh(n, t)) : t,
    search: sh(r),
    hash: ah(l),
  };
}
function oh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function tf(e, t, n) {
  let r = typeof e == "string" ? Et(e) : e,
    l = e === "" || r.pathname === "" ? "/" : r.pathname,
    i;
  if (l == null) i = n;
  else {
    let u = t.length - 1;
    if (l.startsWith("..")) {
      let s = l.split("/");
      for (; s[0] === ".."; ) s.shift(), (u -= 1);
      r.pathname = s.join("/");
    }
    i = u >= 0 ? t[u] : "/";
  }
  let o = ih(r, i);
  return (
    l &&
      l !== "/" &&
      l.endsWith("/") &&
      !o.pathname.endsWith("/") &&
      (o.pathname += "/"),
    o
  );
}
function uh(e) {
  return e === "" || e.pathname === ""
    ? "/"
    : typeof e == "string"
    ? Et(e).pathname
    : e.pathname;
}
function nf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = e.charAt(t.length);
  return n && n !== "/" ? null : e.slice(t.length) || "/";
}
const wt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  rf = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  sh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  ah = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function ch(e) {
  mr() || We(!1);
  let { basename: t, navigator: n } = x.exports.useContext(pu),
    { hash: r, pathname: l, search: i } = lf(e),
    o = l;
  if (t !== "/") {
    let u = uh(e),
      s = u != null && u.endsWith("/");
    o = l === "/" ? t + (s ? "/" : "") : wt([t, l]);
  }
  return n.createHref({
    pathname: o,
    search: i,
    hash: r,
  });
}
function mr() {
  return x.exports.useContext(hu) != null;
}
function Al() {
  return mr() || We(!1), x.exports.useContext(hu).location;
}
function fh() {
  mr() || We(!1);
  let { basename: e, navigator: t } = x.exports.useContext(pu),
    { matches: n } = x.exports.useContext(hr),
    { pathname: r } = Al(),
    l = JSON.stringify(n.map((u) => u.pathnameBase)),
    i = x.exports.useRef(!1);
  return (
    x.exports.useEffect(() => {
      i.current = !0;
    }),
    x.exports.useCallback(
      function (u, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let a = tf(u, JSON.parse(l), r);
        e !== "/" && (a.pathname = wt([e, a.pathname])),
          (s.replace ? t.replace : t.push)(a, s.state);
      },
      [e, t, l, r]
    )
  );
}
const dh = x.exports.createContext(null);
function ph(e) {
  let t = x.exports.useContext(hr).outlet;
  return (
    t &&
    x.exports.createElement(
      dh.Provider,
      {
        value: e,
      },
      t
    )
  );
}
function lf(e) {
  let { matches: t } = x.exports.useContext(hr),
    { pathname: n } = Al(),
    r = JSON.stringify(t.map((l) => l.pathnameBase));
  return x.exports.useMemo(() => tf(e, JSON.parse(r), n), [e, r, n]);
}
function hh(e, t) {
  mr() || We(!1);
  let { matches: n } = x.exports.useContext(hr),
    r = n[n.length - 1],
    l = r ? r.params : {};
  r && r.pathname;
  let i = r ? r.pathnameBase : "/";
  r && r.route;
  let o = Al(),
    u;
  if (t) {
    var s;
    let h = typeof t == "string" ? Et(t) : t;
    i === "/" ||
      ((s = h.pathname) == null ? void 0 : s.startsWith(i)) ||
      We(!1),
      (u = h);
  } else u = o;
  let a = u.pathname || "/",
    p = i === "/" ? a : a.slice(i.length) || "/",
    m = Wp(e, {
      pathname: p,
    });
  return mh(
    m &&
      m.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, l, h.params),
          pathname: wt([i, h.pathname]),
          pathnameBase: h.pathnameBase === "/" ? i : wt([i, h.pathnameBase]),
        })
      ),
    n
  );
}
function mh(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (n, r, l) =>
            x.exports.createElement(hr.Provider, {
              children: r.route.element !== void 0 ? r.route.element : n,
              value: {
                outlet: n,
                matches: t.concat(e.slice(0, l + 1)),
              },
            }),
          null
        )
  );
}
function vh(e) {
  return ph(e.context);
}
function Yr(e) {
  We(!1);
}
function yh(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = zt.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  mr() && We(!1);
  let u = rf(t),
    s = x.exports.useMemo(
      () => ({
        basename: u,
        navigator: i,
        static: o,
      }),
      [u, i, o]
    );
  typeof r == "string" && (r = Et(r));
  let {
      pathname: a = "/",
      search: p = "",
      hash: m = "",
      state: h = null,
      key: v = "default",
    } = r,
    S = x.exports.useMemo(() => {
      let k = nf(a, u);
      return k == null
        ? null
        : {
            pathname: k,
            search: p,
            hash: m,
            state: h,
            key: v,
          };
    }, [u, a, p, m, h, v]);
  return S == null
    ? null
    : x.exports.createElement(
        pu.Provider,
        {
          value: s,
        },
        x.exports.createElement(hu.Provider, {
          children: n,
          value: {
            location: S,
            navigationType: l,
          },
        })
      );
}
function gh(e) {
  let { children: t, location: n } = e;
  return hh(co(t), n);
}
function co(e) {
  let t = [];
  return (
    x.exports.Children.forEach(e, (n) => {
      if (!x.exports.isValidElement(n)) return;
      if (n.type === x.exports.Fragment) {
        t.push.apply(t, co(n.props.children));
        return;
      }
      n.type !== Yr && We(!1);
      let r = {
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        index: n.props.index,
        path: n.props.path,
      };
      n.props.children && (r.children = co(n.props.children)), t.push(r);
    }),
    t
  );
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function fo() {
  return (
    (fo =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      }),
    fo.apply(this, arguments)
  );
}
function wh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const Sh = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function kh(e) {
  let { basename: t, children: n, window: r } = e,
    l = x.exports.useRef();
  l.current == null &&
    (l.current = Vp({
      window: r,
    }));
  let i = l.current,
    [o, u] = x.exports.useState({
      action: i.action,
      location: i.location,
    });
  return (
    x.exports.useLayoutEffect(() => i.listen(u), [i]),
    x.exports.createElement(yh, {
      basename: t,
      children: n,
      location: o.location,
      navigationType: o.action,
      navigator: i,
    })
  );
}
function Eh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Ch = x.exports.forwardRef(function (t, n) {
  let {
      onClick: r,
      reloadDocument: l,
      replace: i = !1,
      state: o,
      target: u,
      to: s,
    } = t,
    a = wh(t, Sh),
    p = ch(s),
    m = xh(s, {
      replace: i,
      state: o,
      target: u,
    });
  function h(v) {
    r && r(v), !v.defaultPrevented && !l && m(v);
  }
  return x.exports.createElement(
    "a",
    fo({}, a, {
      href: p,
      onClick: h,
      ref: n,
      target: u,
    })
  );
});
function xh(e, t) {
  let { target: n, replace: r, state: l } = t === void 0 ? {} : t,
    i = fh(),
    o = Al(),
    u = lf(e);
  return x.exports.useCallback(
    (s) => {
      if (s.button === 0 && (!n || n === "_self") && !Eh(s)) {
        s.preventDefault();
        let a = !!r || Vn(o) === Vn(u);
        i(e, {
          replace: a,
          state: l,
        });
      }
    },
    [o, i, u, r, l, n, e]
  );
}
function po(e, t) {
  return (
    (po = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, l) {
          return (r.__proto__ = l), r;
        }),
    po(e, t)
  );
}
function Ph(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    po(e, t);
}
var _h = function (t, n) {
    return (
      t === void 0 && (t = []),
      n === void 0 && (n = []),
      t.length !== n.length ||
        t.some(function (r, l) {
          return !Object.is(r, n[l]);
        })
    );
  },
  zs = {
    error: null,
  },
  Oh = (function (e) {
    Ph(t, e);
    function t() {
      for (var r, l = arguments.length, i = new Array(l), o = 0; o < l; o++)
        i[o] = arguments[o];
      return (
        (r = e.call.apply(e, [this].concat(i)) || this),
        (r.state = zs),
        (r.resetErrorBoundary = function () {
          for (var u, s = arguments.length, a = new Array(s), p = 0; p < s; p++)
            a[p] = arguments[p];
          r.props.onReset == null || (u = r.props).onReset.apply(u, a),
            r.reset();
        }),
        r
      );
    }
    t.getDerivedStateFromError = function (l) {
      return {
        error: l,
      };
    };
    var n = t.prototype;
    return (
      (n.reset = function () {
        this.setState(zs);
      }),
      (n.componentDidCatch = function (l, i) {
        var o, u;
        (o = (u = this.props).onError) == null || o.call(u, l, i);
      }),
      (n.componentDidUpdate = function (l, i) {
        var o = this.state.error,
          u = this.props.resetKeys;
        if (o !== null && i.error !== null && _h(l.resetKeys, u)) {
          var s, a;
          (s = (a = this.props).onResetKeysChange) == null ||
            s.call(a, l.resetKeys, u),
            this.reset();
        }
      }),
      (n.render = function () {
        var l = this.state.error,
          i = this.props,
          o = i.fallbackRender,
          u = i.FallbackComponent,
          s = i.fallback;
        if (l !== null) {
          var a = {
            error: l,
            resetErrorBoundary: this.resetErrorBoundary,
          };
          if (x.exports.isValidElement(s)) return s;
          if (typeof o == "function") return o(a);
          if (u) return x.exports.createElement(u, a);
          throw new Error(
            "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
          );
        }
        return this.props.children;
      }),
      t
    );
  })(x.exports.Component);
function Rh(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Nh(...e) {
  return (t) => e.forEach((n) => Rh(n, t));
}
const of = x.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    l = x.exports.Children.toArray(n),
    i = l.find(Lh);
  if (i) {
    const o = i.props.children,
      u = l.map((s) =>
        s === i
          ? x.exports.Children.count(o) > 1
            ? x.exports.Children.only(null)
            : x.exports.isValidElement(o)
            ? o.props.children
            : null
          : s
      );
    return x.exports.createElement(
      ho,
      yn({}, r, {
        ref: t,
      }),
      x.exports.isValidElement(o) ? x.exports.cloneElement(o, void 0, u) : null
    );
  }
  return x.exports.createElement(
    ho,
    yn({}, r, {
      ref: t,
    }),
    n
  );
});
of.displayName = "Slot";
const ho = x.exports.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return x.exports.isValidElement(n)
    ? x.exports.cloneElement(n, {
        ...Fh(r, n.props),
        ref: Nh(t, n.ref),
      })
    : x.exports.Children.count(n) > 1
    ? x.exports.Children.only(null)
    : null;
});
ho.displayName = "SlotClone";
const Th = ({ children: e }) =>
  x.exports.createElement(x.exports.Fragment, null, e);
function Lh(e) {
  return x.exports.isValidElement(e) && e.type === Th;
}
function Fh(e, t) {
  const n = {
    ...t,
  };
  for (const r in t) {
    const l = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? (n[r] = (...u) => {
          i == null || i(...u), l == null || l(...u);
        })
      : r === "style"
      ? (n[r] = {
          ...l,
          ...i,
        })
      : r === "className" && (n[r] = [l, i].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n,
  };
}
const zh =
    "inline-block py-2.5 px-6 text-xs font-medium leading-tight text-white uppercase bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 active:bg-blue-800 rounded focus:outline-none focus:ring-0 shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out",
  Dh =
    "inline-block py-2 px-6 text-xs font-medium leading-tight text-blue-600 uppercase rounded border-2 border-blue-600 focus:outline-none focus:ring-0 transition duration-150 ease-in-out",
  Mh =
    "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md active:bg-red-700 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
  uf = x.exports.forwardRef(
    (
      { children: e, variant: t = "primary", className: n, asChild: r, ...l },
      i
    ) => {
      const o = r ? of : "button",
        u = () => {
          if (t === "primary") return zh;
          if (t === "secondary") return Dh;
          if (t === "danger") return Mh;
        };
      return D.createElement(
        o,
        {
          ...l,
          className: `${n} ${u()}`,
          ref: i,
        },
        e
      );
    }
  );
uf.displayName = "Button";
const Ih = ({ children: e, showTryAgain: t = !0, tryAgainText: n }) =>
    D.createElement(
      Oh,
      {
        fallbackRender: ({ error: r, resetErrorBoundary: l }) =>
          D.createElement(
            "div",
            {
              className: "m-4 flex w-full justify-center",
            },
            D.createElement(
              "div",
              {
                role: "alert",
                className:
                  "mb-4 rounded-lg bg-red-100 py-5 px-6 text-base text-red-700",
              },
              D.createElement("h2", null, "Something went wrong:"),
              D.createElement(
                "pre",
                {
                  className: "mb-4 whitespace-pre-line",
                },
                r.message
              ),
              t &&
                D.createElement(
                  uf,
                  {
                    onClick: () => l(),
                    variant: "danger",
                  },
                  n || "Try again"
                )
            )
          ),
      },
      e
    ),
  jh = x.exports.lazy(() => sr(() => import("./index.d3657dce.js"), [])),
  Uh = x.exports.lazy(() =>
    sr(
      () => import("./index.efb8fca8.js"),
      ["assets/index.efb8fca8.js", "assets/index.880b873d.css"]
    )
  ),
  Qh = x.exports.lazy(() => sr(() => import("./index.3c65edef.js"), [])),
  Ah = x.exports.lazy(() => sr(() => import("./index.8e13e2a1.js"), [])),
  $h = x.exports.lazy(() => sr(() => import("./index.61aae81f.js"), [])),
  sf = [
    {
      title: "Random Quote Machine",
      element: D.createElement(jh, null),
      path: "random-quote-machine",
    },
    {
      title: "Markdown Previewer",
      element: D.createElement(Uh, null),
      path: "markdown-previewer",
    },
    {
      title: "Drum Machine",
      element: D.createElement(Qh, null),
      path: "drum-machine",
    },
    {
      title: "Calculator",
      element: D.createElement(Ah, null),
      path: "calculator",
    },
    {
      title: "25 + 5 Clock",
      element: D.createElement($h, null),
      path: "twenty-five-plus-five-clock",
    },
  ],
  Bh = () =>
    D.createElement(
      "div",
      {
        className: "flex flex-col items-center justify-center",
      },
      D.createElement(
        "h1",
        {
          className: "mb-6 text-2xl font-bold text-white",
        },
        "FreeCodeCamp's Front End Development Libraries Projects"
      ),
      D.createElement(
        "ul",
        {
          className:
            "w-96 rounded-lg border border-gray-200 bg-white text-gray-900",
        },
        sf.map((e) =>
          D.createElement(
            "li",
            {
              className: "w-full border-b border-gray-200 py-2 px-6",
              key: e.title,
            },
            D.createElement(
              Ch,
              {
                to: e.path || "/",
              },
              e.title
            )
          )
        )
      )
    );
var af = {
    exports: {},
  },
  cf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn = x.exports;
function Vh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Hh = typeof Object.is == "function" ? Object.is : Vh,
  Wh = gn.useState,
  Kh = gn.useEffect,
  qh = gn.useLayoutEffect,
  Gh = gn.useDebugValue;
function Yh(e, t) {
  var n = t(),
    r = Wh({
      inst: {
        value: n,
        getSnapshot: t,
      },
    }),
    l = r[0].inst,
    i = r[1];
  return (
    qh(
      function () {
        (l.value = n),
          (l.getSnapshot = t),
          yi(l) &&
            i({
              inst: l,
            });
      },
      [e, n, t]
    ),
    Kh(
      function () {
        return (
          yi(l) &&
            i({
              inst: l,
            }),
          e(function () {
            yi(l) &&
              i({
                inst: l,
              });
          })
        );
      },
      [e]
    ),
    Gh(n),
    n
  );
}
function yi(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Hh(e, n);
  } catch {
    return !0;
  }
}
function Xh(e, t) {
  return t();
}
var Zh =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Xh
    : Yh;
cf.useSyncExternalStore =
  gn.useSyncExternalStore !== void 0 ? gn.useSyncExternalStore : Zh;
(function (e) {
  e.exports = cf;
})(af);
/**
 * react-query
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * query-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class vr {
  constructor() {
    (this.listeners = []), (this.subscribe = this.subscribe.bind(this));
  }
  subscribe(t) {
    return (
      this.listeners.push(t),
      this.onSubscribe(),
      () => {
        (this.listeners = this.listeners.filter((n) => n !== t)),
          this.onUnsubscribe();
      }
    );
  }
  hasListeners() {
    return this.listeners.length > 0;
  }
  onSubscribe() {}
  onUnsubscribe() {}
}
const ur = typeof window > "u";
function Pe() {}
function Jh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function ff(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Xr(e, t, n) {
  return $l(e)
    ? typeof t == "function"
      ? {
          ...n,
          queryKey: e,
          queryFn: t,
        }
      : {
          ...t,
          queryKey: e,
        }
    : e;
}
function ot(e, t, n) {
  return $l(e)
    ? [
        {
          ...t,
          queryKey: e,
        },
        n,
      ]
    : [e || {}, t];
}
function Ds(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: l,
    predicate: i,
    queryKey: o,
    stale: u,
  } = e;
  if ($l(o)) {
    if (r) {
      if (t.queryHash !== mu(o, t.options)) return !1;
    } else if (!El(t.queryKey, o)) return !1;
  }
  if (n !== "all") {
    const s = t.isActive();
    if ((n === "active" && !s) || (n === "inactive" && s)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof l < "u" && l !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function Ms(e, t) {
  const { exact: n, fetching: r, predicate: l, mutationKey: i } = e;
  if ($l(i)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Dt(t.options.mutationKey) !== Dt(i)) return !1;
    } else if (!El(t.options.mutationKey, i)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (l && !l(t))
  );
}
function mu(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Dt)(e);
}
function Dt(e) {
  return JSON.stringify(e, (t, n) =>
    vo(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, l) => ((r[l] = n[l]), r), {})
      : n
  );
}
function El(e, t) {
  return df(e, t);
}
function df(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some((n) => !df(e[n], t[n]))
    : !1;
}
function pf(e, t) {
  if (e === t) return e;
  const n = js(e) && js(t);
  if (n || (vo(e) && vo(t))) {
    const r = n ? e.length : Object.keys(e).length,
      l = n ? t : Object.keys(t),
      i = l.length,
      o = n ? [] : {};
    let u = 0;
    for (let s = 0; s < i; s++) {
      const a = n ? s : l[s];
      (o[a] = pf(e[a], t[a])), o[a] === e[a] && u++;
    }
    return r === i && u === r ? e : o;
  }
  return t;
}
function Is(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (const n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function js(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function vo(e) {
  if (!Us(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const n = t.prototype;
  return !(!Us(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Us(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function $l(e) {
  return Array.isArray(e);
}
function hf(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Qs(e) {
  hf(0).then(e);
}
function bh() {
  if (typeof AbortController == "function") return new AbortController();
}
function yo(e, t, n) {
  return n.isDataEqual != null && n.isDataEqual(e, t)
    ? e
    : typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? pf(e, t)
    : t;
}
class em extends vr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!ur && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("visibilitychange", n, !1),
            window.addEventListener("focus", n, !1),
            () => {
              window.removeEventListener("visibilitychange", n),
                window.removeEventListener("focus", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
      }));
  }
  setFocused(t) {
    (this.focused = t), t && this.onFocus();
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    return typeof this.focused == "boolean"
      ? this.focused
      : typeof document > "u"
      ? !0
      : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }
}
const Cl = new em();
class tm extends vr {
  constructor() {
    super(),
      (this.setup = (t) => {
        if (!ur && window.addEventListener) {
          const n = () => t();
          return (
            window.addEventListener("online", n, !1),
            window.addEventListener("offline", n, !1),
            () => {
              window.removeEventListener("online", n),
                window.removeEventListener("offline", n);
            }
          );
        }
      });
  }
  onSubscribe() {
    this.cleanup || this.setEventListener(this.setup);
  }
  onUnsubscribe() {
    if (!this.hasListeners()) {
      var t;
      (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
    }
  }
  setEventListener(t) {
    var n;
    (this.setup = t),
      (n = this.cleanup) == null || n.call(this),
      (this.cleanup = t((r) => {
        typeof r == "boolean" ? this.setOnline(r) : this.onOnline();
      }));
  }
  setOnline(t) {
    (this.online = t), t && this.onOnline();
  }
  onOnline() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isOnline() {
    return typeof this.online == "boolean"
      ? this.online
      : typeof navigator > "u" || typeof navigator.onLine > "u"
      ? !0
      : navigator.onLine;
  }
}
const xl = new tm();
function nm(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Bl(e) {
  return (e != null ? e : "online") === "online" ? xl.isOnline() : !0;
}
class mf {
  constructor(t) {
    (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
}
function Zr(e) {
  return e instanceof mf;
}
function vf(e) {
  let t = !1,
    n = 0,
    r = !1,
    l,
    i,
    o;
  const u = new Promise((R, d) => {
      (i = R), (o = d);
    }),
    s = (R) => {
      r || (v(new mf(R)), e.abort == null || e.abort());
    },
    a = () => {
      t = !0;
    },
    p = () => {
      t = !1;
    },
    m = () => !Cl.isFocused() || (e.networkMode !== "always" && !xl.isOnline()),
    h = (R) => {
      r ||
        ((r = !0),
        e.onSuccess == null || e.onSuccess(R),
        l == null || l(),
        i(R));
    },
    v = (R) => {
      r ||
        ((r = !0), e.onError == null || e.onError(R), l == null || l(), o(R));
    },
    S = () =>
      new Promise((R) => {
        (l = (d) => {
          if (r || !m()) return R(d);
        }),
          e.onPause == null || e.onPause();
      }).then(() => {
        (l = void 0), r || e.onContinue == null || e.onContinue();
      }),
    k = () => {
      if (r) return;
      let R;
      try {
        R = e.fn();
      } catch (d) {
        R = Promise.reject(d);
      }
      Promise.resolve(R)
        .then(h)
        .catch((d) => {
          var c, f;
          if (r) return;
          const y = (c = e.retry) != null ? c : 3,
            P = (f = e.retryDelay) != null ? f : nm,
            w = typeof P == "function" ? P(n, d) : P,
            C =
              y === !0 ||
              (typeof y == "number" && n < y) ||
              (typeof y == "function" && y(n, d));
          if (t || !C) {
            v(d);
            return;
          }
          n++,
            e.onFail == null || e.onFail(n, d),
            hf(w)
              .then(() => {
                if (m()) return S();
              })
              .then(() => {
                t ? v(d) : k();
              });
        });
    };
  return (
    Bl(e.networkMode) ? k() : S().then(k),
    {
      promise: u,
      cancel: s,
      continue: () => {
        l == null || l();
      },
      cancelRetry: a,
      continueRetry: p,
    }
  );
}
const vu = console;
function rm() {
  let e = [],
    t = 0,
    n = (p) => {
      p();
    },
    r = (p) => {
      p();
    };
  const l = (p) => {
      let m;
      t++;
      try {
        m = p();
      } finally {
        t--, t || u();
      }
      return m;
    },
    i = (p) => {
      t
        ? e.push(p)
        : Qs(() => {
            n(p);
          });
    },
    o =
      (p) =>
      (...m) => {
        i(() => {
          p(...m);
        });
      },
    u = () => {
      const p = e;
      (e = []),
        p.length &&
          Qs(() => {
            r(() => {
              p.forEach((m) => {
                n(m);
              });
            });
          });
    };
  return {
    batch: l,
    batchCalls: o,
    schedule: i,
    setNotifyFunction: (p) => {
      n = p;
    },
    setBatchNotifyFunction: (p) => {
      r = p;
    },
  };
}
const G = rm();
class yf {
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(),
      mo(this.cacheTime) &&
        (this.gcTimeout = setTimeout(() => {
          this.optionalRemove();
        }, this.cacheTime));
  }
  updateCacheTime(t) {
    this.cacheTime = Math.max(
      this.cacheTime || 0,
      t != null ? t : ur ? 1 / 0 : 5 * 60 * 1e3
    );
  }
  clearGcTimeout() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
  }
}
class lm extends yf {
  constructor(t) {
    super(),
      (this.abortSignalConsumed = !1),
      (this.defaultOptions = t.defaultOptions),
      this.setOptions(t.options),
      (this.observers = []),
      (this.cache = t.cache),
      (this.logger = t.logger || vu),
      (this.queryKey = t.queryKey),
      (this.queryHash = t.queryHash),
      (this.initialState = t.state || im(this.options)),
      (this.state = this.initialState),
      (this.meta = t.meta);
  }
  setOptions(t) {
    (this.options = {
      ...this.defaultOptions,
      ...t,
    }),
      (this.meta = t == null ? void 0 : t.meta),
      this.updateCacheTime(this.options.cacheTime);
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === "idle" &&
      this.cache.remove(this);
  }
  setData(t, n) {
    const r = yo(this.state.data, t, this.options);
    return (
      this.dispatch({
        data: r,
        type: "success",
        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
        manual: n == null ? void 0 : n.manual,
      }),
      r
    );
  }
  setState(t, n) {
    this.dispatch({
      type: "setState",
      state: t,
      setStateOptions: n,
    });
  }
  cancel(t) {
    var n;
    const r = this.promise;
    return (
      (n = this.retryer) == null || n.cancel(t),
      r ? r.then(Pe).catch(Pe) : Promise.resolve()
    );
  }
  destroy() {
    super.destroy(),
      this.cancel({
        silent: !0,
      });
  }
  reset() {
    this.destroy(), this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((t) => t.options.enabled !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      this.observers.some((t) => t.getCurrentResult().isStale)
    );
  }
  isStaleByTime(t = 0) {
    return (
      this.state.isInvalidated ||
      !this.state.dataUpdatedAt ||
      !ff(this.state.dataUpdatedAt, t)
    );
  }
  onFocus() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    n &&
      n.refetch({
        cancelRefetch: !1,
      }),
      (t = this.retryer) == null || t.continue();
  }
  onOnline() {
    var t;
    const n = this.observers.find((r) => r.shouldFetchOnReconnect());
    n &&
      n.refetch({
        cancelRefetch: !1,
      }),
      (t = this.retryer) == null || t.continue();
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.cache.notify({
        type: "observerAdded",
        query: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    this.observers.indexOf(t) !== -1 &&
      ((this.observers = this.observers.filter((n) => n !== t)),
      this.observers.length ||
        (this.retryer &&
          (this.abortSignalConsumed
            ? this.retryer.cancel({
                revert: !0,
              })
            : this.retryer.cancelRetry()),
        this.scheduleGc()),
      this.cache.notify({
        type: "observerRemoved",
        query: this,
        observer: t,
      }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated ||
      this.dispatch({
        type: "invalidate",
      });
  }
  fetch(t, n) {
    var r, l;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
        this.cancel({
          silent: !0,
        });
      else if (this.promise) {
        var i;
        return (i = this.retryer) == null || i.continueRetry(), this.promise;
      }
    }
    if ((t && this.setOptions(t), !this.options.queryFn)) {
      const v = this.observers.find((S) => S.options.queryFn);
      v && this.setOptions(v.options);
    }
    Array.isArray(this.options.queryKey);
    const o = bh(),
      u = {
        queryKey: this.queryKey,
        pageParam: void 0,
        meta: this.meta,
      },
      s = (v) => {
        Object.defineProperty(v, "signal", {
          enumerable: !0,
          get: () => {
            if (o) return (this.abortSignalConsumed = !0), o.signal;
          },
        });
      };
    s(u);
    const a = () =>
        this.options.queryFn
          ? ((this.abortSignalConsumed = !1), this.options.queryFn(u))
          : Promise.reject("Missing queryFn"),
      p = {
        fetchOptions: n,
        options: this.options,
        queryKey: this.queryKey,
        state: this.state,
        fetchFn: a,
        meta: this.meta,
      };
    if (
      (s(p),
      (r = this.options.behavior) == null || r.onFetch(p),
      (this.revertState = this.state),
      this.state.fetchStatus === "idle" ||
        this.state.fetchMeta !==
          ((l = p.fetchOptions) == null ? void 0 : l.meta))
    ) {
      var m;
      this.dispatch({
        type: "fetch",
        meta: (m = p.fetchOptions) == null ? void 0 : m.meta,
      });
    }
    const h = (v) => {
      if (
        ((Zr(v) && v.silent) ||
          this.dispatch({
            type: "error",
            error: v,
          }),
        !Zr(v))
      ) {
        var S, k;
        (S = (k = this.cache.config).onError) == null || S.call(k, v, this);
      }
      this.isFetchingOptimistic || this.scheduleGc(),
        (this.isFetchingOptimistic = !1);
    };
    return (
      (this.retryer = vf({
        fn: p.fetchFn,
        abort: o == null ? void 0 : o.abort.bind(o),
        onSuccess: (v) => {
          var S, k;
          if (typeof v > "u") {
            h(new Error("Query data cannot be undefined"));
            return;
          }
          this.setData(v),
            (S = (k = this.cache.config).onSuccess) == null ||
              S.call(k, v, this),
            this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
        },
        onError: h,
        onFail: () => {
          this.dispatch({
            type: "failed",
          });
        },
        onPause: () => {
          this.dispatch({
            type: "pause",
          });
        },
        onContinue: () => {
          this.dispatch({
            type: "continue",
          });
        },
        retry: p.options.retry,
        retryDelay: p.options.retryDelay,
        networkMode: p.options.networkMode,
      })),
      (this.promise = this.retryer.promise),
      this.promise
    );
  }
  dispatch(t) {
    const n = (r) => {
      var l, i;
      switch (t.type) {
        case "failed":
          return {
            ...r,
            fetchFailureCount: r.fetchFailureCount + 1,
          };
        case "pause":
          return {
            ...r,
            fetchStatus: "paused",
          };
        case "continue":
          return {
            ...r,
            fetchStatus: "fetching",
          };
        case "fetch":
          return {
            ...r,
            fetchFailureCount: 0,
            fetchMeta: (l = t.meta) != null ? l : null,
            fetchStatus: Bl(this.options.networkMode) ? "fetching" : "paused",
            ...(!r.dataUpdatedAt && {
              error: null,
              status: "loading",
            }),
          };
        case "success":
          return {
            ...r,
            data: t.data,
            dataUpdateCount: r.dataUpdateCount + 1,
            dataUpdatedAt: (i = t.dataUpdatedAt) != null ? i : Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success",
            ...(!t.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
            }),
          };
        case "error":
          const o = t.error;
          return Zr(o) && o.revert && this.revertState
            ? {
                ...this.revertState,
              }
            : {
                ...r,
                error: o,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchStatus: "idle",
                status: "error",
              };
        case "invalidate":
          return {
            ...r,
            isInvalidated: !0,
          };
        case "setState":
          return {
            ...r,
            ...t.state,
          };
      }
    };
    (this.state = n(this.state)),
      G.batch(() => {
        this.observers.forEach((r) => {
          r.onQueryUpdate(t);
        }),
          this.cache.notify({
            query: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function im(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r =
      typeof e.initialData < "u"
        ? typeof e.initialDataUpdatedAt == "function"
          ? e.initialDataUpdatedAt()
          : e.initialDataUpdatedAt
        : 0,
    l = typeof t < "u";
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: l ? (r != null ? r : Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchMeta: null,
    isInvalidated: !1,
    status: l ? "success" : "loading",
    fetchStatus: "idle",
  };
}
class om extends vr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.queries = []),
      (this.queriesMap = {});
  }
  build(t, n, r) {
    var l;
    const i = n.queryKey,
      o = (l = n.queryHash) != null ? l : mu(i, n);
    let u = this.get(o);
    return (
      u ||
        ((u = new lm({
          cache: this,
          logger: t.getLogger(),
          queryKey: i,
          queryHash: o,
          options: t.defaultQueryOptions(n),
          state: r,
          defaultOptions: t.getQueryDefaults(i),
          meta: n.meta,
        })),
        this.add(u)),
      u
    );
  }
  add(t) {
    this.queriesMap[t.queryHash] ||
      ((this.queriesMap[t.queryHash] = t),
      this.queries.push(t),
      this.notify({
        type: "added",
        query: t,
      }));
  }
  remove(t) {
    const n = this.queriesMap[t.queryHash];
    n &&
      (t.destroy(),
      (this.queries = this.queries.filter((r) => r !== t)),
      n === t && delete this.queriesMap[t.queryHash],
      this.notify({
        type: "removed",
        query: t,
      }));
  }
  clear() {
    G.batch(() => {
      this.queries.forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return this.queriesMap[t];
  }
  getAll() {
    return this.queries;
  }
  find(t, n) {
    const [r] = ot(t, n);
    return (
      typeof r.exact > "u" && (r.exact = !0), this.queries.find((l) => Ds(r, l))
    );
  }
  findAll(t, n) {
    const [r] = ot(t, n);
    return Object.keys(r).length > 0
      ? this.queries.filter((l) => Ds(r, l))
      : this.queries;
  }
  notify(t) {
    G.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    G.batch(() => {
      this.queries.forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    G.batch(() => {
      this.queries.forEach((t) => {
        t.onOnline();
      });
    });
  }
}
class um extends yf {
  constructor(t) {
    super(),
      (this.options = {
        ...t.defaultOptions,
        ...t.options,
      }),
      (this.mutationId = t.mutationId),
      (this.mutationCache = t.mutationCache),
      (this.logger = t.logger || vu),
      (this.observers = []),
      (this.state = t.state || sm()),
      (this.meta = t.meta),
      this.updateCacheTime(this.options.cacheTime),
      this.scheduleGc();
  }
  setState(t) {
    this.dispatch({
      type: "setState",
      state: t,
    });
  }
  addObserver(t) {
    this.observers.indexOf(t) === -1 &&
      (this.observers.push(t),
      this.clearGcTimeout(),
      this.mutationCache.notify({
        type: "observerAdded",
        mutation: this,
        observer: t,
      }));
  }
  removeObserver(t) {
    (this.observers = this.observers.filter((n) => n !== t)),
      this.scheduleGc(),
      this.mutationCache.notify({
        type: "observerRemoved",
        mutation: this,
        observer: t,
      });
  }
  optionalRemove() {
    this.observers.length ||
      (this.state.status === "loading"
        ? this.scheduleGc()
        : this.mutationCache.remove(this));
  }
  continue() {
    return this.retryer
      ? (this.retryer.continue(), this.retryer.promise)
      : this.execute();
  }
  async execute() {
    const t = () => {
        var f;
        return (
          (this.retryer = vf({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(this.state.variables)
                : Promise.reject("No mutationFn found"),
            onFail: () => {
              this.dispatch({
                type: "failed",
              });
            },
            onPause: () => {
              this.dispatch({
                type: "pause",
              });
            },
            onContinue: () => {
              this.dispatch({
                type: "continue",
              });
            },
            retry: (f = this.options.retry) != null ? f : 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
          })),
          this.retryer.promise
        );
      },
      n = this.state.status === "loading";
    try {
      var r, l, i, o, u, s;
      if (!n) {
        var a, p, m, h;
        this.dispatch({
          type: "loading",
          variables: this.options.variables,
        }),
          (a = (p = this.mutationCache.config).onMutate) == null ||
            a.call(p, this.state.variables, this);
        const y = await ((m = (h = this.options).onMutate) == null
          ? void 0
          : m.call(h, this.state.variables));
        y !== this.state.context &&
          this.dispatch({
            type: "loading",
            context: y,
            variables: this.state.variables,
          });
      }
      const f = await t();
      return (
        (r = (l = this.mutationCache.config).onSuccess) == null ||
          r.call(l, f, this.state.variables, this.state.context, this),
        await ((i = (o = this.options).onSuccess) == null
          ? void 0
          : i.call(o, f, this.state.variables, this.state.context)),
        await ((u = (s = this.options).onSettled) == null
          ? void 0
          : u.call(s, f, null, this.state.variables, this.state.context)),
        this.dispatch({
          type: "success",
          data: f,
        }),
        f
      );
    } catch (f) {
      try {
        var v, S, k, R, d, c;
        throw (
          ((v = (S = this.mutationCache.config).onError) == null ||
            v.call(S, f, this.state.variables, this.state.context, this),
          await ((k = (R = this.options).onError) == null
            ? void 0
            : k.call(R, f, this.state.variables, this.state.context)),
          await ((d = (c = this.options).onSettled) == null
            ? void 0
            : d.call(c, void 0, f, this.state.variables, this.state.context)),
          f)
        );
      } finally {
        this.dispatch({
          type: "error",
          error: f,
        });
      }
    }
  }
  dispatch(t) {
    const n = (r) => {
      switch (t.type) {
        case "failed":
          return {
            ...r,
            failureCount: r.failureCount + 1,
          };
        case "pause":
          return {
            ...r,
            isPaused: !0,
          };
        case "continue":
          return {
            ...r,
            isPaused: !1,
          };
        case "loading":
          return {
            ...r,
            context: t.context,
            data: void 0,
            error: null,
            isPaused: !Bl(this.options.networkMode),
            status: "loading",
            variables: t.variables,
          };
        case "success":
          return {
            ...r,
            data: t.data,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: t.error,
            failureCount: r.failureCount + 1,
            isPaused: !1,
            status: "error",
          };
        case "setState":
          return {
            ...r,
            ...t.state,
          };
      }
    };
    (this.state = n(this.state)),
      G.batch(() => {
        this.observers.forEach((r) => {
          r.onMutationUpdate(t);
        }),
          this.mutationCache.notify({
            mutation: this,
            type: "updated",
            action: t,
          });
      });
  }
}
function sm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
class am extends vr {
  constructor(t) {
    super(),
      (this.config = t || {}),
      (this.mutations = []),
      (this.mutationId = 0);
  }
  build(t, n, r) {
    const l = new um({
      mutationCache: this,
      logger: t.getLogger(),
      mutationId: ++this.mutationId,
      options: t.defaultMutationOptions(n),
      state: r,
      defaultOptions: n.mutationKey
        ? t.getMutationDefaults(n.mutationKey)
        : void 0,
      meta: n.meta,
    });
    return this.add(l), l;
  }
  add(t) {
    this.mutations.push(t),
      this.notify({
        type: "added",
        mutation: t,
      });
  }
  remove(t) {
    (this.mutations = this.mutations.filter((n) => n !== t)),
      this.notify({
        type: "removed",
        mutation: t,
      });
  }
  clear() {
    G.batch(() => {
      this.mutations.forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(t) {
    return (
      typeof t.exact > "u" && (t.exact = !0),
      this.mutations.find((n) => Ms(t, n))
    );
  }
  findAll(t) {
    return this.mutations.filter((n) => Ms(t, n));
  }
  notify(t) {
    G.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.mutations.filter((n) => n.state.isPaused);
    return G.batch(() =>
      t.reduce(
        (n, r) => n.then(() => r.continue().catch(Pe)),
        Promise.resolve()
      )
    );
  }
}
function cm() {
  return {
    onFetch: (e) => {
      e.fetchFn = () => {
        var t, n, r, l, i, o;
        const u =
            (t = e.fetchOptions) == null || (n = t.meta) == null
              ? void 0
              : n.refetchPage,
          s =
            (r = e.fetchOptions) == null || (l = r.meta) == null
              ? void 0
              : l.fetchMore,
          a = s == null ? void 0 : s.pageParam,
          p = (s == null ? void 0 : s.direction) === "forward",
          m = (s == null ? void 0 : s.direction) === "backward",
          h = ((i = e.state.data) == null ? void 0 : i.pages) || [],
          v = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
        let S = v,
          k = !1;
        const R = (w) => {
            Object.defineProperty(w, "signal", {
              enumerable: !0,
              get: () => {
                var C;
                if ((C = e.signal) != null && C.aborted) k = !0;
                else {
                  var g;
                  (g = e.signal) == null ||
                    g.addEventListener("abort", () => {
                      k = !0;
                    });
                }
                return e.signal;
              },
            });
          },
          d = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
          c = (w, C, g, N) => (
            (S = N ? [C, ...S] : [...S, C]), N ? [g, ...w] : [...w, g]
          ),
          f = (w, C, g, N) => {
            if (k) return Promise.reject("Cancelled");
            if (typeof g > "u" && !C && w.length) return Promise.resolve(w);
            const T = {
              queryKey: e.queryKey,
              pageParam: g,
              meta: e.meta,
            };
            R(T);
            const I = d(T);
            return Promise.resolve(I).then((te) => c(w, g, te, N));
          };
        let y;
        if (!h.length) y = f([]);
        else if (p) {
          const w = typeof a < "u",
            C = w ? a : As(e.options, h);
          y = f(h, w, C);
        } else if (m) {
          const w = typeof a < "u",
            C = w ? a : fm(e.options, h);
          y = f(h, w, C, !0);
        } else {
          S = [];
          const w = typeof e.options.getNextPageParam > "u";
          y = (u && h[0] ? u(h[0], 0, h) : !0)
            ? f([], w, v[0])
            : Promise.resolve(c([], v[0], h[0]));
          for (let g = 1; g < h.length; g++)
            y = y.then((N) => {
              if (u && h[g] ? u(h[g], g, h) : !0) {
                const I = w ? v[g] : As(e.options, N);
                return f(N, w, I);
              }
              return Promise.resolve(c(N, v[g], h[g]));
            });
        }
        return y.then((w) => ({
          pages: w,
          pageParams: S,
        }));
      };
    },
  };
}
function As(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function fm(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
class dm {
  constructor(t = {}) {
    (this.queryCache = t.queryCache || new om()),
      (this.mutationCache = t.mutationCache || new am()),
      (this.logger = t.logger || vu),
      (this.defaultOptions = t.defaultOptions || {}),
      (this.queryDefaults = []),
      (this.mutationDefaults = []);
  }
  mount() {
    (this.unsubscribeFocus = Cl.subscribe(() => {
      Cl.isFocused() &&
        (this.resumePausedMutations(), this.queryCache.onFocus());
    })),
      (this.unsubscribeOnline = xl.subscribe(() => {
        xl.isOnline() &&
          (this.resumePausedMutations(), this.queryCache.onOnline());
      }));
  }
  unmount() {
    var t, n;
    (t = this.unsubscribeFocus) == null || t.call(this),
      (n = this.unsubscribeOnline) == null || n.call(this);
  }
  isFetching(t, n) {
    const [r] = ot(t, n);
    return (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length;
  }
  isMutating(t) {
    return this.mutationCache.findAll({
      ...t,
      fetching: !0,
    }).length;
  }
  getQueryData(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state.data;
  }
  getQueriesData(t) {
    return this.getQueryCache()
      .findAll(t)
      .map(({ queryKey: n, state: r }) => {
        const l = r.data;
        return [n, l];
      });
  }
  setQueryData(t, n, r) {
    const l = this.queryCache.find(t),
      i = l == null ? void 0 : l.state.data,
      o = Jh(n, i);
    if (typeof o > "u") return;
    const u = Xr(t),
      s = this.defaultQueryOptions(u);
    return this.queryCache.build(this, s).setData(o, {
      ...r,
      manual: !0,
    });
  }
  setQueriesData(t, n, r) {
    return G.batch(() =>
      this.getQueryCache()
        .findAll(t)
        .map(({ queryKey: l }) => [l, this.setQueryData(l, n, r)])
    );
  }
  getQueryState(t, n) {
    var r;
    return (r = this.queryCache.find(t, n)) == null ? void 0 : r.state;
  }
  removeQueries(t, n) {
    const [r] = ot(t, n),
      l = this.queryCache;
    G.batch(() => {
      l.findAll(r).forEach((i) => {
        l.remove(i);
      });
    });
  }
  resetQueries(t, n, r) {
    const [l, i] = ot(t, n, r),
      o = this.queryCache,
      u = {
        type: "active",
        ...l,
      };
    return G.batch(
      () => (
        o.findAll(l).forEach((s) => {
          s.reset();
        }),
        this.refetchQueries(u, i)
      )
    );
  }
  cancelQueries(t, n, r) {
    const [l, i = {}] = ot(t, n, r);
    typeof i.revert > "u" && (i.revert = !0);
    const o = G.batch(() => this.queryCache.findAll(l).map((u) => u.cancel(i)));
    return Promise.all(o).then(Pe).catch(Pe);
  }
  invalidateQueries(t, n, r) {
    const [l, i] = ot(t, n, r);
    return G.batch(() => {
      var o, u;
      if (
        (this.queryCache.findAll(l).forEach((a) => {
          a.invalidate();
        }),
        l.refetchType === "none")
      )
        return Promise.resolve();
      const s = {
        ...l,
        type:
          (o = (u = l.refetchType) != null ? u : l.type) != null ? o : "active",
      };
      return this.refetchQueries(s, i);
    });
  }
  refetchQueries(t, n, r) {
    const [l, i] = ot(t, n, r),
      o = G.batch(() =>
        this.queryCache
          .findAll(l)
          .filter((s) => !s.isDisabled())
          .map((s) => {
            var a;
            return s.fetch(void 0, {
              ...i,
              cancelRefetch:
                (a = i == null ? void 0 : i.cancelRefetch) != null ? a : !0,
              meta: {
                refetchPage: l.refetchPage,
              },
            });
          })
      );
    let u = Promise.all(o).then(Pe);
    return (i != null && i.throwOnError) || (u = u.catch(Pe)), u;
  }
  fetchQuery(t, n, r) {
    const l = Xr(t, n, r),
      i = this.defaultQueryOptions(l);
    typeof i.retry > "u" && (i.retry = !1);
    const o = this.queryCache.build(this, i);
    return o.isStaleByTime(i.staleTime)
      ? o.fetch(i)
      : Promise.resolve(o.state.data);
  }
  prefetchQuery(t, n, r) {
    return this.fetchQuery(t, n, r).then(Pe).catch(Pe);
  }
  fetchInfiniteQuery(t, n, r) {
    const l = Xr(t, n, r);
    return (l.behavior = cm()), this.fetchQuery(l);
  }
  prefetchInfiniteQuery(t, n, r) {
    return this.fetchInfiniteQuery(t, n, r).then(Pe).catch(Pe);
  }
  resumePausedMutations() {
    return this.mutationCache.resumePausedMutations();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getLogger() {
    return this.logger;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(t) {
    this.defaultOptions = t;
  }
  setQueryDefaults(t, n) {
    const r = this.queryDefaults.find((l) => Dt(t) === Dt(l.queryKey));
    r
      ? (r.defaultOptions = n)
      : this.queryDefaults.push({
          queryKey: t,
          defaultOptions: n,
        });
  }
  getQueryDefaults(t) {
    if (!t) return;
    const n = this.queryDefaults.find((r) => El(t, r.queryKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  setMutationDefaults(t, n) {
    const r = this.mutationDefaults.find((l) => Dt(t) === Dt(l.mutationKey));
    r
      ? (r.defaultOptions = n)
      : this.mutationDefaults.push({
          mutationKey: t,
          defaultOptions: n,
        });
  }
  getMutationDefaults(t) {
    if (!t) return;
    const n = this.mutationDefaults.find((r) => El(t, r.mutationKey));
    return n == null ? void 0 : n.defaultOptions;
  }
  defaultQueryOptions(t) {
    if (t != null && t._defaulted) return t;
    const n = {
      ...this.defaultOptions.queries,
      ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
      ...t,
      _defaulted: !0,
    };
    return (
      !n.queryHash && n.queryKey && (n.queryHash = mu(n.queryKey, n)),
      typeof n.refetchOnReconnect > "u" &&
        (n.refetchOnReconnect = n.networkMode !== "always"),
      typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense),
      n
    );
  }
  defaultMutationOptions(t) {
    return t != null && t._defaulted
      ? t
      : {
          ...this.defaultOptions.mutations,
          ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
          ...t,
          _defaulted: !0,
        };
  }
  clear() {
    this.queryCache.clear(), this.mutationCache.clear();
  }
}
class pm extends vr {
  constructor(t, n) {
    super(),
      (this.client = t),
      (this.options = n),
      (this.trackedProps = new Set()),
      (this.selectError = null),
      this.bindMethods(),
      this.setOptions(n);
  }
  bindMethods() {
    (this.remove = this.remove.bind(this)),
      (this.refetch = this.refetch.bind(this));
  }
  onSubscribe() {
    this.listeners.length === 1 &&
      (this.currentQuery.addObserver(this),
      $s(this.currentQuery, this.options) && this.executeFetch(),
      this.updateTimers());
  }
  onUnsubscribe() {
    this.listeners.length || this.destroy();
  }
  shouldFetchOnReconnect() {
    return go(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return go(
      this.currentQuery,
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    (this.listeners = []),
      this.clearStaleTimeout(),
      this.clearRefetchInterval(),
      this.currentQuery.removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options,
      l = this.currentQuery;
    if (
      ((this.options = this.client.defaultQueryOptions(t)),
      Is(r, this.options) ||
        this.client.getQueryCache().notify({
          type: "observerOptionsUpdated",
          query: this.currentQuery,
          observer: this,
        }),
      typeof this.options.enabled < "u" &&
        typeof this.options.enabled != "boolean")
    )
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = r.queryKey),
      this.updateQuery();
    const i = this.hasListeners();
    i && Bs(this.currentQuery, l, this.options, r) && this.executeFetch(),
      this.updateResult(n),
      i &&
        (this.currentQuery !== l ||
          this.options.enabled !== r.enabled ||
          this.options.staleTime !== r.staleTime) &&
        this.updateStaleTimeout();
    const o = this.computeRefetchInterval();
    i &&
      (this.currentQuery !== l ||
        this.options.enabled !== r.enabled ||
        o !== this.currentRefetchInterval) &&
      this.updateRefetchInterval(o);
  }
  getOptimisticResult(t) {
    const n = this.client.getQueryCache().build(this.client, t);
    return this.createResult(n, t);
  }
  getCurrentResult() {
    return this.currentResult;
  }
  trackResult(t) {
    const n = {};
    return (
      Object.keys(t).forEach((r) => {
        Object.defineProperty(n, r, {
          configurable: !1,
          enumerable: !0,
          get: () => (this.trackedProps.add(r), t[r]),
        });
      }),
      n
    );
  }
  getCurrentQuery() {
    return this.currentQuery;
  }
  remove() {
    this.client.getQueryCache().remove(this.currentQuery);
  }
  refetch({ refetchPage: t, ...n } = {}) {
    return this.fetch({
      ...n,
      meta: {
        refetchPage: t,
      },
    });
  }
  fetchOptimistic(t) {
    const n = this.client.defaultQueryOptions(t),
      r = this.client.getQueryCache().build(this.client, n);
    return (
      (r.isFetchingOptimistic = !0),
      r.fetch().then(() => this.createResult(r, n))
    );
  }
  fetch(t) {
    var n;
    return this.executeFetch({
      ...t,
      cancelRefetch: (n = t.cancelRefetch) != null ? n : !0,
    }).then(() => (this.updateResult(), this.currentResult));
  }
  executeFetch(t) {
    this.updateQuery();
    let n = this.currentQuery.fetch(this.options, t);
    return (t != null && t.throwOnError) || (n = n.catch(Pe)), n;
  }
  updateStaleTimeout() {
    if (
      (this.clearStaleTimeout(),
      ur || this.currentResult.isStale || !mo(this.options.staleTime))
    )
      return;
    const n = ff(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
    this.staleTimeoutId = setTimeout(() => {
      this.currentResult.isStale || this.updateResult();
    }, n);
  }
  computeRefetchInterval() {
    var t;
    return typeof this.options.refetchInterval == "function"
      ? this.options.refetchInterval(this.currentResult.data, this.currentQuery)
      : (t = this.options.refetchInterval) != null
      ? t
      : !1;
  }
  updateRefetchInterval(t) {
    this.clearRefetchInterval(),
      (this.currentRefetchInterval = t),
      !(
        ur ||
        this.options.enabled === !1 ||
        !mo(this.currentRefetchInterval) ||
        this.currentRefetchInterval === 0
      ) &&
        (this.refetchIntervalId = setInterval(() => {
          (this.options.refetchIntervalInBackground || Cl.isFocused()) &&
            this.executeFetch();
        }, this.currentRefetchInterval));
  }
  updateTimers() {
    this.updateStaleTimeout(),
      this.updateRefetchInterval(this.computeRefetchInterval());
  }
  clearStaleTimeout() {
    this.staleTimeoutId &&
      (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
  }
  clearRefetchInterval() {
    this.refetchIntervalId &&
      (clearInterval(this.refetchIntervalId),
      (this.refetchIntervalId = void 0));
  }
  createResult(t, n) {
    const r = this.currentQuery,
      l = this.options,
      i = this.currentResult,
      o = this.currentResultState,
      u = this.currentResultOptions,
      s = t !== r,
      a = s ? t.state : this.currentQueryInitialState,
      p = s ? this.currentResult : this.previousQueryResult,
      { state: m } = t;
    let {
        dataUpdatedAt: h,
        error: v,
        errorUpdatedAt: S,
        fetchStatus: k,
        status: R,
      } = m,
      d = !1,
      c = !1,
      f;
    if (n._optimisticResults) {
      const w = this.hasListeners(),
        C = !w && $s(t, n),
        g = w && Bs(t, r, n, l);
      (C || g) &&
        ((k = Bl(t.options.networkMode) ? "fetching" : "paused"),
        h || (R = "loading")),
        n._optimisticResults === "isRestoring" && (k = "idle");
    }
    if (
      n.keepPreviousData &&
      !m.dataUpdateCount &&
      p != null &&
      p.isSuccess &&
      R !== "error"
    )
      (f = p.data), (h = p.dataUpdatedAt), (R = p.status), (d = !0);
    else if (n.select && typeof m.data < "u")
      if (
        i &&
        m.data === (o == null ? void 0 : o.data) &&
        n.select === this.selectFn
      )
        f = this.selectResult;
      else
        try {
          (this.selectFn = n.select),
            (f = n.select(m.data)),
            (f = yo(i == null ? void 0 : i.data, f, n)),
            (this.selectResult = f),
            (this.selectError = null);
        } catch (w) {
          this.selectError = w;
        }
    else f = m.data;
    if (typeof n.placeholderData < "u" && typeof f > "u" && R === "loading") {
      let w;
      if (
        i != null &&
        i.isPlaceholderData &&
        n.placeholderData === (u == null ? void 0 : u.placeholderData)
      )
        w = i.data;
      else if (
        ((w =
          typeof n.placeholderData == "function"
            ? n.placeholderData()
            : n.placeholderData),
        n.select && typeof w < "u")
      )
        try {
          (w = n.select(w)),
            (w = yo(i == null ? void 0 : i.data, w, n)),
            (this.selectError = null);
        } catch (C) {
          this.selectError = C;
        }
      typeof w < "u" && ((R = "success"), (f = w), (c = !0));
    }
    this.selectError &&
      ((v = this.selectError),
      (f = this.selectResult),
      (S = Date.now()),
      (R = "error"));
    const y = k === "fetching";
    return {
      status: R,
      fetchStatus: k,
      isLoading: R === "loading",
      isSuccess: R === "success",
      isError: R === "error",
      data: f,
      dataUpdatedAt: h,
      error: v,
      errorUpdatedAt: S,
      failureCount: m.fetchFailureCount,
      errorUpdateCount: m.errorUpdateCount,
      isFetched: m.dataUpdateCount > 0 || m.errorUpdateCount > 0,
      isFetchedAfterMount:
        m.dataUpdateCount > a.dataUpdateCount ||
        m.errorUpdateCount > a.errorUpdateCount,
      isFetching: y,
      isRefetching: y && R !== "loading",
      isLoadingError: R === "error" && m.dataUpdatedAt === 0,
      isPaused: k === "paused",
      isPlaceholderData: c,
      isPreviousData: d,
      isRefetchError: R === "error" && m.dataUpdatedAt !== 0,
      isStale: yu(t, n),
      refetch: this.refetch,
      remove: this.remove,
    };
  }
  updateResult(t) {
    const n = this.currentResult,
      r = this.createResult(this.currentQuery, this.options);
    if (
      ((this.currentResultState = this.currentQuery.state),
      (this.currentResultOptions = this.options),
      Is(r, n))
    )
      return;
    this.currentResult = r;
    const l = {
        cache: !0,
      },
      i = () => {
        if (!n) return !0;
        const { notifyOnChangeProps: o } = this.options;
        if (o === "all" || (!o && !this.trackedProps.size)) return !0;
        const u = new Set(o != null ? o : this.trackedProps);
        return (
          this.options.useErrorBoundary && u.add("error"),
          Object.keys(this.currentResult).some((s) => {
            const a = s;
            return this.currentResult[a] !== n[a] && u.has(a);
          })
        );
      };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (l.listeners = !0),
      this.notify({
        ...l,
        ...t,
      });
  }
  updateQuery() {
    const t = this.client.getQueryCache().build(this.client, this.options);
    if (t === this.currentQuery) return;
    const n = this.currentQuery;
    (this.currentQuery = t),
      (this.currentQueryInitialState = t.state),
      (this.previousQueryResult = this.currentResult),
      this.hasListeners() &&
        (n == null || n.removeObserver(this), t.addObserver(this));
  }
  onQueryUpdate(t) {
    const n = {};
    t.type === "success"
      ? (n.onSuccess = !t.manual)
      : t.type === "error" && !Zr(t.error) && (n.onError = !0),
      this.updateResult(n),
      this.hasListeners() && this.updateTimers();
  }
  notify(t) {
    G.batch(() => {
      if (t.onSuccess) {
        var n, r, l, i;
        (n = (r = this.options).onSuccess) == null ||
          n.call(r, this.currentResult.data),
          (l = (i = this.options).onSettled) == null ||
            l.call(i, this.currentResult.data, null);
      } else if (t.onError) {
        var o, u, s, a;
        (o = (u = this.options).onError) == null ||
          o.call(u, this.currentResult.error),
          (s = (a = this.options).onSettled) == null ||
            s.call(a, void 0, this.currentResult.error);
      }
      t.listeners &&
        this.listeners.forEach((p) => {
          p(this.currentResult);
        }),
        t.cache &&
          this.client.getQueryCache().notify({
            query: this.currentQuery,
            type: "observerResultsUpdated",
          });
    });
  }
}
function hm(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function $s(e, t) {
  return hm(e, t) || (e.state.dataUpdatedAt > 0 && go(e, t, t.refetchOnMount));
}
function go(e, t, n) {
  if (t.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && yu(e, t));
  }
  return !1;
}
function Bs(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    yu(e, n)
  );
}
function yu(e, t) {
  return e.isStaleByTime(t.staleTime);
}
const Vs = x.exports.createContext(void 0),
  gf = x.exports.createContext(!1);
function wf(e, t) {
  return (
    e ||
    (t && typeof window < "u"
      ? (window.ReactQueryClientContext ||
          (window.ReactQueryClientContext = Vs),
        window.ReactQueryClientContext)
      : Vs)
  );
}
const mm = ({ context: e } = {}) => {
    const t = x.exports.useContext(wf(e, x.exports.useContext(gf)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  vm = ({ client: e, children: t, context: n, contextSharing: r = !1 }) => {
    x.exports.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    );
    const l = wf(n, r);
    return x.exports.createElement(
      gf.Provider,
      {
        value: !n && r,
      },
      x.exports.createElement(
        l.Provider,
        {
          value: e,
        },
        t
      )
    );
  },
  Sf = x.exports.createContext(!1),
  ym = () => x.exports.useContext(Sf);
Sf.Provider;
function gm() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
const wm = x.exports.createContext(gm()),
  Sm = () => x.exports.useContext(wm);
function km(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Em(e, t) {
  const n = mm({
      context: e.context,
    }),
    r = ym(),
    l = Sm(),
    i = n.defaultQueryOptions(e);
  (i._optimisticResults = r ? "isRestoring" : "optimistic"),
    i.onError && (i.onError = G.batchCalls(i.onError)),
    i.onSuccess && (i.onSuccess = G.batchCalls(i.onSuccess)),
    i.onSettled && (i.onSettled = G.batchCalls(i.onSettled)),
    i.suspense && typeof i.staleTime != "number" && (i.staleTime = 1e3),
    (i.suspense || i.useErrorBoundary) &&
      (l.isReset() || (i.retryOnMount = !1));
  const [o] = x.exports.useState(() => new t(n, i)),
    u = o.getOptimisticResult(i);
  if (
    (af.exports.useSyncExternalStore(
      x.exports.useCallback(
        (s) => (r ? () => {} : o.subscribe(G.batchCalls(s))),
        [o, r]
      ),
      () => o.getCurrentResult(),
      () => o.getCurrentResult()
    ),
    x.exports.useEffect(() => {
      l.clearReset();
    }, [l]),
    x.exports.useEffect(() => {
      o.setOptions(i, {
        listeners: !1,
      });
    }, [i, o]),
    i.suspense && u.isLoading && u.isFetching && !r)
  )
    throw o
      .fetchOptimistic(i)
      .then(({ data: s }) => {
        i.onSuccess == null || i.onSuccess(s),
          i.onSettled == null || i.onSettled(s, null);
      })
      .catch((s) => {
        l.clearReset(),
          i.onError == null || i.onError(s),
          i.onSettled == null || i.onSettled(void 0, s);
      });
  if (
    u.isError &&
    !l.isReset() &&
    !u.isFetching &&
    km(i.useErrorBoundary, [u.error, o.getCurrentQuery()])
  )
    throw u.error;
  return i.notifyOnChangeProps ? u : o.trackResult(u);
}
function Tm(e, t, n) {
  const r = Xr(e, t, n);
  return Em(r, pm);
}
const Cm = () =>
    D.createElement(
      "div",
      {
        className:
          "flex h-screen w-screen items-center justify-center bg-emerald-500",
      },
      D.createElement(
        D.Suspense,
        null,
        D.createElement(Ih, null, D.createElement(vh, null))
      )
    ),
  xm = new dm({
    defaultOptions: {
      queries: {
        suspense: !0,
      },
    },
  }),
  Pm = () =>
    D.createElement(
      vm,
      {
        client: xm,
      },
      D.createElement(
        kh,
        null,
        D.createElement(
          gh,
          null,
          D.createElement(
            Yr,
            {
              path: "/",
              element: D.createElement(Cm, null),
            },
            sf.map((e) =>
              D.createElement(Yr, {
                ...e,
                key: e.path,
              })
            ),
            D.createElement(Yr, {
              index: !0,
              element: D.createElement(Bh, null),
            })
          )
        )
      )
    ),
  _m = document.getElementById("app"),
  Om = bc(_m);
Om.render(D.createElement(D.StrictMode, null, D.createElement(Pm, null)));
export { uf as B, D as R, yn as _, Nm as a, Rm as c, Cf as g, x as r, Tm as u };
