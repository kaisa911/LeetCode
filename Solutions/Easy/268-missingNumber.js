/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  let n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b);
};

// 暴力查找
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  nums.sort((a, b) => a - b);
  if (nums[0] !== 0) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      return nums[i] + 1;
    }
  }
};
