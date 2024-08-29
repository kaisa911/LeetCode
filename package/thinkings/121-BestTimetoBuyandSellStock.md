# 买卖股票的最佳时机

给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

示例 1：

```js
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
```

示例 2：

```js
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
```

提示：

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^4

思路

1. 初始化动态规划数组：创建一个数组 dp，其中 dp[i]是一个二维数组，dp[i][0]表示到第 i 天为止的最小买入价格，dp[i][1]表示到第 i 天为止的最大利润。
2. 基本情况：初始化 dp[0]，其中 dp[0][0]是第 0 天的买入价格的相反数（即-prices[0]），dp[0][1]是第 0 天的利润，初始为 0。
3. 动态规划更新：
   - 遍历 prices 数组，对于每一天 i（从 1 到 len - 1）：
   - 更新 dp[i][0]为到 i 天为止的最小买入价格，即 Math.max(dp[i - 1][0], -prices[i])，选择前一天的最小买入价格和当前价格的相反数中的较小值。
   - 更新 dp[i][1]为到 i 天为止的最大利润，即 Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])，选择前一天的最大利润和当前价格加上前一天的最小买入价格的较大值。
4. 返回最大利润：返回 dp[len - 1][1]，即最后一天的最大利润。

时间复杂度：O(n)，其中 n 是 prices 数组的长度。算法需要遍历整个数组一次。
空间复杂度：O(n)，用于存储动态规划数组。

```js
const maxProfit = (prices) => {
  const len = prices.length;
  // 创建dp数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < len; i++) {
    // 更新dp[i]
    dp[i] = [Math.max(dp[i - 1][0], -prices[i]), Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])];
  }
  return dp[len - 1][1];
};
```

思路

1. 单次遍历：不需要使用二维数组，只需使用两个变量 minPrice 和 maxProfit。
2. 更新最小价格：遍历数组时，每天的最小价格是当前价格和前一天最小价格的较小值。
3. 更新最大利润：同时计算如果今天卖出的最大利润，即当前价格与 minPrice 的差，与之前的 maxProfit 比较，取较大值。
4. 返回结果：遍历结束后，maxProfit 即为所求的最大利润。

```js
const maxProfit = (prices) => {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
};
```
