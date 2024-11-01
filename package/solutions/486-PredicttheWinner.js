/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  let len = nums.length;
  let dp = nums.slice(0);
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[j] = Math.max(nums[i] - dp[j], nums[j] - dp[j - 1]);
    }
  }
  return dp[len - 1] >= 0;
};
