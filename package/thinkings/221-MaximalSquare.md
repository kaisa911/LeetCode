# 最大正方形

在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/26/max1grid.jpg)

```javascript
输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/11/26/max2grid.jpg)

```javascript
输入：matrix = [["0","1"],["1","0"]]
输出：1
```

示例 3：

```javascript
输入：matrix = [["0"]]
输出：0
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 300
- matrix[i][j] 为 '0' 或 '1'

思路：

1. 初始化动态规划数组：创建一个与输入矩阵 matrix 同样大小的二维数组 dp，用于存储到当前位置为止能构成的最大正方形的边长。
2. 遍历矩阵：遍历输入矩阵 matrix，对于每个元素 matrix[i][j]：
   - 如果 matrix[i][j] 是 '1'，则根据相邻的上方、左方和左上方的 dp 值来更新当前位置的 dp 值。dp[i][j] 表示的是以 (i, j) 为右下角的最大正方形的边长。
   - 如果 matrix[i][j] 是 '0'，则 dp[i][j] 保持为 0，因为 '0' 不能构成正方形的一部分。
3. 更新最大边长：在遍历过程中，每次更新 dp[i][j] 后，都检查并更新记录最大正方形边长的变量 maxSideLength。
4. 计算结果：遍历完成后，maxSideLength 将包含最大正方形的边长，返回其平方值作为结果。

时间复杂度：O(m _ n)，其中 m 和 n 分别是矩阵的行数和列数。需要遍历整个矩阵。
空间复杂度：O(m _ n)，在最坏的情况下，需要存储整个矩阵的动态规划信息。

```javascript
var maximalSquare = function (matrix) {
  let maxSideLength = 0; // 相当于纪录保持者
  let dp = new Array(matrix.length); // 构建dp数组
  for (let i = 0; i < matrix.length; i++) {
    dp[i] = new Array(matrix[i].length).fill(0); // dp二维数组，每一项初始化0
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          // base case
          dp[i][j] = 1; // 第一列和第一行的dp值只能为1
        } else {
          // 递推通式，求出dp[i][j]
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        }
        maxSideLength = Math.max(maxSideLength, dp[i][j]); //挑战纪录保持者，试图更新
      }
    }
  }
  return maxSideLength * maxSideLength; // 边长的平方
};
```
