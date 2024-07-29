# 旋转链表

给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

示例 1：
![0](https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg)

```js
输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
```

示例 2：
![1](https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg)

```js
输入：head = [0,1,2], k = 4
输出：[2,0,1]
```

提示：

- 链表中节点的数目在范围 [0, 500] 内
- -100 <= Node.val <= 100
- 0 <= k <= 2 \* 109

思路：

1. 判断特殊情况：如果链表为空或者只有一个节点，不需要旋转，直接返回头节点。
2. 找到链表长度：遍历链表，确定链表的长度 i。
3. 简化 k 值：由于旋转长度等于链表长度的 k 值和链表长度取模的结果相同，计算 k = k % i。如果 k 为 0，说明不需要旋转，直接返回头节点。
4. 找到旋转点：从链表头部开始遍历，遍历到 i - k - 1 位置，这个节点的下一个节点将是旋转后的头节点。
5. 执行旋转：将当前节点的 next 指向 null，切断链表，然后将链表尾部的 next 指向原头节点，完成旋转。

时间复杂度：O(n)，其中 n 是链表的长度。需要遍历整个链表两次，第一次确定链表长度，第二次找到旋转点。
空间复杂度：O(1)，除了输入链表本身，只需要常数级别的额外空间。

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
const rotateRight = (head, k) => {
  if (head == null || head.next == null) {
    return head;
  }
  let cur = head;
  let last = new ListNode(null);
  let i = 0;
  while (cur != null) {
    i++;
    last = cur;
    cur = cur.next;
  }
  cur = head;
  let temp = k % i >= 0 ? k % i : k;
  if (temp == 0) {
    return head;
  }
  while (i - temp - 1 > 0) {
    cur = cur.next;
    i--;
  }
  let top = cur.next;
  cur.next = null;
  last.next = head;
  return top;
};
```
