/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  const even = A.filter(item => item % 2 === 0);
  const odd = A.filter(item => item % 2 === 1);
  return even.concat(odd);
};
