/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let n = s.length,
    low = 0,
    high = n;
  const perm = new Array(n + 1).fill(0);
  for (let i = 0; i < n; ++i) {
    perm[i] = s[i] === 'I' ? low++ : high--;
  }
  perm[n] = low; // 最后剩下一个数，此时 low == high
  return perm;
};
