/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
  const len = nums.length;
  const perm = i => {
    if (i === 0) {
      return [[nums[0]]];
    } else if (i === 1) {
      return [[nums[0], nums[1]], [nums[1], nums[0]]];
    }
    const res1 = perm(i - 1);
    const size = res1.length;
    const res2 = [];
    const index = nums[i];
    for (let k = 0; k < size; k++) {
      for (let l = 0; l <= i; l++) {
        const arr = res1[k].slice();
        arr.splice(l, 0, index);
        res2.push(arr);
      }
    }
    return res2;
  };
  return perm(len - 1);
};
