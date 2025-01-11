function IBeforeExceptC(word) {
  if (word.indexOf("c") == -1 && word.indexOf("ie") != -1) return true;
  else if (word.indexOf("cei") != -1) return true;
  return false;
}
