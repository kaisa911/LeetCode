/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
  const row = grid.length;
  const col = grid[0].length;
  const res = Array(row).fill(Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j == 0) {
        res[i][j] = grid[0][0];
      } else if (i == 0 && j !== 0) {
        res[i][j] = grid[i][j] + res[i][j - 1];
      } else if (i !== 0 && j == 0) {
        res[i][j] = grid[i][j] + res[i - 1][j];
      } else {
        res[i][j] = grid[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
      }
    }
  }
  return res[row - 1][col - 1];
};
