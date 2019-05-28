/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const res = [];
  const temp = [];
  candidates.sort((a, b) => a - b);
  let end = candidates.length - 1;
  let find = (target, end, cur) => {
    if (target < candidates[0] || end < 0) {
      return;
    }
    while (end >= 0 && candidates[end] > target) {
      end--;
    }
    for (let i = end; i >= 0; i--) {
      if (i != end && candidates[i] == candidates[i + 1]) continue;
      let tmp = [...cur, candidates[i]];
      if (candidates[i] === target) res.push(tmp);
      else find(target - candidates[i], i - 1, tmp);
    }
  };
  find(target, end, temp);
  return res;
};
