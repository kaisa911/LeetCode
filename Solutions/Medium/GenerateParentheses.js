/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = [];
  Helper(n, n, '', res);
  return res;
};

function Helper(left, right, str, res) {
  if (left > right) return;
  if ((left == 0) & (right == 0)) {
    res.push(str);
  } else {
    if (left > 0) Helper(left - 1, right, str + '(', res);
    if (right > 0) Helper(left, right - 1, str + ')', res);
  }
}
