/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = obstacleGrid => {
  if (obstacleGrid[0][0] == 1) return 0;
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const result = Array(col).fill(0);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j == 0) {
        result[j] = 1;
      }
      if (obstacleGrid[i][j] == 1) {
        result[j] = 0;
      } else if (j > 0) {
        result[j] += result[j - 1];
      }
    }
  }
  return result[col - 1];
};
