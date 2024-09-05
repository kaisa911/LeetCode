/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  // 第一阶段，链表前半部分入栈
  let slow = head,
    fast = head;
  const stack = [];
  while (fast?.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next?.next;
  }
  // 第二阶段，继续遍历后半部分与前半部分相加求最大值
  let ret = 0;
  while (slow) {
    ret = Math.max(ret, slow.val + stack.pop());
    slow = slow.next;
  }
  return ret;
};
