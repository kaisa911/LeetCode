/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let numStr = n.toString(2);

  let numArr = numStr.split('');
  let len = 32 - numArr.length;
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      numArr.unshift('0');
    }
  }
  numArr.reverse();
  const res = numArr.join('');
  return parseInt(res, 2);
};

// 大佬的做法
var reverseBits = function(n) {
  var res = 0;
  for (var i = 0; i < 32; i++) {
    res = res << 1;
    res = res + (n & 1);
    n = n >> 1;
  }
  return res >>> 0;
};
