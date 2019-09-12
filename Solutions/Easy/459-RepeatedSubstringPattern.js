/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).substring(1, s.length * 2 - 1).indexOf(s) != -1;
};

var repeatedSubstringPattern = function(s) {
  let reg = /^(\w+)\1+$/;
  return reg.test(s);
};
