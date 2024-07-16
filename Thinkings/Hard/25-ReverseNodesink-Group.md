# K 个一组翻转链表

给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg)

```js
输入：head = [1,2,3,4,5], k = 2
输出：[2,1,4,3,5]
```

示例 2：
![2](https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg)

```js
输入：head = [1,2,3,4,5], k = 3
输出：[3,2,1,4,5]
```

提示：

- 链表中的节点数目为 n
- 1 <= k <= n <= 5000
- 0 <= Node.val <= 1000

进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？

思路：
1. 函数定义：reverseKGroup 函数接收链表的头节点 head 和一个整数 k。
2. 特殊情况处理：如果头节点为空，或者 k 小于 2（即没有翻转的必要），则直接返回头节点。
3. 寻找下一组翻转的起始节点：使用 next_group 指针找到第 k+1 个节点，这将是下一组翻转的起始节点。如果在到达第 k 个节点之前链表结束，则返回原始头节点，因为没有足够的节点进行翻转。
4. 递归翻转：对下一组节点（从 next_group 开始）进行递归翻转，得到 new_next_group。
5. 翻转当前组：使用三个指针 prev（前一个节点），cur（当前节点），和 next（下一组翻转的起始节点的前一个节点）来翻转当前组的节点。在翻转过程中，cur 从 head 开始，prev 初始化为 null，next 指向 cur.next。
6. 更新节点指针：在 while 循环中，不断更新 cur 和 prev 的指针，直到 cur 到达下一组翻转的起始节点。在每次循环中，cur 的 next 指向 prev（如果 prev 不为 null，则指向 prev，否则指向 new_next_group），然后 prev 和 cur 向前移动。
7. 返回翻转后的头节点：翻转完成后，prev 指向当前组翻转后的第一个节点，即新的头节点。返回 prev。

算法使用了迭代和递归的结合，首先迭代找到下一组翻转的起始节点，然后递归地翻转每 k 个节点。这种方法的时间复杂度是 O(n)，其中 n 是链表的长度，因为每个节点恰好被访问一次。空间复杂度是 O(k)，这是由于递归调用栈的深度，但在最坏情况下（当 k = n 时），空间复杂度是 O(n)。

代码中的关键点：

- 使用 next_group 指针来确定翻转的组的边界。
- 使用三个指针 prev、cur 和 next 来实现节点的翻转。
- 递归调用 reverseKGroup 来翻转下一组节点。

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
const reverseKGroup = (head, k) => {
  if (!head || head.next === null || k < 2) {
    return head;
  }

  let next_group = head;
  for (let i = 0; i < k; ++i) {
    if (next_group) {
      next_group = next_group.next;
    } else {
      return head;
    }
  }

  let new_next_group = reverseKGroup(next_group, k);
  let prev = null;
  let cur = head;

  while (cur !== next_group) {
    const next = cur.next;
    cur.next = prev != null ? prev : new_next_group;
    prev = cur;
    cur = next;
  }
  return prev;
};
```
