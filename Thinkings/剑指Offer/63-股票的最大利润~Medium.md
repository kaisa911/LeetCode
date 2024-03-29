# 股票的最大利润

假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖 一次 该股票可能获得的利润是多少？

例如一只股票在某些时间节点的价格为 [9,11,8,5,7,12,16,14]。

如果我们能在价格为 5 的时候买入并在价格为 16 时卖出，则能收获最大的利润 11。

数据范围

- 输入数组长度 [0,500]。

样例

```js
输入：[9, 11, 8, 5, 7, 12, 16, 14]

输出：11
```

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    res = Math.max(res, prices[i] - prices[i - 1]);
    prices[i] = Math.min(prices[i], prices[i - 1]);
  }
  return res;
};
```
