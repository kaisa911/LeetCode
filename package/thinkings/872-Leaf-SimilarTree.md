# 叶子相似的树

请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

示例 1：
![](https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg)

```js
输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true
```

示例 2：
![](https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg)

```js
输入：root1 = [1,2,3], root2 = [1,3,2]
输出：false
```

提示：

- 给定的两棵树结点数在 [1, 200] 范围内
- 给定的两棵树上的值在 [0, 200] 范围内

思路：

拿到这个题目，首先要明确需要比较两棵树的叶子节点值序列是否相同。可以通过深度优先遍历（DFS）的方式获取每棵树的叶子节点值，并将其存储在数组中。选择 DFS 是因为它能够方便地遍历到树的叶子节点，并按照递归的方式处理左右子树，确保不会遗漏叶子节点。

1. 首先定义两个空数组 `seq1` 和 `seq2` 来存储两棵树的叶子节点值。
2. 定义 `dfs` 函数，当节点为空时直接返回。如果节点是叶子节点，将其值添加到对应的数组中。
3. 分别对两棵树进行深度优先遍历，填充 `seq1` 和 `seq2` 数组。
4. 通过循环比较两个数组中对应位置的元素是否相同，如果有不同则返回 `false`。
5. 最后判断两个数组的长度是否相同，如果长度不同也返回 `false`，否则返回 `true`。

时间复杂度：O(n)，其中 n 是两棵树的节点总数。因为需要遍历两棵树的所有节点。
空间复杂度：O(n)，主要用于存储叶子节点的值的两个数组。

```javascript
var leafSimilar = function (root1, root2) {
  const seq1 = [];
  const seq2 = [];

  const dfs = (root, seq) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null) {
      seq.push(root.val);
    }
    dfs(root.left, seq);
    dfs(root.right, seq);
  };

  dfs(root1, seq1);
  dfs(root2, seq2);

  for (let i = 0; i < seq1.length && i < seq2.length; i++) {
    if (seq1[i] !== seq2[i]) {
      return false;
    }
  }
  return seq1.length === seq2.length;
};
```
