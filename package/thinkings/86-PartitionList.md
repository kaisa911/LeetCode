# 分隔链表

给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

示例 1：
![](https://assets.leetcode.com/uploads/2021/01/04/partition.jpg)

```js
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
```

示例 2：

```js
输入：head = [2,1], x = 2
输出：[1,2]
```

提示：

- 链表中节点的数目在范围 [0, 200] 内
- -100 <= Node.val <= 100
- -200 <= x <= 200

思路：

1. 创建两个哑节点：创建两个哑节点 small 和 large，分别用于连接小于 x 的节点和小等于或等于 x 的节点。
2. 遍历链表：使用一个指针 head 遍历链表，对于每个节点，根据其值与 x 的大小关系，决定将其链接到 small 或 large 的后面。
3. 维护两个链表：使用 small 和 large 指针分别维护两个分区的最后一个节点，以便在每个节点插入。
4. 连接两个分区：在遍历结束后，将 small 分区的末尾链接到 large 分区的开头，形成最终的分隔链表。
5. 返回结果：返回 smallHead.next，即分隔后链表的头节点。

时间复杂度：O(n)，其中 n 是链表的长度。因为算法遍历了链表一次。
空间复杂度：O(1)，不包括输入的链表，算法只使用了有限的额外空间。

```js
var partition = function (head, x) {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;

  while (head !== null) {
    if (head.val < x) {
      small.next = head; // 链接到小于x的分区
      small = small.next;
    } else {
      large.next = head; // 链接到大于等于x的分区
      large = large.next;
    }
    head = head.next; // 移动head指针
  }
  large.next = null; // 终止大于等于x的分区
  small.next = largeHead.next; // 连接两个分区
  return smallHead.next; // 返回新链表的头节点
};
```
