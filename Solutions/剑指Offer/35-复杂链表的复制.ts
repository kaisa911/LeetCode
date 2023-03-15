/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head, cache = new Map()) {
  if (!head) return null;

  if (cache.has(head)) return cache.get(head);

  const node = new Node(head.val);
  cache.set(head, node);

  node.next = copyRandomList(head.next, cache);
  node.random = copyRandomList(head.random, cache);

  return node;
};
