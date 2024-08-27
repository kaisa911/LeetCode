# 从中序与后序遍历序列构造二叉树

给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。

示例 1:
![1](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)

```js
输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
输出：[3,9,20,null,null,15,7]
```

示例 2:

```js
输入：inorder = [-1], postorder = [-1]
输出：[-1]
```

提示:

- 1 <= inorder.length <= 3000
- postorder.length == inorder.length
- -3000 <= inorder[i], postorder[i] <= 3000
- inorder 和 postorder 都由 不同 的值组成
- postorder 中每一个值都在 inorder 中
- inorder 保证是树的中序遍历
- postorder 保证是树的后序遍历


思路
1. 创建索引映射：首先，使用一个哈希表pos来存储中序遍历数组inorder中的每个值与其索引的映射，以便于快速查找根节点在中序遍历中的索引。
2. 递归辅助函数：定义一个递归函数_helper，它接收中序遍历的左右边界il和ir，以及后序遍历的左右边界pl和pr。
3. 基本情况：如果中序遍历的左边界il大于右边界ir，则当前子树为空，返回null。
4. 确定根节点：在后序遍历中，最后一个元素是整棵树的根节点。使用这个元素创建一个新节点root。
5. 计算根节点索引：在中序遍历中找到root的索引k。
6. 递归构建子树：根据根节点的索引k，递归地构建左子树和右子树：
    - 左子树的中序遍历边界为il到k-1，后序遍历边界为pl到k - 1 - il + pl。
    - 右子树的中序遍历边界为k+1到ir，后序遍历边界为k - il + pl到pr - 1。
7. 返回根节点：返回构建好的根节点root。
8. 主函数调用：在buildTree函数中，调用_helper函数并传入中序和后序遍历的边界。

时间复杂度：O(n)，其中n是树中节点的数量。每个节点恰好被访问一次。
空间复杂度：O(n)，这是因为递归栈的深度最多与树的高度相同，加上哈希表存储所有节点的索引。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const pos = {};
  for (let i = 0; i < inorder.length; i++) pos[inorder[i]] = i;
  return _helper(0, inorder.length - 1, 0, postorder.length - 1);
  function _helper(il, ir, pl, pr) {
    if (il > ir) return null;
    const root = new TreeNode(postorder[pr]);
    let k = pos[root.val];
    root.left = _helper(il, k - 1, pl, k - 1 - il + pl);
    root.right = _helper(k + 1, ir, k - il + pl, pr - 1);
    return root;
  }
};
```
