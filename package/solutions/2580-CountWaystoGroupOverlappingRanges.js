/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function (ranges) {
  const mod = 1e9 + 7;
  ranges.sort((a, b) => a[0] - b[0]);

  let n = ranges.length;
  let res = 1;
  for (let i = 0; i < n; ) {
    let r = ranges[i][1];
    let j = i + 1;
    while (j < n && ranges[j][0] <= r) {
      r = Math.max(r, ranges[j][1]);
      j++;
    }
    res = (res * 2) % mod;
    i = j;
  }
  return res;
};
