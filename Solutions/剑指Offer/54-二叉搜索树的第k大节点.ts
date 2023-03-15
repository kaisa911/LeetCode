/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let ans = 0,
    count = 0;
  const helper = (root, k) => {
    if (root.right != null) helper(root.right, k);

    if (++count == k) {
      ans = root.val;
      return;
    }

    if (root.left != null) helper(root.left, k);
  };
  helper(root, k);
  return ans;
};
