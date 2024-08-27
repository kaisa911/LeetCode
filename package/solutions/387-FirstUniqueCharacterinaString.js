/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i];
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i;
    }
  }

  return -1;
};
