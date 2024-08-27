var canFormArray = function (arr, pieces) {
  let map = new Map();
  // 储存 pieces 的第一个元素到 map 中
  pieces.forEach((item) => {
    map.set(item[0], item);
  });

  for (let i = 0; i < arr.length; i++) {
    // 判断arr中是否存在这个值，没有就失败
    if (!map.has(arr[i])) {
      return false;
    }
    // 这个整数数组的后续整数能够连接起来，如果不能就返回
    let item = map.get(arr[i]);
    // 从1开始，0已经通过了hash判断
    for (let j = 1; j < item.length; j++) {
      i++; // 增加arr指针，保证对应
      if (arr[i] !== item[j]) {
        return false;
      }
    }
  }
  return true;
};
