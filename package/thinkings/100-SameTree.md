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

1. 基本情况：
   - 如果两个节点p和q都为空，返回true，因为两个空树是相同的。
   - 如果一个节点为空而另一个不为空，或者两个节点的值不相等，返回false，因为这样的树显然不同。
2. 递归比较：
   - 如果两个节点都不为空，并且它们的值相等，函数将递归地比较p的左子节点和q的左子节点，以及p的右子节点和q的右子节点。
   - 递归调用isSameTree(p.left, q.left)和isSameTree(p.right, q.right)确保了两个树在结构和值上都是相同的。
3. 结果组合：
   - 函数返回左右子树比较的逻辑与（&&）结果，只有当两个子树都相同，整个树才被认为是相同的。

这种方法的时间复杂度是O(n)，其中n是两个二叉树中节点的数量，因为每个节点都会被访问一次。空间复杂度是O(h)，其中h是树的高度，这是因为在最坏的情况下（树完全不平衡），递归调用可能会使用与树的高度相等的栈空间。

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
  // 如果两个节点都为空，返回true
  if (!p && !q) return true;
  // 如果只有一个节点为空，或者两个节点的值不相等，返回false
  if ((p && !q) || (!p && q) || p.val !== q.val) return false;
  // 递归地比较左子树和右子树
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```
