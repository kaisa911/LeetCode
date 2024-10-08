# 三角形最小路径和

给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

示例 1：

```js
输入：triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
输出：11
解释：如下面简图所示：
   2
  3 4
 6 5 7
4 1 8 3
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
```

示例 2：

```js
输入：triangle = [[-10]]
输出：-10
```

提示：

- 1 <= triangle.length <= 200
- triangle[0].length == 1
- triangle[i].length == triangle[i - 1].length + 1
- -10^4 <= triangle[i][j] <= 10^4

思路

1. 理解问题：问题要求从三角形的顶部开始，经过相邻的节点向下移动，找到路径和最小的问题。
2. 从底部开始：从三角形的底部（最后一行）开始，初始化动态规划数组 dp 与底部等长。
3. 初始化 dp 数组：将 dp 数组的每个元素设置为三角形底部对应节点的值，这是动态规划的基本情况。
4. 从下往上迭代：从倒数第二行开始，逆序遍历每一行：
   - 对于当前行的每个节点，计算通过它到达底部的最小路径和。这是通过取 dp 数组中该节点下方相邻两个节点的较小值加上当前节点的值来实现的。
5. 更新 dp 数组：更新 dp 数组，使其存储通过当前行每个节点到达底部的最小路径和。
6. 返回最小路径和：在迭代完成后，dp[0]将存储通过三角形顶部节点到达底部的最小路径和，返回这个值。

时间复杂度：O(n^2)，其中 n 是三角形的行数。需要填充整个 dp 数组。
空间复杂度：O(n)，用于存储动态规划数组。

```js
const minimumTotal = (triangle) => {
  const bottom = triangle[triangle.length - 1];
  const dp = new Array(bottom.length);
  // base case 是最后一行
  for (let i = 0; i < dp.length; i++) {
    dp[i] = bottom[i];
  }
  // 从倒数第二列开始迭代
  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
```
