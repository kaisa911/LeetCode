function findRepeatNumber(nums: number[]): number {
  type Hash = {
    [num: string]: number;
  };
  const hash: Hash = {};
  let res: number = 0;
  for (let i: number = 0, len = nums.length; i < len; ++i) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = i;
    } else {
      res = nums[i];
      break;
    }
  }
  return res;
}
