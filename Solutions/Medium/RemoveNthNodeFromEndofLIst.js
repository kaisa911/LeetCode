/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
	let temp = head;
	let target = null;//倒数n+1个节点或头节点
	if (head === null || head.next === null) {//边界情况一
		return head = null
	}
	let count = 0;
	while (temp) {//循环结束后target为倒数第n+1个节 若n+1超出节点数则为null
		temp = temp.next;
		count++;
		if (count > n) {
			if (target === null) {
				target = head
			} else {
				target = target.next
			}
		}
	}
	if (target === null) {//说明此时要移除头节点
		return head.next;
	}
	temp = target.next//倒数第n个节点
	target.next = temp.next;
	temp.next = null;
	return head;

};