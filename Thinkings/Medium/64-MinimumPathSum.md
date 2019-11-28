# 最小路径和

给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

```js
输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
```

思路：
我们新建一个额外的 dp 数组，与原矩阵大小相同。在这个矩阵中，dp(i, j)表示从坐标 (i, j) 到右下角的最小路径权值。我们初始化右下角的 dp 值为对应的原矩阵值，然后去填整个矩阵，对于每个元素考虑移动到右边或者下面，因此获得最小路径和我们有如下递推公式：

```js
dp(i, j) = grid(i, j) + min(dp(i + 1, j), dp(i, j + 1));
```

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = grid => {
  const row = grid.length;
  const col = grid[0].length;
  const res = Array(row).fill(Array(col).fill(0));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i == 0 && j == 0) {
        res[i][j] = grid[0][0];
      } else if (i == 0 && j !== 0) {
        res[i][j] = grid[i][j] + res[i][j - 1];
      } else if (i !== 0 && j == 0) {
        res[i][j] = grid[i][j] + res[i - 1][j];
      } else {
        res[i][j] = grid[i][j] + Math.min(res[i - 1][j], res[i][j - 1]);
      }
    }
  }
  return res[row - 1][col - 1];
};
```
