# 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例 1：**

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2：**

```
输入：head = []
输出：[]
```

**示例 3：**

```
输入：head = [1]
输出：[1]
```

**思路：**

这个题在做的时候，需要分成 2 种情况，头节点和后续的节点，  
如果把头节点前面加一个节点，就可以变成一种情况了，就是两两互换就可以了。  
然后每次循环往后走 2 步

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = (head) => {
  if (!head || head.next === null) {
    return head;
  }

  let tempHead = new ListNode(0);
  tempHead.next = head;
  let cur = tempHead;
  while (cur.next !== null && cur.next.next !== null) {
    let preNext = cur.next;
    let preNextNext = cur.next.next;

    cur.next.next = cur.next.next.next;
    cur.next = preNextNext;
    cur.next.next = preNext;
    cur = cur.next.next;
  }
  return tempHead.next;
};
```
