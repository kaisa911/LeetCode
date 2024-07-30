/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // 标记零的位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRowHasZero = true;
        if (j === 0) firstColHasZero = true;
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  // 根据标记置零
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 恢复第一行和第一列
  for (let i = 0; i < m; i++) {
    if (firstRowHasZero) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (firstColHasZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};
