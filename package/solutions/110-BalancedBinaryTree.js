/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = root => {
  if (!root) return true;

  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  } else {
    if (isBalanced(root.left) && isBalanced(root.right)) {
      return true;
    } else {
      return false;
    }
  }
};
const depth = root => {
  if (!root) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
};
