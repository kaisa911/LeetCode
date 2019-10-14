# 二叉树的最小深度

给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明:  叶子节点是指没有子节点的节点。

**示例:**

给定二叉树  [3,9,20,null,null,15,7],

```js
    3
   / \
  9  20
    /  \
   15   7
```

返回它的最小深度  2

**思路：**

之前就像直接递归，判断最小的路径，结果挂在了[1,2]上。  
后来看了一下题目 **最小深度是从根节点到最近叶子节点的最短路径上的节点数量**  
是根节点到最近叶子节点的深度，根节点不算。

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
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  // null节点不参与比较
  if (root.left === null && root.right !== null) {
    return 1 + minDepth(root.right);
  }
  // null节点不参与比较
  if (root.right === null && root.left !== null) {
    return 1 + minDepth(root.left);
  }

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
```
