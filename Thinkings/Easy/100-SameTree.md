# 相同的树

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

**示例  1:**

```js
输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```

**示例 2:**

```js
输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```

**示例  3:**

```js
输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```

**思路：**

用递归的思路来做这道题。

1. 如果两个树都是 null，那就返回 false
2. 如果两个树有一个为空，或者两个树的值不同，返回 false
3. 剩下的递归判断两个树的左右子树

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q) || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
