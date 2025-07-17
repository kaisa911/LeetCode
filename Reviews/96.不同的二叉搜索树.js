/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // 初始化 dp 数组，dp[i] 表示由 i 个节点组成的二叉搜索树的数量
  const dp = new Array(n + 1).fill(0);
  // 空树和只有一个节点的树都只有一种形态
  dp[0] = 1;
  dp[1] = 1;

  // 计算 dp[i]，i 从 2 到 n
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 状态转移方程
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};
// @lc code=end
