/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function (a, b) {
  while (b != 0) {
    let temp = a ^ b; //除去相加位需要进位
    b = (a & b) << 1; //进位
    a = temp;
  }
  return a;
};
