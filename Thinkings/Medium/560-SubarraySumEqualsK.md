# 和为 K 的子数组

给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。

示例 1：

```js
输入：nums = [1,1,1], k = 2
输出：2
```

示例 2：

```js
输入：nums = [1,2,3], k = 3
输出：2
```

提示：

- 1 <= nums.length <= 2 * 104
- -1000 <= nums[i] <= 1000
- -107 <= k <= 107

```js
var subarraySum = function (nums, k) {
  const mp = new Map();
  mp.set(0, 1);
  let count = 0,
    pre = 0;
  for (const x of nums) {
    pre += x;
    if (mp.has(pre - k)) {
      count += mp.get(pre - k);
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1);
    } else {
      mp.set(pre, 1);
    }
  }
  return count;
};
```
