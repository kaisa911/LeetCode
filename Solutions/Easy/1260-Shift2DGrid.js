/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const row = grid.length;
  const col = grid[0].length;
  const res = new Array(row);
  for (let i = 0; i < res.length; i++) {
    res[i] = new Array(col).fill(0);
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const index1 = (i * col + j + k) % (row * col);
      res[Math.floor(index1 / col)].splice(index1 % col, 1, grid[i][j]);
    }
  }
  return res;
};
