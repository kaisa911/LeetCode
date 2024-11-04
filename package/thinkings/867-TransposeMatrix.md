# 转置矩阵

给你一个二维整数数组 matrix， 返回 matrix 的 转置矩阵 。

矩阵的 转置 是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
![](https://assets.leetcode.com/uploads/2021/02/10/hint_transpose.png)

示例 1：

```js
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```

示例 2：

```js
输入：matrix = [[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 1000
- 1 <= m \* n <= 10^5
- -10^9 <= matrix[i][j] <= 10^9

思路：

拿到这个转置矩阵的题目，首先要明确转置的定义，即行和列进行交换。初步思路就是创建一个新的矩阵来存储转置后的结果，然后通过两层循环遍历原矩阵，将原矩阵中每个元素按照转置的规则放置到新矩阵的对应位置。选择这种方法是因为它直观易懂，容易实现。

答案思路分析

1. 首先获取原矩阵的行数 `m` 和列数 `n`，为后续创建新矩阵和循环遍历做准备。
2. 创建一个新的二维数组 `transposed`，用于存储转置后的结果。这里使用 `new Array(n).fill(0).map(() => new Array(m).fill(0))` 初始化新矩阵，确保新矩阵的大小和元素初始值正确。
3. 通过两层循环遍历原矩阵。外层循环控制原矩阵的行，内层循环控制原矩阵的列。
4. 在循环中，将原矩阵 `matrix[i][j]` 的元素值放置到新矩阵 `transposed[j][i]` 的位置，实现转置。

时间复杂度：O(m _ n)，需要遍历原矩阵的所有元素。
空间复杂度：O(m _ n)，创建了一个与原矩阵大小相同的新矩阵来存储转置结果。

```js
var transpose = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const transposed = new Array(n).fill(0).map(() => new Array(m).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }
  return transposed;
};
```
