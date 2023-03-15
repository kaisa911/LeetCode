/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0,
    res = 0;
  for (let i = 0, len = nums.length; i < len; ++i) {
    if (count == 0) {
      res = nums[i];
    }
    if (nums[i] != res) {
      count--;
    } else {
      count++;
    }
  }
  return res;
};
