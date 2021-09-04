function exist(board: string[][], word: string): boolean {
  let res: boolean = false;
  const col: number = board[0].length;
  const row: number = board.length;

  // 深度遍历
  const dfs = (i: number, j: number, word: string): void => {
    // 边界校验
    if (res) return;
    if (word === '') {
      res = true;
      return;
    }
    if (i < 0 || j < 0 || i > row - 1 || j > col - 1) return;
    if (board[i][j] !== word[0]) return;

    let temp = board[i][j];
    board[i][j] = '';
    const newWord = word.slice(1);
    dfs(i - 1, j, newWord);
    dfs(i, j - 1, newWord);
    dfs(i, j + 1, newWord);
    dfs(i + 1, j, newWord);
    board[i][j] = temp;
  };

  for (let i: number = 0; i < row; i++) {
    for (let j: number = 0; j < col; j++) {
      if (word[0] === board[i][j]) {
        dfs(i, j, word);
      }
    }
  }
  return res;
}
