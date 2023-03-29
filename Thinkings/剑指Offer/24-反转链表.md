# 反转链表

定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

限制：

- 0 <= 节点个数 <= 5000

**思路：**

翻转链表的思路就是要拿到pre，current，和next，current !== null的时候

- 把 cur.next 赋值给 next，
- 把 pre 赋值给 cur.next
- 把 cur 赋值给 pre
- 把 next 赋值给 cur

```ts
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

function reverseList(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null,
    cur: ListNode | null = head,
    next: ListNode | null = null;
  while (cur !== null) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}
```
