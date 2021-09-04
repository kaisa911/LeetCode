function cuttingRope(n: number): number {
  if (n == 1 || n == 2) return 1;
  if (n == 3) return 2;
  let sum = 1;
  while (n > 4) {
    sum *= 3;
    n -= 3;
  }

  return sum * n;
}
