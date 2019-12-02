# 矩阵置零

给定一个  m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

**示例  1:**

```js
输入: [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
输出: [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
```

**示例  2:**

```js
输入: [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
输出: [
  [0, 0, 0, 0],
  [0, 4, 5, 0],
  [0, 3, 1, 0],
];
```

**进阶:**

一个直接的解决方案是使用  O(mn)  的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？

**思路：**

从第一排开始，遍历，第一排有 0，就把 j 的记录到 col 里，i 就把 matrix 的第 i 行变成 0

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = matrix => {
  let col = [];
  for (let i = 0, len = matrix.length; i < len; i++) {
    let flag = false;
    for (let j = 0, len2 = matrix[0].length; j < len2; j++) {
      if (matrix[i][j] === 0) {
        flag = true;
        col.push(j);
      }
    }
    if (flag) {
      matrix[i] = new Array(matrix[0].length).fill(0);
    }
  }
  col = [...new Set(col)];
  matrix.forEach(item => {
    col.forEach(ele => {
      item[ele] = 0;
    });
  });
  return matrix;
};
```
