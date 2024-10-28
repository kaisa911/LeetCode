# 生命游戏

根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

1. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
2. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
3. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
4. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；

下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

示例 1：
![image](https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg)

```javascript
输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

示例 2：
![image](https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg)

```javascript
输入：board = [[1,1],[1,0]]
输出：[[1,1],[1,1]]
```

提示：

- m == board.length
- n == board[i].length
- 1 <= m, n <= 25
- board[i][j] 为 0 或 1

进阶：

你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？

思路：
这个问题是关于“生命游戏”的模拟，它是一种零玩家游戏，其特点是不需要任何输入即可自行演化。在这个游戏中，每个细胞根据周围的细胞状态（活或死）来决定自己的下一个状态。我们需要实现一个函数，根据当前状态，计算出下一个状态。

1. 首先，我们定义了一个辅助函数 getAliveCellNum 来计算给定细胞周围活细胞的数量。
2. 然后，我们遍历棋盘上的每个细胞。对于活细胞，如果周围活细胞的数量不满足生存条件（2 或 3），我们将其标记为 2（表示需要死亡的活细胞）。
3. 对于死细胞，如果周围活细胞的数量恰好为 3，我们将其标记为-1（表示需要复活的死细胞）。
4. 最后，我们再次遍历棋盘，将标记为 2 的活细胞更新为 0（死亡），将标记为-1 的死细胞更新为 1（复活）。

时间复杂度：O(m\*n)，其中 m 和 n 分别是棋盘的行数和列数。我们需要遍历棋盘上的每个细胞两次。
空间复杂度：O(1)，我们只使用了常数级别的额外空间来存储计数器和标记值。

```javascript
var gameOfLife = function (board) {
  const m = board.length,
    n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        let count = getAliveCellNum(board, i, j);
        if (count < 2 || count > 3) {
          board[i][j] = 2; // 标记为需要死亡的活细胞
        }
      } else {
        let count = getAliveCellNum(board, i, j);
        if (count === 3) {
          board[i][j] = -1; // 标记为需要复活的死细胞
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0;
      } else if (board[i][j] === -1) {
        board[i][j] = 1;
      }
    }
  }
};

function getAliveCellNum(board, x, y) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const nx = x + i,
        ny = y + j;
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length) {
        count += board[nx][ny] === 1 || board[nx][ny] === 2 ? 1 : 0;
      }
    }
  }
  return count;
}
```