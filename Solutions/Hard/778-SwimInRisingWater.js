const swimInWater = (grid) => {
  let ARR = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  // 记录所有已访问过的点
  let dp = new Array(grid.length)
    .fill(0)
    .map((i) => new Array(grid[0].length).fill(0));
  let result = 0;
  let stack = [[0, 0]];

  while (stack.length > 0) {
    let [row, col] = stack.shift();
    // 用以记录当前已经保存的所有能走的点
    result = Math.max(result, grid[row][col]);

    if (row === grid.length - 1 && col === grid[0].length - 1) {
      // 到达终点，遍历结束
      break;
    }

    for (let [dr, dc] of ARR) {
      let [nr, nc] = [dr + row, dc + col];
      if (nr < grid.length && nr > 0 && nc < grid[0] && nc > 0 && !dp[nr][nc]) {
        dp[nr][nc] = 1;
        stack.push(nr, nc, grid[nr][nc]);
      }
    }

    stack.sort((a, b) => a[2] - b[2]);
  }
  return result;
};
