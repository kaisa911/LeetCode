# 统计二叉树中好节点的数目

你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。

「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。

示例 1：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/test_sample_1.png)

```javascript
输入：root = [3,1,4,3,null,1,5]
输出：4
解释：图中蓝色节点为好节点。
根节点 (3) 永远是个好节点。
节点 4 -> (3,4) 是路径中的最大值。
节点 5 -> (3,4,5) 是路径中的最大值。
节点 3 -> (3,1,3) 是路径中的最大值。
```

示例 2：
![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/05/16/test_sample_2.png)

```javascript
输入：root = [3,3,null,4,2]
输出：3
解释：节点 2 -> (3, 3, 2) 不是好节点，因为 "3" 比它大。
```

示例 3：

```javascript
输入：root = [1]
输出：1
解释：根节点是好节点。
```

提示：

- 二叉树中节点数目范围是 [1, 10^5] 。
- 每个节点权值的范围是 [-10^4, 10^4] 。

思路：

拿到这道题，首先要理解“好节点”的定义，即从根节点到该节点的路径上没有比它更大的值。可以考虑使用深度优先搜索（DFS）的方法来遍历二叉树，在遍历过程中记录当前路径上的最大值，与当前节点的值进行比较，来判断当前节点是否为好节点，并累计好节点的数量。选择 DFS 是因为它能够方便地遍历整棵二叉树，并且在遍历过程中维护所需的信息。

1. 定义了一个 `dfs` 函数，接受当前节点 `root` 和当前路径的最大值 `path_max` 作为参数。
2. 首先处理边界情况，如果 `root` 为 `null`，则返回 `0`，表示没有好节点。
3. 初始化结果变量 `res` 为 `0`。
4. 如果当前节点的值大于等于路径最大值，说明当前节点是好节点，`res` 加 `1`，并更新路径最大值为当前节点的值。
5. 递归地对左子树和右子树进行遍历，并将结果累加到 `res` 中。
6. 最后返回 `res`，即当前子树中的好节点数量。

时间复杂度：O(n)，其中 n 是二叉树中的节点数。因为需要遍历每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是由于递归调用栈的深度最大为二叉树的高度。

```javascript
var goodNodes = function (root) {
  const dfs = (root, path_max) => {
    if (root == null) {
      return 0;
    }
    let res = 0;
    if (root.val >= path_max) {
      res++;
      path_max = root.val;
    }
    res += dfs(root.left, path_max) + dfs(root.right, path_max);
    return res;
  };
  return dfs(root, -Infinity);
};
```
