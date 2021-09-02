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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let left: ListNode | null = head;
  let right: ListNode | null = head;

  while (right !== null && k > 0) {
    right = right.next;
    k = k - 1;
  }
  while (right !== null) {
    right = right.next;
    left = left.next;
  }
  return left;
}

