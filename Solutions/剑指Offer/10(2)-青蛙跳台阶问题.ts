function numWays(n: number): number {
  const MOD = 1e9 + 7;
  const list: Array<number> = [1, 1, 2];

  if (n > 2) {
    for (let i: number = 3; i <= n; i += 1) {
      list[i] = (list[i - 1] + list[i - 2]) % MOD;
    }
  }
  return list[n];
}
