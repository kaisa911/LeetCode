# 顺时针打印矩阵

输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

```js
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

示例 2：

```js
输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

限制：

- 0 <= matrix.length <= 100
- 0 <= matrix[i].length <= 100

**思路：**

顺时针打印矩阵的顺序是 “从左向右、从上向下、从右向左、从下向上” 循环。

那就考虑设定矩阵的“左、上、右、下”四个边界，模拟以上矩阵遍历顺序。

- 空值处理： 当 matrix 为空时，直接返回空列表 [] 即可。
- 初始化： 矩阵 左、右、上、下 四个边界 left , right , top , bottom ，用于打印的结果列表 res 。
- 循环打印： “从左向右、从上向下、从右向左、从下向上” 四个方向循环，每个方向打印中做以下三件事 （各方向的具体信息见下表） ；
  - 根据边界打印，即将元素按顺序添加至列表 res 尾部；
  - 边界向内收缩1 （代表已被打印）；
  - 判断是否打印完毕（边界是否相遇），若打印完毕则跳出。
- 返回值： 返回 res 即可。


```ts
function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows: number = matrix.length,
    columns: number = matrix[0].length;
  const res: number[] = [];
  let left: number = 0,
    right: number = columns - 1,
    top: number = 0,
    bottom: number = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      res.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      res.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        res.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        res.push(matrix[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return res;
}

```
