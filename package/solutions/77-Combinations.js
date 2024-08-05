/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < k) return 0;
  let res = [];

  const backTrack = (start = 1, current = []) => {
    if (current.length === k) {
      res.push([...current]);
      return;
    }
    for (let i = start; i <= n; i++) {
      current.push(i);
      backTrack(i + 1, current);
      current.pop();
    }
  };
  backTrack(1, []);
  return res;
};
