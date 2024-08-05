/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = nums => {
  const tempArr = [];
  let res = 1;
  nums.map(item => {
    if (item > 0) {
      tempArr[item] = item;
    }
  });
  for (let i = 1; i <= tempArr.length; i++) {
    if (!tempArr[i]) {
      res = i;
      break;
    }
  }
  return res;
};
