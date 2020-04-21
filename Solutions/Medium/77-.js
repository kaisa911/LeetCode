/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if (n < k) return 0;
  let res = [];

  function backTrack(index, start, current) {
    if (index === k) {
      res.push([...current]);
      return;
    }
    for (let i = start; i <= n + 1 - (k - index); i++) {
      current.push(i);
      backTrack(index + 1, i + 1, current);
      current.pop();
    }
  }
  backTrack(0, 1, []);
  return res;
};
