/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let n = arr.length;
  let left = 0;
  let res = 0;

  while (left + 2 < n) {
    let right = left + 1;
    if (arr[left] < arr[left + 1]) {
      while (right + 1 < n && arr[right] < arr[right + 1]) {
        right++;
      }
      if (right + 1 < n && arr[right] > arr[right + 1]) {
        while (right + 1 < n && arr[right] > arr[right + 1]) {
          right++;
        }
        res = Math.max(res, right - left + 1);
      } else {
        right++;
      }
    }
    left = right;
  }
  return res;
};
