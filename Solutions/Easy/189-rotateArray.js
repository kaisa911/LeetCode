/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k %= nums.length;
  return nums.unshift(...nums.splice(nums.length - k, k));
};

// O(1)的做法