var modifyString = function (s) {
  const n = s.length;
  const arr = [...s];
  for (let i = 0; i < n; ++i) {
    if (arr[i] === '?') {
      for (let j = 0; j < 3; ++j) {
        if (
          (i > 0 && arr[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) ||
          (i < n - 1 &&
            arr[i + 1] === String.fromCharCode('a'.charCodeAt() + j))
        ) {
          continue;
        }
        arr[i] = String.fromCharCode('a'.charCodeAt() + j);
        break;
      }
    }
  }
  return arr.join('');
};
