var removeOuterParentheses = function (s) {
  let count = 0;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && count++ > 0) {
      res += '(';
    } else if (s[i] === ')' && count-- > 1) {
      res += ')';
    }
  }
  return res;
};
