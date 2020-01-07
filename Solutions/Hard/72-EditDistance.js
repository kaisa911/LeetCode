/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  const m = word1.length;
  const n = word2.length;
  const res = [];
  for (let i = 0; i <= m; i++) {
    res.push([]);
    for (let j = 0; j <= n; j++) {
      if (i * j) {
        res[i][j] =
          word1[i - 1] === word2[j - 1]
            ? res[i - 1][j - 1]
            : 1 + Math.min(res[i - 1][j - 1], res[i - 1][j], res[i][j - 1]);
      } else {
        res[i][j] = i + j;
      }
    }
  }
  return res[m][n];
};
