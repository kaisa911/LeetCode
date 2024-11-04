var monotoneIncreasingDigits = function (n) {
  let str = n.toString();
  let num = str.length;
  let flag = num;
  for (let i = num - 1; i > 0; i--) {
    if (str[i] < str[i - 1]) {
      flag = i;
      str = str.slice(0, i - 1) + (parseInt(str[i - 1]) - 1).toString() + '9'.repeat(num - i);
    }
  }
  return parseInt(str);
};
