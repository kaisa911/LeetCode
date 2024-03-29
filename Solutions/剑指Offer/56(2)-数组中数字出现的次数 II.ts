/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let a = 0,
    b = 0;
  let i;
  for (i = 0; i < nums.length; ++i) {
    a = (a ^ nums[i]) & ~b;
    b = (b ^ nums[i]) & ~a;
  }
  return a;
};
