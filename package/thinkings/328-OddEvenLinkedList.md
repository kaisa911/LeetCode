# 奇偶链表

给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。

示例 1:
![image](https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg)

```javascript
输入: head = [1, 2, 3, 4, 5];
输出: [1, 3, 5, 2, 4];
```

示例 2:
![image](https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg)

```javascript
输入: head = [2, 1, 3, 5, 6, 4, 7];
输出: [2, 3, 6, 7, 1, 5, 4];
```

提示:

- n == 链表中的节点数
- 0 <= n <= 10^4
- -10^6 <= Node.val <= 10^6

思路：

对于这道奇偶链表的题目，解题思路是通过遍历链表来将奇数节点和偶数节点分别连接起来。因为题目要求在 O (1) 的额外空间复杂度和 O (n) 的时间复杂度下解决，这种通过指针操作的方式是比较合适的。不需要额外的数据结构来存储节点，只需要通过指针的移动和重新连接就能达到目的。

1. 首先处理特殊情况，如果头节点为 null，直接返回 null。
2. 定义 evenHead 为第二个节点（偶数节点的头节点），odd 指向第一个节点（奇数节点的头节点），even 指向第二个节点。
3. 在循环中，只要偶数节点 even 不为 null 且偶数节点的下一个节点（even.next）也不为 null：
   - 将奇数节点 odd 的下一个节点指向偶数节点的下一个节点（odd.next = even.next），然后将 odd 移动到它的下一个节点（odd = odd.next）。
   - 将偶数节点 even 的下一个节点指向奇数节点的下一个节点（even.next = odd.next），然后将 even 移动到它的下一个节点（even = even.next）。
4. 最后将奇数节点链的尾节点（odd）的下一个节点指向偶数节点链的头节点（evenHead），并返回原始链表的头节点（head），此时链表已经按照奇偶顺序重新排列。

时间复杂度：只需要遍历一次链表，时间复杂度为 O (n)，其中 n 是链表中的节点数。
空间复杂度：只使用了几个额外的指针变量，没有使用额外的数据结构来存储节点，空间复杂度为 O (1)。

```javascript
var oddEvenList = function (head) {
  if (head === null) {
    return head;
  }
  let evenHead = head.next;
  let odd = head,
    even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};
```
