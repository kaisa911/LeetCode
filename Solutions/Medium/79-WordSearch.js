var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));

  function dfs(y, x, index) {
    if (index === word.length) return true;
    if (y < 0 || y >= rows || x < 0 || x >= cols || visited[y][x] || board[y][x] !== word[index]) {
      return false;
    }

    visited[y][x] = true; // 标记为已访问
    let exists =
      dfs(y + 1, x, index + 1) ||
      dfs(y - 1, x, index + 1) ||
      dfs(y, x + 1, index + 1) ||
      dfs(y, x - 1, index + 1);
    visited[y][x] = false; // 回溯，恢复状态
    return exists;
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (!visited[y][x] && dfs(y, x, 0)) {
        return true;
      }
    }
  }

  return false;
};
