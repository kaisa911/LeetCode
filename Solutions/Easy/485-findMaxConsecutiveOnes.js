/**
 * 自己做的。。
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = nums => {
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      arr.push(count);
      count = 0;
    }
    if (nums[i] === 1) {
      count += 1;
    }
  }
  arr.push(count);
  return Math.max(...arr);
};

// 大佬写的
var findMaxConsecutiveOnes = function(nums) {
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
