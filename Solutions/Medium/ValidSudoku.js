/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let char,
    rowNums = [],
    colNums = [],
    cellNums = [],
    m = board.length,
    n = board[0].length;

  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      char = board[i][j];
      if (char !== '.') {
        if (rowNums.indexOf(char) > -1) return false;
        rowNums.push(char);
      }

      char = board[j][i];
      if (char !== '.') {
        if (colNums.indexOf(char) > -1) return false;
        colNums.push(char);
      }

      let row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      let col = (i % 3) * 3 + (j % 3);
      char = board[row][col];
      if (char !== '.') {
        if (cellNums.indexOf(char) > -1) return false;
        cellNums.push(char);
      }
    }
  }
  return true;
};
