function cuttingRope(n: number): number {
  if (n === 2 || n === 3) return n - 1;

  const MOD = 1e9 + 7;
  let res: number = 1;

  while (n > 4) {
    res *= 3;
    res = res % MOD;
    n -= 3;
  }
  
  return (res * n) % MOD;
}

