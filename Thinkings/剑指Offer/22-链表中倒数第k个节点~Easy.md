# 链表中倒数第 k 个节点

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

**示例：**

```js
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

**思路：**

查找链表中倒数第 k 个节点，可以用双指针，

- 当右边的指针到 k 之后，左侧的指针开始前进，
- 等右侧指针到最后的节点的时候，那左侧的指针就是倒数第 k 个节点

```typescript
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  let left: ListNode | null = head;
  let right: ListNode | null = head;

  while (right !== null && k > 0) {
    right = right.next;
    k -= 1;
  }
  while (right !== null) {
    right = right.next;
    left = left.next;
  }
  return left;
}
```
