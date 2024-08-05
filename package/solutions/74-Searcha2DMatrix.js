/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix.length) return false;
  const row = matrix.length;
  const col = matrix[0].length;
  let i = row - 1;
  let j = 0;
  while (i >= 0 && j <= col - 1) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};
