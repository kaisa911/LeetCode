/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let temp = 0;
  while (i < j) {
    temp = nums[i] + nums[j];
    if (temp > target) {
      j--;
    } else if (temp < target) {
      i++;
    } else {
      break;
    }
  }
  return [nums[i], nums[j]];
};
