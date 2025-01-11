function factors(num) {
  let n_factors = [],
    i,
    sqr = Math.floor(Math.sqrt(num));

  for (i = 1; i <= sqr; i += 1)
    if (num % i === 0) {
      n_factors.push(i);
      if (num / i !== i) n_factors.push(num / i);
    }
  n_factors.sort(function (a, b) {
    return a - b;
  });
  return n_factors;
}
