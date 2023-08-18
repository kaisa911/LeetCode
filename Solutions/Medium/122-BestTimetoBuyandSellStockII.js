var maxProfit = (prices) => {
  const n = prices.length;
  let dp0 = 0,
    dp1 = -prices[0];

  for (let i = 1; i < n; i++) {
    let newDp0 = Math.max(dp0, dp1 + prices[i]);
    let newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};

var maxProfit = function (prices) {
  let res = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    res += Math.max(0, prices[i] - prices[i - 1]);
  }
  return res;
};
