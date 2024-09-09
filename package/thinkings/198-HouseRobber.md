# 打家劫舍

你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

示例 1：

```javascript
输入：[1,2,3,1]
输出：4
解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

示例 2：

```javascript
输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

提示：

- 1 <= nums.length <= 100
- 0 <= nums[i] <= 400

思路：

1. 初始化：如果数组长度为 0，直接返回 0。如果数组长度为 1，只能偷窃第一个房子，因此返回该房子的金额。
2. 动态规划：使用两个变量 excludeLast 和 includeLast 分别存储不偷窃当前房子和偷窃当前房子能得到的最大金额。这两个变量在每次迭代中更新。
3. 迭代更新：
   - excludeTemp 存储上一轮迭代中不偷窃上一个房子和偷窃上一个房子能得到的最大金额中较大的那个。
   - includeLast 更新为不偷窃当前房子的最大金额加上当前房子的金额。
   - excludeLast 更新为 excludeTemp，即上一轮迭代中不偷窃上一个房子的最大金额。
4. 返回结果：在完成所有迭代后，返回 includeLast 和 excludeLast 中较大的那个，即为能够偷窃到的最高金额。

时间复杂度：O(n)，其中 n 是数组 nums 的长度。只需要遍历数组一次。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  if (len <= 0) return 0;
  else if (len === 1) return nums[0];

  let excludeLast = 0,
    includeLast = nums[0];
  let excludeTemp;
  for (let i = 1; i < len; i++) {
    excludeTemp = excludeLast > includeLast ? excludeLast : includeLast;
    includeLast = excludeLast + nums[i];
    excludeLast = excludeTemp;
  }
  return includeLast > excludeLast ? includeLast : excludeLast;
};
```
