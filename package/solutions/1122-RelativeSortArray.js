/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let count = new Array(1001).fill(0);
  let res = [];

  for (let num of arr1) {
    count[num]++;
  }

  for (let num of arr2) {
    while (count[num] > 0) {
      res.push(num);
      count[num]--;
    }
  }

  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      res.push(i);
      count[i]--;
    }
  }

  return res;
};
