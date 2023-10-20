# 合并两个排序的链表

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例 1：

```js
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```

限制：

- 0 <= 链表长度 <= 1000

**思路：**

归并排序的思想

1. 创建一个新的链表 res，并设置一个指针 cur 指向它。这个新链表用于存储合并后的结果。
2. 当 l1 和 l2 都不为空时，比较 l1 和 l2 的当前节点的值。如果 l1 的值小于 l2，则将 cur 的下一个节点设置为 l1 的当前节点，并将 l1 向前移动一步。否则，将 cur 的下一个节点设置为 l2 的当前节点，并将 l2 向前移动一步。然后，将 cur 向前移动一步。
3. 当 l1 和 l2 中有一个为空时，将 cur 的下一个节点设置为不为空的那个链表的剩余部分。
4. 返回合并后的链表，即 res.next（因为 res 的第一个节点是我们初始化时创建的，其值为 -1，不应包含在最终结果中）。

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

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let res: ListNode | null = new ListNode(-1),
    cur: ListNode | null = res;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 === null ? l2 : l1;
  return res.next;
}
```
