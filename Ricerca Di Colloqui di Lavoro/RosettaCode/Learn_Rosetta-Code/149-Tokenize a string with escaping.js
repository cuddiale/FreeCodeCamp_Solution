// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split("").reduce(
    (a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? "" : a.token + (blnEscChar ? "" : x),
        list: a.list.concat(blnBreak ? a.token : []),
      };
    },
    {
      esc: false,
      token: "",
      list: [],
    }
  );

  return dctParse.list.concat(dctParse.token);
}
