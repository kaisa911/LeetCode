var getSmallestString = function (s) {
  let arr = s.split('');
  for (let i = 0; i + 1 < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i].charCodeAt(0) % 2 === arr[i + 1].charCodeAt(0) % 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      break;
    }
  }
  return arr.join('');
};
