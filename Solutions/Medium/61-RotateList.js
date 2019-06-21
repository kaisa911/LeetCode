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
const rotateRight = (head, k) => {
  if (head == null || head.next == null) {
    return head;
  }
  let cur = head;
  let last = new ListNode(null);
  let i = 0;
  while (cur != null) {
    i++;
    last = cur;
    cur = cur.next;
  }
  cur = head;
  let temp = k % i >= 0 ? k % i : k;
  if (temp == 0) {
    return head;
  }
  while (i - temp - 1 > 0) {
    cur = cur.next;
    i--;
  }
  let top = cur.next;
  cur.next = null;
  last.next = head;
  return top;
};
