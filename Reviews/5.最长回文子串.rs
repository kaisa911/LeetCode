/*
 * @lc app=leetcode.cn id=5 lang=rust
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (38.90%)
 * Likes:    7454
 * Dislikes: 0
 * Total Accepted:    1.9M
 * Total Submissions: 4.8M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        // if s.is_empty() {
        //     return s;
        // }
        // let n = s.len();
        // let s_char:Vec<char> = s.chars().collect();
        // let mut dp: Vec<Vec<bool>> = vec![vec![false; n]; n];
        // for i in 0..n {
        //     dp[i][i] = true;
        // }
        // let mut start = 0;
        // let mut max_len = 1;

        // for len in 2..=n {
        //     for i in 0..(n - len + 1) {
        //         let j = i + len - 1;
        //         if s_char[i] == s_char[j] {
        //             if len == 2 || dp[i + 1][j - 1] {
        //                 dp[i][j] = true;
        //                 if len > max_len {
        //                   start = i;
        //                   max_len = len;
        //                 }
        //             }
        //         }
        //     }
        // }
        // s[start..start + max_len].to_string()

        if s.is_empty() {
            return s;
        }

        let mut start = 0; // 起始位置
        let mut max_len = 0; // 最大长度
        let n = s.len(); // 字符串长度
        let s_char: Vec<char> = s.chars().collect(); // 将字符串转换为字符数组

        // 定义从中心扩展的函数
        fn expand_from_center(s_char: &[char], left: usize, right: usize, start: &mut usize, max_len: &mut usize) {
            let mut l = left as i32;
            let mut r = right as i32;
            // 数组索引和切片必须使用usize
            while l >= 0 && (r as usize) < s_char.len() && s_char[l as usize] == s_char[r as usize] {
                l -= 1;
                r += 1;
            }

            let current_length = (r - l - 1) as usize; // 计算当前长度
            if current_length > *max_len {
                *max_len = current_length;
                *start = (l + 1) as usize; // 更新起始位置
            }
        }

        // 遍历每个字符作为中心点
        for i in 0..n {
            expand_from_center(&s_char, i, i, &mut start, &mut max_len); // 单个字符中心
            if i + 1 < n {
                expand_from_center(&s_char, i, i + 1, &mut start, &mut max_len); // 双字符中心
            }
        }

        // 截取最长回文子串
        s[start..start + max_len].to_string()
    }
}
// @lc code=end
