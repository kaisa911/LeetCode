# 买卖股票的最佳时机 III

给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

```javascript
输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
```

示例 2：

```javascript
输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

示例 3：

```javascript
输入：prices = [7,6,4,3,1]
输出：0
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
```

示例 4：

```javascript
输入：prices = [1]
输出：0
```

提示：

- 1 <= prices.length <= 10^5
- 0 <= prices[i] <= 10^5

思路

1. 初始化变量：
   - buy1：第一次买入股票的价格（取负数，因为我们将加上股票价格来计算利润）。
   - sell1：第一次卖出股票后的最大利润。
   - buy2：第二次买入股票的价格（在第一次卖出后的基础上计算）。
   - sell2：第二次卖出股票后的最大利润。
2. 遍历数组：遍历股票价格数组 prices，对于每一天的价格，更新上述变量：
   - buy1：更新为当前天的最低买入价格，即 Math.max(buy1, -prices[i])。
   - sell1：更新为第一次卖出的最大利润，即 Math.max(sell1, buy1 + prices[i])。
   - 2buy2：更新为在第一次卖出后，第二次买入的最低价格，即 Math.max(buy2, sell1 - prices[i])。
   - sell2：更新为第二次卖出的最大利润，即 Math.max(sell2, buy2 + prices[i])。
3. 返回最大利润：遍历结束后，sell2 存储了完成两笔交易所能得到的最大利润。

时间复杂度：O(n)，其中 n 是数组 prices 的长度。算法需要遍历数组中的每个元素一次。
空间复杂度：O(1)，只需要常数级别的额外空间。

```javascript
var maxProfit = function (prices) {
  const n = prices.length;
  let buy1 = -prices[0],
    buy2 = -prices[0];
  let sell1 = 0,
    sell2 = 0;
  for (let i = 1; i < n; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  return sell2;
};
```
