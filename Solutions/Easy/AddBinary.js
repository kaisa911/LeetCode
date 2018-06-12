/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '';
  let m = a.length - 1,
    n = b.length - 1,
    carry = 0;
  while (m >= 0 || n >= 0) {
    let p = m >= 0 ? a[m--] - '0' : 0;
    let q = n >= 0 ? b[n--] - '0' : 0;
    let sum = p + q + carry;
    res = (sum % 2).toString() + res;
    carry = parseInt(sum / 2);
  }
  return carry == 1 ? '1' + res : res;
};
