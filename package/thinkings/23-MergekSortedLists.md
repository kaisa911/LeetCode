# 合并 K 个升序链表

给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

**示例 1：**

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
```

**示例 2：**

```
输入：lists = []
输出：[]
```

**示例 3：**

```
输入：lists = [[]]
输出：[]
```

**提示：**

- k == lists.length
- 0 <= k <= 10^4
- 0 <= lists[i].length <= 500
- -10^4 <= lists[i][j] <= 10^4
- lists[i] 按 升序 排列
- lists[i].length 的总和不超过 10^4

思路：

做这个题的时候，刚昨晚合并两个升序链表，想了一下，感觉可以直接用啊，辅助函数就 merge2List，主函数直接 reduce 就可以了。

1. 问题定义：给定一个包含 k 个升序链表的数组 lists，任务是将这些链表合并为一个单一的升序链表。
2. 辅助函数 merge2List：这是一个辅助函数，用于合并两个已排序的链表 l1 和 l2。它创建一个新的链表节点 res 作为合并后链表的起始节点，并使用指针 cur 来构建新的链表。通过比较 l1 和 l2 的当前节点值，将较小的节点依次添加到新链表中，直到其中一个链表遍历完。最后，将未遍历完的链表直接连接到新链表的末尾。
3. 主函数 mergeKLists：这个函数接收一个链表数组 lists 作为参数。它使用 reduce 方法来累计地合并链表。reduce 方法的初始值为 null，表示合并过程从空链表开始。对于 lists 中的每个链表，reduce 方法调用 merge2List 函数将其与当前累计的链表合并。
4. 返回值：mergeKLists 函数返回合并后的链表的头节点。

思路是分而治之，将 k 个链表的合并问题分解为多次两个链表的合并问题。通过递归地合并链表，最终得到一个包含所有节点的单一升序链表。

代码中的关键点：

- 使用辅助函数 merge2List 来处理两个链表的合并，这是合并 k 个链表的基础操作。
- 使用 reduce 方法来实现链表数组的累计合并，这是一个高效且简洁的方法。
- 通过比较和连接操作，确保合并后的链表保持升序。

这段代码的时间复杂度是 O(N log k)，其中 N 是所有链表中节点的总数，k 是链表的数量。空间复杂度是 O(1)，因为合并操作是就地进行的，不需要额外的存储空间。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return lists.reduce((total, cur) => merge2List(total, cur), null);
};

var merge2List = function (l1, l2) {
  const res = new ListNode(-1);
  let cur = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return res.next;
};
```
