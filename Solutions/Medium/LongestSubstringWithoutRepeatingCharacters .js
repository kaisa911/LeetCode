/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;

  let hash = {},
    res = 0,
    right = 0,
    left = 0;

  while (right < s.length) {
    if (hash[s[right]] >= left) {
      if (right - left > res) {
        res = right - left;
      }
      left = hash[s[right]] + 1;
    }
    hash[s[right]] = right++;
  }

  return Math.max(res, right - left);
};
