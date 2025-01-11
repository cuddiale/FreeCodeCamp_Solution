function isLychrel(n) {
  function reverse(num) {
    return parseInt(num.toString().split("").reverse().join(""));
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
