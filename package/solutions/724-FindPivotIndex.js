/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = nums => {
  let res = -1;
  if (nums.length < 1) return res;
  let right = nums.reduce((a, b) => a + b, 0);

  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (left === right - nums[i]) {
      res = i;
      break;
    }
    left += nums[i];
    right -= nums[i];
  }
  return res;
};
