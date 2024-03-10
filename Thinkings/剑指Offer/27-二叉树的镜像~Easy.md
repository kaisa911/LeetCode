# 二叉树的镜像

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

示例 1：

```js
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
```

限制：

- 0 <= 节点个数 <= 1000

**思路：**
这是一道很经典的二叉树问题。显然，我们从根节点开始，递归地对树进行遍历，并从叶子节点先开始翻转得到镜像。如果当前遍历到的节点 root 的左右两棵子树都已经翻转得到镜像，那么我们只需要交换两棵子树的位置，即可得到以 root 为根节点的整棵子树的镜像。

1. 如果 root 为 null，即二叉树为空，那么直接返回 null。
2. 创建一个临时节点 tmpNode，并将其设置为 root 的左子节点。
3. 将 root 的左子节点设置为 root 的右子节点的镜像反转（通过递归调用 mirrorTree(root.right) 实现）。
4. 将 root 的右子节点设置为 tmpNode 的镜像反转（通过递归调用 mirrorTree(tmpNode) 实现）。
5. 返回反转后的 root。

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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  let tmpNode: TreeNode | null = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(tmpNode);
  return root;
}
```
