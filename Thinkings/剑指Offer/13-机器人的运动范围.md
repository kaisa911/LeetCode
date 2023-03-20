# 机器人的运动范围

地上有一个 m 行 n 列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于 k 的格子。例如，当 k 为 18 时，机器人能够进入方格 [35, 37] ，因为 3+5+3+7=18。但它不能进入方格 [35,38]，因为 3+5+3+8=19。请问该机器人能够到达多少个格子？

示例 1：

```js
输入：m = 2, n = 3, k = 1
输出：3
```

示例 2：

```js
输入：m = 3, n = 1, k = 0
输出：1
```

提示：

- 1 <= n,m <= 100
- 0 <= k <= 20

**思路：**

这道题，emmm，感觉和12题差不多，可以考虑dfs来做。从[0,0]开始，然后向右向下继续寻找

- DFS 解析：
  - 递归参数： 当前元素在矩阵中的行列索引 i 和 j 。
- 终止条件：

  - 行或列索引越界
  - 索引之和大于k
  - 当前矩阵元素已访问过（通过将访问过的位置的dp设置为true）

- 递推过程：
  - 标记当前矩阵元素： 将dp[i][j] 设置为true ，代表此元素已访问过，防止之后搜索时重复访问。
  - 搜索下一单元格： 朝当前元素的 下、右 两个方向开启下层递归，并记录结果 res+=1 。

- 返回值： 返回数字型 res ，代表可以访问的坐标数。

```ts
const getSum = (num: number): number => {
  return [...String(num)].reduce((a, b) => (+a) + (+b), 0)
};
function movingCount(m: number, n: number, k: number): number {
  const dp: boolean[][] = new Array(m).fill(null).map(() => new Array(n).fill(false));
  let res: number = 0;
  const dfs = (i: number, j: number): void => {
    if (i >= m || j >= n || dp[i][j] || getSum(i) + getSum(j) > k) return;
    dp[i][j] = true;
    res += 1;
    dfs(i, j + 1);
    dfs(i + 1, j);
  };
  dfs(0, 0);
  return res;
}
```
