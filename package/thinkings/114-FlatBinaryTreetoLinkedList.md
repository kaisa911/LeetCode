# 二叉树展开为链表

给你二叉树的根结点 root ，请你将它展开为一个单链表：

- 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
- 展开后的单链表应该与二叉树 先序遍历 顺序相同。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg)

```js
输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]
```

示例 2：

```js
输入：root = []
输出：[]
```

示例 3：

```js
输入：root = [0]
输出：[0]
```

提示：

- 树中结点数在范围 [0, 2000] 内
- -100 <= Node.val <= 100

进阶：你可以使用原地算法（O(1) 额外空间）展开这棵树吗？

思路

1. 递归展开左子树：首先递归地对根节点的左子树进行展开操作，将左子树转换为链表形式。
2. 递归展开右子树：接着递归地对根节点的右子树进行展开操作，将右子树转换为链表形式。
3. 链接左子树和右子树：如果左子树不为空，找到左子树链表的最后一个节点，将其右指针链接到右子树的头节点。
4. 调整根节点的左右指针：将根节点的左子节点设置为 null，将右子节点指向展开后的左子树的头节点。
5. 返回根节点：返回根节点，此时整个二叉树已经被转换为一个单链表。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(1)，不使用额外的空间，只修改了节点的指针。

```javascript
var flatten = function (root) {
  if (!root) return null;

  let left = flatten(root.left);
  let right = flatten(root.right);

  if (left) {
    // 链接左子树的最后一个节点到右子树
    let last = left;
    while (last.right) last = last.right;
    last.right = right;

    // 将左子树作为新的左子树
    root.left = null;
    root.right = left;
  }

  return root;
};
```
