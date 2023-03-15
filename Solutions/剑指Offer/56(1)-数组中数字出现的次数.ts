/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let sum = 0;
  for (let num of nums) {
    sum ^= num;
  }
  //获取最低位的1 0001
  let mask = sum & -sum;
  let a = 0,
    b = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] & mask) {
      a ^= nums[i];
    } else {
      b ^= nums[i];
    }
  }
  return [b, a];
};
