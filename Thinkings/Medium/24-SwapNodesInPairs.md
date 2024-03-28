# 两两交换链表中的节点

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

**示例 1：**

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

**示例 2：**

```
输入：head = []
输出：[]
```

**示例 3：**

```
输入：head = [1]
输出：[1]
```

**思路：**

这个题在做的时候，需要分成 2 种情况，头节点和后续的节点，  
如果把头节点前面加一个节点，就可以变成一种情况了，就是两两互换就可以了。  
然后每次循环往后走 2 步

*迭代法*
使用迭代方法，我们可以遍历链表，每次交换一对相邻的节点。这需要使用三个指针：当前节点、前一个节点和后一个节点。

初始化三个指针：current（当前正在处理的节点）、prev（current的前一个节点）和next（current的下一个节点）。
在遍历过程中，我们首先保存current的下一个节点，然后将current的下一个节点指向它自己之前的节点（即prev），这样就完成了一次交换。
更新prev和current指针，继续处理下一对节点。
当current的下一个节点为空时，说明到达链表末尾，此时prev是新的尾节点，我们需要将其返回。

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
 * @return {ListNode}
 */
function swapPairs(head) {
  // 如果链表为空或只有一个节点，直接返回头节点
  if (!head || !head.next) {
    return head;
  }

  let newHead = new ListNode(0);
  let prev = newHead;
  let current = head;

  while (current && current.next) {
    // 保存下一个节点
    let next = current.next.next;
    // 交换当前节点的下一个节点指向前一个节点
    current.next.next = current.next;
    // 将交换后的节点连接到新的头节点上
    prev.next = current.next;
    // 更新指针
    prev = current;
    current = next;
  }

  return newHead.next;
}
```
