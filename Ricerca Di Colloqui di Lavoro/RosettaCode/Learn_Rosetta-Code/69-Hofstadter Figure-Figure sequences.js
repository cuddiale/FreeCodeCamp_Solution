const R = [null, 1];
const S = [null, 2];

function extendSequences(n) {
  let current = Math.max(R[R.length - 1], S[S.length - 1]);
  let i;
  while (R.length <= n || S.length <= n) {
    i = Math.min(R.length, S.length) - 1;
    current += 1;
    if (current === R[i] + S[i]) {
      R.push(current);
    } else {
      S.push(current);
    }
  }
}

function ffr(n) {
  extendSequences(n);
  return R[n];
}

function ffs(n) {
  extendSequences(n);
  return S[n];
}
