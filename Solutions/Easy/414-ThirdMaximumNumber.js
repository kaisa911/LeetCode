/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = nums => {
  nums.sort((a, b) => b - a);
  let arr = [...new Set(nums)];
  return arr.length >= 3 ? arr[2] : Math.max(...arr);
};
