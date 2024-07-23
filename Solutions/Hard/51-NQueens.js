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
