/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  const n = a.length;
  if (n === 0) return [];
  const res = [1];
  let temp = 1;
  for (let i = 1; i < n; i++) {
    temp *= a[i - 1];
    res[i] = temp;
  }
  temp = 1;
  for (let i = n - 1 - 1; i >= 0; i--) {
    temp *= a[i + 1];
    res[i] *= temp;
  }
  return res;
};
