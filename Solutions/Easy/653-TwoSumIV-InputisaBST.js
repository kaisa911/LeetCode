/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val
 *     left
 *     right
 *     constructor(val?, left?, right?) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTarget(root, k) {
  const set = new Set();
  const DFS = (root, k) => {
    if (!root) {
      return false;
    }
    if (set.has(k - root.val)) {
      return true;
    }
    set.add(root.val);
    return DFS(root.left, k) || DFS(root.right, k);
  };
  return DFS(root, k);
}
