# 删除排序链表中的重复元素 II

给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

示例 1：
![](https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg)

```js
输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
```

示例 2：
![](https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg)

```js
输入：head = [1,1,1,2,3]
输出：[2,3]
```

提示：

- 链表中节点数目在范围 [0, 300] 内
- -100 <= Node.val <= 100
- 题目数据保证链表已经按升序 排列

思路：
这个问题可以通过遍历链表并使用双指针技巧来解决。以下是算法的基本步骤：

1. 创建辅助头节点：创建一个虚拟头节点 pivot，其 next 指向头节点 head。这可以简化边缘情况的处理。
2. 初始化双指针：设置两个指针 fast 和 slow，都从 pivot 开始。
3. 遍历链表：使用 while 循环，只要 fast 指针未到达链表末尾，且 fast 的下一个节点存在，就继续遍历。
4. 处理重复元素：
  - 如果 fast 节点的值与它的下一个节点相同，说明发现了一个重复序列。将 fast 向前移动，跳过所有重复节点，直到遇到一个不同值的节点或到达链表末尾。
  - 在此过程中，slow 指针保持不动。
5. 更新 slow 指针：如果 fast 指针的值与 fast.next 的值不同，说明当前 slow 节点后面应该跟随一个新的不同值节点。此时，将 slow 指针向前移动一位。
6. 循环结束：当 fast 指针到达链表末尾或其下一个节点不存在时，循环结束。
7. 返回结果：返回虚拟头节点 pivot 的下一个节点，即原链表的新头节点。

时间复杂度：O(n)，其中 n 是链表的长度。因为算法只遍历了链表一次。
空间复杂度：O(1)，算法只使用了有限的额外空间。

```js
var deleteDuplicates = function (head) {
  let pivot = new ListNode(0);
  pivot.next = head;
  let fast = head;
  let slow = pivot;

  while (fast && fast.next) {
    if (fast.val === fast.next.val) {
      let sameValue = fast.val;
      while (fast && fast.val === sameValue) {
        fast = fast.next;
      }
      slow.next = fast;
    } else {
      fast = fast.next;
      slow = slow.next;
    }
  }
  return pivot.next;
};
```
