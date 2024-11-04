# 二叉树剪枝

给你二叉树的根结点 root ，此外树的每个结点的值要么是 0 ，要么是 1 。

返回移除了所有不包含 1 的子树的原二叉树。

节点 node 的子树为 node 本身加上所有 node 的后代。

示例 1：
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_2.png)

```js
输入：root = [1,null,0,0,1]
输出：[1,null,0,null,1]
解释：
只有红色节点满足条件“所有不包含 1 的子树”。 右图为返回的答案。
```

示例 2：
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/06/1028_1.png)

```js
输入：root = [1,0,1,0,0,0,1]
输出：[1,null,1,null,1]
```

示例 3：
![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/05/1028.png)

```js
输入：root = [1,1,0,1,1,0,1,0]
输出：[1,1,0,1,1,null,1]
```

提示：

- 树中节点的数目在范围 [1, 200] 内
- Node.val 为 0 或 1

思路：

拿到这道题，首先明确我们需要对二叉树进行遍历和处理。考虑到要递归地检查每个子树是否需要剪枝，采用后序遍历的方式是比较合适的。因为后序遍历可以先处理子节点，然后再处理父节点，这样能够准确判断父节点及其子树的情况，从而决定是否剪枝。

1. 首先处理空节点，直接返回 `null`，这是边界情况的处理。
2. 然后递归地处理左子树和右子树，得到处理后的左子树和右子树。
3. 接着检查当前节点，如果其左右子树都为空且自身值为 0，说明该节点及其子树都不包含 1，可以将其剪枝，返回 `null`。
4. 否则，返回当前节点，表示保留该节点及其子树。

时间复杂度：O(n)，其中 n 是二叉树的节点数。因为需要遍历每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是递归调用栈的空间开销。在最坏情况下，二叉树退化成链表，空间复杂度为 O(n)；在最好情况下，二叉树是完全平衡的，空间复杂度为 O(log n)。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (!root) {
    return null;
  }
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (!root.left && !root.right && root.val === 0) {
    return null;
  }
  return root;
};
```
