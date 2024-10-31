# 二分查找

给定一个  n  个元素有序的（升序）整型数组  nums 和一个目标值  target  ，写一个函数搜索  nums  中的 target，如果目标值存在返回下标，否则返回 -1。

**示例 1:**

```js
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例  2:**

```js
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示：**

你可以假设 nums  中的所有元素是不重复的。
n  将在  [1, 10000]之间。
nums  的每个元素都将在  [-9999, 9999]之间。

**思路：**

对于二分查找问题，由于数组是有序的，利用二分的思想可以高效地查找目标值。每次比较中间元素与目标值的大小，根据比较结果缩小查找范围。选择这种方法的理由是它能充分利用数组的有序性，在对数时间复杂度内找到目标值。

1. 首先初始化左指针 left 为 0，右指针 right 为数组 nums 的长度 - 1，这确定了初始的查找范围。
2. 然后进入 while 循环，只要 left 小于等于 right，就继续查找。
3. 在循环中，计算中间索引 middle，采用位运算 (left + right) >> 1 来计算，这和 (left + right) / 2 效果相同，但位运算在某些情况下效率更高。
4. 当 nums[middle]小于 target 时，说明目标值在中间元素的右侧，将 left 更新为 middle + 1，缩小查找范围到中间元素的右侧。
5. 当 nums[middle]大于 target 时，说明目标值在中间元素的左侧，将 right 更新为 middle - 1，缩小查找范围到中间元素的左侧。
6. 当 nums[middle]等于 target 时，找到了目标值，直接返回 middle。
7. 如果循环结束还未找到目标值，说明数组中不存在该目标值，返回 -1。

- 时间复杂度：每次循环都将查找范围缩小一半，所以时间复杂度为 O(log n)，其中 n 是数组 nums 的长度。
- 空间复杂度：只使用了几个额外的变量 left、right 和 middle，空间复杂度为 O(1)。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let middle = (left + right) >> 1;
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
```
