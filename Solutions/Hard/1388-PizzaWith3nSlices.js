var maxSizeSlices = (slices) => {
  const v1 = slices.slice(1);
  const v2 = slices.slice(0, slices.length - 1);
  const res1 = calculate(v1);
  const res2 = calculate(v2);

  return Math.max(res1, res2);
};

var calculate = (slices) => {
  const N = slices.length;
  const n = Math.floor((slices.length + 1) / 3);
  const dp = new Array(N).fill(0).map(() => new Array(n + 1).fill(-Infinity));
  dp[0][0] = 0;
  dp[0][1] = slices[0];
  dp[1][0] = 0;
  dp[1][1] = Math.max(slices[0], slices[1]);

  for (var i = 0; i < N; i++) {
    dp[i][0] = 0;
    for (let j = 0; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 2][j - 1] + slices[i]);
    }
  }
  return dp[N - 1][n];
};
