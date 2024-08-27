/**
 * 自己的做法
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let carry = 0;
  let kArr = String(K).split('');
  let len = Math.max(A.length, kArr.length);
  A.reverse();
  kArr.reverse();
  let res = [];
  for (let i = 0; i < len; i++) {
    let num1 = A[i] ? +A[i] : 0;
    let num2 = kArr[i] ? +kArr[i] : 0;
    let sum = num1 + num2 + carry;
    let key = 0;
    if (sum >= 10) {
      key = sum % 10;
      carry = 1;
    } else {
      key = sum;
      carry = 0;
    }
    res.unshift(key);
  }
  if (carry === 1) {
    res.unshift(carry);
  }
  return res;
};

/**
 * 大佬的做法
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let i = 0;
  A.reverse();
  while (K) {
    K += A[i] || 0;
    A[i] = K % 10;
    K = ~~(K / 10);
    i++;
  }
  return A.reverse();
};
