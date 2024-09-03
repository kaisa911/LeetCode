/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  for (let j = 0; j < m; j++) {
    let zd = -1;
    for (let i = 0; i < n; i++) {
      zd = Math.max(zd, matrix[i][j]);
    }
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = zd;
      }
    }
  }
  return matrix;
};
