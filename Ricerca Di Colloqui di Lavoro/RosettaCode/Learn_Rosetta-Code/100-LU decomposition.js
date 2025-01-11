function luDecomposition(A) {
  function dotProduct(a, b) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) sum += a[i] * b[i];
    return sum;
  }

  function matrixMul(A, B) {
    var result = new Array(A.length);
    for (var i = 0; i < A.length; i++) result[i] = new Array(B[0].length);
    var aux = new Array(B.length);

    for (var j = 0; j < B[0].length; j++) {
      for (var k = 0; k < B.length; k++) aux[k] = B[k][j];

      for (var i = 0; i < A.length; i++) result[i][j] = dotProduct(A[i], aux);
    }
    return result;
  }

  function pivotize(m) {
    var n = m.length;
    var id = new Array(n);
    for (var i = 0; i < n; i++) {
      id[i] = new Array(n);
      id[i].fill(0);
      id[i][i] = 1;
    }

    for (var i = 0; i < n; i++) {
      var maxm = m[i][i];
      var row = i;
      for (var j = i; j < n; j++)
        if (m[j][i] > maxm) {
          maxm = m[j][i];
          row = j;
        }

      if (i != row) {
        var tmp = id[i];
        id[i] = id[row];
        id[row] = tmp;
      }
    }
    return id;
  }

  var n = A.length;
  var L = new Array(n);
  for (var i = 0; i < n; i++) {
    L[i] = new Array(n);
    L[i].fill(0);
  }
  var U = new Array(n);
  for (var i = 0; i < n; i++) {
    U[i] = new Array(n);
    U[i].fill(0);
  }
  var P = pivotize(A);
  var A2 = matrixMul(P, A);

  for (var j = 0; j < n; j++) {
    L[j][j] = 1;
    for (var i = 0; i < j + 1; i++) {
      var s1 = 0;
      for (var k = 0; k < i; k++) s1 += U[k][j] * L[i][k];
      U[i][j] = A2[i][j] - s1;
    }
    for (var i = j; i < n; i++) {
      var s2 = 0;
      for (var k = 0; k < j; k++) s2 += U[k][j] * L[i][k];
      L[i][j] = (A2[i][j] - s2) / U[j][j];
    }
  }
  return [L, U, P];
}
