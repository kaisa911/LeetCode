var prevPermOpt1 = function (arr) {
  const n = arr.length;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      let j = n - 1;
      while (arr[j] >= arr[i] || arr[j] == arr[j - 1]) {
        j--;
      }
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      break;
    }
  }
  return arr;
};
