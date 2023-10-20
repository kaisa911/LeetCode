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

迭代法来处理翻转链表

1. 初始化三个指针 pre、cur 和 next。pre 指向 null，cur 和 next 指向链表的头部。
2. 当 cur 不为 null 时，执行以下操作：
    - 将 next 指针指向 cur 的下一个节点。
    - 将 cur 的下一个节点设置为 pre，这样就完成了当前节点的反转。
    - 将 pre 和 cur 向前移动一步，即将它们分别设置为 cur 和 next。

3. 当 cur 为 null 时，链表已经被完全反转，此时 pre 指向新链表的头部。因此，返回 pre。

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
