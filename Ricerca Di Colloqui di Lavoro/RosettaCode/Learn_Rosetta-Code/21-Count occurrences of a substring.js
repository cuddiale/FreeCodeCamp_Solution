function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, "\\$&");
  const matches = str.match(new RegExp(escapedSubStr, "g"));
  return matches ? matches.length : 0;
}
