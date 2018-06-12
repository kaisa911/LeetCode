/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let len = s.length,
    res = 0,
    date = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]);
  for (let i = 0; i < len; i++) {
    let value = date.get(s[i]);
    if (i === len - 1 || date.get(s[i + 1]) <= date.get(s[i])) {
      res += value;
    } else {
      res -= value;
    }
  }
  return res;
};
