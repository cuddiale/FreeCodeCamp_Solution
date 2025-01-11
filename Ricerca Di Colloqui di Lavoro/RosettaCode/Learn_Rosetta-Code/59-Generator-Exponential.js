function exponentialGenerator(n) {
  function* PowersGenerator(m) {
    var n = 0;
    while (1) {
      yield Math.pow(n, m);
      n += 1;
    }
  }

  function* FilteredGenerator(g, f) {
    var value = g.next().value;
    var filter = f.next().value;
    while (1) {
      if (value < filter) {
        yield value;
        value = g.next().value;
      } else if (value > filter) {
        filter = f.next().value;
      } else {
        value = g.next().value;
        filter = f.next().value;
      }
    }
  }

  var squares = PowersGenerator(2);
  var cubes = PowersGenerator(3);

  var filtered = FilteredGenerator(squares, cubes);

  var curr = 0;
  for (var i = 0; i < n; i++) curr = filtered.next();

  return curr.value;
}
