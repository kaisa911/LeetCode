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

isBalanced 函数逻辑分析：
1. 基本情况：如果根节点root为空，返回true，因为空树是平衡的。
2. 比较高度：计算根节点root的左右子树的高度，并计算它们的高度差。如果高度差大于1，根据题目中的定义，这棵树不是平衡的，返回false。
3. 递归检查：如果根节点的左右子树高度差不超过1，递归地调用isBalanced函数检查root的左子树和右子树是否也是平衡的。
4. 结果组合：如果左右子树都是平衡的，返回true；否则，返回false。

depth 函数逻辑分析：
1. 基本情况：如果子树的根节点root为空，返回0，因为空树的高度是0。
2. 计算高度：如果子树非空，计算左子树和右子树的高度，然后返回1加上这两个高度中的较大值。

这种方法的时间复杂度是O(n^2)，在最坏的情况下（例如，树完全不平衡），因为需要计算每个节点的左右子树高度。空间复杂度是O(n)，这是因为递归调用可能会使用与树的深度相关的栈空间。

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

  // 计算左右子树的高度差
  const diff = Math.abs(depth(root.left) - depth(root.right));
  // 如果高度差超过1，直接返回false
  if (diff > 1) return false;

  // 递归检查左右子树是否平衡
  return isBalanced(root.left) && isBalanced(root.right);
};

const depth = root => {
  if (!root) return 0;

  // 计算左子树和右子树的高度，并返回最大高度加1
  return 1 + Math.max(depth(root.left), depth(root.right));
};
```
