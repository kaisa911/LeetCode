# 二叉树的所有路径

给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明:  叶子节点是指没有子节点的节点。

**示例:**

```js
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]
```

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

**思路：**

- 如果是 null，直接返回
- 把现在的值加上当前 root 的值
- 递归左右子树

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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const arr = [];
  helper(root, '', arr);
  return arr;
};
var helper = function(root, cur, arr) {
  if (root === null) return;
  cur += root.val;
  if (root.left === null && root.right === null) {
    arr.push(cur);
  } else {
    helper(root.left, cur + '->', arr);
    helper(root.right, cur + '->', arr);
  }
};
```
