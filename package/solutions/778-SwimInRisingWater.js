var swimInWater = function (grid) {
  const n = grid.length;
  let left = 0,
    right = n * n - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (canReach(grid, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const canReach = (grid, threshold) => {
  if (grid[0][0] > threshold) {
    return false;
  }
  const n = grid.length;
  const visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  visited[0][0] = true;
  const queue = [[0, 0]];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  while (queue.length) {
    const [i, j] = queue.shift();

    for (const [di, dj] of directions) {
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < n && nj >= 0 && nj < n && !visited[ni][nj] && grid[ni][nj] <= threshold) {
        queue.push([ni, nj]);
        visited[ni][nj] = true;
      }
    }
  }
  return visited[n - 1][n - 1];
};
