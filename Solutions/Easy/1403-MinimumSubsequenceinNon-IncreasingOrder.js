var minSubsequence = function (nums) {
  const total = _.sum(nums);
  nums.sort((a, b) => a - b);
  const ans = [];
  let curr = 0;
  for (let i = nums.length - 1; i >= 0; --i) {
    curr += nums[i];
    ans.push(nums[i]);
    if (total - curr < curr) {
      break;
    }
  }
  return ans;
};
