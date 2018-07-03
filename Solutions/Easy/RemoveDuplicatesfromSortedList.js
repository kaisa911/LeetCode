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
const deleteDuplicates = head => {
  if (!head || !head.next) return head;

  let start = head;
  while (start && start.next) {
    if (start.val === start.next.val) {
      let tmp = start.next;
      start.next = start.next.next;
      delete tmp;
    } else start = start.next;
  }
  return head;
};
