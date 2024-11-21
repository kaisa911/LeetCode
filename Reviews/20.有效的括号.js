/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length || s.length === 1) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      const top = stack.pop();
      if (
        (s[i] === ')' && top !== '(') ||
        (s[i] === ']' && top !== '[') ||
        (s[i] === '}' && top !== '{')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// @lc code=end
