var sortByBits = function (arr) {
  const bitCount = (n) =>
    n
      .toString(2)
      .split('')
      .filter((x) => x === '1').length;
  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b);
};
