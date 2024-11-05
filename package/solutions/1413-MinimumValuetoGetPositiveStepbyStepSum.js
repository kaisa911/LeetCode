var minStartValue = function (nums) {
  let min = 0,
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    min = Math.min(min, sum);
  }
  return 1 - min;
};
