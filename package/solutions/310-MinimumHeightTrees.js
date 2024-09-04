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