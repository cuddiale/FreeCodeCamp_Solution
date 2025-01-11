function linearCongGenerator(r0, a, c, m, n) {
  for (let i = 0; i < n; i++) {
    r0 = (a * r0 + c) % m;
  }
  return r0;
}
