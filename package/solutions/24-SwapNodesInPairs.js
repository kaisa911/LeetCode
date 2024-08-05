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
const swapPairs = (head) => {
  if (!head || head.next === null) {
    return head;
  }

  let tempHead = new ListNode(0);
  tempHead.next = head;
  let curr = tempHead;
  while (curr.next !== null && curr.next.next !== null) {
    let preNext = curr.next;
    let preNextNext = curr.next.next;

    curr.next.next = curr.next.next.next;
    curr.next = preNextNext;
    curr.next.next = preNext;
    curr = curr.next.next;
  }
  return tempHead.next;
};
