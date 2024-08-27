var isAlienSorted = function (words, order) {
  const hash = {};
  order.split('').map((item, index) => (hash[item] = index));
  for (const [i, w] of words.entries()) {
    if (i === words.length - 1) {
      break;
    }
    for (let j = 0; j < w.length; j++) {
      if (j === words[i + 1].length) {
        return false;
      }
      if (hash[w[j]] > hash[words[i + 1][j]]) {
        return false;
      } else if (hash[w[j]] < hash[words[i + 1][j]]) {
        break;
      }
    }
  }
  return true;
};
