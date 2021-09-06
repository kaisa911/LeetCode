function exchange(nums: number[]): number[] {
  let i: number = 0,
    j: number = nums.length - 1;
  while (i < j) {
    while (nums[i] & 1 && i < j) {
      i += 1;
    }
    while (!(nums[j] & 1) && i < j) {
      j -= 1;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
}
