function fibonacci(n) {
  let a = 0,
    b = 1,
    t;
  while (--n >= 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}
