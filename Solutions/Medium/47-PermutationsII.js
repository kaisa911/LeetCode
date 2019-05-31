/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  if (nums.length <= 1) {
    return [nums];
  }
  const retArr = permuteUnique(nums.slice(1));
  const result = [];
  let cache = {},
    key,
    curr;
  for (const v of retArr) {
    for (let i = 0; i <= v.length; i++) {
      curr = [...v.slice(0, i), nums[0], ...v.slice(i)];
      key = curr.join('');
      if (!(key in cache)) {
        cache[key] = true;
        result.push(curr);
      }
    }
  }
  return result;
};
