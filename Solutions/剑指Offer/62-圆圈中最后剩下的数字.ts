/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let ans = 0;
  // 最后一轮剩下2个人，所以从2开始反推
  for (let i = 2; i <= n; i++) {
    ans = (ans + m) % i;
  }
  return ans;
};
