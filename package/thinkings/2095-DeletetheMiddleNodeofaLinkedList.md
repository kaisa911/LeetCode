# 删除链表的中间节点

给你一个链表的头节点 head 。删除 链表的 中间节点 ，并返回修改后的链表的头节点 head 。

长度为 n 链表的中间节点是从头数起第 ⌊n / 2⌋ 个节点（下标从 0 开始），其中 ⌊x⌋ 表示小于或等于 x 的最大整数。

对于 n = 1、2、3、4 和 5 的情况，中间节点的下标分别是 0、1、1、2 和 2 。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/11/16/eg1drawio.png)

```js
输入：head = [1,3,4,7,1,2,6]
输出：[1,3,4,1,2,6]
解释：
上图表示给出的链表。节点的下标分别标注在每个节点的下方。
由于 n = 7 ，值为 7 的节点 3 是中间节点，用红色标注。
返回结果为移除节点后的新链表。
```

示例 2：
![2](https://assets.leetcode.com/uploads/2021/11/16/eg2drawio.png)

```js
输入：head = [1,2,3,4]
输出：[1,2,4]
解释：
上图表示给出的链表。
对于 n = 4 ，值为 3 的节点 2 是中间节点，用红色标注。
```

示例 3：
![3](https://assets.leetcode.com/uploads/2021/11/16/eg3drawio.png)

```js
输入：head = [2,1]
输出：[2]
解释：
上图表示给出的链表。
对于 n = 2 ，值为 1 的节点 1 是中间节点，用红色标注。
值为 2 的节点 0 是移除节点 1 后剩下的唯一一个节点。
```

提示：

- 链表中节点的数目在范围 [1, 10^5] 内
- 1 <= Node.val <= 10^5

思路：

1. 使用快慢指针：使用两个指针 slow 和 fast。slow 每次移动一个节点，而 fast 每次移动两个节点。
2. 找到中间节点的前一个节点：当 fast 到达链表末尾时，slow 将指向中间节点的前一个节点。
3. 删除中间节点：将 slow.next 指向 slow.next.next，这样就可以跳过中间节点，从而删除它。
4. 特殊情况处理：如果链表只有一个或两个节点，直接删除中间节点并返回新的头节点。

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
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (!head || !head.next) {
    return null; // 如果链表没有节点或只有一个节点，直接返回null
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 删除中间节点
  slow.next = slow.next.next;
  return head;
};
```
