/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = nums => {
  if (nums.length < 3) {
    return [];
  }
  let result = [];
  let arr = [];

  nums.sort(function(a, b) {
    return a - b;
  });
  for (let i = 0; i < nums.length - 1; i++) {
    // 去重
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[left] + nums[right];
        if (sum > 0) {
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          arr = [nums[i], nums[left], nums[right]];
          result.push(arr);
          // 去重
          while (left < right && nums[left] === arr[1]) {
            left++;
          }
          while (left < right && nums[right] === arr[2]) {
            right--;
          }
        }
      }
    }
  }

  return result;
};
