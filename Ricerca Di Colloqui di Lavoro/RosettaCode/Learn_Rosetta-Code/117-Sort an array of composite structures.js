function sortByKey(arr) {
  return arr.sort(function (a, b) {
    return a.key - b.key;
  });
}
