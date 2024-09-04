# 省份数量

有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。

返回矩阵中 省份 的数量。

示例 1：
![](https://assets.leetcode.com/uploads/2020/12/24/graph1.jpg)

```js
输入：isConnected = [[1,1,0],[1,1,0],[0,0,1]]
输出：2
```

示例 2：
![](https://assets.leetcode.com/uploads/2020/12/24/graph2.jpg)

```js
输入：isConnected = [[1,0,0],[0,1,0],[0,0,1]]
输出：3
```

提示：

- 1 <= n <= 200
- n == isConnected.length
- n == isConnected[i].length
- isConnected[i][j] 为 1 或 0
- isConnected[i][i] == 1
- isConnected[i][j] == isConnected[j][i]

思路分析：
1. 初始化：创建一个 visited 集合来存储已经访问过的城市，以避免重复访问。
2. 遍历城市：遍历每个城市，对于每个未访问过的城市，执行深度优先搜索。
3. 深度优先搜索（DFS）：从当前城市开始，访问所有直接相连的城市，并将它们标记为已访问。这样可以确保所有直接或间接相连的城市都被访问并标记。
4. 省份计数：每找到一个未访问过的城市并完成一次DFS搜索，就表示找到了一个省份，省份数量加一。
5. 返回结果：遍历完所有城市后，返回找到的省份数量。

时间复杂度：O(n^2)，其中 n 是城市的数量。在最坏的情况下，可能需要遍历图的每条边。
空间复杂度：O(n)，用于存储已访问的城市。

```js
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const cities = isConnected.length;
  const visited = new Set();
  let provinces = 0;
  for (let i = 0; i < cities; i++) {
    if (!visited.has(i)) {
      dfs(isConnected, visited, cities, i);
      provinces++;
    }
  }
  return provinces;
};
const dfs = (isConnected, visited, cities, i) => {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] == 1 && !visited.has(j)) {
      visited.add(j);
      dfs(isConnected, visited, cities, j);
    }
  }
};
```
