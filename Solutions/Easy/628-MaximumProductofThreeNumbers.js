/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = nums => {
  nums.sort((a, b) => b - a);
  let len = nums.length;
  let res =
    nums[0] * Math.max(nums[1] * nums[2], nums[len - 1] * nums[len - 2]);
  return res;
};
