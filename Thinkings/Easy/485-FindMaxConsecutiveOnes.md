# 最大连续 1 的个数

给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。

示例 1：

```javascript
输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```

示例 2:

```javascript
输入：nums = [1,0,1,1,0,1]
输出：2
```

提示：

- 1 <= nums.length <= 10^5
- nums[i] 不是 0 就是 1.

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var count = 0;
  var number = 0;
  for (var h = 0; h < nums.length; h = h + 1) {
    if (nums[h] == 1) {
      count = count + 1;
    } else {
      count = 0;
    }
    if (count > number) {
      number = count;
    }
  }
  return number;
};
```
