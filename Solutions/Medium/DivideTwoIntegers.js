/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let MAX_VALUE = Math.pow(2, 31) - 1,
    MIN_VALUE = -Math.pow(2, 31),
    flag = 1,
    res;

  res = Math.floor(Math.abs(dividend) / Math.abs(divisor));
  if ((dividend > 0 && divisor < 0) || !(dividend < 0 && divisor > 0)) {
    flag = -1;
    res = res * flag;
  }

  if (res < MIN_VALUE) res = MIN_VALUE;
  if (res > MAX_VALUE) res = MAX_VALUE;

  return res;
};
