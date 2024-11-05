# 重新规划路线

n 座城市，从 0 到 n-1 编号，其间共有 n-1 条路线。因此，要想在两座不同城市之间旅行只有唯一一条路线可供选择（路线网形成一颗树）。去年，交通运输部决定重新规划路线，以改变交通拥堵的状况。

路线用 connections 表示，其中 connections[i] = [a, b] 表示从城市 a 到 b 的一条有向路线。

今年，城市 0 将会举办一场大型比赛，很多游客都想前往城市 0 。

请你帮助重新规划路线方向，使每个城市都可以访问城市 0 。返回需要变更方向的最小路线数。

题目数据 保证 每个城市在重新规划路线方向后都能到达城市 0 。

示例 1：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/30/sample_1_1819.png)

```javascript
输入：n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
输出：3
解释：更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。
```

示例 2：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/30/sample_2_1819.png)

```javascript
输入：n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
输出：2
解释：更改以红色显示的路线的方向，使每个城市都可以到达城市 0 。
```

示例 3：

```javascript
输入：n = 3, connections = [[1,0],[2,0]]
输出：0
```

提示：

- 2 <= n <= 5 \* 10^4
- connections.length == n-1
- connections[i].length == 2
- 0 <= connections[i][0], connections[i][1] <= n-1
- connections[i][0] != connections[i][1]

思路：

拿到这个题目，首先需要理解这是一个关于有向图的问题，目的是通过改变有向边的方向，使得所有城市都能到达指定的城市 0 。由于题目中给出的路线网形成一棵树，我们可以考虑使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历这棵树，同时记录需要改变方向的边的数量。

1. 首先创建一个二维数组 `graph` 来存储图的信息，同时用一个额外的标识来表示边是否需要改变方向。
2. 然后创建一个 `visited` 数组来标记已经访问过的城市。
3. 定义 `dfs` 函数，从城市 0 开始进行深度优先搜索。
4. 在搜索过程中，如果当前边需要改变方向，则增加 `count` 的值。
5. 继续对未访问过的相邻城市进行递归搜索。

时间复杂度：O(n + m)，其中 n 是城市数量，m 是路线数量。因为需要遍历所有的城市和路线。
空间复杂度：O(n + m)，用于存储图、访问标记和其他辅助数据。

```javascript
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const graph = new Array(n).fill(0).map(() => []);
  const visited = new Array(n).fill(false);
  let count = 0;

  for (const [from, to] of connections) {
    graph[from].push([to, 1]); // 1 表示需要改变方向
    graph[to].push([from, 0]); // 0 表示不需要改变方向
  }

  const dfs = (city) => {
    visited[city] = true;
    for (const [nextCity, needChange] of graph[city]) {
      if (!visited[nextCity]) {
        if (needChange) {
          count++;
        }
        dfs(nextCity);
      }
    }
  };

  dfs(0);
  return count;
};
```
