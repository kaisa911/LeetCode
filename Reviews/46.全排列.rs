/*
 * @lc app=leetcode.cn id=46 lang=rust
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (79.83%)
 * Likes:    2995
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut perm = Vec::new();
        let mut current = Vec::new();

        // 定义回溯函数
        fn back_track(nums: &Vec<i32>, current: &mut Vec<i32>, perm: &mut Vec<Vec<i32>>) {
            // 如果当前排列长度等于原数组长度，保存结果并返回
            if current.len() == nums.len() {
                perm.push(current.clone()); // 克隆当前排列
                return;
            }

            for i in 0..nums.len() {
                // 如果当前数字已经在排列中，跳过
                if current.contains(&nums[i]) {
                    continue;
                }
                // 尝试添加当前数字到排列
                current.push(nums[i]);
                back_track(nums, current, perm);
                // 回溯：移除最后一个数字
                current.pop();
            }
        }

        // 开始回溯
        back_track(&nums, &mut current, &mut perm);

        perm
    }
}
// @lc code=end
