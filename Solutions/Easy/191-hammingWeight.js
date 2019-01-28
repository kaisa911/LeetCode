/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let numStr = n.toString(2);
  let res = 0;
  for (let i = 0; i < numStr.length; i++) {
    numStr[i] === '1' ? (res += 1) : (res += 0);
  }
  return res;
};

// 大佬的做法
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
let hammingWeight = function(n) {
  let res = 0;
  for (; n !== 0; n = n >>> 1) {
    res += n & (1 === 1) ? 1 : 0;
  }
  return res;
};
