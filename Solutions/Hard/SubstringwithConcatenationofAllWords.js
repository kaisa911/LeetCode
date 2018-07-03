/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  if (words.length === 0 || s.length === 0) return [];
  let map = {},
    res = [],
    compare = '';
  words.sort();
  for (let i = 0; i < words.length; i++) {
    compare += words[i];
    if (typeof map[words[i]] !== 'undefined') map[words[i]]++;
    else map[words[i]] = 1;
  }
  let word_len = words[0].length,
    total_len = words.length * word_len;
  for (let i = 0; i < s.length - total_len + 1; i++) {
    let text = s.substr(i, word_len);
    if (typeof map[text] !== 'undefined') {
      if (checkSubstring(s, compare, i, word_len, total_len)) res.push(i);
    }
  }
  return res;

  function checkSubstring(s, compare, i, word_len, total_len) {
    let words = [];
    for (let j = i; j < i + total_len; j += word_len) {
      words.push(s.substr(j, word_len));
    }
    return compare === words.sort().join('');
  }
};
