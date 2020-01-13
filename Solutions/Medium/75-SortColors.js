/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  const len = nums.length;
  let left = 0,
    right = len - 1,
    i = 0;
  while (i <= right) {
    if (nums[i] === 0) {
      //move to left
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
      i++;
    } else if (nums[i] === 2) {
      // move to right
      [nums[right], nums[i]] = [nums[i], nums[right]];
      right--;
    } else {
      i++;
    }
  }
  return nums;
};
