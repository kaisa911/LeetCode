var flatten = function (root) {
  if (!root) return null;
  
  let left = flatten(root.left);
  let right = flatten(root.right);
  
  if (left) {
    // 链接左子树的最后一个节点到右子树
    let last = left;
    while (last.right) last = last.right;
    last.right = right;
    
    // 将左子树作为新的左子树
    root.left = null;
    root.right = left;
  }
  
  return root;
};