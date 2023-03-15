/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let p2 = 0,
    p3 = 0,
    p5 = 0;
  let dp = [1];
  let i = 1;
  //分别让dp[i-1]和235相乘，得到最小的一个
  while (dp.length < n) {
    dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);
    //判断是几的倍数，对应的指针+1
    if (dp[i] % 2 === 0) p2++;
    if (dp[i] % 3 === 0) p3++;
    if (dp[i] % 5 === 0) p5++;
    i++;
  }
  // console.log(dp)
  return dp[n - 1];
};
