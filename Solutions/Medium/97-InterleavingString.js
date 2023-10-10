var isInterleave = function (s1, s2, s3) {
  const m = s1.length + 1,
    n = s2.length + 1;
  if (s3.length !== m + n - 2) return false;
  const dp = [];
  for (let i = 0; i < m; ++i) {
    const temp = new Array(n);
    dp.push(temp);
  }
  dp[0][0] = true;
  for (let i = 1; i < m; ++i) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }
  for (let j = 1; j < n; ++j) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }
  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
