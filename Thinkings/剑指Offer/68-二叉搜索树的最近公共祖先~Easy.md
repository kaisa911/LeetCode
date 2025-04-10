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

BST的特性决定了：

- ​当p和q的值均小于当前节点值 → LCA在左子树；
- ​当p和q的值均大于当前节点值 → LCA在右子树；
- ​当p和q分列当前节点两侧 → 当前节点就是LCA（因为这是它们路径分岔的最后一个公共节点）。


该实现的时间复杂度是 O(h)，其中 h 是二叉树的高度，因为在最坏的情况下，可能需要遍历整个树的高度来找到 LCA。该实现的空间复杂度是 O(h)，这是因为在最坏的情况下，递归调用可能会使用与树的高度相等的栈空间。

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
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else {
    return root; // 当前节点是分岔点
  }
}
```
