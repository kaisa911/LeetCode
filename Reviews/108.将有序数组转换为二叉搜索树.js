/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const buildTree = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2); // 取中间位置
    const root = new TreeNode(nums[mid]);
    root.left = buildTree(left, mid - 1); // 构建左子树
    root.right = buildTree(mid + 1, right); // 构建右子树
    return root;
  };
  return buildTree(0, nums.length - 1);
};
// @lc code=end
