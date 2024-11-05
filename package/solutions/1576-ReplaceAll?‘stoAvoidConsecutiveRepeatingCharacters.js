var modifyString = function (s) {
  const n = s.length;
  const arr = s.split('');
  for (let i = 0; i < n; ++i) {
    if (arr[i] === '?') {
      let candidates = 'abcdefghijklmnopqrstuvwxyz';
      if (i > 0) {
        candidates = candidates.replace(arr[i - 1], '');
      }
      if (i < n - 1 && candidates.includes(arr[i + 1])) {
        candidates = candidates.replace(arr[i + 1], '');
      }
      arr[i] = candidates[0];
    }
  }
  return arr.join('');
};
