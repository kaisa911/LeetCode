/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  let rootIndex = -1;
  const restoreTree = (startIndex, endIndex) => {
    if (startIndex === endIndex) return null;
    rootIndex++;
    const rootValue = preorder[rootIndex];
    const index = inorder.indexOf(rootValue);
    const root = new TreeNode(rootValue);
    root.left = restoreTree(startIndex, index);
    root.right = restoreTree(index + 1, endIndex);
    return root;
  };
  return restoreTree(0, inorder.length);
};

// 直接递归
const buildTree = (preorder, inorder) => {
  if (!preorder.length && !inorder.length) return null;
  const head = preorder[0];
  const root = inorder.indexOf(head);

  const midLeft = inorder.slice(0, root),
    midRight = inorder.slice(root + 1),
    preLeft = preorder.slice(1, root + 1),
    preRight = preorder.slice(root + 1);

  const tree = new TreeNode(head);
  tree.left = buildTree(preLeft, midLeft);
  tree.right = buildTree(preRight, midRight);
  return tree;
};
