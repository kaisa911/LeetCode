# 水位上升的泳池中游泳

在一个 n x n 的整数矩阵 grid 中，每一个方格的值 grid[i][j] 表示位置 (i, j) 的平台高度。

当开始下雨时，在时间为 t 时，水池中的水位为 t 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。

你从坐标方格的左上平台 (0，0) 出发。返回 你到达坐标方格的右下平台 (n-1, n-1) 所需的最少时间 。

示例 1:
![](https://assets.leetcode.com/uploads/2021/06/29/swim1-grid.jpg)

```js
输入: grid = [[0,2],[1,3]]
输出: 3
解释:
时间为0时，你位于坐标方格的位置为 (0, 0)。
此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。
等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置
```

示例 2:
![](https://assets.leetcode.com/uploads/2021/06/29/swim2-grid-1.jpg)

```
输入: grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
输出: 16
解释: 最终的路线用加粗进行了标记。
我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的
```

提示:

- n == grid.length
- n == grid[i].length
- 1 <= n <= 50
- 0 <= grid[i][j] < n^2
- grid[i][j] 中每个值 均无重复

思路：

拿到这个题目，首先要明确这是一个关于在特定条件下寻找从起始点到终点的最少时间的问题。我们需要通过二分查找来尝试不同的水位阈值，然后利用广度优先搜索（BFS）来判断在当前水位阈值下能否从起点到达终点。选择二分查找是因为水位的取值范围是有限的，通过不断缩小范围可以较快地找到满足条件的最小水位。

1. 首先通过二分查找确定可能的水位阈值。
2. 对于每个尝试的水位阈值，使用广度优先搜索判断是否能够从起点 (0, 0) 到达终点 (n - 1, n - 1)。
3. 在 BFS 中，先处理起点，将其标记为已访问，并加入队列。
4. 然后不断取出队列头部的节点，检查其四个相邻方向的节点，如果未访问且水位小于等于当前阈值，则将其标记为已访问并加入队列。
5. 最后通过判断终点是否被访问来确定在当前水位阈值下是否可达。

时间复杂度：二分查找的时间复杂度为 O(log(n^2))，BFS 的时间复杂度为 O(n^2)，所以总的时间复杂度为 O(n^2 log(n^2))。
空间复杂度：使用了一个二维的 visited 数组来标记访问状态，以及一个队列来进行 BFS，空间复杂度为 O(n^2)。

```js
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
```
