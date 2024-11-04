# 从根到叶的二进制数之和

给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

返回这些数字之和。题目数据保证答案是一个 32 位 整数。

示例 1：
![1](https://assets.leetcode.com/uploads/2019/04/04/sum-of-root-to-leaf-binary-numbers.png)

```javascript
输入：root = [1,0,1,0,1,0,1]
输出：22
解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
```

示例 2：

```javascript
输入：root = [0]
输出：0
```

提示：

- 树中的节点数在 [1, 1000] 范围内
- Node.val 仅为 0 或 1

思路：

拿到这个题目，首先要明确是通过遍历二叉树来计算从根到叶节点路径所表示的二进制数之和。选择深度优先搜索（DFS）的方法是因为它能够方便地沿着树的路径进行遍历，并且在到达叶节点时进行计算和累加。

1. 定义了 `dfs` 函数来进行深度优先搜索。首先判断根节点是否为空，如果为空则返回 0。
2. 计算当前节点值在路径中的位置，通过 `val = (val << 1) | root.val` 将当前节点值添加到路径值中。
3. 如果当前节点是叶节点（没有左右子节点），则直接返回计算得到的路径值。
4. 如果当前节点不是叶节点，就分别递归地对左子树和右子树进行深度优先搜索，并将结果相加返回。

时间复杂度：O(n)，其中 n 是二叉树的节点数。因为需要遍历每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是由于递归调用栈的空间消耗，在最坏情况下，二叉树是一条链，高度为 n，空间复杂度为 O(n)；在最好情况下，二叉树是完全平衡的，高度为 log(n)，空间复杂度为 O(log(n))。平均情况下空间复杂度为 O(h)。

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = (root) => {
  const dfs = (root, val) => {
    if (!root) {
      return 0;
    }
    val = (val << 1) | root.val;
    if (!root.left && !root.right) {
      return val;
    }
    return dfs(root.left, val) + dfs(root.right, val);
  };
  return dfs(root, 0);
};
```
