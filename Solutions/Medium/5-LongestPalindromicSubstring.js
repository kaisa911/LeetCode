/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  if (s.length < 2) return s;
  let len = s.length,
    maxLen = 0,
    start = 0;
  for (let i = 0; i < len; ) {
    if (len - i <= maxLen / 2) break;
    let left = i,
      right = i;
    while (right < len - 1 && s[right + 1] == s[right]) ++right;
    i = right + 1;
    while (right < len - 1 && left > 0 && s[right + 1] == s[left - 1]) {
      ++right;
      --left;
    }
    if (maxLen < right - left + 1) {
      maxLen = right - left + 1;
      start = left;
    }
  }
  return s.substring(start, start + maxLen);
};
