function ludic(n) {
  const makeArr = (s, e) => new Array(e + 1 - s).fill(s).map((e, i) => e + i);

  const filterAtInc = (arr, n) => arr.filter((e, i) => (i + 1) % n);

  const makeLudic = (arr, result) => {
    const iter = arr.shift();
    result.push(iter);
    return arr.length ? makeLudic(filterAtInc(arr, iter), result) : result;
  };

  const ludicResult = makeLudic(makeArr(2, n), [1]);

  return ludicResult;
}
