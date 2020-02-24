# 二分查找

给定一个  n  个元素有序的（升序）整型数组  nums 和一个目标值  target  ，写一个函数搜索  nums  中的 target，如果目标值存在返回下标，否则返回 -1。

**示例 1:**

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

**示例  2:**

```
输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
```

**提示：**

你可以假设 nums  中的所有元素是不重复的。
n  将在  [1, 10000]之间。
nums  的每个元素都将在  [-9999, 9999]之间。

**思路：**
二分查找就是左右指针的中间值和目标 target 值比较

- 如果中间值比目标值大，那么右指针就可以放到 middle-1
- 如果中间值比目标值小，那么左指针就可以放到 middle+1
- 如果中间值和目标值相等，那么输出这个 middle

注意的细节就是要考虑在 left<=right 下循环

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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
