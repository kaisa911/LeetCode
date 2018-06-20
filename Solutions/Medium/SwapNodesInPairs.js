/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || head.next === null) {
    return head;
  }

  let dumpHead = new ListNode(0);
  dumpHead.next = head;
  let curr = dumpHead;
  while (curr.next !== null && curr.next.next !== null) {
    let preNext = curr.next;
    let preNextNext = curr.next.next;

    curr.next.next = curr.next.next.next;
    curr.next = preNextNext;
    curr.next.next = preNext;
    curr = curr.next.next;
  }
  return dumpHead.next;
};
