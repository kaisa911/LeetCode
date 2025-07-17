/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function generate(start, end) {
    const trees = [];
    if (start > end) {
      trees.push(null);
      return trees;
    }
    // 遍历从 start 到 end 的每个数字，将其作为根节点
    for (let i = start; i <= end; i++) {
      // 递归生成左子树
      const leftSubtrees = generate(start, i - 1);
      // 递归生成右子树
      const rightSubtrees = generate(i + 1, end);
      // 组合所有可能的左子树和右子树
      for (const left of leftSubtrees) {
        for (const right of rightSubtrees) {
          const root = new TreeNode(i);
          root.left = left;
          root.right = right;
          trees.push(root);
        }
      }
    }
    return trees;
  }
  return generate(1, n);
};
// @lc code=end
