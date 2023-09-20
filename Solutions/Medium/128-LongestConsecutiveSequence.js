var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let res = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let count = 1;

      while (set.has(num + 1)) {
        num += 1;
        count += 1;
      }

      res = Math.max(res, count);
    }
  }

  return res;
};
