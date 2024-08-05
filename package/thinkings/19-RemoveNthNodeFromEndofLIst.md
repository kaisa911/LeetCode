# 删除链表的倒数第 N 个结点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

**示例 1：**

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

**示例 2：**

```
输入：head = [1], n = 1
输出：[]
```

**示例 3：**

```
输入：head = [1,2], n = 1
输出：[1]
```

**提示：**

- 链表中结点的数目为 sz
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

**思路：**

这道题一上来就想到了快慢指针来做，要删除倒数 n 个节点，快指针先走 n 步，  
那么快指针到最后的时候，慢指针到恰好到 n，让慢指针的 next = next.next 就可以了

快慢指针法
- 初始化两个指针：创建两个指针 fast 和 slow，它们都从链表的头节点开始。
- 移动快指针：将 fast 指针向前移动 n 步。如果链表长度小于 n，则这个问题无解。
- 同时移动两个指针：然后，fast 和 slow 指针一起向前移动，直到 fast 指针到达链表的末尾。
- 删除节点：此时，slow 指针将指向倒数第 n+1 个节点。我们可以删除 slow 指针的下一个节点，即倒数第 n 个节点。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建一个虚拟头节点，并将其指向原链表的头节点
  let res = new ListNode(0, head);
  let fast = res,
    slow = res;
  // 快先走 n+1 步
  while (n--) {
    fast = fast.next;
  }
  // fast、slow 一起前进
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return res.next;
};

```
