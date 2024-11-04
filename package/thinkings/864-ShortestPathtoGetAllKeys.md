# 获取所有钥匙的最短路径

给定一个二维网格 grid ，其中：

'.' 代表一个空房间
'#' 代表一堵墙
'@' 是起点
小写字母代表钥匙
大写字母代表锁
我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，否则无法通过锁。

假设 k 为 钥匙/锁 的个数，且满足 1 <= k <= 6，字母表中的前 k 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。

返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。

示例 1：
![](https://assets.leetcode.com/uploads/2021/07/23/lc-keys2.jpg)

```js
输入：grid = ["@.a..","###.#","b.A.B"]
输出：8
解释：目标是获得所有钥匙，而不是打开所有锁。
```

示例 2：
![](https://assets.leetcode.com/uploads/2021/07/23/lc-key2.jpg)

````js
输入：grid = ["@..aA","..B#.","....b"]
输出：6
``
示例 3:
![](https://assets.leetcode.com/uploads/2021/07/23/lc-keys3.jpg)
```js
输入: grid = ["@Aa"]
输出: -1
````

提示：

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 30
- grid[i][j] 只含有 '.', '#', '@', 'a'-'f' 以及 'A'-'F'
- 钥匙的数目范围是 [1, 6]
- 每个钥匙都对应一个 不同 的字母
- 每个钥匙正好打开一个对应的锁

思路：

拿到这个题目，首先需要明确我们的目标是从起点出发，通过合理的移动获取所有的钥匙，同时要注意钥匙和锁的对应关系，以及不能穿过墙壁和在没有对应钥匙时不能通过锁。初步思路是使用广度优先搜索（BFS）来遍历所有可能的路径，同时记录当前已经获取的钥匙状态，通过状态来判断是否能够通过锁以及是否已经获取了所有钥匙。选择 BFS 是因为它能够逐层遍历，保证先找到的路径是最短的。

1. 首先，通过两层循环遍历网格，找到起点的位置并记录，同时为每个不同的钥匙建立与索引的映射。
2. 初始化一个三维的距离数组 `dist` 来记录不同位置和钥匙获取状态下的最小移动次数，使用队列 `queue` 进行 BFS 搜索。
3. 在 BFS 过程中，对于每个新的位置，根据不同的情况进行处理。如果是空地或起点，且该状态下的距离未被记录，更新距离并将新状态加入队列。
4. 如果是钥匙，获取其索引，更新钥匙获取状态下的距离，并在满足获取所有钥匙的条件时返回结果，否则将新状态加入队列。
5. 如果是锁，检查是否有对应的钥匙，如果有且该状态下的距离未被记录，更新距离并将新状态加入队列。

时间复杂度：O(m _ n _ 2^k)，其中 m 和 n 是网格的行数和列数，k 是钥匙的数量。因为我们可能需要遍历每个位置，并且对于每个位置有 2^k 种钥匙获取状态。
空间复杂度：O(m _ n _ 2^k)，主要用于存储距离数组 `dist` 和队列 `queue` 。

```js
const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
var shortestPathAllKeys = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let sx = 0,
    sy = 0;
  const keyToIndex = new Map();
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] === '@') {
        sx = i;
        sy = j;
      } else if ('a' <= grid[i][j] && grid[i][j] <= 'z') {
        if (!keyToIndex.has(grid[i][j])) {
          const idx = keyToIndex.size;
          keyToIndex.set(grid[i][j], idx);
        }
      }
    }
  }

  const queue = [];
  const dist = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(1 << keyToIndex.size).fill(-1)));
  queue.push([sx, sy, 0]);
  dist[sx][sy][0] = 0;
  while (queue.length) {
    const arr = queue.shift();
    let x = arr[0],
      y = arr[1],
      mask = arr[2];
    for (let i = 0; i < 4; ++i) {
      let nx = x + dirs[i][0];
      let ny = y + dirs[i][1];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] !== '#') {
        if (grid[nx][ny] === '.' || grid[nx][ny] === '@') {
          if (dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        } else if ('a' <= grid[nx][ny] && grid[nx][ny] <= 'z') {
          const idx = keyToIndex.get(grid[nx][ny]);
          if (dist[nx][ny][mask | (1 << idx)] === -1) {
            dist[nx][ny][mask | (1 << idx)] = dist[x][y][mask] + 1;
            if ((mask | (1 << idx)) === (1 << keyToIndex.size) - 1) {
              return dist[nx][ny][mask | (1 << idx)];
            }
            queue.push([nx, ny, mask | (1 << idx)]);
          }
        } else {
          const idx = keyToIndex.get(grid[nx][ny].toLowerCase());
          if ((mask & (1 << idx)) !== 0 && dist[nx][ny][mask] === -1) {
            dist[nx][ny][mask] = dist[x][y][mask] + 1;
            queue.push([nx, ny, mask]);
          }
        }
      }
    }
  }
  return -1;
};
```
