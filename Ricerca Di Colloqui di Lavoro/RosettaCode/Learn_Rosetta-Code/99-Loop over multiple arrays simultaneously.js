function loopSimult(A) {
  var res = [],
    output;
  for (var i = 0; i < A[0].length; i += 1) {
    output = "";
    for (var j = 0; j < A.length; j++) output += A[j][i];
    res.push(output);
  }
  return res;
}
