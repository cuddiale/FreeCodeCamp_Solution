function lookAndSay(str) {
  return str.replace(/(.)\1*/g, function (seq, p1) {
    return seq.length.toString() + p1;
  });
}
