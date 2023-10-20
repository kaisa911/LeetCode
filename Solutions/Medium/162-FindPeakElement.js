var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    //因为题目中明确过没有相等的值，所以直接大于即可
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
};
