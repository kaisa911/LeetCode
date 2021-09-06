/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return helper(root.left, root.right);
}
function helper(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a === null || b === null) return a === b;
  if (a.val !== b.val) return false;
  return helper(a.left, b.right) && helper(a.right, b.left);
}
