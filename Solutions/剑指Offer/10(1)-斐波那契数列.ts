function fib(n: number): number {
  let list: Array<number> = [0, 1, 1];
  if (n > 2) {
    for (let i: number = 2; i <= n; i += 1) {
      list[i] = (list[i - 1] % (1e9 + 7)) + (list[i - 2] % (1e9 + 7));
    }
  }
  return list[n] % (1e9 + 7);
}
