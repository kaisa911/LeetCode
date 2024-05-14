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

思路：

1. 初始化：定义变量res为0，用于存储最大利润，并设置minPrice为数组的第一个价格，作为初始的最小买入价格。
2. 遍历数组：从第二个元素开始遍历prices数组。
3. 计算利润：在每次循环中，计算从minPrice到当前价格prices[i]的潜在利润，并使用Math.max更新res。
4. 更新最小价格：同时，更新minPrice为到目前为止遇到的最小价格。
5. 返回结果：循环结束后，返回res作为最大利润。

这种方法的时间复杂度是O(n)，其中n是prices数组的长度，因为数组中的每个价格只被访问一次。空间复杂度是O(1)，因为只需要常数级别的额外空间来存储最小价格和最大利润。

```ts
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  let minPrice = prices[0]; // 初始化为第一个价格

  for (let i = 1; i < prices.length; i++) {
    // 计算从最小价格到当前价格的潜在利润
    res = Math.max(res, prices[i] - minPrice);
    // 更新最小价格，如果当前价格更低
    minPrice = Math.min(minPrice, prices[i]);
  }

  return res;
};
```
