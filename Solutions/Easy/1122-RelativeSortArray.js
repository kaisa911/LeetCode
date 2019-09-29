/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let res = [];
  let arrTemp = arr1;
  for (let i = 0, len = arr2.length; i < len; ++i) {
    res = res.concat(arrTemp.filter(item => item === arr2[i]));
    arrTemp = arrTemp.filter(item => item !== arr2[i]);
  }
  return res.concat(arrTemp.sort((a, b) => a - b));
};
