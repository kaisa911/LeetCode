/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = (words, maxWidth) => {
  const res = [];
  let sum = 0,
    arr = [];
  for (let i = 0; i < words.length; i++) {
    if (arr.length !== 0 && sum + words[i].length >= maxWidth) {
      let dif = maxWidth - sum;
      if (arr.length == 1) {
        for (let j = 0; j < dif; j++) arr[0] += ' ';
      } else {
        for (let j = 1; dif !== 0; j += 2) {
          if (j % arr.length !== arr.length - 1) {
            arr[j % arr.length] += ' ';
            dif -= 1;
          }
        }
      }
      res.push(arr.join(''));
      arr = [];
      sum = 0;
      i -= 1;
    } else {
      if (arr.length !== 0) {
        arr.push(' ');
        sum += 1;
      }
      arr.push(words[i]);
      sum += words[i].length;
    }
  }
  if (arr.length !== 0) {
    for (let i = sum; i < maxWidth; i++) arr[arr.length - 1] += ' ';
    res.push(arr.join(''));
  }
  return res;
};
