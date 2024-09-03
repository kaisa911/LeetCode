# 二叉树中的最大路径和

二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

示例 1：

![1](https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg)

```js
输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

示例 2：
![2](https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg)

```javascript
输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

提示：

树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000

思路

1. 定义全局变量：maxSum 用于存储全局最大路径和，初始值为 Number.MIN_SAFE_INTEGER。
2. 递归函数：定义一个递归函数 dfs，它接收当前节点 root 作为参数，并返回当前子树对外提供的最大路径和。
3. 基本情况：如果当前节点为空，返回 0，表示没有贡献路径和。
4. 递归计算：递归地计算左子树和右子树的最大路径和。
5. 更新全局最大路径和：计算当前节点作为路径一部分时的最大路径和（包括当前节点以及左右子树的最大路径和），并更新全局最大路径和。
6. 返回子树对外提供的最大路径和：返回当前子树对外提供的最大路径和，如果该值为负，则返回 0。
7. 主函数调用：在 maxPathSum 函数中调用 dfs 函数，并返回全局最大路径和。

算法复杂度
时间复杂度：O(n)，其中 n 是二叉树中的节点数。算法需要访问每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是因为递归栈的深度，最坏情况下是树完全不平衡时的 O(n)。

```javascript
const maxPathSum = (root) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  // 最大路径和
  const dfs = (root) => {
    if (root == null) {
      // 遍历到null节点，收益0
      return 0;
    }
    const left = dfs(root.left);
    // 左子树提供的最大路径和
    const right = dfs(root.right);
    // 右子树提供的最大路径和
    const innerMaxSum = left + root.val + right;
    // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum);
    // 挑战最大纪录
    const outputMaxSum = root.val + Math.max(0, left, right);
    // 当前子树对外提供的最大和 // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  };
  dfs(root);
  // 递归的入口
  return maxSum;
};
```
