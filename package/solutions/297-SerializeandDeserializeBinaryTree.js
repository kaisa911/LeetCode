/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (!root) return '#';

  let queue = [root];
  let vals = [];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      vals.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      vals.push('#');
    }
  }

  return vals.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;

  let vals = data.split(',');
  let root = new TreeNode(vals.shift());
  let queue = [root];

  while (queue.length && vals.length) {
    let node = queue.shift();
    let val = vals.shift();

    if (val !== '#') {
      node.left = new TreeNode(val);
      queue.push(node.left);
    }

    if (vals.length) {
      let val = vals.shift();
      if (val !== '#') {
        node.right = new TreeNode(val);
        queue.push(node.right);
      }
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
