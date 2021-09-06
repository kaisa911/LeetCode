function printNumbers(n: number): number[] {
  let res: number[] = [];
  res.length = Math.pow(10, n) - 1;
  for (let i: number = 0; i < res.length; i++) {
    res[i] = i + 1;
  }
  return res;
}
