var searchBST = function (root, val) {
  while (root) {
    if (val === root.val) {
      return root;
    }
    root = val < root.val ? root.left : root.right;
  }
  return null;
};
