# 扫雷游戏

让我们一起来玩扫雷游戏！

给你一个大小为 m x n 二维字符矩阵 board ，表示扫雷游戏的盘面，其中：

> 'M' 代表一个 未挖出的 地雷，
> 'E' 代表一个 未挖出的 空方块，
> 'B' 代表没有相邻（上，下，左，右，和所有 4 个对角线）地雷的 已挖出的 空白方块，
> 数字（'1' 到 '8'）表示有多少地雷与这块 已挖出的 方块相邻，
> 'X' 则表示一个 已挖出的 地雷。
> 给你一个整数数组 click ，其中 click = [clickr, clickc] 表示在所有 未挖出的 方块（'M' 或者 'E'）中的下一个点击位置（clickr 是行下标，clickc 是列下标）。

根据以下规则，返回相应位置被点击后对应的盘面：

- 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X' 。
- 如果一个 没有相邻地雷 的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的 未挖出 方块都应该被递归地揭露。
- 如果一个 至少与一个地雷相邻 的空方块（'E'）被挖出，修改它为数字（'1' 到 '8' ），表示相邻地雷的数量。
- 如果在此次点击中，若无更多方块可被揭露，则返回盘面。

示例 1：
![1](https://assets.leetcode.com/uploads/2023/08/09/untitled.jpeg)

```js
输入：board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]
输出：[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
```

示例 2：
![1](https://assets.leetcode.com/uploads/2023/08/09/untitled-2.jpeg)

```js
输入：board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]
输出：[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]
```

提示：

- m == board.length
- n == board[i].length
- 1 <= m, n <= 50
- board[i][j] 为 'M'、'E'、'B' 或数字 '1' 到 '8' 中的一个
- click.length == 2
- 0 <= clickr < m
- 0 <= clickc < n
- board[clickr][clickc] 为 'M' 或 'E'

思路：

拿到这个题目，首先需要明确题目给定了一个扫雷游戏的盘面和点击位置，需要根据不同的方块类型和相邻地雷数量进行相应的处理。初步思路是判断点击的方块类型，如果是地雷则直接标记为'X'结束，如果是未挖出的空方块，计算其相邻地雷数量，根据数量决定是标记为数字还是递归地揭露相邻的未挖出方块。选择这种方法的理由是能够清晰地按照题目要求逐步处理不同情况，通过递归可以方便地处理相邻方块的揭露。

1. 首先定义了盘面的行数`m`和列数`n`，以及表示 8 个方向的数组`dirs`。
2. `dfs`函数用于递归处理每个未挖出的空方块。首先进行边界判断和方块类型判断，如果不是未挖出的空方块则直接返回。
3. 计算当前方块相邻的地雷数量。
4. 如果相邻地雷数量为 0，则将当前方块标记为'B'，并对 8 个方向递归调用`dfs`函数。
5. 如果相邻地雷数量不为 0，则将当前方块标记为对应的数字。
6. 根据点击位置的方块类型进行处理，如果是地雷则标记为'X'，否则调用`dfs`函数。

时间复杂度：O(mn)，因为在最坏情况下需要遍历整个盘面。
空间复杂度：O(mn)，递归调用`dfs`函数时的栈空间以及存储 8 个方向的辅助数组的空间，都与盘面的大小成正比。

```js
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
  const m = board.length;
  const n = board[0].length;
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const dfs = (row, col) => {
    if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'E') {
      return;
    }

    let count = 0;
    for (const [dx, dy] of dirs) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && board[newRow][newCol] === 'M') {
        count++;
      }
    }

    if (count === 0) {
      board[row][col] = 'B';
      for (const [dx, dy] of dirs) {
        dfs(row + dx, col + dy);
      }
    } else {
      board[row][col] = count.toString();
    }
  };

  const row = click[0];
  const col = click[1];
  if (board[row][col] === 'M') {
    board[row][col] = 'X';
  } else {
    dfs(row, col);
  }

  return board;
};
```
