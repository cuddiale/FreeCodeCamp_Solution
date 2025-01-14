import { r as c, R as e, B as p } from "./index.55bf5780.js";
const y = () => {};
function w(s, r = 0, t = !0, i = !1) {
  const l = c.exports.useRef();
  c.exports.useEffect(() => {
    l.current = s;
  }),
    c.exports.useEffect(() => {
      if (t) {
        let d = function () {
          var o;
          (o = l.current) === null || o === void 0 || o.call(l);
        };
        i && d();
        const u = window.setInterval(d, r);
        return () => {
          window.clearInterval(u);
        };
      }
      return y;
    }, [t, r, i]);
}
const k = 5,
  f = 25,
  g = 60,
  T = 1,
  m = (s) => s * 60,
  B = (s) => {
    const r = Math.floor(s / 60),
      t = s % 60;
    return `${r.toString().padStart(2, "0")}:${t.toString().padStart(2, "0")}`;
  },
  $ = () => {
    const s = c.exports.useRef(null),
      [r, t] = c.exports.useState(m(f)),
      [i, l] = c.exports.useState(f),
      [d, u] = c.exports.useState(k),
      [o, E] = c.exports.useState("Session"),
      [C, v] = c.exports.useState(!1);
    w(
      () => {
        t((a) =>
          a === 0
            ? (s.current && ((s.current.currentTime = 0), s.current.play()),
              m(o === "Session" ? d : i))
            : a - 1
        ),
          r === 0 && E((a) => (a === "Session" ? "Break" : "Session"));
      },
      1e3,
      C
    );
    const x = (a, b) => () => {
        a((n) => (n < g ? n + 1 : g)), b === o && t((n) => n + m(1));
      },
      S = (a, b) => () => {
        a((n) => (n > T ? n - 1 : T)),
          b === o && t((n) => (Math.floor(n / 60) > 1 ? n - m(1) : n));
      },
      N = () => {
        t(m(f)),
          l(f),
          u(k),
          E("Session"),
          v(!1),
          s.current && (s.current.pause(), (s.current.currentTime = 0));
      };
    return e.createElement(
      "div",
      {
        className: "rounded bg-slate-300 p-4",
      },
      e.createElement(
        "div",
        {
          className: "mb-4",
        },
        e.createElement(
          "p",
          {
            id: "timer-label",
            className: "text-sm text-slate-600",
          },
          o
        ),
        e.createElement(
          "p",
          {
            id: "time-left",
            "data-testid": "time-left",
            className: "text-4xl font-bold text-slate-900",
          },
          B(r)
        )
      ),
      e.createElement(
        "div",
        {
          className:
            "mb-4 flex justify-between gap-4 border-b  border-b-slate-400 pb-4",
        },
        e.createElement(
          p,
          {
            id: "start_stop",
            "data-testid": "play-pause",
            onClick: () => v((a) => !a),
            variant: "primary",
          },
          "Play/Pause"
        ),
        e.createElement(
          p,
          {
            id: "reset",
            onClick: N,
            variant: "secondary",
          },
          "Reset"
        )
      ),
      e.createElement(h, {
        length: d,
        title: "Break Length",
        id: "break",
        onDecreaseClick: S(u, "Break"),
        onIncreaseClick: x(u, "Break"),
      }),
      e.createElement(h, {
        length: i,
        title: "Session Length",
        id: "session",
        onDecreaseClick: S(l, "Session"),
        onIncreaseClick: x(l, "Session"),
      }),
      e.createElement("audio", {
        id: "beep",
        preload: "auto",
        ref: s,
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",
      })
    );
  },
  h = ({
    length: s,
    title: r,
    id: t,
    onDecreaseClick: i,
    onIncreaseClick: l,
  }) =>
    e.createElement(
      "div",
      {
        className:
          "mb-4 flex items-center justify-between gap-4 border-b border-b-slate-400 pb-4",
      },
      e.createElement(
        "div",
        null,
        e.createElement(
          "h2",
          {
            id: `${t}-label`,
            className: "text-sm text-slate-600",
          },
          r
        ),
        e.createElement(
          "p",
          null,
          e.createElement(
            "span",
            {
              id: `${t}-length`,
              "data-testid": `${t}-length`,
              className: "font-bold",
            },
            s
          ),
          e.createElement(
            "span",
            {
              className: "text-sm font-normal text-slate-600",
            },
            "minutes"
          )
        )
      ),
      e.createElement(
        "div",
        {
          className: "flex justify-between gap-4",
        },
        e.createElement(
          "div",
          null,
          e.createElement(
            p,
            {
              id: `${t}-decrement`,
              "data-testid": `${t}-decrement`,
              onClick: i,
              variant: "secondary",
            },
            "Decrease"
          )
        ),
        e.createElement(
          "div",
          null,
          e.createElement(
            p,
            {
              id: `${t}-increment`,
              "data-testid": `${t}-increment`,
              onClick: l,
              variant: "secondary",
            },
            "Increase"
          )
        )
      )
    );
export { $ as default };
