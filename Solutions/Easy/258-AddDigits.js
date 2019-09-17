/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  let res = num % 9;
  if (res === 0) {
    return 9;
  }
  return res;
};
