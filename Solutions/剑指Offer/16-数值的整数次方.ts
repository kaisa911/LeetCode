function myPow(x: number, n: number): number {
  let res: number = 1.0;
  let t: number = n;
  while (n) {
    if (n & 1) res *= x;
    x *= x;
    n /= 2;
  }
  return t > 0 ? res : 1.0 / res;
}
