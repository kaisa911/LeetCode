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
var levelOrder = function (root) {
  if (root == null) return [];
  var res = [],
    queue = [root];
  while (queue.length !== 0) {
    var len = queue.length,
      addRes = [];
    while (len !== 0) {
      var node = queue.shift();
      addRes.push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
      len -= 1;
    }
    res.push([...addRes]);
  }
  return res;
};
