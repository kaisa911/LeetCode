/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  let result = [];
  let head = root;
  let tail = head;
  while (head) {
    result.push(head.val);
    if (head.left) {
      tail.next = head.left;
      tail = tail.next;
    }
    if (head.right) {
      tail.next = head.right;
      tail = tail.next;
    }
    head = head.next;
  }
  return result;
};
