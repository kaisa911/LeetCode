var maximalSquare = function (matrix) {
  let maxSideLength = 0; // 相当于纪录保持者
  let dp = new Array(matrix.length); // 构建dp数组
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0); // dp二维数组，每一项初始化0
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          // base case
          dp[i][j] = 1; // 第一列和第一行的dp值只能为1
        } else {
          // 递推通式，求出dp[i][j]
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSideLength = Math.max(maxSideLength, dp[i][j]); //挑战纪录保持者，试图更新
      }
    }
  }
  return maxSideLength * maxSideLength; // 边长的平方
};
