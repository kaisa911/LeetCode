/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let e = [];
    for (let j = 0; j <= i; j++) {
      if (i == j) {
        e.push(1);
      } else {
        e.push(j == 0 ? res[i - 1][j] : res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    res.push(e);
  }

  return res;
};
