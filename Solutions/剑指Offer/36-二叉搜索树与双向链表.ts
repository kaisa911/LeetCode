/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root == null) return null;
  let pre, head;
  const dfs = (cur) => {
    if (cur == null) return;
    dfs(cur.left);

    if (pre != null) pre.right = cur;
    else head = cur;

    cur.left = pre;
    pre = cur;

    dfs(cur.right);
  };
  dfs(root);
  head.left = pre;
  pre.right = head;
  return head;
};
