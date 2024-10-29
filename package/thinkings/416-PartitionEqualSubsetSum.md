# 分割等和子集

给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1：

```js
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
```

示例 2：

```js
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

提示：

- 1 <= nums.length <= 200
- 1 <= nums[i] <= 100

思路：

## 题目的整理分析

这道题是判断能否将一个正整数数组分割成两个子集，使两个子集元素和相等。

首先考虑解题思路，一种常见的方法是使用动态规划。先计算数组元素总和 sum，如果 sum 是奇数，那肯定无法分割成两等和子集，直接返回 false。如果 sum 是偶数，就以 sum/2 为目标值 target，判断能否从数组中选出一些元素使其和为 target。通过动态规划的思想，dp[j]表示能否用数组中的元素组成和为 j 的子集，对于每个元素 num，从 target 开始倒推更新 dp[j]，dp[j]只要能由 dp[j - num]得到（即 dp[j - num]为 true），那么 dp[j]就为 true。

1. 首先获取数组 nums 的长度 n，如果 n 小于 2，直接返回 false，因为无法分割。
2. 计算数组 nums 的元素总和 sum 和最大元素 maxNum。
3. 如果 sum 是奇数，返回 false，因为奇数无法分成两等和子集。
4. 计算目标值 target 为 sum/2，如果最大元素 maxNum 大于 target，也返回 false，因为最大元素都超过目标值了，不可能有解。
5. 创建动态规划数组 dp，长度为 target + 1，初始化为 false，dp[0]设为 true，表示和为 0 是可以达到的（不选任何元素）。
6. 对于 nums 中的每个元素 num，从 target 开始倒推到 num：
   - dp[j]通过逻辑或操作更新，如果 dp[j - num]为 true，那么 dp[j]就为 true，表示可以通过选择 num 达到和为 j。
7. 最后返回 dp[target]，如果 dp[target]为 true，表示可以组成和为 target 的子集，即可以将数组分割成两等和子集。

时间复杂度：有两层循环，外层循环遍历 nums 数组，内层循环从 target 倒推到 num，时间复杂度为 O(n \* target)，其中 n 是 nums 数组的长度，target 是数组总和的一半。
空间复杂度：创建了长度为 target + 1 的动态规划数组 dp，空间复杂度为 O(target)。

```js
var canPartition = function (nums) {
  const n = nums.length;
  if (n < 2) {
    return false;
  }
  let sum = 0,
    maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = maxNum > num ? maxNum : num;
  }
  if (sum & 1) {
    return false;
  }
  const target = Math.floor(sum / 2);
  if (maxNum > target) {
    return false;
  }
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let j = target; j >= num; --j) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
};
```
