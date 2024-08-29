const majorityElement = nums => {
  let count = 0,
    ret = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      ret = nums[i];
    }
    if (nums[i] != ret) {
      count--;
    } else {
      count++;
    }
  }
  return ret;
};

//自己写的暴力方法
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let left = 0,
    right = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 1]) {
      right = i + 1;
      if (right - left > Math.floor(len / 2) - 1) {
        return nums[left];
      }
    } else {
      if (right - left > Math.floor(len / 2) - 1) {
        return nums[left];
      } else {
        left = i + 1;
        right = i + 1;
      }
    }
  }
};
