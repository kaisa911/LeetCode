/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return helper(root, 0);
};
var helper = function(root, sum) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return sum * 10 + root.val;
  }
  return helper(root.left, 10 * sum + root.val) + helper(root.right, 10 * sum + root.val);
};
