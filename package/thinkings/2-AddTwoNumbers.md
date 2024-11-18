# 两数相加

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

**实例：**

```js
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

思路：

对于这道“两数相加”的题目，由于给定的是逆序存储数字的链表，且要得到它们相加的结果链表，初步思路是同时遍历两个链表，逐位相加并处理进位。选择这种方法的理由是直观且符合链表的操作逻辑，通过逐位处理可以准确地计算和构建结果链表。

1. 首先创建一个结果链表的起始节点 `res` 并设置一个指针 `cur` 指向它，用于后续构建结果链表。同时初始化进位标志 `carry` 为 0。
2. 进入循环，只要 `l1` 或 `l2` 不为空，就继续处理。这样可以确保处理完两个链表的所有节点。
3. 在循环内，获取当前 `l1` 和 `l2` 节点的值，如果某个链表已经遍历完则取值为 0，然后计算两数之和 `sum` 。
4. 根据和计算进位标志 `carry` ，并将和对 10 取余得到当前位的结果，创建新节点并连接到结果链表中。
5. 将 `cur` 指针移动到新创建的节点，同时将 `l1` 和 `l2` 指针向前移动一位。
6. 循环结束后，检查进位标志，如果为 1 则在结果链表末尾添加一个值为 1 的节点。

时间复杂度：O(max(m, n))，其中 m 和 n 分别是两个链表的长度。因为需要遍历较长的那个链表来完成相加操作。
空间复杂度：O(max(m, n))，主要是创建新的链表来存储结果，结果链表的长度最大为 max(m, n) + 1。

```js
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
  const res = new ListNode(-1);
  let cur = res;
  let carry = 0;
  while (l1 || l2) {
    let num1 = !l1 ? 0 : l1.val;
    let num2 = !l2 ? 0 : l2.val;
    let sum = num1 + num2 + carry;
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
```
