var minNumber = function (nums) {
  nums = nums.sort((a, b) => {
    return Number(String(a) + b) - Number(String(b) + a);
  });
  return nums.join('');
};
