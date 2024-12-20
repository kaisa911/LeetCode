# 多米诺和托米诺平铺

有两种形状的瓷砖：一种是 2 x 1 的多米诺形，另一种是形如 "L" 的托米诺形。两种形状都可以旋转。
![](https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg)
给定整数 n ，返回可以平铺 2 x n 的面板的方法的数量。返回对 109 + 7 取模 的值。

平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。

示例 1:
![](https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg)

```js
输入: n = 3
输出: 5
解释: 五种不同的方法如上所示。
```

示例 2:

```js
输入: n = 1;
输出: 1;
```

提示：

- 1 <= n <= 1000

思路：

拿到这个题目，首先要明确这是一个关于计算平铺方法数量的问题。可以考虑使用动态规划来解决，因为对于每个长度为 `i` 的面板，其平铺方法数量可能依赖于前面长度为 `i - 1` 的面板的平铺方法。选择动态规划的理由是，通过逐步计算和存储前面状态的结果，可以有效地避免重复计算，并且能够清晰地建立状态转移关系。

1. 定义四个变量 `dp1`、`dp2`、`dp3`、`dp4` 分别表示四种不同的状态，其中 `dp1` 表示只有下部分被覆盖的情况，`dp2` 表示只有右部分被覆盖的情况，`dp3` 表示只有上部分被覆盖的情况，`dp4` 表示完全覆盖的情况。
2. 每次循环通过上一轮的状态计算出这一轮的状态。
3. 最后返回完全覆盖状态 `dp4` 。

时间复杂度：O(n)，只需要进行一次线性的循环计算。
空间复杂度：O(1)，只使用了固定的几个变量，不随输入规模 `n` 的增加而增加。 而您原来的解法空间复杂度为 O(n) 。

```js
var numTilings = function (n) {
  const mod = 1e9 + 7;
  let dp1 = 1,
    dp2 = 0,
    dp3 = 0,
    dp4 = 1;
  for (let i = 1; i <= n; i++) {
    let temp1 = dp1,
      temp2 = dp2,
      temp3 = dp3,
      temp4 = dp4;
    dp1 = temp4;
    dp2 = (temp1 + temp3) % mod;
    dp3 = (temp1 + temp2) % mod;
    dp4 = (temp1 + temp2 + temp3 + temp4) % mod;
  }
  return dp4;
};
```
