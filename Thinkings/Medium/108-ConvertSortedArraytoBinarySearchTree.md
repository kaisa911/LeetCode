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
var sortedArrayToBST = function(nums) {
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
