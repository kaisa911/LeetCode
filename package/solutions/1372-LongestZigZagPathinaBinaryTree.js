var longestZigZag = function (root) {
  let maxLength = 0;
  const dfs = (node, isLeft, length) => {
    maxLength = Math.max(maxLength, length);
    if (node.left) {
      if (isLeft) {
        dfs(node.left, false, 1);
      } else {
        dfs(node.left, false, length + 1);
      }
    }
    if (node.right) {
      if (isLeft) {
        dfs(node.right, true, length + 1);
      } else {
        dfs(node.right, true, 1);
      }
    }
  };
  dfs(root, false, 0);
  return maxLength;
};
