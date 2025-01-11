function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && a[i - 1] === a[i];
  }
  return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && a[i - 1] < a[i];
  }
  return out;
}
