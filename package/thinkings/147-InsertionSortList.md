# 对链表进行插入排序

给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。

插入排序 算法的步骤:

1. 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
2. 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
3. 重复直到所有输入数据插入完为止。

下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

对链表进行插入排序。
![1](https://pic.leetcode.cn/1724130387-qxfMwx-Insertion-sort-example-300px.gif)

示例 1：
![2](https://pic.leetcode.cn/1724130414-QbPAjl-image.png)

```js
输入: head = [4, 2, 1, 3];
输出: [1, 2, 3, 4];
```

示例 2：
![2](https://pic.leetcode.cn/1724130432-zoOvdI-image.png)

```js
输入: head = [-1, 5, 3, 4, 0];
输出: [-1, 0, 3, 4, 5];
```

提示：

- 列表中的节点数在 [1, 5000]范围内
- -5000 <= Node.val <= 5000

思路

1. 创建哑节点：创建一个哑节点 dummyHead，其初始 next 指向头节点 head。哑节点用于简化边界条件的处理。
2. 初始化已排序部分：设置 lastSorted 指向头节点，作为已排序部分的尾节点。
3. 迭代未排序部分：使用 curr 指针从 head.next 开始遍历未排序的链表部分。
4. 插入操作：
   - 如果 curr 节点的值大于或等于 lastSorted 节点的值，说明当前节点已经处于正确的位置，移动 lastSorted 到下一个节点。
   - 否则，需要找到 curr 节点在已排序部分的正确位置：
     - 使用 prev 指针从哑节点开始遍历已排序部分，直到找到 prev.next 大于 curr 节点的值的位置。
     - 将 curr 节点插入到 prev 和 prev.next 之间。
5. 更新指针：更新 curr 为 lastSorted.next，继续下一次迭代。
6. 返回结果：迭代结束后，返回哑节点的 next，即排序后的链表头节点。

时间复杂度：O(n^2)，其中 n 是链表的长度。在最坏的情况下，每次插入都需要遍历整个已排序部分。
空间复杂度：O(1)，只需要一个哑节点和几个指针变量，不需要额外的存储空间。

```js
var insertionSortList = function (head) {
  if (head === null) {
    return head;
  }
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let lastSorted = head,
    curr = head.next;
  while (curr !== null) {
    if (lastSorted.val <= curr.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = dummyHead;
      while (prev.next.val <= curr.val) {
        prev = prev.next;
      }
      lastSorted.next = curr.next;
      curr.next = prev.next;
      prev.next = curr;
    }
    curr = lastSorted.next;
  }
  return dummyHead.next;
};
```
