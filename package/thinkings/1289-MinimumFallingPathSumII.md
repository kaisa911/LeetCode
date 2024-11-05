# 下降路径最小和 II

给你一个 n x n 整数矩阵 grid ，请你返回 非零偏移下降路径 数字和的最小值。

非零偏移下降路径 定义为：从 grid 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。

示例 1：
![1](https://assets.leetcode.com/uploads/2021/08/10/falling-grid.jpg)

```javascript
输入：grid = [[1,2,3],[4,5,6],[7,8,9]]
输出：13
解释：
所有非零偏移下降路径包括：
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
下降路径中数字和最小的是 [1,5,7] ，所以答案是 13 。
```

示例 2：

```javascript
输入：grid = [[7]]
输出：7
```

提示：

- n == grid.length == grid[i].length
- 1 <= n <= 200
- -99 <= grid[i][j] <= 99

思路：

1. 首先，对于每一行，需要找到两个关键的值：当前行的最小路径和（first_min_sum）以及次小路径和（second_min_sum）。同时，记录产生最小路径和的列索引（first_min_Index）。
2. 然后，遍历每一行时，对于当前行的每一列，计算选择该列元素后形成的路径和。如果当前列不是上一行产生最小路径和的列，那么路径和为当前列元素值加上上一行的最小路径和；如果当前列是上一行产生最小路径和的列，那么路径和为当前列元素值加上上一行的次小路径和。
3. 在计算当前行的最小路径和与次小路径和的过程中，不断更新这两个值以及对应的列索引。
4. 最后，当遍历完所有行后，返回最后一行的最小路径和。

时间复杂度：O(n^2)，两层循环导致。
空间复杂度：O(1)。

```javascript
const minFallingPathSum = (grid) => {
  const n = grid.length;
  let first_min_sum = 0;
  let second_min_sum = 0;
  let first_min_Index = -1;

  for (let i = 0; i < n; i++) {
    let cur_first_min_sum = Infinity;
    let cur_Second_min_sum = Infinity;
    let cur_first_min_Index = -1;

    for (let j = 0; j < n; j++) {
      let cur_sum = grid[i][j];
      if (j !== first_min_Index) {
        cur_sum += first_min_sim;
      } else {
        cur_sum += second_min_sim;
      }

      if (cur_sum < cur_first_min_sum) {
        cur_Second_min_sum = cur_first_min_sum;
        cur_first_min_sum = cur_sum;
        cur_first_min_Index = j;
      } else if (cur_sum < cur_Second_min_sum) {
        cur_Second_min_sum = cur_sum;
      }
    }
    first_min_sum = cur_first_min_sum;
    second_min_sum = cur_Second_min_sum;
    first_min_Index = cur_first_min_Index;
  }
  return first_min_sum;
};
```
