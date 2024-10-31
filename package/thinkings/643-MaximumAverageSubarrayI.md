# 子数组最大平均数 I

给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

示例 1：

```javascript
输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75
解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

示例 2：

```javascript
输入：nums = [5], k = 1
输出：5.00000
```

提示：

- n == nums.length
- 1 <= k <= n <= 10^5
- -10^4 <= nums[i] <= 10^4

思路：

对于求子数组最大平均数这个问题，上述代码采用了滑动窗口的思路。题目要求找到长度为 k 的连续子数组的最大平均数，通过滑动窗口可以在一次遍历数组的过程中，不断更新长度为 k 的子数组的和，进而找到最大和，再计算出最大平均数。

1. 首先初始化两个变量，`cur`用于记录当前窗口内（长度为 k 的子数组）的数字总和，初始值为 0；`max`用于记录最大的窗口数字总和，初始值也为 0。
2. 然后开始遍历数组`nums`：
   - 当`i < k`时，即还在窗口的初始化阶段，将`nums[i]`累加到`cur`中，并且将`max`更新为`cur`。
   - 当`i >= k`时，进入滑动窗口阶段，此时`cur`更新为`cur + nums[i] - nums[i - k]`，这表示去掉窗口左边的元素（`nums[i - k]`），加上窗口右边新进入的元素（`nums[i]`），从而保持窗口长度为 k。然后比较`cur`和`max`，如果`cur > max`，则将`max`更新为`cur`。
3. 最后返回`max / k`，即最大平均数。

时间复杂度：只对数组`nums`进行了一次遍历，数组长度为`n`（`1 <= n <= 10^5`），所以时间复杂度为$O(n)$。
空间复杂度：只使用了`cur`和`max`两个额外变量，没有使用额外的数据结构来存储数据，所以空间复杂度为$O(1)$。

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      cur += nums[i];
      max = cur;
      continue;
    }
    cur = cur + nums[i] - nums[i - k];
    max = cur > max ? cur : max;
  }
  return max / k;
};
```
