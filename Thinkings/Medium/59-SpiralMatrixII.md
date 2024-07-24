# 螺旋矩阵 II

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

示例 1：
![](https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg)

```js
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

示例 2：

```js
输入：n = 1
输出：[[1]]
```

提示：

- 1 <= n <= 20

思路：
1. 我们首先创建一个 n×n 的矩阵，初始值都为 0。
2. 我们定义四个边界变量：left、right、top 和 bottom，它们分别表示当前要填充的区域的左、右、上、下边界。
3. 我们使用一个 while 循环，从 1 到 n^2 填充数字。
4. 在每次循环中，我们按照顺时针顺序填充数字：
  - 从左到右填充顶行
  - 从上到下填充右列 
  - 从右到左填充底行
  - 从下到上填充左列
5. 每完成一圈填充后，我们更新边界变量，使得下一次填充的区域向内缩小。
6. 循环继续，直到所有数字都被填充。

这个算法的时间复杂度是 O(n^2)，因为我们需要填充n^2个元素。空间复杂度也是 O(n^2)用于存储结果矩阵。

```js
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // 创建一个 n x n 的矩阵，初始值都为 0
  const matrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  let num = 1; // 从 1 开始填充数字
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  while (num <= n * n) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // 从上到下
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // 从右到左
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // 从下到上
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
};
```
