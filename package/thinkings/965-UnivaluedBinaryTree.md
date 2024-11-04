# 单值二叉树

如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 true；否则返回 false。

**示例 1：**

![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen-shot-2018-12-25-at-50104-pm.png)

```js
输入：[1,1,1,1,1,null,1]
输出：true
```

**示例 2：**

![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/29/screen-shot-2018-12-25-at-50050-pm.png)

```js
输入：[2,2,2,5,2]
输出：false
```

**提示：**

- 给定树的节点数范围是 [1, 100]。
- 每个节点的值都是整数，范围为 [0, 99] 。

**思路：**

拿到这道题，首先要明确我们需要判断整棵二叉树的节点值是否都相同。由于要遍历整棵树，深度优先搜索（DFS）是一个自然的选择。因为它可以深入到树的每个节点，方便比较节点值。通过递归地检查每个节点及其子节点的值，如果在某个节点发现不匹配，就可以直接返回 false ，否则一直递归下去，直到遍历完整个树都没有发现不匹配，就返回 true 。

1. 首先处理根节点为空的情况，如果为空则直接返回 true ，因为空树可以认为是单值二叉树。
2. 对于有左子节点的情况，先比较根节点和左子节点的值，如果不相等或者左子树不是单值二叉树，就返回 false 。
3. 对于有右子节点的情况，同样先比较根节点和右子节点的值，如果不相等或者右子树不是单值二叉树，就返回 false 。
4. 如果以上情况都没有发生，说明当前节点及其子树都满足单值条件，返回 true 。

时间复杂度：O(n) ，其中 n 是二叉树的节点数。因为需要遍历每个节点一次。
空间复杂度：O(h) ，其中 h 是二叉树的高度。这是由于递归调用栈的空间开销，在最坏情况下，树是一条链，空间复杂度为 O(n) ，在平衡树的情况下，空间复杂度为 O(log n) 。

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) {
    return true;
  }
  if (root.left) {
    if (root.val !== root.left.val || !isUnivalTree(root.left)) {
      return false;
    }
  }
  if (root.right) {
    if (root.val !== root.right.val || !isUnivalTree(root.right)) {
      return false;
    }
  }
  return true;
};
```
