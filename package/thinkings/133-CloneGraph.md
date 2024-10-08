# 克隆图

给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

class Node {
public int val;
public List<Node> neighbors;
}

测试用例格式：

简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。

邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。

示例 1：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/02/01/133_clone_graph_question.png)

```javascript
输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
输出：[[2,4],[1,3],[2,4],[1,3]]
解释：
图中有 4 个节点。
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。
```

示例 2：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/02/01/graph.png)

```javascript
输入：adjList = [[]]
输出：[[]]
解释：输入包含一个空列表。该图仅仅只有一个值为 1 的节点，它没有任何邻居。
```

示例 3：

```javascript
输入：adjList = []
输出：[]
解释：这个图是空的，它不含任何节点。
```

提示：

- 这张图中的节点数在 [0, 100] 之间。
- 1 <= Node.val <= 100
- 每个节点值 Node.val 都是唯一的，
- 图中没有重复的边，也没有自环。
- 图是连通图，你可以从给定节点访问到所有节点。

思路

1. 初始化：创建一个哈希映射 map 用于存储已访问的节点，以避免重复创建相同的节点。
2. 递归函数：定义一个递归函数 cloneGraph，它接收当前节点 node 和哈希映射 map 作为参数。
3. 特殊情况处理：如果当前节点为空，直接返回 null。
4. 检查已访问的节点：如果当前节点已经在 map 中，则直接返回 map 中存储的克隆节点。
5. 创建新节点：如果当前节点未被访问，创建一个新的 Node 对象 nNode，并将其值设置为当前节点的值。
6. 递归克隆邻居：遍历当前节点的所有邻居，对每个邻居递归调用 cloneGraph 函数进行克隆。
7. 存储克隆节点：将克隆的邻居节点存储到 nNode 的 neighbors 列表中，并在 map 中记录当前节点的克隆节点。
8. 返回克隆节点：返回新创建的克隆节点 nNode。

时间复杂度：O(N)，其中 N 是图中节点的数量。每个节点恰好被访问一次。
空间复杂度：O(N)，最坏情况下，递归栈的深度可以达到图中节点的数量，加上存储已访问节点的哈希映射。

```javascript
// hashMap保存已访问的节点
var cloneGraph = function (node, map = {}) {
  // 特判
  if (!node) return null;
  if (map[node.val]) return map[node.val];

  let nNode = new Node(node.val);
  map[node.val] = nNode;
  let neighbors = [];
  // 深度优先 便利neighbors.
  for (let i = 0; i < node.neighbors.length; ++i) {
    neighbors.push(cloneGraph(node.neighbors[i], map));
  }
  nNode.neighbors = neighbors;
  return nNode;
};
```
