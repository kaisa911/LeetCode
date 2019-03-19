/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
  if (nums.length === 0) return 0;
  let i = 0,
    j = 0,
    len = nums.length;
  for (i; i < len; i++) {
    if (nums[j] !== nums[i]) nums[++j] = nums[i];
  }
  return j + 1;
};
