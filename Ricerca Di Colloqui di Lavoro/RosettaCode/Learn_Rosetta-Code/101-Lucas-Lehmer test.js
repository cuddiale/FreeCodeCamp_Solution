function lucasLehmer(p) {
  function isPrime(p) {
    if (p == 2) return true;
    else if (p <= 1 || p % 2 == 0) return false;
    else {
      var to = Math.sqrt(p);
      for (var i = 3; i <= to; i += 2) if (p % i == 0) return false;
      return true;
    }
  }

  function isMersennePrime(p) {
    if (p == 2) return true;
    else {
      var m_p = Math.pow(2, p) - 1;
      var s = 4;
      for (var i = 3; i <= p; i++) s = (s * s - 2) % m_p;
      return s == 0;
    }
  }

  return isPrime(p) && isMersennePrime(p);
}
