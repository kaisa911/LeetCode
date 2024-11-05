/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    count1[word1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < word2.length; i++) {
    count2[word2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    if ((count1[i] === 0 && count2[i] !== 0) || (count1[i] !== 0 && count2[i] === 0)) {
      return false;
    }
  }
  count1.sort((a, b) => a - b);
  count2.sort((a, b) => a - b);
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
};
