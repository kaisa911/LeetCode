/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const arr = [];
  helper(root, '', arr);
  return arr;
};
var helper = function(root, cur, arr) {
  if (root === null) return;
  cur += root.val;
  if (root.left === null && root.right === null) {
    arr.push(cur);
  } else {
    helper(root.left, cur + '->', arr);
    helper(root.right, cur + '->', arr);
  }
};
