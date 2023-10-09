var grayCode = function (n) {
  const res = [0];
  for (let i = 1; i <= n; i++) {
    const m = res.length;
    for (let j = m - 1; j >= 0; j--) {
      res.push(res[j] | (1 << (i - 1)));
    }
  }
  return res;
};
