/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], map1.get(word1[i]) + 1 || 1);
  }
  for (let i = 0; i < word2.length; i++) {
    map2.set(word2[i], map2.get(word2[i]) + 1 || 1);
  }
  for (let key of map1.keys()) {
    if (!map2.has(key)) return false;
  }
  const arr1 = [...map1.values()].sort((a, b) => a - b);
  const arr2 = [...map2.values()].sort((a, b) => a - b);
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
