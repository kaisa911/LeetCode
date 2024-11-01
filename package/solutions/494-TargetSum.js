var findTargetSumWays = function (nums, target) {
  let dp = {};
  const helper = (index, sum) => {
    if (index === nums.length) {
      return sum === target ? 1 : 0;
    }
    const key = `${index}-${sum}`;
    if (key in dp) {
      return dp[key];
    }
    dp[key] = helper(index + 1, sum + nums[index]) + helper(index + 1, sum - nums[index]);
    return dp[key];
  };
  return helper(0, 0);
};
