/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s.indexOf(t[i]) !== -1) {
      sum1 += s[i].charCodeAt();
      sum2 += t[i].charCodeAt();
    } else {
      return false;
    }
  }
  return sum1 === sum2;
};
