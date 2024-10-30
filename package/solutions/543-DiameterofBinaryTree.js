var diameterOfBinaryTree = function (root) {
  let result = 0;

  function getDepth(root) {
    if (!root) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    result = Math.max(result, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  getDepth(root);
  return result;
};
