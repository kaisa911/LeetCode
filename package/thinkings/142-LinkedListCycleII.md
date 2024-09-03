# 环形链表 II

给定一个链表的头节点 head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

不允许修改 链表。

示例 1：
![1](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```javascript
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

示例 2：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```javascript
输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
```

示例 3：
![3](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```javascript
输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。
```

提示：

- 链表中节点的数目范围在范围 [0, 10^4] 内
- -10^5 <= Node.val <= 10^5
- pos 的值为 -1 或者链表中的一个有效索引

进阶：你是否可以使用 O(1) 空间解决此题？

思路

1. 初始化：创建两个指针 slow 和 fast，它们都指向链表的头节点 head。
2. 快慢指针移动：slow 每次移动一步，fast 每次移动两步。如果链表中有环，fast 最终会追上 slow。
3. 检测环：当 fast 遇到 null 时，说明链表无环，返回 null。如果 fast 和 slow 相遇，说明链表中有环。
4. 寻找环的起点：当检测到环时，将 slow 重新指向 head，fast 留在相遇点。然后 slow 和 fast 都每次移动一步，当它们再次相遇时，该点即为环的起点。
5. 返回结果：返回环的起点节点。

算法复杂度
时间复杂度：O(n)，其中 n 是链表中的节点数。快慢指针最多遍历链表长度的距离。
空间复杂度：O(1)，不需要额外的空间。

```javascript
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;

  // 检测快慢指针是否相遇，判断是否存在环
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      // 存在环，slow 重新指向头节点，fast 留在相遇点
      break;
    }
  }

  // 如果没有检测到环，返回 null
  if (!fast.next || !fast.next.next) {
    return null;
  }

  // 重新初始化 slow 指向头节点
  slow = head;

  // 同时移动 slow 和 fast，直至它们相遇，相遇点即为环的起点
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
```