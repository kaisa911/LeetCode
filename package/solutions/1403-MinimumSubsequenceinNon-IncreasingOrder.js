var minSubsequence = function (nums) {
  const total = _.sum(nums);
  const freq = new Map();
  for (const num of nums) {
    if (freq.has(num)) {
      freq.set(num, freq.get(num) + 1);
    } else {
      freq.set(num, 1);
    }
  }
  const ans = [];
  let curr = 0;
  for (let num = 100; num >= 1; num--) {
    if (freq.has(num)) {
      while (freq.get(num) > 0 && total - curr < curr) {
        ans.push(num);
        curr += num;
        freq.set(num, freq.get(num) - 1);
      }
    }
  }
  return ans;
};
