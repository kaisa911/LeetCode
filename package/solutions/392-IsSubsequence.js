/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (!s) return true;
  let index = 0,
    len = s.length,
    length = t.length;
  for (let i = 0; i < length; ++i) {
    if (t[i] === s[index]) {
      if (index === len - 1) return true;
      ++index;
    }
  }
  return false;
};

// 大佬的做法
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var len = s.length;
  var q = 0;
  for (let i = 0; i < len; i++) {
    var num = t.indexOf(s[i], q);
    if (num === -1) return false;
    else {
      q = num + 1;
    }
  }
  return true;
};
