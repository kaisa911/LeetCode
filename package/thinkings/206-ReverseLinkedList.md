# 反转链表

反转一个单链表。

**示例:**

```js
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
```

**进阶:**
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

**思路：**

- 设定两个指针，一个为 curr 它指向当前节点，另一个为 prev 指针，它初始值是 null。
- 进入循环，当 curr 不为最后一个节点时，执行循环。
- 将 curr.next 存下来，
- 将 prev 赋值给 curr.next ，这样就可以完成反转
- 之后再将 curr 赋值给 prev，做一下存储，
- curr = nextTemp 就可以继续往下进行

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
const reverseList = head => {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};
```
