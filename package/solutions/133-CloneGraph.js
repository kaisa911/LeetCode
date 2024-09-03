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
