/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  return handleTreeNode(nums, 0, nums.length - 1);
};

var handleTreeNode = (nums, low, high) => {
  if (low > high) return null;
  const mid = (low + high) >> 1;
  const node = new TreeNode(nums[mid]);
  node.left = handleTreeNode(nums, low, mid - 1);
  node.right = handleTreeNode(nums, mid + 1, high);
  return node;
};
