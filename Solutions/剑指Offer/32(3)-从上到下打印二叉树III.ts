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
  var queue = [];
  var res = [];
  var flag = false;
  if (!root) return res;
  queue.push(root);
  while (queue.length) {
    var items = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      if (flag) {
        var item = queue.shift();
        items.push(item.val);
        if (item.right) queue.push(item.right);
        if (item.left) queue.push(item.left);
      } else {
        var item = queue.pop();
        items.push(item.val);
        if (item.left) queue.unshift(item.left);
        if (item.right) queue.unshift(item.right);
      }
    }
    flag = !flag;
    res.push(items);
  }
  return res;
};
