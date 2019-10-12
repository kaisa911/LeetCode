/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0, len = nums.length; i < len; ++i) {
    const current = nums[i];
    const j = map[target - current];
    if (j !== undefined) {
      return [j, i];
    }
    map[current] = i;
  }
};
