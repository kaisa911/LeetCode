/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  if (!s.length) return 0;
  let res = 1,
    flag = 0;
  for (let i = 0; i < s.length; i++) {
    let index = s.indexOf(s[i], flag);
    if (index !== -1 && index < i) flag = index + 1;

    res = Math.max(res, i - flag + 1);
  }
  return res;
};
