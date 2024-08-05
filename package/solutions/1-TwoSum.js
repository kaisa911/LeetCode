/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0, len = nums.length; i < len; i += 1) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};

module.exports = twoSum;
