function emirps(num, showEmirps) {
  const is_prime = function (n) {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n) {
      if (n % (p += 4) == 0 || n % (p += 2) == 0) {
        return false;
      }
    }
    return true;
  };
  const is_emirp = function (n) {
    const r = parseInt(n.toString().split("").reverse().join(""));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === "number") {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
