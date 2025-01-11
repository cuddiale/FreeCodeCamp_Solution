function accumulator(sum) {
  return function (n) {
    return (sum += n);
  };
}
