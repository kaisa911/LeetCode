/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let res = -Math.pow(2, 31);
  if (nums.length < k) {
    return 0;
  }
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += nums[i + j];
    }
    res = Math.max(sum / k, res);
  }
  return res;
};

// 大佬的写法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      cur += nums[i];
      max = cur;
      continue;
    }
    cur = cur + nums[i] - nums[i - k];
    max = cur > max ? cur : max;
  }
  return max / k;
};
