/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = -Number.MAX_VALUE,
    curSum = 0;
  for (let i in nums) {
    curSum = Math.max(curSum + nums[i], nums[i]);
    res = Math.max(res, curSum);
  }
  return res;
};
