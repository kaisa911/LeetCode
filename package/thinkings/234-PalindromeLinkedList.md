# 回文链表

给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例 1：

![1](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

```javascript
输入：head = [1,2,2,1]
输出：true
```

示例 2：
![1](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)

```javascript
输入：head = [1,2]
输出：false
```

提示：

链表中节点数目在范围[1, 10^5] 内
0 <= Node.val <= 9

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

思路:

为了解决这个问题，我们可以采取以下步骤：

- 寻找中间节点：首先，我们需要找到链表的中间节点。这可以通过快慢指针的方法来实现，快指针每次走两步，慢指针每次走一步，当快指针到达链表尾部时，慢指针即为中间节点。
- 反转后半部分链表：找到中间节点后，我们需要反转链表的后半部分。这样，我们就可以将前半部分和反转后的后半部分进行比较。
- 比较链表的两半部分：比较前半部分和反转后的后半部分是否相同。如果相同，则链表是回文的；否则，不是。

1. 寻找中间节点：使用快慢指针法找到链表的中间节点。
2. 反转后半部分链表：从中间节点开始，反转链表的后半部分。
3. 比较链表的两半部分：比较前半部分和反转后的后半部分是否相同。
4. 恢复原始链表：在比较完成后，需要将链表恢复到原始状态，以避免改变输入的链表。

时间复杂度：O(n)，其中 n 是链表的长度。我们需要遍历整个链表来找到中间节点，然后反转后半部分链表，最后比较两半部分。
空间复杂度：O(1)，我们只使用了常数级别的额外空间来存储指针和临时变量。

```javascript
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // Step 1: Find the middle of the linked list
  let slow = head,
    fast = head,
    prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Step 2: Reverse the second half of the linked list
  let secondHalf = reverse(slow);
  let firstHalf = head;

  // Step 3: Compare the first half and the reversed second half
  let isPalindrome = true;
  while (secondHalf) {
    if (firstHalf.val !== secondHalf.val) {
      isPalindrome = false;
      break;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  // Restore the original linked list
  slow = prev ? prev.next : head;
  reverse(slow);

  return isPalindrome;
};

function reverse(head) {
  let prev = null,
    curr = head;
  while (curr) {
    let nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
```
