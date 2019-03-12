/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  let count = 0;
  let i = 0;
  if (nums.length <= 1) return nums;

  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count += 1;
    } else {
      i++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }

  return nums;
};
