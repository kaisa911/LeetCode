/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // 辅助函数，用于递归检查节点是否在合理范围内
  function helper(node, lower = -Infinity, upper = Infinity) {
    // 如果节点为空，认为是有效的
    if (!node) {
      return true;
    }
    const val = node.val;
    // 若节点值不在合理范围内，返回 false
    if (val <= lower || val >= upper) {
      return false;
    }
    // 递归检查左子树，更新上界为当前节点值
    if (!helper(node.left, lower, val)) {
      return false;
    }
    // 递归检查右子树，更新下界为当前节点值
    if (!helper(node.right, val, upper)) {
      return false;
    }
    return true;
  }
  return helper(root);
};
// @lc code=end
