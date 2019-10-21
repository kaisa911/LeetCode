/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let child = 0;
  let cookie = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  while (child < g.length && cookie < s.length) {
    if (g[child] <= s[cookie]) {
      child++;
    }
    cookie++;
  }
  return child;
};
