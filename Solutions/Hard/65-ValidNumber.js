/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  // 去除字符串两端的空白字符
  s = s.trim();
  // 正则表达式匹配有效的十进制数字
  const regex = /^-?\d*(\.\d+)?([eE]-?\d+)?$/;
  // 检查字符串是否匹配正则表达式
  return regex.test(s);
};
