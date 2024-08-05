/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]];
  const length = nums.length;
  const backtrace = (start, current, len) => {
    if (current.length === len) {
      res.push([...current]);
      return;
    }
    for (var i = start; i < length; i++) {
      current.push(nums[i]);
      backtrace(i + 1, current, len);
      current.pop();
    }
  };

  for (let i = 1; i <= length; i++) {
    backtrace(0, [], i);
  }
  return res;
};
