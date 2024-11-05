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
