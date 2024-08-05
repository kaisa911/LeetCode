/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let len = candidates.length;
  let res = [];
  candidates.sort((a, b) => a - b);
  const backTrack = (start, current) => {
    if (current.reduce((pre, cur) => pre + cur, 0) === target) {
      res.push(current);
      return;
    }
    for (let i = start; i < len; i++) {
      if (current.reduce((pre, cur) => pre + cur, 0) + candidates[i] > target) {
        break;
      }
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue;
      }
      current.push(candidates[i]);
      backTrack(i + 1, [...current]);
      current.pop();
    }
  };
  backTrack(0, []);
  return res;
};
