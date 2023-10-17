# 二叉搜索树的第k大节点

给定一棵二叉搜索树，请找出其中第 k 大的节点的值。

示例 1:

```js
输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
```

示例 2:

```js
输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
```

限制：

- 1 ≤ k ≤ 二叉搜索树元素个数

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let ans = 0,
    count = 0;
  const helper = (root, k) => {
    if (root.right != null) helper(root.right, k);

    if (++count == k) {
      ans = root.val;
      return;
    }

    if (root.left != null) helper(root.left, k);
  };
  helper(root, k);
  return ans;
};
```
