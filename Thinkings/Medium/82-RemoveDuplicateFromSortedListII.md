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
