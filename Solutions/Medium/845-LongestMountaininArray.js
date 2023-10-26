/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
  let ans = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      let l = i,
        r = i;
      while (arr[l - 1] < arr[l]) l--;
      while (arr[r + 1] < arr[r]) r++;
      if (l !== i && r !== i) {
        ans = Math.max(ans, r - l + 1);
      }
      i = r;
    }
  }
  return ans;
};
