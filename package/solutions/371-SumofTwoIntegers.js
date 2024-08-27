/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = (a, b) => {
  let sum, carry;
  sum = a ^ b;
  carry = (a & b) << 1;
  if (carry != 0) {
    return getSum(sum, carry);
  }
  return sum;
};
