/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const result = [];
  const stack = [];
  const r = function (root) {
    if (!root) return;
    stack.push(root.val);
    if (!root.left && !root.right) {
      const pathSum = stack.reduce((a, b) => a + b, 0);
      if (pathSum === sum) {
        result.push([...stack]);
      }
      return;
    }
    r(root.left);
    if (root.left) {
      stack.pop();
    }
    r(root.right);
    if (root.right) stack.pop();
  };
  r(root);
  return result;
};
