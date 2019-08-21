/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  if (nums == null || nums.length <= 1) {
    return true;
  }
  let cnt = 0;
  for (let i = 1; i < nums.length && cnt < 2; i++) {
    if (nums[i - 1] <= nums[i]) {
      continue;
    }
    cnt++;
    if (i - 2 >= 0 && nums[i - 2] > nums[i]) {
      nums[i] = nums[i - 1];
    } else {
      nums[i - 1] = nums[i];
    }
  }
  return cnt <= 1;
};
