var largestAltitude = function (gain) {
  let ans = 0,
    sum = 0;
  for (const x of gain) {
    sum += x;
    ans = Math.max(ans, sum);
  }
  return ans;
};
