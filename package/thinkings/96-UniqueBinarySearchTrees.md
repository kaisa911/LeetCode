# 不同的二叉搜索树

给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

示例 1：

```js
![1](https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg)
输入：n = 3
输出：5
```

示例 2：

```js
输入：n = 1
输出：1
```

提示：

1 <= n <= 19
思路:

1. 理解问题：这个问题实际上是一个组合数学问题，与卡特兰数有关。在二叉搜索树中，选择一个节点作为根，剩下的节点可以以任意顺序分为左右两组，每组内的节点值也必须满足二叉搜索树的性质。
2. 卡特兰数：对于每个根节点，其左边的节点数为 i，右边的节点数为 n - i - 1。根据卡特兰数的定义，选择根节点的方法有 C(n-1, i)种，其中 C 是组合数，表示从 n-1 个不同元素中取 i 个元素的组合方式。
3. 组合数计算：组合数 C(n-1, i)可以用公式 C(n-1, i) = (n-1)! / (i! \* (n-1-i)!)计算。
4. 动态规划：使用动态规划的思想，可以递归地计算出对于任意 k（1 <= k <= n），根节点为 k 的 BST 的数量。记为 G(k, n)，有 G(k, n) = G(1, k-1) _ G(k, n-k) + G(k-1, k-1) _ G(k+1, n-k)。
5. 优化计算：由于组合数的计算涉及到阶乘，直接计算可能会导致数值非常大，因此可以使用优化的方法来减少计算量。具体来说，可以使用 C(n, k) = (2*(k-1) + 1) * C(n, k-1) / (n - k + 1)来避免阶乘的计算。
6. 最终计算：对于所有的 i 从 1 到 n，计算根节点为 i 的 BST 数量，并将它们相加，得到总的 BST 数量。

算法复杂度
时间复杂度：O(n^2)，因为对于每个 i，我们需要计算 C(n, i)，这需要 O(n)的时间，而 i 的取值范围是 1 到 n。
空间复杂度：O(1)，只需要常数级别的额外空间。

```js
var numTrees = function (n) {
  let c = 1;
  for (let i = 0; i < n; ++i) {
    c = (c * 2 * (2 * i + 1)) / (i + 2);
  }
  return c;
};
```
