# 对称的二叉树

请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树  [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个  [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

示例 1：

```js
输入：root = [1,2,2,3,4,4,3]
输出：true
```

示例 2：

```js
输入：root = [1,2,2,null,3,null,3]
输出：false
```

限制：

- 0 <= 节点个数 <= 1000

**思路：**

如果一个树的左子树与右子树镜像对称，那么这个树是对称的。因此，该问题可以转化为：两个树在什么情况下互为镜像？

如果同时满足下面的条件，两个树互为镜像：

- 它们的两个根结点具有相同的值
- 每个树的右子树都与另一个树的左子树镜像对称

1. 如果 root 为 null，即二叉树为空，那么直接返回 true，因为空树是对称的。
2. 调用辅助函数 helper 来检查 root 的左子树和右子树是否对称。

在辅助函数 helper 中：

1. 如果 a 和 b 中有一个为 null，那么只有当 a 和 b 都为 null 时，才返回 true，否则返回 false。
2. 如果 a 和 b 的值不相等，那么返回 false。
3. 递归地检查 a 的左子树和 b 的右子树是否对称，以及 a 的右子树和 b 的左子树是否对称。只有当这两个条件都满足时，才返回 true。

```ts
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return helper(root.left, root.right);
}
function helper(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a === null || b === null) return a === b;
  if (a.val !== b.val) return false;
  return helper(a.left, b.right) && helper(a.right, b.left);
}
```
