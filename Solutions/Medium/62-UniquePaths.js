/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  return helper(m + n - 2, m - 1) / helper(m - 1, m - 1);
};
var helper = (m, n) => {
  var num = 1;
  var count = 0;
  for (var i = m; i > 0; i--) {
    if (count == n) {
      break;
    }
    num = num * i;
    count++;
  }
  return num;
};
