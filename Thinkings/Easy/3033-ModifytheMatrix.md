# 修改矩阵

给你一个下标从 0 开始、大小为 m x n 的整数矩阵 matrix ，新建一个下标从 0 开始、名为 answer 的矩阵。使 answer 与 matrix 相等，接着将其中每个值为 -1 的元素替换为所在列的 最大 元素。

返回矩阵 answer 。

**示例 1：**
![1](https://assets.leetcode.com/uploads/2023/12/24/matrix1.png)

```js
输入：matrix = [[1,2,-1],[4,-1,6],[7,8,9]]
输出：[[1,2,9],[4,8,6],[7,8,9]]
解释：上图显示了发生替换的元素（蓝色区域）。

- 将单元格 [1][1] 中的值替换为列 1 中的最大值 8 。
- 将单元格 [0][2] 中的值替换为列 2 中的最大值 9 。
```

**示例 2：**

![2](https://assets.leetcode.com/uploads/2023/12/24/matrix2.png)

```js
输入：matrix = [[3,-1],[5,2]]
输出：[[3,2],[5,2]]
解释：上图显示了发生替换的元素（蓝色区域）。
```

**提示：**

- m == matrix.length
- n == matrix[i].length
- 2 <= m, n <= 50
- -1 <= matrix[i][j] <= 100
- 测试用例中生成的输入满足每列至少包含一个非负整数。

**思路：**
使用列遍历，先扫一遍找到每一列的最大值，再扫一遍把 −1 替换成这一列的最大值即可。

时间复杂度：O(n×m)，其中 n 表示矩阵的行数，m 表示矩阵的列数。
空间复杂度：O(1)。

```js
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  for (let j = 0; j < m; j++) {
    let zd = -1;
    for (let i = 0; i < n; i++) {
      zd = Math.max(zd, matrix[i][j]);
    }
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] == -1) {
        matrix[i][j] = zd;
      }
    }
  }
  return matrix;
};
```
