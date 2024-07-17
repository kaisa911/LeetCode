# 在排序数组中查找元素的第一个和最后一个位置

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

```js
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

示例 2：

```js
输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
```

示例 3：

```js
输入：nums = [], target = 0
输出：[-1,-1]
```

提示：

- 0 <= nums.length <= 105
- -10^9 <= nums[i] <= 10^9
- nums 是一个非递减数组
- -10^9 <= target <= 10^9

思路：
这个问题可以通过两次二分查找解决，第一次找到目标值的第一个位置，第二次找到目标值的最后一个位置。

1. 第一次二分查找：找到目标值的开始位置。

- 初始化指针 left 和 right，分别指向数组的开始和结束。
- 循环直到 left 大于 right。
- 计算中间索引 mid。
- 如果 nums[mid] 小于 target，则将 left 设置为 mid + 1。
- 否则，将 right 设置为 mid。
- 循环结束后，right 将指向目标值的第一个可能位置。

2. 验证目标值是否存在：在循环结束后，检查 nums[right] 是否等于 target。

- 如果不等于，说明目标值不存在，返回 [-1, -1]。

3. 第二次二分查找：找到目标值的结束位置。

- 初始化 right 为数组长度，并将 left 设置为 right - 1。
- 循环直到 left 大于 right。
- 计算中间索引 mid。
- 如果 nums[mid] 小于等于 target，则将 left 设置为 mid + 1。
- 否则，将 right 设置为 mid。
- 循环结束后，left - 1 将指向目标值的最后一个位置。

4. 返回结果：将找到的开始位置和结束位置存储在结果数组中并返回。

两次二分查找的时间复杂度都是 O(log n)，因此总时间复杂度为 O(log n)。算法的空间复杂度为 O(1)，因为除了输入数组外，我们只使用了常数级别的额外空间。

```js
const findFirst = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return nums[right] === target ? right : -1;
};
const findLast = (nums, target) => {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left - 1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let res = [-1, -1];
  let first = findFirst(nums, target);
  if (first !== -1) {
    res[0] = first;
    res[1] = findLast(nums, target);
  }
  return res;
};
```
