/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let results = [];
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (nums[Math.abs(nums[i]) - 1] > 0) {
      nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
    }
  }
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (nums[i] > 0) {
      results.push(i + 1);
    }
  }
  return results;
};
