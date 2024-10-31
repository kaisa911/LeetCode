# 最小操作次数使数组元素相等 II

给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最小操作数。

在一次操作中，你可以使数组中的一个元素加 1 或者减 1 。

测试用例经过设计以使答案在 32 位 整数范围内。

示例 1：

```javascript
输入：nums = [1,2,3]
输出：2
解释：
只需要两次操作（每次操作指南使一个元素加 1 或减 1）：
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
```

示例 2：

```javascript
输入：nums = [1,10,2,9]
输出：16
```

提示：

- n == nums.length
- 1 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9

```javascript
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length,
    ret = 0,
    x = nums[Math.floor(n / 2)];
  for (let i = 0; i < n; i++) {
    ret += Math.abs(nums[i] - x);
  }
  return ret;
};
```
