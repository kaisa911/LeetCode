/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function (arr, k) {
  let len = arr.length,
    arrSum = 0;
  //res最后的结果
  let tempSum = 0,
    res = 0;
  let loopCount = Math.min(2, k) * len;
  //数组总和
  for (let i = 0; i < len; ++i) arrSum += arr[i];
  // [1,-2,1,1,-2,1]
  for (let i = 0; i < loopCount; ++i) {
    // 取值
    let val = arr[i % len];
    tempSum = tempSum + val > 0 ? tempSum + val : 0;
    res = Math.max(res, tempSum);
  }
  // arrSum > 0就证明都要，这时res === arrSum
  if (arrSum > 0) {
    while (k-- > 2) {
      res = res + arrSum;
    }
  }
  return res % 1000000007;
};
