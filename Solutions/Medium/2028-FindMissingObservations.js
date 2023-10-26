/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const cnt = _.sum(rolls),
    m = rolls.length;
  const x = m * mean + n * mean - cnt;
  if (x / n > 6 || x / n < 1) {
    return [];
  } else {
    let so = (x / n) >> 0;
    const ans = new Array(n).fill(so);
    let last = x - n * so,
      k = 0;
    while (last-- > 0) {
      ans[k++]++;
    }
    return ans;
  }
};
