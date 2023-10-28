var gameOfLife = function (board) {
  const originBoard = JSON.parse(JSON.stringify(board));
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = getAliveCellNum(originBoard, i, j);
      // 先处理死细胞
      if (board[i][j] === 0) {
        if (num === 3) {
          board[i][j] = 1;
        }
      } else {
        // 处理活细胞
        if (num < 2 || num > 3) {
          board[i][j] = 0;
        }
      }
    }
  }
};
