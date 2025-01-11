// zeckendorf :: Int -> Int
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return parseInt(
    (n === 0 ? [0] : mapAccumL(f, n, reverse(tail(fibUntil(n))))[1]).join("")
  );
}

// fibUntil :: Int -> [Int]
let fibUntil = (n) => {
  const xs = [];
  until(
    ([a]) => a > n,
    ([a, b]) => (xs.push(a), [b, a + b]),
    [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) =>
  xs.reduce(
    (a, x) => {
      const pair = f(a[0], x);

      return [pair[0], a[1].concat(pair[1])];
    },
    [acc, []]
  );

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = (xs) => (xs.length ? xs.slice(1) : undefined);

const reverse = (xs) => xs.slice(0).reverse();
