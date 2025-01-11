function iteratedSquare(n) {
  var total;
  while (n != 89 && n != 1) {
    total = 0;
    while (n > 0) {
      total += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = total;
  }
  return n;
}
