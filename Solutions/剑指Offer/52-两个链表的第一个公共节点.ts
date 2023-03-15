/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let n1 = headA;
  let n2 = headB;

  while (n1 != n2) {
    n1 = n1 == null ? headB : n1.next;
    n2 = n2 == null ? headA : n2.next;
  }
  return n1;
};
