var combinationSum3 = function (k, n) {
  const temp = [];
  const res = [];
  const dfs = (cur, n, k, sum, res) => {
    if (temp.length + (n - cur + 1) < k || temp.length > k) {
      return;
    }
    if (temp.length === k && temp.reduce((previous, value) => previous + value, 0) === sum) {
      res.push(temp.slice());
      return;
    }
    temp.push(cur);
    dfs(cur + 1, n, k, sum, res);
    temp.pop();
    dfs(cur + 1, n, k, sum, res);
  };

  dfs(1, 9, k, n, res);
  return res;
};
