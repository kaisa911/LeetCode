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
