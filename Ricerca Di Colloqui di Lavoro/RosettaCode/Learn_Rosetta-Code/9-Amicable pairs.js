// amicablePairsUpTo :: Int -> [(Int, Int)]
function amicablePairsUpTo(maxNum) {
  return range(1, maxNum)
    .map((x) => properDivisors(x).reduce((a, b) => a + b, 0))
    .reduce((a, m, i, lst) => {
      const n = i + 1;

      return m > n && lst[m - 1] === n ? a.concat([[n, m]]) : a;
    }, []);
}

// properDivisors :: Int -> [Int]
function properDivisors(n) {
  if (n < 2) return [];

  const rRoot = Math.sqrt(n);
  const intRoot = Math.floor(rRoot);
  const blnPerfectSquare = rRoot === intRoot;
  const lows = range(1, intRoot).filter((x) => n % x === 0);

  return lows.concat(
    lows
      .slice(1)
      .map((x) => n / x)
      .reverse()
      .slice(blnPerfectSquare | 0)
  );
}

// Int -> Int -> Maybe Int -> [Int]
function range(m, n, step) {
  const d = (step || 1) * (n >= m ? 1 : -1);

  return Array.from(
    {
      length: Math.floor((n - m) / d) + 1,
    },
    (_, i) => m + i * d
  );
}
