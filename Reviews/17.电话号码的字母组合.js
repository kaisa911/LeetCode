/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const list = digits.split('');
  const result = []
  const backtrack = (index, str) => {
    if(index === list.length) {
      result.push(str)
      return
    }
    const letters = map[list[index]]
    for(let i = 0; i < letters.length; i++) {
      backtrack(index + 1, str + letters[i])
    }
  };
  backtrack(0, '')
  return result;
};
// @lc code=end
