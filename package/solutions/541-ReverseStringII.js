/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let result = '';
  let n = s.length;
  let start = 0;
  while (start < n) {
    let end = Math.min(start + k - 1, n - 1);
    let sub = s.slice(start, end + 1);
    sub = sub.split('').reverse().join('');
    result += sub;
    start += 2 * k;
    if (start >= n) break;
    result += s.slice(start - k, start);
    start += k;
  }
  if (start - 2 * k < n) {
    result += s.slice(start - 2 * k, n);
  }
  return result;
};
