/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const patternSet = [...new Set(pattern.split(''))];
  const strSet = [...new Set(str.split(' '))];
  if (patternSet.length !== strSet.length) return false;

  let obj = {},
    res = '';
  for (let i = 0, len = patternSet.length; i < len; i++) {
    obj[patternSet[i]] = strSet[i];
  }
  for (let j = 0, length = pattern.length; j < length; j++) {
    res += obj[pattern[j]] + ' ';
  }
  return res.trim() === str;
};
