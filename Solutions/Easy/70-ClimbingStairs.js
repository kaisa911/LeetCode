/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
  let a = 1,
    b = 1;
  while (n-- > 0) {
    b += a;
    a = b - a;
  }
  return a;
};
