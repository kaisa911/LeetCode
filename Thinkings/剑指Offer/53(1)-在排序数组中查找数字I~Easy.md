# 在排序数组中查找数字I

统计一个数字在排序数组中出现的次数。

示例 1:

```js
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2
```

示例 2:

```js
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
```

提示：

- 0 <= nums.length <= 105
- -109 <= nums[i] <= 109
- nums 是一个非递减数组
- -109 <= target <= 109

```ts
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res: Array<number> = [];
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  if (nums[right] != target) return res;
  res[0] = right;
  right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  res[1] = left - 1;
  return res[1] - res[0] + 1;
};
```
