# 最长奇偶子数组

给你一个下标从 0 开始的整数数组 nums 和一个整数 threshold 。

请你从 nums 的子数组中找出以下标 l 开头、下标 r 结尾 (0 <= l <= r < nums.length) 且满足以下条件的 最长子数组 ：

nums[l] % 2 == 0
对于范围 [l, r - 1] 内的所有下标 i ，nums[i] % 2 != nums[i + 1] % 2
对于范围 [l, r] 内的所有下标 i ，nums[i] <= threshold
以整数形式返回满足题目要求的最长子数组的长度。

注意：子数组 是数组中的一个连续非空元素序列。

示例 1：

```js
输入：nums = [3,2,5,4], threshold = 5
输出：3
解释：在这个示例中，我们选择从 l = 1 开始、到 r = 3 结束的子数组 => [2,5,4] ，满足上述条件。
因此，答案就是这个子数组的长度 3 。可以证明 3 是满足题目要求的最大长度。
```

示例 2：

```js
输入：nums = [1,2], threshold = 2
输出：1
解释：
在这个示例中，我们选择从 l = 1 开始、到 r = 1 结束的子数组 => [2] 。
该子数组满足上述全部条件。可以证明 1 是满足题目要求的最大长度。
```

示例 3：

```js
输入：nums = [2,3,4,5], threshold = 4
输出：3
解释：
在这个示例中，我们选择从 l = 0 开始、到 r = 2 结束的子数组 => [2,3,4] 。
该子数组满足上述全部条件。
因此，答案就是这个子数组的长度 3 。可以证明 3 是满足题目要求的最大长度。
```

提示：

- 1 <= nums.length <= 100
- 1 <= nums[i] <= 100
- 1 <= threshold <= 100

**思路：**

动态规划

就是求奇偶交替的最长子数组，加了两个限定条件

dp[i][0/1]表示以nums[i]结尾，并且结尾为偶数、奇数的最大长度

1. 当nums[i] > threshold时dp[i][0] = dp[i][1] = 0
2. 当nums[i] <= threshold时

  - 如果nums[i]是偶数dp[i][0] = dp[i-1][1] + 1 dp[i][1] = 0
  - 如果nums[i]是奇数dp[i][0] = 0 dp[i][1] = dp[i-1][0] + 1
      由于限定了nums[l] % 2 == 0，即开始点不能为奇数
      当dp[i][1]==1的时候，要给它归零

```js
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let res = 0,
    dp = 0;
  for (let l = nums.length - 1; l >= 0; l--) {
    if (nums[l] > threshold) {
      dp = 0;
    } else if (l == nums.length - 1 || nums[l] % 2 != nums[l + 1] % 2) {
      dp++;
    } else {
      dp = 1;
    }
    if (nums[l] % 2 == 0) {
      res = Math.max(res, dp);
    }
  }
  return res;
};
```
