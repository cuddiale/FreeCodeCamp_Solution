function isSelfDescribing(n) {
  let digits = String(n).split("");
  digits = digits.map(function (e) {
    return parseInt(e);
  });
  let count = digits.map((x) => {
    return 0;
  });
  digits.forEach((d) => {
    if (d >= count.length) {
      return false;
    }
    count[d] += 1;
  });

  if (digits === count) {
    return true;
  }
  if (digits.length != count.length) {
    return false;
  }

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== count[i]) {
      return false;
    }
  }
  return true;
}
