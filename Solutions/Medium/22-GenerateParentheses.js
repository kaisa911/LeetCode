/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  if (n === 0) return res;

  const backTrace = (left, right, current) => {
    if (left > right) return;
    if ((left === 0) & (right === 0)) {
      res.push(current);
      return;
    }
    if (left > 0) backTrace(left - 1, right, current + '(');
    if (right > 0) backTrace(left, right - 1, current + ')');
  };
  backTrace(n, n, '');
  return res;
};
