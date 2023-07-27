var checkRecord = function (n) {
  const MOD = 10 ** 9 + 7;
  // 长度，A 的数量，结尾连续 L 的数量
  const dp = new Array(n + 1).fill(2).map(() => new Array(2).fill(0).map(() => new Array(3).fill(0)));
  dp[0][0][0] = 1;
  for (let i = 1; i <= n; i++) {
    // 以 P 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 0; k <= 2; k++) {
        dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % MOD;
      }
    }
    // 以 A 结尾的数量
    for (let k = 0; k <= 2; k++) {
      dp[i][1][0] = (dp[i][1][0] + dp[i - 1][0][k]) % MOD;
    }
    // 以 L 结尾的数量
    for (let j = 0; j <= 1; j++) {
      for (let k = 1; k <= 2; k++) {
        dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % MOD;
      }
    }
  }
  let res = 0;
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 2; k++) {
      res = (res + dp[n][j][k]) % MOD;
    }
  }
  return res;
};
