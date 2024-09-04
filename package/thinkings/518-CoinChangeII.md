# 零钱兑换 II

给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

假设每一种面额的硬币有无限个。

题目数据保证结果符合 32 位带符号整数。

示例 1：

```js
输入：amount = 5, coins = [1, 2, 5]
输出：4
解释：有四种方式可以凑成总金额：
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
```

示例 2：

```js
输入：amount = 3, coins = [2]
输出：0
解释：只用面额 2 的硬币不能凑成总金额 3 。
```

示例 3：

```js
输入：amount = 10, coins = [10]
输出：1
```

提示：

- 1 <= coins.length <= 300
- 1 <= coins[i] <= 5000
- coins 中的所有值 互不相同
- 0 <= amount <= 5000

思路：
1. 初始化动态规划数组：创建一个长度为 amount + 1 的数组 dp，用来存储每个金额所能组成的硬币组合数。dp[0] 初始化为 1，因为金额为 0 的组合只有一种，即不使用任何硬币。
2. 遍历每一种硬币：对于数组 coins 中的每一种硬币，从该硬币的面值开始，更新 dp 数组。对于每个金额 i，如果 i 大于或等于硬币的面值，那么 dp[i] 的值应该加上 dp[i - coin] 的值，这表示使用一个硬币面值为 coin 的硬币后，组成金额 i - coin 的组合数。
3. 返回结果：最后，dp[amount] 存储的就是组成总金额 amount 的硬币组合数。


时间复杂度：O(amount * coins.length)，因为需要遍历每一种硬币，并对于每种硬币，更新从 coin 到 amount 的 dp 数组。
空间复杂度：O(amount)，因为只使用了一维数组来存储中间结果。

```js
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};
```
