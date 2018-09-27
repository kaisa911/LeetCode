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
    '9': 'wxyz'
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
    res = result.concat(
      letterCombinations(digits.slice(0, -1)).map(el => el + dig)
    );
  }
  return res;
};
