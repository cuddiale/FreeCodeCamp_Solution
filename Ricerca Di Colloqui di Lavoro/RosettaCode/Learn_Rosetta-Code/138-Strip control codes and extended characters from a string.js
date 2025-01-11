function strip(s) {
  return s
    .split("")
    .filter(function (x) {
      var n = x.charCodeAt(0);

      return 31 < n && 127 > n;
    })
    .join("");
}
