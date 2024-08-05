const rotate = (matrix) => {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }
  // 主对角线交换
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};