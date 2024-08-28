/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  let i = 0; // 从左向右的指针
  let j = A.length - 1; // 从右向左的指针

  while (i < j) {
    // 找到第一个奇数
    while (i < j && A[i] % 2 === 0) {
      i++;
    }
    // 找到第一个偶数
    while (i < j && A[j] % 2 !== 0) {
      j--;
    }
    // 交换两个数
    if (i < j) {
      [A[i], A[j]] = [A[j], A[i]];
      i++;
      j--;
    }
  }

  return A;
};
