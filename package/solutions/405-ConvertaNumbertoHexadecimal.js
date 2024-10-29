/**
 * @param {number} num
 * @return {string}
 */
const toHex = function (num) {
  if (num === 0) return '0';
  let result = '';
  let hexDigits = '0123456789abcdef';
  while (num !== 0 && result.length < 8) {
    result = hexDigits[num & 15] + result;
    num >>>= 4;
  }
  return result;
};
