/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const helper = (root, i, res) => {
  if (root) {
    res[i] = res[i] || [];
    res[i].push(root.val);
    helper(root.left, i + 1, res);
    helper(root.right, i + 1, res);
  }
};
const levelOrderBottom = root => {
  if (!root) return [];
  let res = [];
  helper(root, 0, res);
  return res.reverse();
};
