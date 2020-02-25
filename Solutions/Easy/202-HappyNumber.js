/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
  const set = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n) {
      sum += (n % 10) * (n % 10);
      n = parseInt(n / 10);
    }
    n = sum;
    if (set.has(n)) break;
    set.add(n);
  }
  return n === 1;
};
