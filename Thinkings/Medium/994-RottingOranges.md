# 腐烂的橘子

在给定的网格中，每个单元格可以有以下三个值之一：

值  0  代表空单元格；
值  1  代表新鲜橘子；
值  2  代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回  -1。

**示例 1：**

```js
输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
```

**示例 2：**

```js
输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
```

**示例 3：**

```js
输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。
```

**提示：**

- 1 <= grid.length <= 10
- 1 <= grid[0].length <= 10
- grid[i][j] 仅为 0、1 或 2

**思路：**
这个适用了 BFS 广度优先遍历。先遍历这一层的的腐烂的，然后找到周围新鲜的，然后把即将腐败的放到队列里，下次再继续判断，直到没有新鲜的橘子

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue = []; // 统计新鲜的橘子

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j]);
      }
    }
  }

  let time = 0;

  // 直到没有新鲜的橘子为止
  while (queue.length) {
    let next = []; // 储存下一轮新鲜的橘子
    let rot = []; // 储存下一轮腐烂的橘子

    // 遍历新鲜橘子，区分下一轮的新鲜橘子和腐烂橘子
    for (let k = 0; k < queue.length; k++) {
      let i = queue[k][0];
      let j = queue[k][1];
      if (
        (grid[i - 1] && grid[i - 1][j] === 2) ||
        (grid[i + 1] && grid[i + 1][j] === 2) ||
        grid[i][j - 1] === 2 ||
        grid[i][j + 1] === 2
      ) {
        // 四周有橘子，说明已腐烂
        rot.push([i, j]);
      } else {
        next.push([i, j]);
      }
    }

    // 这一轮没有腐烂的橘子，则返回-1
    if (!rot.length) {
      return -1;
    }

    // 把这一轮腐烂的橘子标记成2
    for (let i = 0; i < rot.length; i++) {
      grid[rot[i][0]][rot[i][1]] = 2;
    }

    queue = next;
    time++;
  }

  return time;
};
```
