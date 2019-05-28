/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = nums => {
  let pivot = nums.length - 1;
  while (nums[pivot] <= nums[--pivot]) {}

  for (let successor = nums.length - 1; successor > pivot; successor--) {
    if (nums[successor] > nums[pivot]) break;
  }
  if (pivot != successor) {
    let b = nums[pivot];
    nums[pivot] = nums[successor];
    nums[successor] = b;
  }
  nums.push(...nums.splice(pivot + 1).reverse());
};
