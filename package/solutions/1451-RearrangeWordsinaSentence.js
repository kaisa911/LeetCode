/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const words = text.split(' ');
  words.sort((a, b) => a.length - b.length || a.localeCompare(b));
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(' ');
};
