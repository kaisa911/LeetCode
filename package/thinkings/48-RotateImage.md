# 旋转图像

给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

示例 1：
![](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
示例 2：
![](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)
输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

提示：

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000

思路：

1. 水平翻转：首先，将矩阵水平翻转，即第一行变成最后一行，第二行变成倒数第二行，以此类推。
2. 对角线交换：然后，对矩阵的主对角线上的元素进行交换，即左上角的元素与右下角的元素交换，左下角的元素与右上角的元素交换。

时间复杂度是 O(n^2)，其中 n 是矩阵的边长。这是因为我们需要遍历矩阵中的每个元素一次。
空间复杂度是 O(1)，因为我们是在原地修改矩阵，不需要额外的存储空间。

```js
/**
 * 顺时针旋转图像90度
 * @param {number[][]} matrix - 需要旋转的图像矩阵
 * @return {void} 直接修改输入的矩阵
 */
const rotate = (matrix) => {
  const n = matrix.length;
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
    }
  }
  // 主对角线交换
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};
```
