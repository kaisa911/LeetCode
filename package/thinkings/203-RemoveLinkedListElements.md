# 移除链表元素

给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

示例 1：
![](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)

```javascript
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

示例 2：

```javascript
输入：head = [], val = 1
输出：[]
```

示例 3：

```javascript
输入：head = [7,7,7,7], val = 7
输出：[]
```

提示：

- 列表中的节点数目在范围 [0, 10^4] 内
- 1 <= Node.val <= 50
- 0 <= val <= 50

思路：

1. 虚拟头节点：创建一个虚拟头节点 dummy，它的 next 指向实际的头节点 head。这样做的好处是在处理链表时，不需要对空链表或头节点被删除的情况做特殊处理。
2. 遍历链表：使用 current 指针从虚拟头节点开始遍历链表。
3. 条件判断：在遍历过程中，检查当前节点的下一个节点（current.next）的值是否等于要删除的值 val。
4. 删除节点：如果下一个节点的值等于 val，则将 current.next 指向下一个节点的下一个节点，这样就可以跳过要删除的节点。
5. 移动指针：如果下一个节点的值不等于 val，则将 current 指针移动到下一个节点。
6. 返回结果：遍历完成后，返回虚拟头节点的下一个节点，即新的头节点 dummy.next。

时间复杂度：O(n)，其中 n 是链表的长度。需要遍历整个链表一次。
空间复杂度：O(1)，算法只使用了常量级别的额外空间。

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // 虚拟头节点，方便处理头节点就是要删除的情况
  const dummy = new ListNode(0);
  dummy.next = head;

  let current = dummy;
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next; // 删除当前节点
    } else {
      current = current.next; // 移动到下一个节点
    }
  }

  return dummy.next; // 返回处理后的头节点
};
```
