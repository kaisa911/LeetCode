const findFirst = (nums, target) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) left = mid + 1;
    else right = mid;
  }
  return nums[right] === target ? right : -1;
};
const findLast = (nums, target) => {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left - 1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  let res = [-1, -1];
  let first = findFirst(nums, target);
  if (first !== -1) {
    res[0] = first;
    res[1] = findLast(nums, target);
  }
  return res;
};
