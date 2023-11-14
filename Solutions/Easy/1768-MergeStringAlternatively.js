var mergeAlternately = function (word1, word2) {
  const m = word1.length,
    n = word2.length;
  let i = 0,
    j = 0;

  const ans = [];
  while (i < m || j < n) {
    if (i < m) {
      ans.push(word1[i]);
      ++i;
    }
    if (j < n) {
      ans.push(word2[j]);
      ++j;
    }
  }
  return ans.join('');
};
