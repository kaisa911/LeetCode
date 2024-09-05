# 链表最大孪生和

在一个大小为 n 且 n 为 偶数 的链表中，对于 0 <= i <= (n / 2) - 1 的 i ，第 i 个节点（下标从 0 开始）的孪生节点为第 (n-1-i) 个节点 。

比方说，n = 4 那么节点 0 是节点 3 的孪生节点，节点 1 是节点 2 的孪生节点。这是长度为 n = 4 的链表中所有的孪生节点。
孪生和 定义为一个节点和它孪生节点两者值之和。

给你一个长度为偶数的链表的头节点 head ，请你返回链表的 最大孪生和 。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png)

```js
输入：head = [5,4,2,1]
输出：6
解释：
节点 0 和节点 1 分别是节点 3 和 2 的孪生节点。孪生和都为 6 。
链表中没有其他孪生节点。
所以，链表的最大孪生和是 6 。
```

示例 2：
![2](https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png)

```js
输入：head = [4,2,2,3]
输出：7
解释：
链表中的孪生节点为：

- 节点 0 是节点 3 的孪生节点，孪生和为 4 + 3 = 7 。
- 节点 1 是节点 2 的孪生节点，孪生和为 2 + 2 = 4 。
所以，最大孪生和为 max(7, 4) = 7 。
```

示例 3：
![3](https://assets.leetcode.com/uploads/2021/12/03/eg3drawio.png)

```js
输入：head = [1,100000]
输出：100001
解释：
链表中只有一对孪生节点，孪生和为 1 + 100000 = 100001 。
```

提示：

- 链表的节点数目是 [2, 10^5] 中的 偶数 。
- 1 <= Node.val <= 10^5

思路：

1. 使用双指针：使用两个指针 slow 和 fast 来遍历链表。slow 指针每次移动一个节点，而 fast 指针每次移动两个节点。这样可以在 fast 指针到达链表末尾时，slow 指针正好到达链表的中间。
2. 存储前半部分的值：在 slow 指针遍历的过程中，将其值存储到一个栈中，以便后续与后半部分的节点进行配对。
3. 计算孪生和：当 fast 指针遍历完成后，slow 指针继续遍历链表的后半部分，同时从栈中弹出前半部分的值，计算每一对孪生节点的和，并更新最大孪生和。
4. 返回最大孪生和：遍历完成后，返回计算得到的最大孪生和。

时间复杂度：O(n)，其中 n 是链表的长度。需要遍历整个链表一次。
空间复杂度：O(n/2)，其中 n 是链表的长度。在最坏的情况下，栈中需要存储链表前半部分的所有节点值。

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
 * @return {number}
 */
var pairSum = function (head) {
  // 第一阶段，链表前半部分入栈
  let slow = head,
    fast = head;
  const stack = [];
  while (fast?.next) {
    stack.push(slow.val);
    slow = slow.next;
    fast = fast.next?.next;
  }
  // 第二阶段，继续遍历后半部分与前半部分相加求最大值
  let ret = 0;
  while (slow) {
    ret = Math.max(ret, slow.val + stack.pop());
    slow = slow.next;
  }
  return ret;
};
```
