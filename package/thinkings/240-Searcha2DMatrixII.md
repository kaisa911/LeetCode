# 搜索二维矩阵 II

编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。

示例 1：
![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/searchgrid2.jpg)

```javascript
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
```

示例 2：
![image](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/11/25/searchgrid.jpg)

```javascript
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= n, m <= 300
- -10^9 <= matrix[i][j] <= 10^9
- 每行的所有元素从左到右升序排列
- 每列的所有元素从上到下升序排列
- -10^9 <= target <= 10^9

思路

1. 从矩阵的右上角开始搜索（row = 0，col = matrix[0].length - 1）。
2. 在每一步，比较当前元素与目标值：
   - 如果当前元素等于目标值，返回 true。
   - 如果当前元素大于目标值，向左移动（减小列索引 col--），因为在同一行中，左边的元素更小。
   - 如果当前元素小于目标值，向下移动（增加行索引 row++），因为在同一列中，下面的元素更大。
3. 如果遍历完所有元素都没有找到目标值，返回 false。

时间复杂度：O(m + n)，其中 m 是矩阵的行数，n 是矩阵的列数。这是因为在最坏的情况下，我们可能需要遍历每一行和每一列的元素一次。
空间复杂度：O(1)，因为我们只使用了常数级别的额外空间来存储行和列的索引。

```javascript
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let row = 0,
    col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else row++;
  }
  return false;
};
```
