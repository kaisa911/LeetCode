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
