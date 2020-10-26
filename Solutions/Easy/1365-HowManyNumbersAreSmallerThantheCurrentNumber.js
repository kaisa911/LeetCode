/**
 * @param {number[]} nums
 * @return {number[]}
 * 暴力解决
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = [];
  const len = nums.length;

  const backTrack = (num, index, current) => {
    if (index === len) {
      res.push(current.length);
      return;
    }

    if (nums[index] < num) {
      current.push(nums[index]);
    }
    backTrack(num, index + 1, current);
  };

  for (let i = 0; i < len; i++) {
    backTrack(nums[i], 0, []);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * hash表
 */
var smallerNumbersThanCurrent = function (nums) {
  const res = [];
  const hash = {};
  const temp = [...nums].sort((a, b) => a - b);

  for (i = 0; i < nums.length; i++) {
    if (hash[temp[i]] === undefined) {
      hash[temp[i]] = i;
    }
  }

  for (i = 0; i < nums.length; i++) {
    res.push(hash[nums[i]]);
  }
  return res;
};
