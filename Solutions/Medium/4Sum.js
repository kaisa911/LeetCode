/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  nums = nums.sort((a, b)=> a - b);
  const res = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let l = j + 1,
        r = nums.length - 1;
      while (l < r) {
        if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
          r--;
        } else if (nums[i] + nums[j] + nums[l] + nums[r] < target) {
          l++;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] == nums[l + 1]) l++;
          while (nums[r] == nums[r - 1]) r--;
          l++;
          r--;
        }
      }
    }
  }
  return res;
};
