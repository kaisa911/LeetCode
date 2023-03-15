/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (!s.length) return 0;
  let res = 1,
    left = 0;
  for (let i = 0; i < len; i++) {
    let index = s.indexOf(s[i], left);
    if (index !== -1 && index < i) left = index + 1;

    res = Math.max(res, i - left + 1);
  }
  return res;
};
