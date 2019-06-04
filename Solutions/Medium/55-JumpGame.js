/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  if (nums.length === 0) return true;
  let len = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= len) len = i;
  }
  return len == 0;
};
