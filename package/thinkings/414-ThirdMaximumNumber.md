# 第三大的数

给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

示例 1：

```js
输入：[3, 2, 1]
输出：1
解释：第三大的数是 1 。
```

示例 2：

```javascript
输入：[1, 2]
输出：2
解释：第三大的数不存在, 所以返回最大的数 2 。
```

示例 3：

```javascript
输入：[2, 2, 3, 1]
输出：1
解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
```

提示：

- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1

进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？

思路：

对于这道题，我们需要从给定数组中找到第三大的数。一种可行的思路是先对数组进行排序，这样可以方便地找到最大的数、第二大的数等。由于题目要求返回不同数字中的第三大的数，所以在排序后还需要去除重复元素。

```js

```

## 答案思路分析

1. 首先初始化三个变量 first、second、third 为负无穷，用于存储第一大、第二大、第三大的数，同时初始化一个变量 count 为 0，用于记录不同数字的个数。
2. 然后遍历数组 nums 中的每个数 num：
   - 如果 num 大于 first，说明找到了新的最大数，更新 third 为之前的 second，second 为之前的 first，first 为 num，并且 count 加 1。
   - 如果 num 小于 first 且大于 second，说明找到了新的第二大数，更新 third 为之前的 second，second 为 num，并且 count 加 1。
   - 如果 num 小于 second 且大于 third，说明找到了新的第三大数，更新 third 为 num，并且 count 加 1。
3. 最后，如果 count 大于等于 3，说明找到了第三大的数，返回 third，否则返回 first。

时间复杂度：只需要遍历一次数组，时间复杂度为 O(n)，其中 n 是数组 nums 的长度。
空间复杂度：只使用了常数级别的额外变量，空间复杂度为 O(1)。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let count = 0;
  for (let num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
      count++;
    } else if (num < first && num > second) {
      third = second;
      second = num;
      count++;
    } else if (num < second && num > third) {
      third = num;
      count++;
    }
  }
  return count >= 3 ? third : first;
};
```
