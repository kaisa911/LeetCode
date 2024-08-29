# 杨辉三角

给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
![1](https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

示例 1:

```js
输入: numRows = 5;
输出: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
```

示例 2:

```js
输入: numRows = 1;
输出: [[1]];
```

提示:

- 1 <= numRows <= 30

思路

1. 初始化结果数组：创建一个空数组 res，用于存储杨辉三角的每一行。
2. 外层循环：使用一个循环从 0 到 numRows - 1，表示杨辉三角的行数。
3. 初始化每行数组：在每次外层循环中，创建一个新的数组 e，用于存储当前行的元素。
4. 内层循环：使用另一个循环从 0 到当前行的索引 i，表示当前行的列数。
   - 如果列索引 j 为 0 或等于当前行索引 i，则当前元素值为 1（杨辉三角的边缘元素都是 1）。
   - 如果不是边缘元素，则当前元素值为左上方元素（res[i - 1][j - 1]）和右上方元素（res[i - 1][j]）之和。
5. 添加到结果数组：将当前行的数组 e 添加到结果数组 res 中。
6. 返回结果：返回结果数组 res。

时间复杂度：O(n^2)，其中 n 是输入 numRows。因为需要计算每一行的每一个元素。
空间复杂度：O(n^2)，因为结果数组 res 的大小与 numRows 的平方成正比。

```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  const res = [];
  for (let i = 0; i < numRows; i++) {
    const e = [];
    for (let j = 0; j <= i; j++) {
      e.push(j === 0 || i === j ? res[i - 1][0] : res[i - 1][j - 1] + res[i - 1][j]);
    }
    res.push(e);
  }
  return res;
};
```
