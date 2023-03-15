/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const arr = s.split('');
  let temp = arr.splice(0, n);
  return [...arr, ...temp].join('');
};
