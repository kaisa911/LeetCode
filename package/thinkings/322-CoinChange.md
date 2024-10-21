# 零钱兑换

给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

示例 1：

```javascript
输入：coins = [1, 2, 5], amount = 11
输出：3
解释：11 = 5 + 5 + 1
```

示例 2：

```javascript
输入：coins = [2], amount = 3
输出：-1
```

示例 3：

```javascript
输入：coins = [1], amount = 0
输出：0
```

提示：

- 1 <= coins.length <= 12
- 1 <= coins[i] <= 2^31 - 1
- 0 <= amount <= 10^4

思路：

解题的初步思路是通过构建一个动态规划数组来记录凑成每个金额所需的最少硬币数。选择动态规划方法的原因是，对于每个金额，我们可以通过已有的较小金额的最优解推导出当前金额的最优解，满足动态规划的最优子结构性质。而且题目中硬币数量无限制，符合动态规划常见的应用场景。

1. 首先处理金额为 0 的特殊情况，直接返回 0。
2. 初始化一个长度为 amount + 1 的数组 dp，并将所有元素初始化为 Infinity，因为初始时我们认为凑成任意金额都需要无穷多的硬币，但是 dp [0] 设为 0，因为凑成 0 金额不需要硬币。
3. 外层循环遍历所有的硬币面额，对于每一种硬币面额 coins [i]：
   - 内层循环从 coins [i] 开始到 amount，因为金额小于 coins [i] 时不可能用当前硬币凑成。对于每个金额 j，比较用当前硬币凑成 j - coins [i] 金额所需的硬币数加 1（dp [j - coins [i]] + 1）和之前记录的凑成 j 金额所需的最少硬币数 dp [j]，取较小值更新 dp [j]。
4. 最后判断 dp [amount] 是否为 Infinity，如果是则返回 - 1，表示无法凑成；否则返回 dp [amount]，即凑成 amount 金额所需的最少硬币数。

时间复杂度：有两层嵌套循环，外层循环遍历 coins 数组，时间复杂度为 O (n)，其中 n 是 coins 数组的长度，内层循环从 1 到 amount，时间复杂度为 O (amount)，所以总的时间复杂度为 O (n \* amount)。
空间复杂度：使用了一个长度为 amount + 1 的数组 dp 来存储中间结果，所以空间复杂度为 O (amount)。

```javascript
const coinChange = (coins, amount) => {
  if (!amount) {
    return 0;
  }

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
```
