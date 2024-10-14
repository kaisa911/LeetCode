# 二叉树的最近公共祖先

给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

示例 1：
![1](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```javascript
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
```

示例 2：
![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

```javascript
输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出：5
解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
```

示例 3：

```javascript
输入：root = [1,2], p = 1, q = 2
输出：1
```

提示：

- 树中节点数目在范围 [2, 10^5] 内。
- -10^9 <= Node.val <= 10^9
- 所有 Node.val 互不相同 。
- p != q
- p 和 q 均存在于给定的二叉树中。

思路

1. 递归终止条件：如果当前节点为空，返回 null。
2. 检查当前节点：如果当前节点是 p 或 q，返回当前节点。
3. 递归左右子树：分别在当前节点的左子树和右子树中递归寻找 LCA。
4. 合并结果：如果左子树和右子树的递归结果都不为空，说明 p 和 q 分别在当前节点的左右子树中，当前节点即为 LCA。如果只有一个子树的结果不为空，说明 LCA 在那个子树中。如果两个子树的结果都为空，说明 p 和 q 都不在当前节点的子树中。

时间复杂度：O(n)，其中 n 是树中节点的数量。在最坏的情况下，我们可能需要遍历树中的每个节点。
空间复杂度：O(h)，其中 h 是树的高度。这是因为递归栈的深度最多为树的高度。在最坏的情况下，树可能是完全不平衡的，导致递归栈深度等于树的高度。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) {
    return null;
  }
  if (left !== null && right !== null) {
    return root;
  }
  return left !== null ? left : right;
};
```
