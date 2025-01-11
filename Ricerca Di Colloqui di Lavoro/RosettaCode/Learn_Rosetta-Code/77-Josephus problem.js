function josephus(init, kill) {
  const arr = Array.from(Array(init).keys());
  let curr = -1;
  while (arr.length > 1) {
    curr = (curr + kill) % arr.length;
    arr.splice(curr, 1);
    curr--;
  }
  return arr[0];
}
