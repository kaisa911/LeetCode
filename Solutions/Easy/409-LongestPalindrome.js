/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
  const hash = {};
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = hash[s[i]] ? hash[s[i]] + 1 : 1;
  }
  Object.keys(hash).forEach((item) => {
    res += Math.floor(hash[item] / 2) * 2;
    if (hash[item] % 2 === 1 && res % 2 === 0) {
      res++;
    }
  });
  return res;
};
