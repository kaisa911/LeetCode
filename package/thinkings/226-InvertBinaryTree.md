# 翻转二叉树

给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。

示例 1：
![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)

```javascript
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

示例 2：

```javascript
![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
输入：root = [2,1,3]
输出：[2,3,1]
```

示例 3：

```javascript
输入：root = []
输出：[]
```

提示：

- 树中节点数目范围在 [0, 100] 内
- -100 <= Node.val <= 100

思路：

1. 递归终止条件：如果当前节点为空，则返回空。这是因为空树翻转后仍然是空树。
2. 递归翻转：递归地对当前节点的左子树和右子树进行翻转。
3. 交换左右子树：将翻转后的左子树赋值给当前节点的右子树，将翻转后的右子树赋值给当前节点的左子树。
4. 返回根节点：返回翻转后的树的根节点。

时间复杂度：O(n)，其中 n 是二叉树的节点数。每个节点恰好被访问一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是因为递归过程中可能需要将每一层的节点都压入递归栈中。在最坏的情况下（树完全不平衡），空间复杂度可以是 O(n)。

```javascript
var invertTree = function (root) {
  if (root === null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
```
