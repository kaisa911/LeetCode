/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let strArr1 = s.split('');
  let strArr2 = t.split('');
  let res = 0;
  strArr2.forEach(v => {
    res += v.charCodeAt();
  });
  strArr1.forEach(v => {
    res -= v.charCodeAt();
  });
  return String.fromCharCode(res);
};

// 大佬的写法

let findTheDifference = function(s, t) {
  let code = 0;
  for (let c of s + t) {
    code ^= c.charCodeAt(0);
  }
  return String.fromCharCode(code);
};
