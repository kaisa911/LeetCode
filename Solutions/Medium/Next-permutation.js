/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var pivot = nums.length - 1;
  while (nums[pivot] <= nums[--pivot]) {}

  for (var successor = nums.length - 1; successor > pivot; successor--) {
    if (nums[successor] > nums[pivot]) break;
  }
  if (pivot != successor) {
    var b = nums[pivot];
    nums[pivot] = nums[successor];
    nums[successor] = b;
  }
  nums.push(...nums.splice(pivot + 1).reverse());
};
