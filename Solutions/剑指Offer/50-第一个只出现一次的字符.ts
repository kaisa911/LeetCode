/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let res = {};
  for (let i = 0; i < s.length; i++) {
    if (res[s[i]]) {
      res[s[i]] += 1;
    } else {
      res[s[i]] = 1;
    }
  }
  const list = Object.keys(res);
  for (let i = 0; i < list.length; i++) {
    if (res[list[i]] === 1) {
      return list[i];
      break;
    }
  }
  return ' ';
};
