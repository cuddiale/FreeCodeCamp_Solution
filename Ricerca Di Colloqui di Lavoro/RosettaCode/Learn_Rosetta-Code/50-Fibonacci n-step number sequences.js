function fib_luc(n, len, w) {
  function nacci(a, n, len) {
    while (a.length < len) {
      let sum = 0;
      for (let i = Math.max(0, a.length - n); i < a.length; i++) sum += a[i];
      a.push(sum);
    }
    return a;
  }
  if (w == "f") {
    return nacci(nacci([1, 1], n, n), n, len);
  } else {
    return nacci(nacci([2, 1], n, n), n, len);
  }
}
