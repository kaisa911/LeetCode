var defangIPAddr = function (address) {
  let result = '';
  for (let char of address) {
    if (char === '.') {
      result += '[.]';
    } else {
      result += char;
    }
  }
  return result;
};
