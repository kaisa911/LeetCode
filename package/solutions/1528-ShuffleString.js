var restoreString = function (s, indices) {
  let result = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s.charAt(i);
  }
  return result.join('');
};
