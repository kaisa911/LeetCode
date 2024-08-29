/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const MOD = 10 ** 9 + 7;
  const n = t.length,
    m = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1; // 空子序列的个数为1

  for (let i = 0; i < m; i++) {
    let prev = 0; // 用于存储前一个状态的值
    for (let j = 0; j < n; j++) {
      let temp = dp[j + 1];
      if (s[i] === t[j]) {
        dp[j + 1] = (prev + dp[j + 1]) % MOD;
      }
      prev = temp;
    }
  }

  return dp[n];
};
