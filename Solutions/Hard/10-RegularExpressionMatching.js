/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (p.length === 0) return Boolean(!s.length);
  if (p.length > 1 && p[1] == '*') {
    return isMatch(s, p.substr(2)) || (!(s.length === 0) && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p));
  } else {
    return !(s.length === 0) && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p.substr(1));
  }
};

// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  * 正则表达式
//  */
// const isMatch = (s, p) => {
//   let r = new RegExp('^' + p + '$');
//   return r.test(s);
// };
