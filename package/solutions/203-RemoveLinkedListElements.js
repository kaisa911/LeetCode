/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 虚拟头节点，方便处理头节点就是要删除的情况
  const dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next; // 删除当前节点
    } else {
      current = current.next; // 移动到下一个节点
    }
  }

  return dummy.next; // 返回处理后的头节点
};
