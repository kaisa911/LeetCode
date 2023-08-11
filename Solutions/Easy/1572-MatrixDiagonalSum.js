const diagonalSum = (mat) => {
  const n = mat.length,
    mid = Math.floor(n / 2);
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[i][n - 1 - i];
  }
  return sum - mat[mid][mid] + (n & 1);
};
