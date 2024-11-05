/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const total = (rolls.length + n) * mean;
  const existingSum = rolls.reduce((acc, cur) => acc + cur, 0);
  const missingSum = total - existingSum;

  if (missingSum < n || missingSum > 6 * n) {
    return [];
  }

  const quotient = Math.floor(missingSum / n);
  const remainder = missingSum % n;

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    if (i < remainder) {
      result[i] = quotient + 1;
    } else {
      result[i] = quotient;
    }
  }

  return result;
};
