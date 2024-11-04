/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function (words) {
  const minFreq = new Array(26).fill(Infinity);
  for (const word of words) {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }
  const result = [];
  for (let i = 0; i < 26; i++) {
    while (minFreq[i] > 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      minFreq[i]--;
    }
  }
  return result;
};
