/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) {
    return false; // 丑数是正整数，所以非正数不是丑数
  }
  // 循环去除2, 3, 5
  while (num >= 2) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 3 === 0) {
      num = num / 3;
    } else if (num % 5 === 0) {
      num = num / 5;
    } else {
      // 如果不能被2, 3, 5整除，则不是丑数
      return false;
    }
  }
  // 如果最终结果是1，则是丑数
  return num === 1;
};
