/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (!root) return 0;

  // 计算树的左子树高度
  let leftHeight = 0;
  let leftNode = root;
  while (leftNode) {
    leftHeight++;
    leftNode = leftNode.left;
  }

  // 计算树的右子树高度
  let rightHeight = 0;
  let rightNode = root;
  while (rightNode) {
    rightHeight++;
    rightNode = rightNode.right;
  }

  // 如果左子树和右子树高度相同，说明是满二叉树
  if (leftHeight === rightHeight) {
    return Math.pow(2, leftHeight) - 1;
  }

  // 否则，递归计算左子树和右子树的节点数
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
