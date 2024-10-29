# 二叉树的直径

给你一棵二叉树的根节点，返回该树的 直径 。

二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。

两节点之间路径的 长度 由它们之间边数表示。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/03/06/diamtree.jpg)

```javascript
输入：root = [1,2,3,4,5]
输出：3
解释：3 ，取路径 [4,2,1,3] 或 [5,2,1,3] 的长度。
```

示例 2：

```javascript
输入：root = [1,2]
输出：1
```

提示：

- 树中节点数目在范围 [1, 10^4] 内
- -100 <= Node.val <= 100

```javascript
var diameterOfBinaryTree = function (root) {
  let result = 0;

  function getDepth(root) {
    if (!root) return 0;

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);

    result = Math.max(result, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  }

  getDepth(root);
  return result;
};
```
