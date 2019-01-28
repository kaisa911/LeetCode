/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res;
  let i = 0;
  for (i; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
};


// 异或的方法