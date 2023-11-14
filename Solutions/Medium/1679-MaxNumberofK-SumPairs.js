/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let len = 0;
  for (let i = 0, j = nums.length - 1; i < j; ) {
    const sum = nums[i] + nums[j];
    if (sum === k) {
      i++;
      j--;
      len++;
    } else if (sum > k) {
      j--;
    } else if (sum < k) {
      i++;
    }
  }
  return len;
};
