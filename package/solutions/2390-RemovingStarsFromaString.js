/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let arr = [];
  for (let c of s) {
    if (c == '*') {
      arr.pop();
    } else {
      arr.push(c);
    }
  }
  return arr.join('');
};
