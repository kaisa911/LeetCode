/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let res = new ListNode(-1),
    cur = res,
    carry = 0;

  while (l1 || l2) {
    let num1 = l1 ? 0 : l1.val;
    let num2 = l2 ? 0 : l2.val;
    let sum = num1 + num2;
    carry = sum >= 10 ? 1 : 0;
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  if (carry === 1) {
    cur.next = new ListNode(1);
  }

  return res.next;
};
