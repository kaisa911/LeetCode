# 路径总和 III

给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg)

```js
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

示例 2：

```js
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```

提示:

- 二叉树的节点个数的范围是 [0,1000]
- -10^9 <= Node.val <= 10^9
- -1000 <= targetSum <= 1000

思路：

## 题目的整理分析

这道题要求找出二叉树中节点值之和等于目标值的路径数目，且路径方向必须向下。

一种可行的思路是采用递归的方法。对于整个树，我们可以分别计算从根节点开始的路径满足条件的数量（通过 rootSum 函数），然后递归地计算左子树和右子树中满足条件的路径数量，并将它们相加。在 rootSum 函数中，对于每个节点，检查当前节点值是否等于目标值，如果是则路径数量加 1，然后递归地在左子树和右子树中寻找节点值之和等于目标值减去当前节点值的路径。

1. 在 pathSum 函数中：
   - 首先判断如果根节点 root 为 null，直接返回 0，因为空树不存在路径。
   - 计算从根节点开始的满足条件的路径数量，通过调用 rootSum(root, targetSum)。
   - 递归地计算左子树中满足条件的路径数量，并加到结果中，通过调用 pathSum(root.left, targetSum)。
   - 递归地计算右子树中满足条件的路径数量，并加到结果中，通过调用 pathSum(root.right, targetSum)。
   - 最后返回总的路径数量。
2. 在 rootSum 函数中：
   - 初始化变量 ret 为 0，用于存储从当前节点开始的满足条件的路径数量。
   - 如果当前节点 root 为 null，返回 0，因为空节点不存在路径。
   - 获取当前节点的值 val。
   - 如果 val 等于目标值 targetSum，将 ret 加 1。
   - 递归地在左子树中寻找节点值之和等于目标值减去当前节点值（targetSum - val）的路径，并将结果加到 ret 中，通过调用 rootSum(root.left, targetSum - val)。
   - 递归地在右子树中寻找节点值之和等于目标值减去当前节点值的路径，并将结果加到 ret 中，通过调用 rootSum(root.right, targetSum - val)。
   - 最后返回 ret，即从当前节点开始的满足条件的路径数量。

时间复杂度：在最坏情况下，对于每个节点都可能需要遍历整棵树来寻找满足条件的路径。二叉树有 n 个节点，对于每个节点都可能进行深度优先搜索，每次搜索时间复杂度为 O(n)，所以总的时间复杂度为 O(n^2)。
空间复杂度：由于采用了递归，在最坏情况下，递归栈的深度可能达到树的高度 h，空间复杂度为 O(h)。在最坏情况下，二叉树是一条链，树的高度 h 等于节点数 n，所以空间复杂度为 O(n)。

```js
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0;
  }

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

const rootSum = (root, targetSum) => {
  let ret = 0;

  if (root == null) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }

  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
};
```
