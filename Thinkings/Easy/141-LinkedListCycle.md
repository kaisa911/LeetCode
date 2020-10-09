# 环形链表

给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了
表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开
始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是
为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

**进阶：**

你能用 O(1)（即，常量）内存解决此问题吗？

**示例 1：**

```js
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例  2：**

```js
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

```js
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

**提示：**

- 链表中节点的数目范围是 [0, 104]
- -105 <= Node.val <= 105
- pos 为 -1 或者链表中的一个 有效索引 。

**思路：**

1、hash 方法：构建一个 hash 表，把遇到的节点都放在 hash 里，往下走的时候，判断
hash 里是否有该数据，有就是环，如果一直走到结束，返回 false

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
 * @return {boolean}
 * @description hash
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};
```

2、双指针方法：构建快慢指针，慢指针指向 head，快指针指向 head.next, 当快慢指针不
相等的时候，慢指针分别往下走一个节点，快指针多走一个节点，如果快指针是 null，代
表走到了链表尾部，就返回 false，如果快慢指针相等了，则代表有环

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
 * @return {boolean}
 * @description 双指针
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) return false;
    fast = fast.next.next;
    slow = slow.next;
  }
  return true;
};
```
