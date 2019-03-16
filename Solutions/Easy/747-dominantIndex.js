/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length === 1) return 0;
  const tempArr = [...nums];
  nums.sort((a, b) => b - a);

  return nums[0] >= nums[1] * 2 ? tempArr.indexOf(nums[0]) : -1;
};
