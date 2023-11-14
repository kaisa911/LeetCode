var findDuplicates = function (nums) {
  const swap = (nums, index1, index2) => {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  };
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    while (nums[i] != nums[nums[i] - 1]) {
      swap(nums, i, nums[i] - 1);
    }
  }
  const ans = [];
  for (let i = 0; i < n; ++i) {
    if (nums[i] - 1 !== i) {
      ans.push(nums[i]);
    }
  }
  return ans;
};
