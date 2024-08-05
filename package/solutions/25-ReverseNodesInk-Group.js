/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  if (!head || head.next === null || k < 2) {
    return head;
  }

  let next_group = head;
  for (let i = 0; i < k; ++i) {
    if (next_group) {
      next_group = next_group.next;
    } else {
      return head;
    }
  }

  let new_next_group = reverseKGroup(next_group, k);
  let prev = null;
  let cur = head;

  while (cur !== next_group) {
    next = cur.next;
    cur.next = prev != null ? prev : new_next_group;
    prev = cur;
    cur = next;
  }
  return prev;
};
