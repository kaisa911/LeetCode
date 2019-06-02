/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = matrix => {
  let len = matrix.length;
  for (let i = 0; i < len / 2; i++) {
    let start = i;
    let end = len - i - 1;
    for (let j = 0; j < end - start; j++) {
      let temp = matrix[start][start + j];
      matrix[start][start + j] = matrix[end - j][start];
      matrix[end - j][start] = matrix[end][end - j];
      matrix[end][end - j] = matrix[start + j][end];
      matrix[start + j][end] = temp;
    }
  }
};
