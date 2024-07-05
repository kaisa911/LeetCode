/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  const res = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[j] = Math.max(res[j], grid[i][j].toString().length);
    }
  }
  return res;
};
