var maxSizeSlices = (slices) => {
  const n = slices.length;
  const k = Math.floor(n / 3);

  const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      if (i === 0) {
        dp[i][j] = j === 1 ? slices[i] : 0;
      } else if (j === 0) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], (i - 1 >= 0 ? dp[i - 2][j - 1] : 0) + slices[i]);
      }
    }
  }

  let res = Math.max(dp[n - 2][k], dp[n - 1][k]);
  return res;
};
