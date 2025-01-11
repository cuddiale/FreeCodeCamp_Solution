function findSequence(input) {
  var len = input.length;
  var result = [];
  for (var i = 0; i < len; i++) result.push(1);

  for (var i = 0; i < len; i++)
    for (var j = i - 1; j >= 0; j--)
      if (input[i] > input[j] && result[j] >= result[i])
        result[i] = result[j] + 1;

  var maxValue = Math.max.apply(null, result);
  var maxIndex = result.indexOf(Math.max.apply(Math, result));
  var output = [];
  output.push(input[maxIndex]);
  for (var i = maxIndex; i >= 0; i--) {
    if (maxValue == 0) break;
    if (input[maxIndex] > input[i] && result[i] == maxValue - 1) {
      output.push(input[i]);
      maxValue--;
    }
  }
  output.reverse();
  return output;
}
