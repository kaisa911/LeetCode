var sortByBits = function (arr) {
  const countBits = (n) => {
    const temp = n;
    let count = 0;
    while (n) {
      count += n & 1;
      n = n >> 1;
    }
    return [temp, count];
  };
  arr = arr.map((n) => countBits(n));
  arr = arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  return arr.map(([m, n]) => m);
};
