/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  let n = nums.length;
  // 添加两侧的虚拟气球
  let points = new Array(n + 2);
  points[0] = points[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    points[i] = nums[i - 1];
  }
  // base case 已经都被初始化为 0
  let dp = new Array(n + 2).fill(0).map(() => new Array(n + 2).fill(0));
  // 开始状态转移
  // i 应该从下往上
  for (let i = n; i >= 0; i--) {
    // j 应该从左往右
    for (let j = i + 1; j < n + 2; j++) {
      // 最后戳破的气球是哪个？
      for (let k = i + 1; k < j; k++) {
        // 择优做选择
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]);
      }
    }
  }
  return dp[0][n + 1];
};
