# 矩阵中的最长递增路径

给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

示例 1：
![image](https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg)

```javascript
输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4
解释：最长递增路径为 [1, 2, 6, 9]。
```

示例 2：
![image](https://assets.leetcode.com/uploads/2021/01/27/tmp-grid.jpg)

```javascript
输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
```

示例 3：

```javascript
输入：matrix = [[1]]
输出：1
```

提示：

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 200
- 0 <= matrix[i][j] <= 2^31 - 1

思路：
这道题的思路可以从动态规划和深度优先搜索（DFS）的角度考虑。上述代码采用了记忆化搜索（结合了动态规划和 DFS 的思想）来解决问题。对于矩阵中的每个单元格，我们需要向上下左右四个方向探索递增路径，使用记忆化（dp 数组）可以避免重复计算已经计算过的单元格的最长递增路径长度，这样可以在合理的时间内解决问题。

1. 首先初始化一些变量：
   - rowLen 和 colLen 分别表示矩阵的行数和列数。
   - 创建 dp 数组，用于存储每个单元格的最长递增路径长度，初始化为 0。
   - res 用于记录全局最长递增路径长度，初始化为 0。
2. 对于 helper 函数：
   - 第一步：判断边界条件和当前单元格的值是否小于等于上一个单元格的值，如果是则返回 0，因为不符合递增路径的条件。
   - 第二步：如果当前单元格的最长递增路径长度已经在 dp 数组中计算过（dp [i][j] 不为 0），则直接返回 dp [i][j]，避免重复计算。
   - 第三步：分别计算当前单元格向上下左右四个方向走的最长递增路径长度（top、bottom、left、right），通过递归调用 helper 函数实现，并在每次递归时传入当前单元格的值作为下一次递归的上一个单元格的值（lastNum）。然后将这四个方向的最大值加 1（因为当前单元格本身也算路径中的一个）记录在 dp [i][j] 中，并返回 dp [i][j]。
3. 最后通过两层嵌套循环遍历矩阵中的每个单元格，调用 helper 函数计算每个单元格的最长递增路径长度，并更新全局最长递增路径长度 res。

时间复杂度：对于矩阵中的每个单元格都可能进行深度优先搜索，但是由于有记忆化（dp 数组），每个单元格最多被计算一次。在最坏情况下，时间复杂度接近 O (m \* n)，其中 m 是行数，n 是列数。但由于递归调用的存在，实际的时间复杂度会受到矩阵中元素值分布的影响。
空间复杂度：使用了一个大小为 m \* n 的 dp 数组来存储中间结果，所以空间复杂度为 O (m \* n)。另外，由于递归调用会占用栈空间，在最坏情况下，递归深度可能达到 m \* n，所以总的空间复杂度为 O (m \* n)。

```javascript
var longestIncreasingPath = function (matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  const dp = Array.from({ length: rowLen }, () => new Array(colLen).fill(0));
  let res = 0;

  // 第一步： 从一点往4个方向递归：碰到比他大的就加一，否则就加0，结束返回；
  function helper(i, j, lastNum) {
    if (i < 0 || j < 0 || i >= rowLen || j >= colLen || matrix[i][j] <= lastNum) return 0;
    if (dp[i][j]) return dp[i][j]; //第二步： 如果当前格子已经算出来过最大值 就直接使用
    const top = helper(i - 1, j, matrix[i][j]) + 1;
    const bottom = helper(i + 1, j, matrix[i][j]) + 1;
    const left = helper(i, j - 1, matrix[i][j]) + 1;
    const right = helper(i, j + 1, matrix[i][j]) + 1;
    dp[i][j] = Math.max(top, bottom, left, right); //第三步： 否则就把往4个方向上走的最大值记录下来给dp
    return dp[i][j];
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      res = Math.max(res, helper(i, j, -1));
    }
  }
  return res;
};
```
