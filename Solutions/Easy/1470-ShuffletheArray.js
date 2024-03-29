var shuffle = function (nums, n) {
  const ans = new Array(2 * n).fill(0);
  for (let i = 0; i < n; i++) {
    ans[2 * i] = nums[i];
    ans[2 * i + 1] = nums[i + n];
  }
  return ans;
};
