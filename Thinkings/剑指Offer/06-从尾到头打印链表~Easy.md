# 从尾到头打印链表

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

```js
输入：head = [1,3,2]
输出：[2,3,1]
```

限制：

- 0 <= 链表长度 <= 10000

**思路：**

看到这个题，我就想到，用栈来做就可以，后进先出，然后把这个栈返回就可以了。

具体实现思路如下：

- 首先，检查输入的头节点是否为空。如果为空，就直接返回一个空数组。

- 然后，创建一个空数组res，用来存储链表中的值。

- 接下来，使用一个while循环遍历链表。在每次迭代中，都将当前节点的值插入到数组res的开头（使用unshift方法），然后将头节点移动到下一个节点。

- 最后，当链表遍历完毕（即头节点变为null）时，返回数组res。

这样，返回的数组res就包含了链表中的所有值，但顺序是反向的。

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

function reversePrint(head: ListNode | null): number[] {
  if (!head) return [];
  const res: Array<number> = [];
  
  while (head) {
    res.unshift(head.val);
    head = head.next;
  }

  return res;
}
```
