/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = nums => {
  let step = 0,
    end = 0,
    maxP = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxP = Math.max(maxP, nums[i] + i);
    if (i == end) {
      end = maxP;
      step++;
    }
  }
  return step;
};
