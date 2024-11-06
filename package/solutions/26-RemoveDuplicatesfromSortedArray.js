/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let left = 0,
    right = 0;
  for (right; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[left + 1] = nums[right];
      left += 1;
    }
  }
  return left + 1;
};