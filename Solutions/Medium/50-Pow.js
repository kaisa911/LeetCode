/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  }
  return myPow(x * x, (n - 1) / 2) * x;
};
