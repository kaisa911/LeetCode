# 将有序数组转换为二叉搜索树

将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点   的左右两个子树的高度差的绝对值不超过 1。

**示例:**

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

```js
      0
     / \
   -3   9
   /   /
 -10  5
```

**思路：**  
看到这个题，用递归的思路来写它。

- 写有一个递归的辅助方法，根节点是中间的点，两边分别为左右子树
- 数组不为空，就设根节点和左右子树，数组为空，设置 null
- 在主函数里调用并返回这个方法

1. 理解二叉搜索树：二叉搜索树（BST）是一棵二叉树，其中每个节点的值大于或等于其左子树上所有节点的值，并且小于或等于其右子树上所有节点的值。
2. 选择中间点作为根：对于给定的升序数组，中间的元素是构建高度平衡二叉搜索树的理想根节点。
3. 递归构造：使用递归函数 handleTreeNode 来构造树的节点：
   - 如果数组为空（low 大于 high），则返回 null。
   - 计算中间索引 mid，创建根节点，并使用数组中该索引处的值初始化节点。
   - 递归地构造左子树和右子树，分别使用数组的左半部分和右半部分。
4. 主函数调用：在 sortedArrayToBST 函数中，检查数组是否为空，如果不为空，则调用 handleTreeNode 函数，并传入数组以及索引范围。

时间复杂度：O(n)，其中 n 是数组的长度。每个元素恰好被访问一次。
空间复杂度：O(logn)，这是因为在最坏情况下（树完全不平衡），递归的深度可以达到数组长度的对数。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  return handleTreeNode(nums, 0, nums.length - 1);
};

var handleTreeNode = (nums, low, high) => {
  if (low > high) return null;
  const mid = (low + high) >> 1;
  const node = new TreeNode(nums[mid]);
  node.left = handleTreeNode(nums, low, mid - 1);
  node.right = handleTreeNode(nums, mid + 1, high);
  return node;
};
```
