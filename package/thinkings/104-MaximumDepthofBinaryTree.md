# 二叉树的最大深度

给定一个二叉树 root ，返回其最大深度。

二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。

示例 1：
![1](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)

```js
输入：root = [3,9,20,null,null,15,7]
输出：3
```

示例 2：

```js
输入：root = [1,null,2]
输出：2
```

提示：

- 树中节点的数量在 [0, 104] 区间内。
- -100 <= Node.val <= 100

思路

1. 基本情况：如果根节点 root 为空，那么返回深度为 0，因为空树没有节点。
2. 递归计算：如果根节点不为空，那么：
   - 递归地计算左子树的最大深度 left。
   - 递归地计算右子树的最大深度 right。
3. 深度比较：比较左右子树的深度，取较大者，然后加 1，得到从根到该子树最远叶子节点的深度。
4. 返回结果：返回计算得到的深度。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是因为在递归过程中，栈空间取决于树的高度，最坏情况下是树完全不平衡时的 O(n)。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
  }
};
```
