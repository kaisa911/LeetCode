# 路径总和 II

给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。

叶子节点 是指没有子节点的节点。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg)

```js
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：[[5,4,11,2],[5,8,4,5]]
```

示例 2：
![2](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```js
输入：root = [1,2,3], targetSum = 5
输出：[]
```

示例 3：

```js
输入：root = [1,2], targetSum = 0
输出：[]
```

提示：

- 树中节点总数在范围 [0, 5000] 内
- -1000 <= Node.val <= 1000
- -1000 <= targetSum <= 1000

思路

1. 初始化：创建一个结果数组 result，用于存储所有满足条件的路径，以及一个栈 stack，用于存储当前路径上的节点值。
2. 辅助函数：定义一个递归函数 helper，它接收当前节点作为参数。
3. 基本情况：如果当前节点为空，直接返回。
4. 路径追踪：将当前节点的值添加到栈 stack 中。
5. 检查叶子节点：如果当前节点是叶子节点（没有左右子节点），则检查当前路径的和是否等于目标和 sum：如果相等，将当前路径的副本添加到结果数组 result 中。
6. 递归遍历：递归地调用 helper 函数遍历左子树和右子树：
   - 在遍历左子树前，不需要从栈中弹出当前节点。
   - 在遍历右子树前，也不需要从栈中弹出当前节点。
7. 回溯：递归返回后，当前节点的左右子树已经访问完毕，从栈中弹出当前节点的值，以便于回溯。
8. 主函数调用：在 pathSum 函数中调用 helper 函数，并返回结果数组 result。

时间复杂度：O(n×s)，其中 n 是树中节点的数量，s 是目标和的大小。在最坏的情况下，每个节点都可能成为一条路径的一部分。
空间复杂度：O(n)，最坏情况下，栈可能需要存储整个树的高度，加上结果数组存储所有路径的空间。

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const result = [];
  const stack = [];
  const helper = function (root) {
    if (!root) return;
    stack.push(root.val);
    if (!root.left && !root.right) {
      const pathSum = stack.reduce((a, b) => a + b, 0);
      if (pathSum === sum) {
        result.push([...stack]);
      }
      return;
    }
    helper(root.left);
    if (root.left) {
      stack.pop();
    }
    helper(root.right);
    if (root.right) stack.pop();
  };
  helper(root);
  return result;
};
```
