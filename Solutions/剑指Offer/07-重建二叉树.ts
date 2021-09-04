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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  const tree: TreeNode = new TreeNode(preorder.shift());
  const val: number = tree.val;
  const idx = inorder.indexOf(val);
  const leftArr = inorder.slice(0, idx);
  const rightArr = inorder.slice(idx + 1);
  tree.left = buildTree(preorder, leftArr);
  tree.right = buildTree(preorder, rightArr);
  return tree;
}
