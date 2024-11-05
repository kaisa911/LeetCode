var canFormArray = function (arr, pieces) {
  let map = new Map();
  pieces.forEach((item) => {
    map.set(item[0], item);
  });

  let i = 0;
  while (i < arr.length) {
    if (!map.has(arr[i])) {
      return false;
    }
    let item = map.get(arr[i]);
    for (let j = 0; j < item.length; j++) {
      if (arr[i++] !== item[j]) {
        return false;
      }
    }
  }
  return true;
};
