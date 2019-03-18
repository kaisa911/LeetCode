/**
 * 自己写的
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  if (s === '') return true;
  const test = /[^A-Za-z0-9]/g;
  const newStr = s.replace(test, '').toLocaleLowerCase();
  const len = newStr.length / 2;
  const mid = Math.floor(len);
  if (newStr.length % 2 === 1) {
    for (let i = 0; i <= mid; i++) {
      if (!helper(newStr[mid - i], newStr[mid + i])) {
        return false;
      }
    }
  } else {
    for (let i = 0; i < mid; i++) {
      if (!helper(newStr[mid - i - 1], newStr[mid + i])) {
        return false;
      }
    }
  }

  return true;
};

const helper = (a, b) => a === b;

/**
 * 大佬的写法
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var str = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  var i = 0;
  var len = str.length;
  while (i < len / 2) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
};
