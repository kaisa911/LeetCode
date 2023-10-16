/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  let res = 0,
    // 正负号，默认正号
    negativeSymbol = 1;
  // 把首尾的空格都去掉
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    // 负数
    if (i == 0 && str[i] == "-") {
      negativeSymbol = -1;
      continue;
      // 正数
    } else if (i == 0 && str[i] == "+") continue;
    // 因为空格会被转成0，所以要排除空格的情况，也就是说在数字范围内就加上
    if (str[i] >= 0 && str[i] <= 9 && str[i] != " ") {
      res = res * 10 + (str[i] - 0);
      // 为什么在这里就判断呢，因为这里如果就溢出的话，就提前退出，不需要再后面无意义的计算了
      if (res * negativeSymbol <= -2147483648) return -2147483648;
      else if (res * negativeSymbol >= 2147483647) return 2147483647;
    } else break;
  }
  return res * negativeSymbol;
};