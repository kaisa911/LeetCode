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

1. binaryTreePaths 函数：这是主函数，它初始化一个空数组arr，用于存储最终的路径列表。然后，它调用helper函数，传递根节点root、空字符串cur（表示当前路径）和路径数组arr。
2. helper 函数：这是一个递归函数，用于遍历二叉树并构建路径。
  - 如果当前节点root是null，则直接返回，因为这意味着当前路径到此为止。
  - 将当前节点的值转换为字符串并加到当前路径cur的末尾。
  - 检查当前节点是否是叶子节点（既没有左子节点也没有右子节点）。如果是叶子节点，则将当前路径cur添加到路径数组arr中。
  - 如果当前节点不是叶子节点，则递归调用helper函数两次：一次是遍历左子树，一次是遍历右子树。在递归调用时，将当前路径cur与子节点的值连接起来，并用'->'分隔。

利用了递归和回溯的思想，通过遍历二叉树的每个节点来构建所有可能的路径。当到达叶子节点时，将当前路径添加到结果数组中。这种方法的时间复杂度是O(n)，其中n是二叉树中节点的数量，因为每个节点恰好被访问一次。空间复杂度是O(h)，其中h是二叉树的高度，这是因为在递归过程中，递归堆栈最多可能存储与树的高度相等的节点。

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
