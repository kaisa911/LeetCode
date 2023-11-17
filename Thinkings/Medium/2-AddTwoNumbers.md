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

**思路：**
因为要返回一个新的链表来表示它们的和，所以就需要先创建一个链表。然后对参数的两个链表的每一个值进行相加，设置一个进位标志，来判断两个链表相加的时候，是否需要进位。相加结束，当前的链表向前行进一步，进入下一个 node，两个链表也相应的前进一步，继续求和。直到两个链表都没有下一个节点。最后，判断进位标志是否有进位，有的话在链表下一个节点设为 1。

1、新建一个当作结果的 ListNode  
2、设置当前节点，等于结果的节点。  
3、设置一个进位标识符  
4、遍历，只要 l1 或者 l2 不为 null，就一直循环。  
5、循环体：获取 l1 和 l2 的值，相加，判断是否进位，然后前往下一个节点。直到循环结束  
6、判断进位标识符是否有进位。  
7、返回这个链表

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
