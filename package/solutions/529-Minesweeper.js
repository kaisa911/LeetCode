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
