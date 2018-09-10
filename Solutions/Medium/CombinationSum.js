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
