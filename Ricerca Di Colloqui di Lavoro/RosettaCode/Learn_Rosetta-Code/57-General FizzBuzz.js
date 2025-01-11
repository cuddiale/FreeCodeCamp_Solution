function genFizzBuzz(rules, num) {
  let res = "";
  rules.forEach(function (e) {
    if (num % e[0] == 0) res += e[1];
  });

  if (res == "") {
    res = num.toString();
  }

  return res;
}
