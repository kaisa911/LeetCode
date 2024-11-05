var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;
  k = k % total;
  if (k === 0) {
    return grid;
  }

  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const newI = Math.floor((i * cols + j + k) / cols);
      const newJ = (i * cols + j + k) % cols;
      newGrid[newI][newJ] = grid[i][j];
    }
  }
  return newGrid;
};
