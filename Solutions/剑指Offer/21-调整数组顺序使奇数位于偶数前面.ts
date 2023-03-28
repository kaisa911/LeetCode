function exchange(nums: number[]): number[] {
  let left: number = 0,
    right: number = nums.length - 1;
  while (left < right) {
    while (nums[left] & 1 && left < right) {
      left += 1;
    }
    while (!(nums[right] & 1) && left < right) {
      right -= 1;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return nums;
}
