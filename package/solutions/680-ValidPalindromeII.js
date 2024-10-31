/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

var checkPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }
    left++; 
    right--;
  }
  return true;
};
