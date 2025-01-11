function topologicalSort(libs) {
  // A map of the input data, with the keys as the packages, and the values as
  // and array of packages on which it depends.
  const D = libs
    .split("\n")
    .map((e) => e.split(" ").filter((ep) => ep !== ""))
    .reduce(
      (p, c) =>
        p.set(
          c[0],
          c.filter((e, i) => (i > 0 && e !== c[0] ? e : null))
        ),
      new Map()
    );
  [].concat(...D.values()).forEach((e) => {
    D.set(e, D.get(e) || []);
  });

  // The above map rotated so that it represents a DAG of the form
  // Map {
  //    A => [ A, B, C],
  //    B => [C],
  //    C => []
  // }
  // where each key represents a node, and the array contains the edges.
  const G = [...D.keys()].reduce(
    (p, c) =>
      p.set(
        c,
        [...D.keys()].filter((e) => D.get(e).includes(c))
      ),
    new Map()
  );

  // An array of leaf nodes; nodes with 0 in degrees.
  const Q = [...D.keys()].filter((e) => D.get(e).length === 0);

  // The result array.
  const S = [];
  while (Q.length) {
    const u = Q.pop();
    S.push(u);
    G.get(u).forEach((v) => {
      D.set(
        v,
        D.get(v).filter((e) => e !== u)
      );
      if (D.get(v).length === 0) {
        Q.push(v);
      }
    });
  }

  return S;
}
