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
var addTwoNumbers = function (l1, l2) {
	//定义一个新链表res，一个temp的链表cur，用来当作res的指针，一个进位标志carry
	let res = new ListNode(-1),
		cur = res,
		carry = 0;
	while (l1 !== null || l2 !== null) {
		//取到两个链表当前的数值
		let num1 = l1 == null ? 0 : l1.val;
		let num2 = l2 == null ? 0 : l2.val;
		//求和
		let sum = num1 + num2 + carry;
		//对进位标志的验证
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