# 查询网格图中每一列的宽度

给你一个下标从 0 开始的 m x n 整数矩阵 grid 。矩阵中某一列的宽度是这一列数字的最大 字符串长度 。

比方说，如果 grid = [[-10], [3], [12]] ，那么唯一一列的宽度是 3 ，因为 -10 的字符串长度为 3 。
请你返回一个大小为 n 的整数数组 ans ，其中 ans[i] 是第 i 列的宽度。

一个有 len 个数位的整数 x ，如果是非负数，那么 字符串长度 为 len ，否则为 len + 1 。

**示例 1：**

```js
输入：grid = [[1],[22],[333]]
输出：[3]
解释：第 0 列中，333 字符串长度为 3 。
```

**示例 2：**

```js
输入：grid = [[-15,1,3],[15,7,12],[5,6,-2]]
输出：[3,1,2]
解释：
第 0 列中，只有 -15 字符串长度为 3 。
第 1 列中，所有整数的字符串长度都是 1 。
第 2 列中，12 和 -2 的字符串长度都为 2 。
```

**提示：**

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 100
- -109 <= grid[r][c] <= 109

**思路：**
转为字符串后直接获取长度的代码
时间复杂度：O(nm)，其中 n 是 grid 的行数，m 是 grid 的列数。
空间复杂度：O(1)。除去返回值，只用到若干个变量。

```js
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    const n = grid.length;
    const m = grid[0].length;
    const res = new Array(m).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[j] = Math.max(res[j], grid[i][j].toString().length);
        }
    }
    return res;
};
```
