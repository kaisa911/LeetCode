var triangleNumber = function (nums) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    let k = i;
    for (let j = i + 1; j < n; ++j) {
      while (k + 1 < n && nums[k + 1] < nums[i] + nums[j]) {
        ++k;
      }
      ans += Math.max(k - j, 0);
    }
  }
  return ans;
};
