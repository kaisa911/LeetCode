# 二叉树中的最长交错路径

给你一棵以 root 为根的二叉树，二叉树中的交错路径定义如下：

选择二叉树中 任意 节点和一个方向（左或者右）。
如果前进方向为右，那么移动到当前节点的的右子节点，否则移动到它的左子节点。
改变前进方向：左变右或者右变左。
重复第二步和第三步，直到你在树中无法继续移动。
交错路径的长度定义为：访问过的节点数目 - 1（单个节点的路径长度为 0 ）。

请你返回给定树中最长 交错路径 的长度。

示例 1：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/07/sample_1_1702.png)

```javascript
输入：root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1,null,1]
输出：3
解释：蓝色节点为树中最长交错路径（右 -> 左 -> 右）。
```

示例 2：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/03/07/sample_2_1702.png)

```javascript
输入：root = [1,1,1,null,1,null,null,1,1,null,1]
输出：4
解释：蓝色节点为树中最长交错路径（左 -> 右 -> 左 -> 右）。
```

示例 3：

```javascript
输入：root = [1]
输出：0
```

提示：

- 每棵树最多有 50000 个节点。
- 每个节点的值在 [1, 100] 之间。

思路：

拿到这个题目，首先需要理解交错路径的定义，即通过在二叉树中交替向左和向右移动来形成路径。初步思路是通过深度优先搜索（DFS）遍历二叉树，在遍历过程中记录当前路径的左右方向的长度，并不断更新最长交错路径的长度。选择 DFS 的理由是它能够方便地深入到二叉树的每个节点，并回溯计算路径长度。

1. 首先定义一个变量`maxLength`来存储最长交错路径的长度。
2. 在`dfs`函数中，传入当前节点、上一步的方向以及当前路径长度。
3. 每次更新`maxLength`为当前的最大长度。
4. 对于左子节点，如果上一步是向左，则重新从 1 开始计算；如果上一步是向右，则在当前长度基础上加 1 继续计算。
5. 对于右子节点，类似地根据上一步方向决定是重新从 1 开始还是在当前长度上加 1 继续计算。

时间复杂度：O(n)，其中 n 是二叉树的节点数。因为需要遍历每个节点一次。
空间复杂度：O(h)，其中 h 是二叉树的高度。这是递归栈的空间开销。在最坏情况下，二叉树退化为链表，空间复杂度为 O(n)。

```javascript
var longestZigZag = function (root) {
  let maxLength = 0;
  const dfs = (node, isLeft, length) => {
    maxLength = Math.max(maxLength, length);
    if (node.left) {
      if (isLeft) {
        dfs(node.left, false, 1);
      } else {
        dfs(node.left, false, length + 1);
      }
    }
    if (node.right) {
      if (isLeft) {
        dfs(node.right, true, length + 1);
      } else {
        dfs(node.right, true, 1);
      }
    }
  };
  dfs(root, false, 0);
  return maxLength;
};
```
