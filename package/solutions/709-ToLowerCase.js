/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  str = [...str];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 91 && str[i].charCodeAt() > 59) {
      str[i] = String.fromCharCode(+str[i].charCodeAt() + 32);
    }
  }
  return str.join('');
};
