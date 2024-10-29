var validStrings = function (n) {
  const res = [];
  function dfs(arr) {
    if (arr.length === n) {
      res.push(arr.join(''));
      return;
    }
    if (arr.length === 0 || arr[arr.length - 1] === '1') {
      arr.push('0');
      dfs(arr);
      arr.pop();
    }
    arr.push('1');
    dfs(arr);
    arr.pop();
  }
  dfs([]);
  return res;
};
