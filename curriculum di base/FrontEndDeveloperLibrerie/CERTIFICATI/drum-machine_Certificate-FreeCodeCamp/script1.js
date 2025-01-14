import { r as o, R as t, B as n } from "./index.55bf5780.js";
const d = () => {
  const s = o.exports.useRef(null),
    r = (e) => {
      const c = e.key.toUpperCase(),
        a = document.querySelector(`button[id="${c}"]`);
      a &&
        (a.classList.toggle("bg-blue-800"),
        a.click(),
        setTimeout(() => {
          a.classList.toggle("bg-blue-800");
        }, 100));
    };
  o.exports.useEffect(
    () => (
      document.addEventListener("keydown", r),
      () => {
        document.removeEventListener("keydown", r);
      }
    ),
    []
  );
  const m = [
    {
      name: "Heater 1",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      key: "Q",
    },
    {
      name: "Heater 2",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      key: "W",
    },
    {
      name: "Heater 3",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      key: "E",
    },
    {
      name: "Heater 4",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      key: "A",
    },
    {
      name: "Clap",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      key: "S",
    },
    {
      name: "Open HH",
      id: "D",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      key: "D",
    },
    {
      name: "Kick n' Hat",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      key: "Z",
    },
    {
      name: "Kick",
      id: "X",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      key: "X",
    },
    {
      name: "Closed HH",
      audioClip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      key: "C",
    },
  ];
  return t.createElement(
    "div",
    {
      id: "drum-machine",
      "data-testid": "drum-machine",
      className: "flex h-screen w-screen items-center justify-center gap-4",
    },
    t.createElement(
      "div",
      {
        className:
          "flex scale-150 flex-col items-center justify-center gap-4 rounded bg-white p-2",
      },
      t.createElement(
        "div",
        {
          id: "display",
          "data-testid": "display",
          ref: s,
          "aria-label": "Audio clip",
          className:
            "min-h-9 flex w-48 items-center justify-center border border-x-0 border-t-0 border-t-slate-300 pb-2 font-bold text-slate-900",
        },
        t.createElement(
          "span",
          {
            className: "text-center text-xs",
          },
          "Click on the pads or type the corresponding key to play the sound"
        )
      ),
      t.createElement(
        "div",
        {
          className: "grid grid-cols-3 gap-2",
        },
        m.map((e) =>
          t.createElement(
            n,
            {
              id: e.key,
              key: e.key,
              className: "drum-pad",
              "data-key": e.key,
              onClick: (c) => {
                var a;
                (a = c.currentTarget.querySelector("audio")) == null ||
                  a.play(),
                  s.current && (s.current.innerText = e.name);
              },
            },
            e.key,
            t.createElement("audio", {
              id: e.key,
              src: e.audioClip,
              "data-name": e.name,
              className: "clip hidden",
            })
          )
        )
      )
    )
  );
};
export { d as default };
