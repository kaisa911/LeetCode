# 二叉树的层次遍历 II

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

**例如：**
给定二叉树 [3,9,20,null,null,15,7],

```
     3
    / \
   9   20
       / \
      15  7
```

返回其自底向上的层次遍历为：

```js
[[15, 7], [9, 20], [3]];
```

**思路：**

最基础的，从跟节点开始，把每一个层节点的 val，放到一个数组里，然后递归
最后把数组倒过来就可以了。

**代码：**

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
 * @return {number[][]}
 */
const helper = (root, i, res) => {
  if (root) {
    res[i] = res[i] || [];
    res[i].push(root.val);
    helper(root.left, i + 1, res);
    helper(root.right, i + 1, res);
  }
};
const levelOrderBottom = root => {
  if (!root) return [];
  let res = [];
  helper(root, 0, res);
  return res.reverse();
};
```
