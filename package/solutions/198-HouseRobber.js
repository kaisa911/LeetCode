/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len <= 0) return 0;
  else if (len === 1) return nums[0];

  let excludeLast = 0,
    includeLast = nums[0];
  let excludeTemp;
  for (let i = 1; i < len; i++) {
    excludeTemp = excludeLast > includeLast ? excludeLast : includeLast;
    includeLast = excludeLast + nums[i];
    excludeLast = excludeTemp;
  }
  return includeLast > excludeLast ? includeLast : excludeLast;
};
