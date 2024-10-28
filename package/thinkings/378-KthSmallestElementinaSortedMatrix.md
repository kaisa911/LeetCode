# 有序矩阵中第 K 小的元素

给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

你必须找到一个内存复杂度优于 O(n2) 的解决方案。

示例 1：

```javascript
输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
输出：13
解释：矩阵中的元素为 [1,5,9,10,11,12,13,13,15]，第 8 小元素是 13
```

示例 2：

```javascript
输入：matrix = [[-5]], k = 1
输出：-5
```

提示：

- n == matrix.length
- n == matrix[i].length
- 1 <= n <= 300
- -10^9 <= matrix[i][j] <= 10^9
- 题目数据 保证 matrix 中的所有行和列都按 非递减顺序 排列
- 1 <= k <= n^2

思路：

对于这个问题，由于矩阵是按行和列都升序排列的，我们需要找到第 k 小的元素。一种可行的思路是利用二分查找的思想来解决。通过猜测一个中间值，然后计算矩阵中小于等于这个中间值的元素个数，根据这个个数与 k 的比较来调整搜索区间，最终找到第 k 小的元素。这种方法避免了对整个矩阵进行排序或者遍历所有元素，能够在满足内存复杂度要求的情况下有效地解决问题。

1. 首先定义了 countInMatrix 函数，用于计算矩阵中小于等于给定值 midVal 的元素个数。通过从矩阵的左上角开始，沿着对角线方向比较元素，根据比较结果移动行或列来计算个数。
2. 在 kthSmallest 函数中，初始化搜索区间的左右端点 low 和 high，分别为矩阵的最小值和最大值。
3. 在循环中，计算中间值 midVal，然后调用 countInMatrix 函数计算矩阵中小于等于 midVal 的元素个数 count。
4. 如果 count 小于 k，说明第 k 小的元素在 midVal 的右侧，将 low 更新为 midVal + 1；否则，将 high 更新为 midVal - 1。
5. 不断重复这个过程，直到 low 大于 high，最后返回 low，即为第 k 小的元素。

时间复杂度：O(nlog(maxVal - minVal))
空间复杂度：O(1)

```javascript
const countInMatrix = (matrix, midVal) => {
  const n = matrix.length; // 这题是方阵 n行n列
  let count = 0;
  let row = 0; // 第一行
  let col = n - 1; // 最后一列
  while (row < n && col >= 0) {
    if (midVal >= matrix[row][col]) {
      // 大于等于当前行的最右
      count += col + 1; // 不大于它的数增加col + 1个
      row++; // 比较下一行
    } else {
      // 干不过当前行的最右元素
      col--; // 留在当前行，比较左边一个
    }
  }
  return count;
};

const kthSmallest = (matrix, k) => {
  const n = matrix.length;
  let low = matrix[0][0];
  let high = matrix[n - 1][n - 1];
  while (low <= high) {
    let midVal = low + ((high - low) >>> 1); // 获取中间值
    let count = countInMatrix(matrix, midVal); // 矩阵中小于等于它的个数
    if (count < k) {
      low = midVal + 1;
    } else {
      high = midVal - 1;
    }
  }
  return low;
};
```
