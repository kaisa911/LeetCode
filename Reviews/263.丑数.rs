/*
 * @lc app=leetcode.cn id=263 lang=rust
 *
 * [263] 丑数
 *
 * https://leetcode.cn/problems/ugly-number/description/
 *
 * algorithms
 * Easy (50.14%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    197.8K
 * Total Submissions: 394.6K
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
impl Solution {
    pub fn is_ugly(n: i32) -> bool {
        if n <= 0 {
            return false;
        }
        if n == 1 {
            return true;
        }
        let mut num = n;

        while num >= 2 {
            if num % 2 == 0 {
                num = num / 2;
            } else if num % 3 == 0 {
                num = num / 3
            } else if num % 5 == 0 {
                num = num / 5
            } else {
                return false;
            }
        }
        return true;
    }
}
// @lc code=end
