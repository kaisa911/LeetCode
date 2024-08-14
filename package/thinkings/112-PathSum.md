# 路径总和

给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

**说明:**  叶子节点是指没有子节点的节点。

**示例:**
给定如下二叉树，以及目标和 sum = 22，

```js
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```

返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

**思路：**
使用递归的思路，如果这个树为空，那就返回 false
如果树的左右子树都为空，那就判断当前的 val 和 sum 是否相等
如果左右子树不一定为空，就递归下去，判断到叶子节点之后是否相等

- 从根节点开始，hasPathSum 函数尝试找到一条路径，其节点值之和等于给定的 sum。
- 如果当前节点是叶子节点，检查从根节点到当前节点的路径和是否等于 sum。
- 如果当前节点不是叶子节点，函数递归地在左子树和右子树上寻找可能的路径。
- 在递归过程中，当前节点的值被减去，因为我们正在检查从根节点到当前节点的路径和。
- 如果在树的任何分支上找到了一条路径，使得路径和等于给定的 sum，则函数返回 true；如果在树的所有分支上都没有找到这样的路径，则函数最终返回 false。

这种方法的时间复杂度是 O(n)，其中 n 是二叉树中节点的数量，因为每个节点恰好被访问一次。空间复杂度是 O(h)，其中 h 是二叉树的高度，这是因为在最坏的情况下（树完全不平衡），递归堆栈可能需要存储与树的高度相等的节点数量。

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
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  if (!root) return false;
  if (!root.left && !root.right) {
    return sum - root.val === 0;
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};
```
