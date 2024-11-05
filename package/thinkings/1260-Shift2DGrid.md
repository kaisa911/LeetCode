# 二维网格迁移

给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。

每次「迁移」操作将会引发下述活动：

位于 grid[i][j]（j < n - 1）的元素将会移动到 grid[i][j + 1]。
位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
请你返回 k 次迁移操作后最终得到的 二维网格。

示例 1：
![1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/16/e1-1.png)

```javascript
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
输出：[[9,1,2],[3,4,5],[6,7,8]]
```

示例 2：
![2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/11/16/e2-1.png)

```javascript
输入：grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
输出：[[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]
```

示例 3：

```javascript
输入：grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
输出：[[1,2,3],[4,5,6],[7,8,9]]
```

提示：

- m == grid.length
- n == grid[i].length
- 1 <= m <= 50
- 1 <= n <= 50
- -1000 <= grid[i][j] <= 1000
- 0 <= k <= 100

思路：

拿到这道题，首先需要明确题目要求是对给定的二维数组`grid`进行`k`次的循环位移操作。解题的初步思路是通过计算每个元素位移后的位置，然后将原元素放置到新的位置。

1. 首先计算出整个二维数组的元素总数`total`，并对`k`进行取模操作，避免`k`值过大导致的重复位移。
2. 如果`k`为`0`，直接返回原数组，节省计算资源。
3. 通过两层循环遍历原数组的每个元素。
4. 计算出每个元素位移后的新行索引`newI`和新列索引`newJ`。
5. 将原数组中的元素放置到新的位置。

时间复杂度：O(m _ n)，其中`m`为行数，`n`为列数，需要遍历整个二维数组。
空间复杂度：O(m _ n)，因为创建了一个与原数组大小相同的新数组来存储结果。

```javascript
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const total = rows * cols;
  k = k % total;
  if (k === 0) {
    return grid;
  }

  const newGrid = JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const newI = Math.floor((i * cols + j + k) / cols);
      const newJ = (i * cols + j + k) % cols;
      newGrid[newI][newJ] = grid[i][j];
    }
  }
  return newGrid;
};
```
