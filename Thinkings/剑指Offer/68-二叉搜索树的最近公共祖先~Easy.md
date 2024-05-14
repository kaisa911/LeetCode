# 二叉搜索树的最近公共祖先

给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树: root = [6,2,8,0,4,7,9,null,null,3,5]

![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/binarysearchtree_improved.png)

示例 1:

```js
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
```

示例 2:

```js
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
```

说明:

- 所有节点的值都是唯一的。
- p、q 为不同节点且均存在于给定的二叉搜索树中。

思路：

1. 基本情况：如果当前节点为空，或者当前节点就是p或q，则返回当前节点。
2. 递归遍历：递归地在左子树和右子树中寻找p和q。
3. 寻找LCA：
  - 如果左子树和右子树的递归调用都返回了非空节点，说明p和q一个在左子树，一个在右子树，当前节点就是它们的LCA。
  - 如果只在左子树或右子树中找到目标节点，那么返回那个子树的LCA。

该实现的时间复杂度是O(h)，其中h是二叉树的高度，因为在最坏的情况下，可能需要遍历整个树的高度来找到LCA。该实现的空间复杂度是O(h)，这是因为在最坏的情况下，递归调用可能会使用与树的高度相等的栈空间。

```ts
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果左子树和右子树都包含目标节点，那么当前节点就是LCA
  if (left && right) {
    return root;
  }

  // 如果只在一个子树中找到目标节点，那么返回那个子树的LCA
  return left || right;
}
```
