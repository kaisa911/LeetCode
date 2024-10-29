/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  var count = 0;
  var number = 0;
  for (var h = 0; h < nums.length; h = h + 1) {
    if (nums[h] == 1) {
      count = count + 1;
    } else {
      count = 0;
    }
    if (count > number) {
      number = count;
    }
  }
  return number;
};
