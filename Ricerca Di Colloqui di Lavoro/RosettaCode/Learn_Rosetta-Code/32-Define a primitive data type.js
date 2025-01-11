function Num(n) {
  if (isNaN(n)) {
    throw new TypeError("Not a Number");
  }
  if (n < 1 || n > 10) {
    throw new TypeError("Out of range");
  }

  this._value = +n;
}
Num.prototype.valueOf = function () {
  return this._value;
};
Num.prototype.toString = function () {
  return this._value.toString();
};
