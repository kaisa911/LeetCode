const numIslands = (grid) => {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //循环网格
      if (grid[i][j] === '1') {
        //如果为陆地，count++，
        count++;
        turnZero(i, j, grid);
      }
    }
  }
  return count;
};
function turnZero(i, j, grid) {
  //沉没四周的陆地
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === '0'
  )
    return;
  //检查坐标的合法性
  grid[i][j] = '0';
  //让四周的陆地变为海水
  turnZero(i, j + 1, grid);
  turnZero(i, j - 1, grid);
  turnZero(i + 1, j, grid);
  turnZero(i - 1, j, grid);
}
