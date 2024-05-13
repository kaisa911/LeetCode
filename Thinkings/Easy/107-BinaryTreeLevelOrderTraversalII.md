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

1. 使用helper函数从根节点开始，逐层遍历二叉树，并将每一层的节点值存储在res数组的对应子数组中。
2. 在helper函数中，通过递归遍历左子树和右子树，确保每个节点都被访问到，并且按照从上到下的顺序填充res数组。
3. 在levelOrderBottom函数中，收集helper函数的遍历结果，然后通过反转数组得到从底部向上的层序遍历结果。
4. 返回这个反转后的数组作为最终结果。

这种方法的时间复杂度是O(n)，其中n是二叉树中节点的数量，因为每个节点恰好被访问一次。空间复杂度是O(m)，其中m是树的最大宽度，这是因为在最坏的情况下，我们可能需要存储所有节点的值在同一层上。

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
