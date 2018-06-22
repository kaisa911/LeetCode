/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1];
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  if (nums[right] != target) return res;
  res[0] = right;
  right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  res[1] = left - 1;
  return res;
};
