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
这个好像是剑指 offer 的第一题吧
思路就是，从矩阵的左下方开始判断，如果比当前值大，就往右遍历
如果比当前值小，就往上走一层，然后继续判断，然后往上或者往右走

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
