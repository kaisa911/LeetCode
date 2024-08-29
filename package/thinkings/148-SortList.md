# 排序链表

给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg)

```js
输入：head = [4,2,1,3]
输出：[1,2,3,4]
```

示例 2：
![2](https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg)

```js
输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
```

示例 3：

```js
输入：head = []
输出：[]
```

提示：

- 链表中节点的数目在范围 [0, 5 * 104] 内
- -105 <= Node.val <= 105

进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

思路

1. 基本情况：如果链表头 head 为空，直接返回 head。
2. 计算链表长度：遍历链表，计算链表的长度。
3. 创建哑节点：创建一个哑节点 dummyHead，其 next 指向头节点，用于简化链表操作。
4. 归并排序：
   - 根据链表长度确定子链表的长度 subLength，初始为 1，然后每次翻倍。
   - 使用两个指针 curr 和 prev 遍历链表，将链表分割成多个长度为 subLength 的子链表。
   - 对每对子链表，使用 merge 函数进行合并，形成有序的更长链表。
   - 更新 prev 和 curr 指针，继续合并下一对子链表。
5. 递归合并：重复步骤 4，直到所有子链表合并成一个有序链表。
6. 返回结果：返回哑节点 dummyHead.next，即排序后的链表头节点。

时间复杂度：O(nlogn)，其中 n 是链表的长度。这是归并排序的标准时间复杂度。
空间复杂度：O(1)，除了链表节点本身，只需要常数级别的额外空间。

```js
const merge = (head1, head2) => {
  const dummyHead = new ListNode(0);
  let temp = dummyHead,
    temp1 = head1,
    temp2 = head2;
  while (temp1 !== null && temp2 !== null) {
    if (temp1.val <= temp2.val) {
      temp.next = temp1;
      temp1 = temp1.next;
    } else {
      temp.next = temp2;
      temp2 = temp2.next;
    }
    temp = temp.next;
  }
  if (temp1 !== null) {
    temp.next = temp1;
  } else if (temp2 !== null) {
    temp.next = temp2;
  }
  return dummyHead.next;
};
var sortList = function (head) {
  if (head === null) {
    return head;
  }
  let length = 0;
  let node = head;
  while (node !== null) {
    length++;
    node = node.next;
  }
  const dummyHead = new ListNode(0, head);
  for (let subLength = 1; subLength < length; subLength <<= 1) {
    let prev = dummyHead,
      curr = dummyHead.next;
    while (curr !== null) {
      let head1 = curr;
      for (let i = 1; i < subLength && curr.next !== null; i++) {
        curr = curr.next;
      }
      let head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
        curr = curr.next;
      }
      let next = null;
      if (curr !== null) {
        next = curr.next;
        curr.next = null;
      }
      const merged = merge(head1, head2);
      prev.next = merged;
      while (prev.next !== null) {
        prev = prev.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
};
```
