/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const len = nums.length;
  let res = false;
  const arrTemp = [...new Set(nums)];
  if (nums.length < 1) return res;
  arrTemp.length < len ? (res = true) : res;
  return res;
};

// 大佬的做法
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};
