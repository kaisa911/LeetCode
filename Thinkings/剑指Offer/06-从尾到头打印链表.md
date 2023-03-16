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

看到这个题，我就想到，用栈来做就可以，后进先出，然后把这个栈返回就可以了
这个就简单了，创建一个数组用来当作栈，遍历链表，把取出来的值放到数组头部
遍历完成后返回数组就可以了

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
