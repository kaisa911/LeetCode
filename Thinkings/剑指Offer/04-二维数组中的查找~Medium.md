# 二维数组中的查找

在一个 n \* m 的二维数组中，每一行都按照从左到右**非递减**的顺序排序，每一列都按照从上到下**非递减**的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```js
[
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
```

给定 target = 5，返回  true。

给定  target = 20，返回  false。

限制：

- 0 <= n <= 1000
- 0 <= m <= 1000

**思路：**

这个题我想到的就是，从左到右非递减，从上到下非递减，那就从**左下角**开始找，

- 如果 target 比左下角的值大，那就同行往右找，找到最后没有，就返回 false，有就返回 true
- 如果 target 比左下角的值小，那就往上一行继续当左下角继续上一步
- 直到找到值返回 true，或者没找到返回 false

```ts
function findNumberIn2DArray(matrix: number[][], target: number): boolean {
  if (!matrix.length || (matrix[0] && !matrix[0].length)) {
    return false;
  }
  let row: number = matrix.length - 1;
  let col: number = 0;
  while (row >= 0 && col <= matrix[0].length - 1) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      col += 1;
    } else if (matrix[row][col] > target) {
      row -= 1;
    }
  }
  return false;
}
```
