/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  let result = 1;
  let currentPow = x;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n > 0) {
    if (n % 2 === 1) {
      result *= currentPow;
    }
    currentPow *= currentPow;
    n = n / 2;
  }

  return result;
};
