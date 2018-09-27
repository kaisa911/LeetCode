/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = board => {
  let row = new Array(9),
    col = new Array(9),
    cell = new Array(9);
  let i, j;
  for (i = 0; i < 9; ++i) {
    row[i] = new Array(9);
    col[i] = new Array(9);
    cell[i] = new Array(9);
  }

  for (i = 0; i < 9; ++i) {
    for (j = 0; j < 9; ++j) {
      if (board[i][j] === '.') {
        continue;
      }
      let temp = +board[i][j] - 1;
      row[i][temp] = col[temp][j] = cell[~~(j / 3) + ~~(i / 3) * 3][temp] = true;
    }
  }

  const dfs = (d) => {
    if (d >= 81) {
      return true;
    }
    let i = ~~(d / 9),
      j = d % 9;
    if (board[i][j] !== '.') {
      return dfs(d + 1);
    }

    for (let k = 0; k < 9; ++k) {
      if (!(row[i][k] || col[k][j] || cell[~~(j / 3) + ~~(i / 3) * 3][k])) {
        board[i][j] = String(k + 1);
        row[i][k] = col[k][j] = cell[~~(j / 3) + ~~(i / 3) * 3][k] = true;
        if (dfs(d + 1)) {
          return true;
        }
        board[i][j] = '.';
        row[i][k] = col[k][j] = cell[~~(j / 3) + ~~(i / 3) * 3][k] = false;
      }
    }

    return false;
  };

  dfs(0);
};
