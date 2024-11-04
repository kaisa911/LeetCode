/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  let carry = 0;
  let i = A.length - 1;

  while (K > 0 || carry > 0) {
    if (i >= 0) {
      let digit = A[i] + (K % 10) + carry;
      A[i] = digit % 10;
      carry = Math.floor(digit / 10);
      i--;
      K = Math.floor(K / 10);
    } else {
      let digit = (K % 10) + carry;
      A.unshift(digit % 10);
      carry = Math.floor(digit / 10);
      K = Math.floor(K / 10);
    }
  }

  return A;
};
