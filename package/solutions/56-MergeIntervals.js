/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = intervals => {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  let prev = intervals[0];
  let res = [prev];
  for (let curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
};
