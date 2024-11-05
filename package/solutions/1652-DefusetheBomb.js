/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const res = new Array(n).fill(0);

  if (k === 0) {
    return res; // 当 k == 0 时，所有数字都变成 0
  }

  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (k > 0) {
      // 计算接下来 k 个数字的和
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n]; // 注意循环数组的处理
      }
    } else {
      // 计算之前 k 个数字的和
      for (let j = 1; j <= -k; j++) {
        sum += code[(i - j + n) % n]; // 注意循环数组的处理
      }
    }
    res[i] = sum;
  }

  return res;
};
