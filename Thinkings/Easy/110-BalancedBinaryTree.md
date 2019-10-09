# 平衡二叉树

给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点   的左右两个子树的高度差的绝对值不超过 1。

**示例 1:**

给定二叉树 [3,9,20,null,null,15,7]

```js
    3
   / \
  9  20
 / \
15  7
```

返回 true 。

**示例 2:**

给定二叉树 [1,2,2,3,3,null,null,4,4]

```js
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

返回  false 。

**思路：**

这个题要判断一个树是否是平衡二叉树，就是判断任何一个节点左子树和右子树的深度差不超过 1

1. 写一个函数，求该树的深度
2. 递归判断，
   - 如果这个树是 null，那就返回 true
   - 如果这个树的左子树和右子树的差不超过 1，返回 true
   - 如果这个树的左右子树内的节点都符合，返回 true
   - 都不符合返回 false

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
 * @return {boolean}
 */
const isBalanced = root => {
  if (!root) return true;

  if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
    return false;
  } else {
    if (isBalanced(root.left) && isBalanced(root.right)) {
      return true;
    } else {
      return false;
    }
  }
};
const depth = root => {
  if (!root) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
};
```
