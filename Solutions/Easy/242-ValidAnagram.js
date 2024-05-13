/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let hash = {};
  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  }

  for (const char of t) {
    if (!hash[char]) return false;
    hash[char]--;
  }

  return true;
};
