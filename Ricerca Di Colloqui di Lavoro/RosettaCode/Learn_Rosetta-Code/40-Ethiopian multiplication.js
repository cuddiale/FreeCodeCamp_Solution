function eth_mult(a, b) {
  let sum = 0;
  a = [a];
  b = [b];

  let half = (a) => a / 2,
    double = (a) => a * 2,
    is_even = (a) => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
