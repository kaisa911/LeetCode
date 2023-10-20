# 链表中倒数第 k 个节点

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。

例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

**示例：**

```js
给定一个链表: 1->2->3->4->5, 和 k = 2.

返回链表 4->5.
```

**思路：**

通过使用两个指针（left 和 right），快慢指针，从链表的头部开始移动来实现

1. 初始化两个指针 left 和 right，都指向链表的头部。
2. 首先，将 right 指针向前移动 k 步。如果在此过程中 right 指针到达链表的末尾（即 right 为 null），则返回 null，因为这意味着链表的长度小于 k。
3. 然后，同时移动 left 和 right 指针，直到 right 指针到达链表的末尾（即 right 为 null）。
4. 此时，left 指针将位于链表的倒数第 k 个节点，因为 right 指针比 left 指针领先 k 步。因此，返回 left 指针指向的节点。

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
