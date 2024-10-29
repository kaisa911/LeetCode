/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let count = 0;
  for (let num of nums) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
      count++;
    } else if (num < first && num > second) {
      third = second;
      second = num;
      count++;
    } else if (num < second && num > third) {
      third = num;
      count++;
    }
  }
  return count >= 3 ? third : first;
};
