/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head.val === val) {
    head = head.next;
    return head;
  }
  const res: ListNode | null = head;
  while (head && head.next) {
    if (head.next.val === val) {
      head.next = head.next.next;
    }
    head = head.next;
  }
  return res;
}
