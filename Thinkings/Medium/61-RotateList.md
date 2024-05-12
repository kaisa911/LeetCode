# 旋转链表

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

示例 1：
![0](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```js
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```js
输入：head = [0,1,2], k = 4
输出：[2,0,1]
```

提示：

- 链表中节点的数目在范围 [0, 500] 内
- -100 <= Node.val <= 100
- 0 <= k <= 2 * 109

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
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (head == null || head.next == null) {
    return head;
  }
  let cur = head;
  let last = new ListNode(null);
  let i = 0;
  while (cur != null) {
    i++;
    last = cur;
    cur = cur.next;
  }
  cur = head;
  let temp = k % i >= 0 ? k % i : k;
  if (temp == 0) {
    return head;
  }
  while (i - temp - 1 > 0) {
    cur = cur.next;
    i--;
  }
  let top = cur.next;
  cur.next = null;
  last.next = head;
  return top;
};

```
