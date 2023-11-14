var longestZigZag = function (root) {
  let res = 0;
  const dfs = (node, l, r) => {
    res = Math.max(res, l, r);
    if (node.left) dfs(node.left, r + 1, 0);
    if (node.right) dfs(node.right, 0, l + 1);
  };
  dfs(root, 0, 0);
  return res;
};
