# 反转链表 II

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/02/19/rev2ex2.jpg)
```
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```
示例 2：
```
输入：head = [5], left = 1, right = 1
输出：[5]
```

提示：

- 链表中节点数目为 n
- 1 <= n <= 500
- -500 <= Node.val <= 500
- 1 <= left <= right <= n

进阶： 你可以使用一趟扫描完成反转吗？

思路：
1. 使用哑节点：创建一个哑节点dummy_node，其next指向头节点head。哑节点用于简化对头节点的处理。
2. 定位到反转前一个节点：遍历链表，直到pre指向left位置的前一个节点。
3. 反转操作：使用三个指针cur、next和prev进行反转操作：
  - cur指向当前需要反转的节点。
  - next指向cur的下一个节点。
  - prev用于在反转后链接到cur的前一个节点。
  - 反转过程：将cur的next指向next.next，然后更新next.next指向pre.next，最后将pre.next更新为next。
4. 完成反转：重复上述反转操作，直到完成从left到right的反转。
5. 返回结果：返回哑节点的next，即反转后的链表头节点。

时间复杂度：O(n)，其中n是链表的长度。算法需要遍历链表一次。
空间复杂度：O(1)，只使用了有限的额外空间。


```js
var reverseBetween = function (head, left, right) {
  // 设置 dummyNode 是这一类问题的一般做法
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; ++i) {
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummy_node.next;
};
```