# 最小高度树

树是一个无向图，其中任何两个顶点只通过一条路径连接。 换句话说，任何一个没有简单环路的连通图都是一棵树。

给你一棵包含 n 个节点的树，标记为 0 到 n - 1 。给定数字 n 和一个有 n - 1 条无向边的 edges 列表（每一个边都是一对标签），其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条无向边。

可选择树中任何一个节点作为根。当选择节点 x 作为根节点时，设结果树的高度为 h 。在所有可能的树中，具有最小高度的树（即，min(h)）被称为 最小高度树 。

请你找到所有的 最小高度树 并按 任意顺序 返回它们的根节点标签列表。

树的 高度 是指根节点和叶子节点之间最长向下路径上边的数量。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/09/01/e1.jpg)

```js
输入：n = 4, edges = [[1,0],[1,2],[1,3]]
输出：[1]
解释：如图所示，当根是标签为 1 的节点时，树的高度是 1 ，这是唯一的最小高度树。
```

示例 2：
![2](https://assets.leetcode.com/uploads/2020/09/01/e2.jpg)

```js
输入：n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
输出：[3,4]
```

提示：

- 1 <= n <= 2 \* 10^4
- edges.length == n - 1
- 0 <= ai, bi < n
- ai != bi
- 所有 (ai, bi) 互不相同
- 给定的输入 保证 是一棵树，并且 不会有重复的边

思路：

1. 构建图的邻接表表示。
2. 初始化一个队列，将所有度数为 1 的节点（叶子节点）加入队列。
3. 当队列不为空时，执行以下操作：
   - 记录当前队列的大小。
   - 遍历队列中的每个节点，对于每个节点，遍历其所有邻居节点，减少邻居节点的度数，并检查是否有节点的度数变为 1，如果有，则将这些节点加入队列。
   - 从队列中移除所有已处理的节点。
   - 减少树的节点总数（n）。
4. 当树中只剩下两个节点时，这两个节点就是最小高度树的根节点。

时间复杂度：O(N)，其中 N 是树中节点的数量。每次循环都会减少一层，总共不会超过 N 次。
空间复杂度：O(N)，用于存储图和度数组。

```javascript
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];
  const graph = Array.from({ length: n }, () => []);
  const degree = Array.from({ length: n }, () => 0);
  const queue = [];

  // 构建图和度数组
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
    degree[u]++;
    degree[v]++;
  }

  // 找到所有度为1的节点
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i);
    }
  }

  // 每次循环去掉一层，直到只剩下两个节点
  while (n > 2) {
    const size = queue.length;
    n -= size;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        degree[neighbor]--;
        if (degree[neighbor] === 1) {
          queue.push(neighbor);
        }
      }
    }
  }

  // 剩下的两个节点就是最小高度树的根节点
  return queue;
};
```
