function addTogether() {
  const first = arguments[0];
  if (typeof first !== "number") {
    return undefined;
  }
  if (arguments.length === 1) {
    return function (second) {
      if (typeof second !== "number") {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof second !== "number") {
    return undefined;
  }
  return first + second;
}
