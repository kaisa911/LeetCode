var goodNodes = function (root) {
  const dfs = (root, path_max) => {
    if (root == null) {
      return 0;
    }
    let res = 0;
    if (root.val >= path_max) {
      res++;
      path_max = root.val;
    }
    res += dfs(root.left, path_max) + dfs(root.right, path_max);
    return res;
  };
  return dfs(root, -Infinity);
};
