/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  let strMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  if (!digits) {
    return [];
  }
  if (digits.length == 1) {
    return [...strMap[digits]];
  }

  let lastDigit = digits[digits.length - 1];
  let res = [];
  for (let dig of strMap[lastDigit]) {
    res = result.concat(letterCombinations(digits.slice(0, -1)).map((el) => el + dig));
  }
  return res;
};

// 回溯
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const strMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  const length = digits.length;
  const res = [];
  if (length === 0) return res;

  const backtrace = (combine, len) => {
    if (combine.length === length) {
      res.push(combine);
      return;
    }

    let strNum = digits[len];
    let strWrap = strMap[strNum];
    for (let i = 0; i < strWrap.length; i++) {
      const letter = strWrap[i];
      backtrace(combine + letter, len + 1);
    }
  };
  backtrace('', 0);
  return res;
};
