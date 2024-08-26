# 不同的二叉搜索树 II

给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

示例 1：

```js
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

示例 2：

```js
输入：n = 1
输出：[[1]]
```

提示：

- 1 <= n <= 8

思路：
1. 备忘录：使用一个Map对象memo作为备忘录，存储已经计算过的子问题的解，避免重复计算。
2. 递归构建：定义一个递归函数build(lo, hi)，它尝试构建所有可能的BST，这些树的节点值在闭区间[lo, hi]内。
3. 基本情况：如果lo大于hi，则表示不需要构建树（即为空树），返回包含null的数组。
4. 缓存检查：使用memoKey作为键，检查备忘录中是否已经有了[lo, hi]区间的BST集合。如果有，直接返回缓存的结果。
5. 穷举根节点：遍历区间[lo, hi]，每个数字都有可能成为BST的根节点。
6. 递归构建子树：对于每个可能的根节点，递归地构建左子树和右子树。左子树的所有节点值必须小于根节点的值，右子树的所有节点值必须大于根节点的值。
7. 组合树：对于每个可能的根节点，将其与所有可能的左子树和右子树组合，形成一个新的BST，并添加到结果集合中。
8. 存储结果：将生成的BST集合存储到备忘录中，然后返回这个集合。
9. 初始调用：从1到n开始构建BST，即调用build(1, n)。


时间复杂度：由于使用了备忘录来存储子问题的解，算法的时间复杂度降低。尽管最坏情况下仍然是指数级的，备忘录大大减少了重复计算。具体的时间复杂度难以用多项式表示，但可以认为对于每个n，算法将生成n!种可能的BST结构。
空间复杂度：O(n^2)，这是因为在最坏情况下，递归堆栈可能达到n的深度，同时备忘录可能存储n^2个节点的状态。

```js
var generateTrees = function (n) {
  if (n == 0) return [];
  // 备忘录，避免重复计算
  let memo = new Map();
  /* 构造闭区间 [lo, hi] 组成的 BST */
  const build = (lo, hi) => {
    let res = [];
    // base case，显然当lo > hi闭区间[lo, hi]肯定是个空区间，也就对应着空节点 null，
    if (lo > hi) {
      res.push(null);
      return res;
    }
    let memoKey = `${lo}&${hi}`;
    // 如果缓存当中有就直接拿
    if (memo.has(memoKey)) return memo.get(memoKey);
    // 1、穷举 root 节点的所有可能。
    for (let i = lo; i <= hi; i++) {
      // 2、递归构造出左右子树的所有合法 BST。
      let leftTree = build(lo, i - 1);
      let rightTree = build(i + 1, hi);
      // 3、给 root 节点穷举所有左右子树的组合。
      for (let left of leftTree) {
        for (let right of rightTree) {
          res.push(new TreeNode(i, left, right));
        }
      }
    }
    // 将结果集放入到缓存中
    memo.set(memoKey, res);
    return res;
  };
  // 构造闭区间 [1, n] 组成的 BST
  return build(1, n);
};
```
