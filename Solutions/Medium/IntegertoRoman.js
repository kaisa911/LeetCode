/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  let res = '',
    val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    str = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I'
    ],
    i;

  for (let i = 0; i < val.length; ++i) {
    while (num >= val[i]) {
      num -= val[i];
      res += str[i];
    }
  }
  return res;
};
