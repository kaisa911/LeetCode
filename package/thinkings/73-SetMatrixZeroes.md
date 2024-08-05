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

1. 初始化标记：首先，检查第一行和第一列是否有零，如果有，则设置 firstRowHasZero 和 firstColHasZero 为 true。
2. 记录零的位置：使用第一行和第一列作为标记行和标记列。遍历矩阵的其余部分，如果发现某个元素为零，则在标记行的对应列和标记列的对应行位置记录一个非零值（这里使用 -1 作为标记）。
3. 置零操作：再次遍历矩阵，根据标记行和标记列的值，将对应的行和列置零。
4. 处理第一行和第一列：如果 firstRowHasZero 为 true，则将第一列的所有元素置零；如果 firstColHasZero 为 true，则将第一行的所有元素置零。
5. 原地修改：整个过程中，不使用额外的数组来存储零的位置，而是直接在矩阵上进行修改，实现了原地算法。

时间复杂度：O(m×n)，其中 m 和 n 分别是矩阵的行数和列数。这是因为算法需要遍历整个矩阵两次。
空间复杂度：O(1)，除了输入矩阵本身，只使用了常数级别的额外空间来存储标记状态。

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = (matrix) => {
  const m = matrix.length;
  const n = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // 标记零的位置
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) firstRowHasZero = true;
        if (j === 0) firstColHasZero = true;
        matrix[i][0] = matrix[0][j] = 0;
      }
    }
  }

  // 根据标记置零
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 恢复第一行和第一列
  for (let i = 0; i < m; i++) {
    if (firstRowHasZero) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = 0;
      }
    }
  }
  for (let j = 0; j < n; j++) {
    if (firstColHasZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][j] = 0;
      }
    }
  }
};
```
