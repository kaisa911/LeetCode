# N 皇后

按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/13/queens.jpg)

```js
输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

示例 2：

```js
输入：n = 1
输出：[["Q"]]
```

提示：

- 1 <= n <= 9

思路：
使用回溯算法。以下是算法的主要逻辑：

1. 初始化：创建一个结果数组result来存储所有可能的解决方案，以及三个集合cols、diag1和diag2分别来跟踪列、对角线/\和对角线\的占用情况。
2. 递归函数：定义了一个递归函数placeQueen，它接收当前行row作为参数。
3. 基本情况：如果当前行row等于棋盘大小n，则表示已成功放置了n个皇后，此时将当前棋盘状态添加到结果数组中。
4. 放置皇后：遍历每一列，检查是否可以在当前行和当前列放置皇后。如果该列和对角线都没有被占用，则在该位置放置皇后。
5. 递归放置：在放置皇后后，递归调用placeQueen函数，将行数加1，尝试放置下一行的皇后。
6. 回溯：在递归调用结束后，移除当前行的皇后（即回溯），以便尝试其他位置。
7. 开始递归：从第0行开始递归调用placeQueen函数。
8. 返回结果：递归完成后，返回所有解决方案的数组。

时间复杂度是O(n!)，因为对于每一行，我们尝试在n列中的任意一列放置皇后，并且对于每个可能的放置，我们都会递归地尝试下一行的放置。然而，由于对角线和列的检查，实际上很多排列会被快速排除，所以实际运行时间会快于纯粹的n!。
空间复杂度是O(n)，这是因为我们使用了一组集合和一个递归调用栈来存储当前状态。集合的大小最多包含n个元素（每个集合存储列、对角线/和对角线\上的位置），而递归调用的深度最多为n。

```js
/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const result = [];
  const cols = new Set(); // 列
  const diag1 = new Set(); // 对角线 / \
  const diag2 = new Set(); // 对角线 \ /
  const placeQueen = (row) => {
    if (row === n) {
      const board = [];
      for (let i = 0; i < n; i++) {
        const colStr = '.'.repeat(cols.has(i) ? 0 : i);
        board.push(colStr + 'Q' + '.'.repeat(n - i - 1));
      }
      result.push(board);
      return;
    }
    for (let col = 0; col < n; col++) {
      if (!cols.has(col) && !diag1.has(row - col) && !diag2.has(row + col)) {
        cols.add(col);
        diag1.add(row - col);
        diag2.add(row + col);
        placeQueen(row + 1);
        cols.delete(col);
        diag1.delete(row - col);
        diag2.delete(row + col);
      }
    }
  };
  placeQueen(0);
  return result;
};
```
