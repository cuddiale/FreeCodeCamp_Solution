function fractran(progStr) {
  var num = new Array();
  var den = new Array();
  var val;
  var out = "";
  function compile(prog) {
    var regex = /\s*(\d*)\s*\/\s*(\d*)\s*(.*)/m;
    while (regex.test(prog)) {
      num.push(regex.exec(prog)[1]);
      den.push(regex.exec(prog)[2]);
      prog = regex.exec(prog)[3];
    }
  }

  function step(val) {
    var i = 0;
    while (i < den.length && val % den[i] != 0) i++;
    return (num[i] * val) / den[i];
  }

  var seq = [];

  function exec(val) {
    var i = 0;
    while (val && i < limit) {
      seq.push(val);
      val = step(val);
      i++;
    }
  }

  // Main
  compile(progStr);
  var limit = 10;
  exec(2);
  return seq;
}
