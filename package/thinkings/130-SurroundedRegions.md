# 被围绕的区域

给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：

连接：一个单元格与水平或垂直方向上相邻的单元格连接。
区域：连接所有 'O' 的单元格来形成一个区域。
围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
通过将输入矩阵 board 中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。

示例 1：

```js
输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

解释：
![1](https://pic.leetcode.cn/1718167191-XNjUTG-image.png)
在上图中，底部的区域没有被捕获，因为它在 board 的边缘并且不能被围绕。
```

示例 2：

```js
输入：board = [["X"]]

输出：[["X"]]
```

提示：

- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] 为 'X' 或 'O'

思路

1. 初始化：创建一个与输入矩阵 board 同样大小的矩阵，用于标记已经被访问过的区域。
2. 边界 DFS：从矩阵的边界开始，使用 DFS 遍历所有与边界相连的 'O'，并标记它们为 'NO'（Not Own），表示这些 'O' 不会被围绕。
3. 遍历矩阵：遍历整个矩阵，将所有未被标记为 'NO' 的 'O' 替换为 'X'，因为这些 'O' 就是被围绕的区域。
4. 恢复边界：将所有被标记为 'NO' 的 'O' 恢复为 'O'，因为它们是边界的一部分。
5. 返回结果：返回修改后的矩阵 board。

时间复杂度：O(m⋅n)，其中 m 和 n 分别是矩阵的行数和列数。需要遍历矩阵中的每个元素。
空间复杂度：O(m⋅n)，用于存储标记矩阵。

```js
const solve = (board) => {
  const m = board.length;
  if (m == 0) return;
  // [] 情况的特判
  const n = board[0].length;
  const dfs = (i, j) => {
    if (i < 0 || i == m || j < 0 || j == n) return; // 越界了
    if (board[i][j] == 'O') {
      // 遇到O，染为NO
      board[i][j] = 'NO';
      dfs(i + 1, j); // 对四个方向的邻居进行dfs
      dfs(i - 1, j);
      dfs(i, j + 1);
      dfs(i, j - 1);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == 'O') dfs(i, j); // 从最外层的O，开始DFS
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'NO') board[i][j] = 'O'; // 恢复为O
      else if (board[i][j] === 'O') board[i][j] = 'X'; // O变为X
    }
  }
};
```
