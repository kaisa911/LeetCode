function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix.length || (matrix[0] && !matrix[0].length)) {
    return false;
  }
  let row: number = matrix.length - 1;
  let col: number = 0;
  while (row >= 0 && col <= matrix[0].length - 1) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      col += 1;
    } else if (matrix[row][col] > target) {
      row -= 1;
    }
  }
  return false;
}
