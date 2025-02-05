/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;
  while (pre.next && pre.next.next) {
    let node1 = pre.next;
    let node2 = pre.next.next;
    node1.next = node2.next;
    node2.next = node1;
    pre.next = node2;
    pre = node1;
  }
  return dummy.next;
};
// @lc code=end
