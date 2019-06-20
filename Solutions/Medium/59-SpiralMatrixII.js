/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = n => {
  if (n == 0) return [];
  const res = [];
  for (let i = 0; i < n; ++i) {
    const cache = [];
    cache.length = n;
    res.push(cache);
  }

  let current = 1,
    j = 0;
  while (current <= n * n) {
    for (let i = j; i < n - j; i++) res[j][i] = current++;
    for (let i = j + 1; i < n - j; i++) res[i][n - j - 1] = current++;
    for (let i = n - j - 2; i >= j; i--) res[n - j - 1][i] = current++;
    for (let i = n - j - 2; i > j; i--) res[i][j] = current++;

    j++;
  }

  return res;
};
