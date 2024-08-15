/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0;
  signs = new Array(n + 1);
  for (let i = 2; i < n; i++) {
    if (!signs[i]) {
      count++;
      for (let j = 2 * i; j < n; j += i) {
        signs[j] = true;
      }
    }
  }
  return count;
};
