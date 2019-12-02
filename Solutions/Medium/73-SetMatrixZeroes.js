/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  let col = [];
  for (let i = 0, len = matrix.length; i < len; i++) {
    let flag = false;
    for (let j = 0, len2 = matrix[0].length; j < len2; j++) {
      if (matrix[i][j] === 0) {
        flag = true;
        col.push(j);
      }
    }
    if (flag) {
      matrix[i] = new Array(matrix[0].length).fill(0);
    }
  }
  col = [...new Set(col)];
  matrix.forEach(item => {
    col.forEach(ele => {
      item[ele] = 0;
    });
  });
  return matrix;
};
