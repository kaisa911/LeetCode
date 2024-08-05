# 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

```js
输入: (nums = [1, 3, 5, 6]), (target = 5);
输出: 2;
```

示例 2:

```js
输入: (nums = [1, 3, 5, 6]), (target = 2);
输出: 1;
```

示例 3:

```js
输入: (nums = [1, 3, 5, 6]), (target = 7);
输出: 4;
```

提示:

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 为 无重复元素 的 升序 排列数组
- -104 <= target <= 104

思路：

searchInsert 函数中，我们首先定义了两个指针 left 和 right，分别指向数组的开始和结束。然后我们进入一个 while 循环，在循环中，我们首先计算 mid，也就是 left 和 right 的中间位置。然后我们比较 nums[mid] 和 target 的值。

1. 如果 nums[mid] 等于 target，那么我们就找到了目标元素，返回 mid。
2. 如果 nums[mid] 小于 target，那么我们知道 target 必须在 mid 的右边，所以我们将 left 设置为 mid + 1。
3. 如果 nums[mid] 大于 target，那么我们知道 target 必须在 mid 的左边，所以我们将 right 设置为 mid - 1。
4. 当 left 大于 right 时，循环结束。此时，left 指向的就是 target 应该被插入的位置，所以我们返回 left。这就是使用二分查找法实现的 searchInsert 函数

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
```
