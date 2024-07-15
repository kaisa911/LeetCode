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

以下是对这段代码的分析和思路解释：

1. 函数定义：hasCycle 函数接收一个链表的头节点 head 作为参数。
2. 边界条件检查：首先检查头节点是否为空或者链表只有一个节点（即 head.next 为 null）。如果是这两种情况，函数返回 false，因为链表中不可能存在环。
3. 初始化指针：定义两个指针 slow 和 fast，初始时都指向头节点 head。slow 指针用于移动一步（即每次移动到下一个节点），而 fast 指针用于移动两步。
4. 循环条件：使用 while 循环，只要 slow 指针和 fast 指针不相等，就继续循环。
5. 快指针移动：在循环体内，首先检查 fast 指针和 fast.next 是否不为空，如果为空，说明链表到此结束，没有环，返回 false。
6. 移动指针：然后，fast 指针移动两步（即 fast = fast.next.next），slow 指针移动一步（即 slow = slow.next）。
7. 检测相遇：如果在循环中 slow 和 fast 相遇（即 slow == fast），则说明链表中有环，返回 true。
8. 结束条件：如果循环正常结束，说明 fast 指针已经到达链表的末尾，没有环，返回 false。

这种算法的时间复杂度是 O(n)，其中 n 是链表的长度，空间复杂度是 O(1)，因为它只需要两个指针。

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
