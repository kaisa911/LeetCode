var maxProfit = function (prices, fee) {
  const n = prices.length;
  let [sell, buy] = [0, -prices[0]];
  for (let i = 1; i < n; i++) {
    [sell, buy] = [
      Math.max(sell, buy + prices[i] - fee),
      Math.max(buy, sell - prices[i]),
    ];
  }
  return sell;
};
