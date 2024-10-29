# 排列硬币

你总共有 n 枚硬币，并计划将它们按阶梯状排列。对于一个由 k 行组成的阶梯，其第 i 行必须正好有 i 枚硬币。阶梯的最后一行 可能 是不完整的。

给你一个数字 n ，计算并返回可形成 完整阶梯行 的总行数。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/04/09/arrangecoins1-grid.jpg)

```javascript
输入：n = 5
输出：2
解释：因为第三行不完整，所以返回 2 。
```

示例 2：
![2](https://assets.leetcode.com/uploads/2021/04/09/arrangecoins2-grid.jpg)

```javascript
输入：n = 8
输出：3
解释：因为第四行不完整，所以返回 3 。
```

提示：

- 1 <= n <= 2^31 - 1

思路：

对于这个问题，我们需要找到能形成完整阶梯行的总行数。由于阶梯行的硬币数量是一个递增的等差数列（1 + 2 + 3 + … + k），我们可以通过二分查找来解决。通过不断缩小搜索范围，找到满足条件的最大行数。原解法正是采用了二分查找的思路来寻找合适的行数。

1. 首先初始化左边界 left 为 1，右边界 right 为 n。这是因为行数最小是 1，最大可能是 n（极端情况，只有 1 行且这行有 n 个硬币）。
2. 进入循环，只要 left 小于 right：
   - 计算中间值 mid，这里采用了一种避免整数溢出的计算方法（Math.floor((right - left + 1) / 2)+ left）。
   - 然后判断 mid _ (mid + 1)是否小于等于 2 _ n。如果是，说明当前的 mid 行可能是符合条件的行数或者行数还可以更大，所以将 left 更新为 mid。
   - 如果 mid _ (mid + 1)> 2 _ n，说明当前的 mid 行太多了，需要将 right 更新为 mid - 1。
3. 最后返回 left，此时 left 就是能形成完整阶梯行的总行数。

时间复杂度：每次循环都将搜索范围缩小一半，所以时间复杂度是 O(log n)，其中 n 是硬币总数。
空间复杂度：只使用了几个常数级别的变量，空间复杂度为 O(1)。

```javascript
var arrangeCoins = function (n) {
  let left = 1,
    right = n;
  while (left < right) {
    const mid = Math.floor((right - left + 1) / 2) + left;
    if (mid * (mid + 1) <= 2 * n) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
```
