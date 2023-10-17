/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  while (true) {
    if (node.val > p.val && node.val > q.val) {
      node = node.left;
    } else if (node.val < p.val && node.val < q.val) {
      node = node.right;
    } else {
      break;
    }
  }
  return node;
};
