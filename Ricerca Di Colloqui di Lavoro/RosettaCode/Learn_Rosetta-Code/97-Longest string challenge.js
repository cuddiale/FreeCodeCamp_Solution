function longestString(strings) {
  var mx = 0;
  var result = [];
  strings.forEach(function (e) {
    if (e.length > mx) {
      mx = e.length;
      result = [e];
    } else if (e.length == mx) result.push(e);
  });

  return result;
}
