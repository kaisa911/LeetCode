var longestSubarray = function (nums) {
  let left = 0,
    right = 0,
    countZero = 0,
    maxLength = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      countZero++;
    }

    while (countZero > 1) {
      if (nums[left] === 0) {
        countZero--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left - (countZero === 1 ? 1 : 0));

    right++;
  }

  return maxLength;
};
