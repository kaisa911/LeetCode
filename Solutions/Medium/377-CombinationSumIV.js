/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  nums.sort((a, b) => b - a);
  const visited = new Map();
  const len = nums.length;

  const backtrack = (target) => {
    if (target < 0) return 0;
    if (target === 0) return 1;
    if (visited.has(target)) return visited.get(target);
    let res = 0;
    for (let i = 0; i < len; i++) {
      res += backtrack(target - nums[i]);
    }
    visited.set(target, res);
    return res;
  };

  return backtrack(target);
};

var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num];
      }
    }
  }
  return dp[target];
};
