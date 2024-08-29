# 杨辉三角 II

给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
![1](https://pic.leetcode-cn.com/1626927345-DZmfxB-PascalTriangleAnimated2.gif)

示例 1:

```js
输入: rowIndex = 3;
输出: [1, 3, 3, 1];
```

示例 2:

```js
输入: rowIndex = 0;
输出: [1];
```

示例 3:

```js
输入: rowIndex = 1;
输出: [1, 1];
```

提示:

- 0 <= rowIndex <= 33

思路

1. 初始化两个数组：创建两个数组 prev 和 curr，分别用于存储上一行和当前行的值。
2. 外层循环：使用一个循环从 0 到 rowIndex，表示杨辉三角的行数。
3. 初始化当前行：在每次外层循环开始时，将 curr 数组填充为 0。
4. 计算当前行：使用内层循环计算当前行的每个元素：
   - 如果列索引 j 为 0 或等于当前行索引 i，则当前元素值为 1（杨辉三角的边缘元素都是 1）。
   - 对于其他情况，当前元素值为左上方元素（prev[j - 1]）和右上方元素（prev[j]）之和。
5. 更新滚动数组：将 curr 数组作为下一轮的 prev 数组，即将 prev 和 curr 交换。
6. 返回结果：在所有行构建完成后，返回 prev 数组，它包含了第 rowIndex 行的值。

时间复杂度：O(n^2)，其中 n 是输入 rowIndex。因为需要计算每一行的每一个元素。
空间复杂度：O(n)，通过使用滚动数组，只存储了当前行和上一行的值。

```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  let [prev, curr] = [[], []];
  for (let i = 0; i <= rowIndex; i++) {
    curr.fill(0);
    for (let j = 0; j <= i; j++) {
      curr[j] = j === 0 || j === i ? 1 : prev[j - 1] + prev[j];
    }
    [prev, curr] = [curr, prev];
  }
  return prev;
};
```
