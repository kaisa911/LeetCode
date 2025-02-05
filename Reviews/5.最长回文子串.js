/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 处理空字符串的边界情况，直接返回空字符串
  if (s === '') {
    return '';
  }
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(false));
  let start = 0;
  let maxLen = 1;

  // 初始化长度为1的子串（单个字符）为回文，即dp[i][i] = true
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  // 从长度为2的子串开始逐步判断
  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - len + 1; i++) {
      let j = i + len - 1;
      if (s[j] === s[i] && (len === 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (len > maxLen) {
          start = i;
          maxLen = len;
        }
      }
    }
  }
  return s.slice(start, start + maxLen);
};
// @lc code=end
