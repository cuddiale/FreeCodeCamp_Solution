function convertSeconds(sec) {
  const localNames = ["wk", "d", "hr", "min", "sec"];
  // compoundDuration :: [String] -> Int -> String
  const compoundDuration = (labels, intSeconds) =>
    weekParts(intSeconds)
      .map((v, i) => [v, labels[i]])
      .reduce((a, x) => a.concat(x[0] ? [`${x[0]} ${x[1] || "?"}`] : []), [])
      .join(", ");

  // weekParts :: Int -> [Int]
  const weekParts = (intSeconds) =>
    [0, 7, 24, 60, 60].reduceRight(
      (a, x) => {
        const r = a.rem;
        const mod = x !== 0 ? r % x : r;

        return {
          rem: (r - mod) / (x || 1),
          parts: [mod].concat(a.parts),
        };
      },
      {
        rem: intSeconds,
        parts: [],
      }
    ).parts;

  return compoundDuration(localNames, sec);
}
