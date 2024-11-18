/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 *
 * https://leetcode.cn/problems/ugly-number/description/
 *
 * algorithms
 * Easy (50.17%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    197.5K
 * Total Submissions: 393.9K
 * Testcase Example:  '6'
 *
 * 丑数 就是只包含质因数 2、3 和 5 的 正 整数。
 *
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 6
 * 输出：true
 * 解释：6 = 2 × 3
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：true
 * 解释：1 没有质因数。
 *
 * 示例 3：
 *
 *
 * 输入：n = 14
 * 输出：false
 * 解释：14 不是丑数，因为它包含了另外一个质因数 7 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= n <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  if (n === 1) return true;

  while (n >= 2) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 3 === 0) {
      n = n / 3;
    } else if (n % 5 === 0) {
      n = n / 5;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
