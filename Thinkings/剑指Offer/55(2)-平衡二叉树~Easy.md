# 平衡二叉树

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

示例 1:

```js
给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。
```

示例 2:

```js
给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
```

限制：

- 0 <= 树的结点个数 <= 10000

```ts
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

const isBalanced = (root) => {
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
const depth = (root) => {
  if (!root) return 0;
  return 1 + Math.max(depth(root.left), depth(root.right));
};
```
