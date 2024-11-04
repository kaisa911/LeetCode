# 乘法表中第 k 小的数

几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第 k 小的数字吗？

乘法表是大小为 m x n 的一个整数矩阵，其中 mat[i][j] == i \* j（下标从 1 开始）。

给你三个整数 m、n 和 k，请你在大小为 m x n 的乘法表中，找出并返回第 k 小的数字。

示例 1：
![](https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg)

```javascript
输入：m = 3, n = 3, k = 5
输出：3
解释：第 5 小的数字是 3 。
```

示例 2：
![](https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg)

```javascript
输入：m = 2, n = 3, k = 6
输出：6
解释：第 6 小的数字是 6 。
```

提示：

- 1 <= m, n <= 3 \*10^4
- 1 <= k <= m \* n

思路：

拿到这个题目，首先要理解乘法表的构成，它是由 m 行 n 列的数字组成，每个数字是其所在行列数的乘积。要找到第 k 小的数字，可以考虑使用二分查找的方法。因为数字是有规律分布的，且存在大小关系，通过不断缩小搜索范围来确定目标数字。选择二分查找是因为它能在有序或者有一定规律的元素集合中高效地查找目标元素。

1. 初始化 low 为 1，high 为乘法表中的最大值 m \* n。
2. 在每次循环中，计算中间值 mid。
3. 对于每个行 i，计算小于等于 mid 的数字个数，通过 Math.min(Math.floor(mid / i), n) 来确保不超过 n 列。
4. 根据小于等于 mid 的数字个数 count 与 k 的比较来调整搜索范围。
5. 如果 count 大于等于 k，说明目标数字在左半部分，更新 high 为 mid。
6. 如果 count 小于 k，说明目标数字在右半部分，更新 low 为 mid + 1。

时间复杂度：O(m _ log(m _ n))，主要的时间消耗在二分查找上，每次查找需要遍历 m 行计算小于等于中间值的数字个数。
空间复杂度：O(1)，只使用了固定的几个变量，空间消耗恒定。

```javascript
var findKthNumber = function (m, n, k) {
  let low = 1,
    high = m * n;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(Math.floor(mid / i), n);
    }
    if (count >= k) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
```
