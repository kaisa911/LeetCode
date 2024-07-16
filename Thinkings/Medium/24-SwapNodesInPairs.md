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

1. 函数定义：swapPairs 函数接收一个链表的头节点 head。
2. 特殊情况处理：如果链表为空（head 为 null）或者只有一个节点（head.next 为 null），则不需要交换，直接返回头节点。
3. 初始化新头节点：创建一个哑节点 newHead，它的初始值为 0，用于简化链表操作，因为哑节点不参与交换，但可以作为新链表的头节点。
4. 初始化指针：定义 prev 指针指向哑节点，作为前一个交换节点的引用；current 指针指向头节点，作为当前处理的节点。
5. 循环交换节点：使用 while 循环，当 current 不为空且它的下一个节点 current.next 也不为空时，执行以下操作：
  - 保存 current.next.next 到变量 next，以便在交换后继续遍历。
  - 将 current.next 的下一个节点指向 current，完成节点交换。
  - 将交换后的节点连接到哑节点 newHead 后面，通过更新 prev.next 来实现。
  - 更新 prev 为当前交换的节点 current，以便下一次交换时使用。
  - 更新 current 为下一个待交换的节点，即 next。
6. 返回新头节点：当 current 或 current.next 为空时，循环结束，此时 prev 指向新的尾节点，返回 newHead.next 作为交换后的链表头节点。

使用了迭代法，通过逐个交换链表中的节点，最终得到一个两两交换节点的链表。这种方法的时间复杂度是 O(n)，其中 n 是链表的长度，因为每个节点恰好被访问一次。空间复杂度是 O(1)，除了输入链表外，我们只使用了有限的额外指针。

代码中的关键点：

- 使用哑节点 newHead 简化了链表操作，避免了特殊情况的检查。
- 使用三个指针 prev、current 和 next 来跟踪和操作链表中的节点。
- 在交换节点时，通过简单地改变 next 指针的指向来实现，而不是改变节点的内部值。

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
