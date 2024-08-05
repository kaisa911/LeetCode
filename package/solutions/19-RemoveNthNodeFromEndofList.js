/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let res = new ListNode(-1);
  res.next = head;
  let fast = res,
    slow = res;
  // 快先走 n+1 步
  while (n--) {
    fast = fast.next;
  }
  // fast、slow 一起前进
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return res.next;
};
