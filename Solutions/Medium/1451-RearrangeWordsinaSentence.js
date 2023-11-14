/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let str = text.toLowerCase();
  let arr = str.split(' ');
  arr.sort((a, b) => a.length - b.length);
  let head = arr[0].split('');
  let tail = arr.slice(1);
  head[0] = head[0].toUpperCase();
  return tail.length === 0 ? head.join('') : head.join('') + ' ' + tail.join(' ');
};
