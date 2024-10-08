# 寻找峰值

峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

示例 1：

```js
输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
```

示例 2：

```js
输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
```

提示：

- 1 <= nums.length <= 1000
- -2^31 <= nums[i] <= 2^31 - 1
- 对于所有有效的 i 都有 nums[i] != nums[i + 1]
  思路

1. 二分查找：使用两个指针 left 和 right 分别表示数组的开始和结束位置。在 left < right 的条件下进行循环。
2. 查找峰值：在循环中，计算中间位置 mid，并比较 mid 位置的元素和它右边元素的大小。如果 mid 位置的元素大于它右边的元素，说明峰值在 mid 的左侧（包括 mid），更新 right 为 mid。否则，峰值在 mid 的右侧，更新 left 为 mid + 1。
3. 返回结果：当 left 和 right 相遇时，循环结束，返回此时位置的值，即为数组中的一个峰值元素的索引。

时间复杂度：O(log n)，其中 n 是数组 nums 的长度。这是因为每次迭代都会将搜索范围减半。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```js
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    //因为题目中明确过没有相等的值，所以直接大于即可
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};
```
