/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  let slow = head,
    fast = head;
  if (!(head && head.next)) {
    return null;
  }
  while (fast && fast.next) {
    fast = fast.next.next;
    if (!(fast && fast.next)) {
      slow.next = slow.next.next;
    }
    slow = slow.next;
  }
  return head;
};
