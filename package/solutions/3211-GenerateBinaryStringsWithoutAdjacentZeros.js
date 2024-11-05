var validStrings = function (n) {
  const res = [];
  const dfs = (curStr, zeroCount) => {
    if (curStr.length === n) {
      res.push(curStr);
      return;
    }
    if (zeroCount < 1) {
      dfs(curStr + '0', zeroCount + 1);
    }
    dfs(curStr + '1', 0);
  };
  dfs('', 0);
  return res;
};
