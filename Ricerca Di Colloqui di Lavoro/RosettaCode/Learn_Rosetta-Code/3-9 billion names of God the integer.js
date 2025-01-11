function numberOfNames(num) {
  const cache = [[1]];
  for (let l = cache.length; l < num + 1; l++) {
    let Aa;
    let Mi;
    const r = [0];
    for (let x = 1; x < l + 1; x++) {
      r.push(
        r[r.length - 1] +
          (Aa = cache[l - x < 0 ? cache.length - (l - x) : l - x])[
            (Mi = Math.min(x, l - x)) < 0 ? Aa.length - Mi : Mi
          ]
      );
    }
    cache.push(r);
  }
  return cache[num][cache[num].length - 1];
}
