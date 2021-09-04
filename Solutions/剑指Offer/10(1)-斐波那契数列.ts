function fib(n: number): number {
  const list: Array<number> = [0, 1, 1];
  const MOD = 1e9 + 7;

  if (n > 2) {
    for (let i: number = 2; i <= n; i += 1) {
      list[i] = (list[i - 1] + list[i - 2]) % MOD;
    }
  }
  return list[n] % MOD;
}
