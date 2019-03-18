/**
 * 自己写的
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === '') return true;
  const test = /[^A-Za-z0-9]/g;
  const newStr = s.replace(test, '');
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

const helper = (a, b) => {
  console.log(a, b);
  if (a === b) {
    return true;
  } else {
    if (typeof a === 'string' && typeof b === 'string') {
      if (a === b.toLowerCase()) {
        return true;
      } else if (b === a.toLowerCase()) {
        return true;
      }
    }
  }
  return false;
};

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
