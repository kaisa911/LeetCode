let combinationSum = (candidates, target) => {
  let result = [],
    temp = [];
  let find = (target, temp, index) => {
    for (let i = index; i >= 0; i--) {
      if (candidates[i] > target) {
        continue;
      } else if (candidates[i] === target) {
        result.push(temp.concat([candidates[i]]));
      } else {
        find(target - candidates[i], temp.concat([candidates[i]]), i);
      }
    }
  };
  find(target, temp, candidates.length - 1);
  return result;
};

// 回溯
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  if (candidates.length === 0) return res;

  const backTrace = (start, current) => {
    if (current.reduce((pre, cur) => pre + cur, 0) > target) return;
    if (current.reduce((pre, cur) => pre + cur, 0) === target) {
      res.push([...current]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backTrace(i, current);
      current.pop();
    }
  };
  backTrace(0, []);
  return res;
};
