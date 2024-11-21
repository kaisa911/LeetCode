/*
 * @lc app=leetcode.cn id=365 lang=rust
 *
 * [365] 水壶问题
 *
 * https://leetcode.cn/problems/water-and-jug-problem/description/
 *
 * algorithms
 * Medium (44.21%)
 * Likes:    536
 * Dislikes: 0
 * Total Accepted:    69.8K
 * Total Submissions: 158K
 * Testcase Example:  '3\n5\n4'
 *
 * 有两个水壶，容量分别为 x 和 y 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 target 升。
 *
 * 你可以：
 *
 *
 * 装满任意一个水壶
 * 清空任意一个水壶
 * 将水从一个水壶倒入另一个水壶，直到接水壶已满，或倒水壶已空。
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: x = 3,y = 5,target = 4
 * 输出: true
 * 解释：
 * 按照以下步骤操作，以达到总共 4 升水：
 * 1. 装满 5 升的水壶(0, 5)。
 * 2. 把 5 升的水壶倒进 3 升的水壶，留下 2 升(3, 2)。
 * 3. 倒空 3 升的水壶(0, 2)。
 * 4. 把 2 升水从 5 升的水壶转移到 3 升的水壶(2, 0)。
 * 5. 再次加满 5 升的水壶(2, 5)。
 * 6. 从 5 升的水壶向 3 升的水壶倒水直到 3 升的水壶倒满。5 升的水壶里留下了 4 升水(3, 4)。
 * 7. 倒空 3 升的水壶。现在，5 升的水壶里正好有 4 升水(0, 4)。
 * 参考：来自著名的 "Die Hard"
 *
 * 示例 2:
 *
 *
 * 输入: x = 2, y = 6, target = 5
 * 输出: false
 *
 *
 * 示例 3:
 *
 *
 * 输入: x = 1, y = 2, target = 3
 * 输出: true
 * 解释：同时倒满两个水壶。现在两个水壶中水的总量等于 3。
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= x, y, target <= 10^3
 *
 *
 */

// @lc code=start
impl Solution {
    pub fn can_measure_water(x: i32, y: i32, target: i32) -> bool {
        if x + y < target {
            return false;
        }
        if target == 0 {
            return x == 0 || y == 0;
        }

        target % gcd(x, y) == 0
    }
    
}
fn gcd(a: i32, b: i32) -> i32 {
    if b == 0 {
        return a;
    }
    gcd(b, a % b)
}

// @lc code=end
