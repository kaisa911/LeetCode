/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  if (!root) return 0;
  if (!root.left && !root.right) {
    return root.val;
  }
  const res = [];
  const dfs = (root, sum) => {
    // 判断是否为叶子节点
    if (!root.left && !root.right) {
      res.push(sum);
      return;
    }
    if (root.left) {
      dfs(root.left, sum * 10 + root.left.val);
    }
    if (root.right) {
      dfs(root.right, sum * 10 + root.right.val);
    }
  };
  dfs(root, root.val);
  return res.reduce((a, b) => a + b, 0);
};

// @lc code=end
