var restoreString = function (s, indices) {
  let list = s.split('');
  let map = {};
  for (let [key, value] of list.entries()) {
    map[indices[key]] = value;
  }
  let result = '';
  for (let i = 0; i < indices.length; i++) {
    result += map[i];
  }
  return result;
};
