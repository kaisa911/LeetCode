# 搜索二维矩阵

编写一个高效的算法来判断  m x n  矩阵中，是否存在一个目标值。该矩阵具有如下特性：

- 每行中的整数从左到右按升序排列。
- 每行的第一个整数大于前一行的最后一个整数。

**示例  1:**

```js
输入: matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
target = 3;
输出: true;
```

**示例  2:**

```js
输入: matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
target = 13;
输出: false;
```

**思路：**
剑指Offer第一题

1. 确定起始点：由于矩阵的行是有序的，我们可以从矩阵的左下角开始搜索，即 (i = row - 1, j = 0)。
2. 搜索循环：在矩阵中进行搜索，如果当前元素大于目标值，说明目标值可能在上一行，因此将 i 减 1；如果当前元素小于目标值，说明目标值可能在下一行或同一行的右侧，因此将 j 加 1。
3. 边界检查：在每次循环中，需要检查索引 i 和 j 是否在矩阵的边界内。
4. 找到目标值：如果当前元素等于目标值，直接返回 true。
5. 搜索失败：如果遍历完整个矩阵都没有找到目标值，返回 false。

时间复杂度：O(m+n)，其中 m 是矩阵的行数，n 是列数。在最坏的情况下，我们可能需要遍历矩阵的一行和一列。
空间复杂度：O(1)，算法只使用了常数级别的额外空间。

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  if (!matrix.length) return false;
  const row = matrix.length;
  const col = matrix[0].length;
  let i = row - 1;
  let j = 0;
  while (i >= 0 && j <= col - 1) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++;
    } else {
      return true;
    }
  }
  return false;
};
```
