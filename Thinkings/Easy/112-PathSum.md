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
