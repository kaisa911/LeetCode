/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length == 0) return -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < nums[right]) {
      if (nums[mid] < target && nums[right] >= target) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[left] <= target && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
};
