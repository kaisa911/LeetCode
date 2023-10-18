# 只出现一次的数字 II

给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。

示例 1：

```js
输入：nums = [2,2,3,2]
输出：3
```

示例 2：

```js
输入：nums = [0,1,0,1,0,1,99]
输出：99
```

提示：

- 1 <= nums.length <= 3 * 104
- -231 <= nums[i] <= 231 - 1
- nums 中，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let ans = 0;
  for (const [num, occ] of freq.entries()) {
    if (occ === 1) {
      ans = num;
      break;
    }
  }
  return ans;
};
```
