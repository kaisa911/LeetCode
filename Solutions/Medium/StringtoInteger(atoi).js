/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str) return 0;

  str = str.trim();

  if (!/^-|\+|[0-9]/.test(str)) return 0;

  let sign = /^-/.test(str) ? -1 : 1;
  let res = 0;
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  str = str.replace(/^-|\+/, '');

  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (/[0-9]/.test(ele)) {
      res = res * 10 + Number(ele);
    } else {
      break;
    }
  }

  res = res * sign;

  if (res > INT_MAX) return INT_MAX;
  if (res < INT_MIN) return INT_MIN;
  return res;
}