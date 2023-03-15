function twoSum(n: number): number[] {
  const dp: number[] = new Array(70).fill(0);
  for (let i = 1; i <= 6; i++) {
    dp[i] = 1;
  }
  for (let i = 2; i <= n; i++) {
    for (let j = i * 6; j >= i; j--) {
      dp[j] = 0;
      for (let cur = 1; cur <= 6; cur++) {
        if (j - cur < i - 1) break;
        dp[j] += dp[j - cur];
      }
    }
  }
  const ans: number[] = [];
  const sum = Math.pow(6, n);
  for (let i = n; i <= 6 * n; i++) {
    ans.push(dp[i] / sum);
  }
  return ans;
}
