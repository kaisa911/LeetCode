# 乘法表中第k小的数

几乎每一个人都用 乘法表。但是你能在乘法表中快速找到第 k 小的数字吗？

乘法表是大小为 m x n 的一个整数矩阵，其中 mat[i][j] == i * j（下标从 1 开始）。

给你三个整数 m、n 和 k，请你在大小为 m x n 的乘法表中，找出并返回第 k 小的数字。

示例 1：
![](https://assets.leetcode.com/uploads/2021/05/02/multtable1-grid.jpg)
输入：m = 3, n = 3, k = 5
输出：3
解释：第 5 小的数字是 3 。
示例 2：
![](https://assets.leetcode.com/uploads/2021/05/02/multtable2-grid.jpg)
输入：m = 2, n = 3, k = 6
输出：6
解释：第 6 小的数字是 6 。

提示：

1 <= m, n <= 3 *104
1 <= k <= m* n
