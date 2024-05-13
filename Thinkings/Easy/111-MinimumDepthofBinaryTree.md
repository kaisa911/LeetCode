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

- 从根节点开始，检查每个节点的子节点。
- 如果一个节点只有一个子节点，那么它的最小深度就是它自身的深度（1）加上那个子树的最小深度。
- 如果一个节点有两个子节点，那么它的最小深度是它自身的深度（1）加上它左右子树中最小深度较小的那个。
- 递归地对左右子树执行上述逻辑，直到达到叶子节点，此时叶子节点的最小深度就是1。
- 通过递归调用，最终得到整棵树的最小深度。

这种方法的时间复杂度是O(n)，其中n是二叉树中节点的数量，因为每个节点恰好被访问一次。空间复杂度是O(h)，其中h是二叉树的高度，这是因为在最坏的情况下（树完全不平衡），递归堆栈可能需要存储与树的高度相等的节点数量。

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
