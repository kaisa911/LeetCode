function missingNumber(nums: number[]): number {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] <= mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
