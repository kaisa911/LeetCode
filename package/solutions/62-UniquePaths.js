/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 创建 DP 表
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(1));

  // 从第二行第二列开始填充 DP 表
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 返回到达右下角的路径数
  return dp[m - 1][n - 1];
};
