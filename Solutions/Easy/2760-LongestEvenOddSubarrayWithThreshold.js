/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function (nums, threshold) {
  let res = 0,
    dp = 0;
  for (let l = nums.length - 1; l >= 0; l--) {
    if (nums[l] > threshold) {
      dp = 0;
    } else if (l == nums.length - 1 || nums[l] % 2 != nums[l + 1] % 2) {
      dp++;
    } else {
      dp = 1;
    }
    if (nums[l] % 2 == 0) {
      res = Math.max(res, dp);
    }
  }
  return res;
};
