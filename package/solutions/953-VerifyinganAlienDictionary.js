var isAlienSorted = function (words, order) {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];

    let minLength = Math.min(word1.length, word2.length);
    let isSorted = true;

    for (let j = 0; j < minLength; j++) {
      if (map.get(word1[j]) > map.get(word2[j])) {
        return false;
      } else if (map.get(word1[j]) < map.get(word2[j])) {
        isSorted = false;
        break;
      }
    }

    if (isSorted && word1.length > word2.length) {
      return false;
    }
  }

  return true;
};
