# 有序链表转换二叉搜索树

给定一个单链表的头节点 head ，其中的元素 按升序排序 ，将其转换为
平衡
二叉搜索树。

示例 1:
![1](https://assets.leetcode.com/uploads/2020/08/17/linked.jpg)

```js
输入: head = [-10,-3,0,5,9]
输出: [0,-3,9,-10,null,5]
解释: 一个可能的答案是[0，-3,9，-10,null,5]，它表示所示的高度平衡的二叉搜索树。
```

示例 2:

```js
输入: head = [];
输出: [];
```

提示:

- head 中的节点数在[0, 2 * 104] 范围内
- -105 <= Node.val <= 105

思路：

1. 确定链表长度：遍历链表，使用一个变量记录链表的长度。
2. 找到中间节点：使用快慢指针法找到链表的中间节点。
3. 转换为 BST：将链表的中间节点作为 BST 的根节点，然后递归地将左半部分链表转换为左子树，右半部分链表转换为右子树。
4. 递归函数：定义一个递归函数 convert，它将链表的一部分转换为 BST。函数接收链表的头节点和尾节点。
5. 基本情况：如果头节点为空或者头节点是尾节点，返回 null。
6. 找到中点：使用快慢指针找到链表的中点。
7. 构建 BST：创建当前中点的 TreeNode，并递归地构建左子树和右子树。
8. 返回根节点：返回构建好的 BST 的根节点。

时间复杂度：O(n)
空间复杂度：O(logn)

```js
function sortedListToBST(head) {
  if (!head) return null;

  // 找到链表的长度
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // 定义递归函数
  function convert(start, end) {
    if (start === end) return new TreeNode(head.val);

    const mid = start + (end - start) / 2;
    const prev = start;
    while (prev !== mid) {
      prev = prev.next;
    }

    const node = new TreeNode(prev.next.val);
    node.left = convert(start, mid);
    node.right = convert(mid + 1, end);
    prev.next = null; // 切断链表，避免循环引用

    return node;
  }

  return convert(0, length - 1);
}
```
