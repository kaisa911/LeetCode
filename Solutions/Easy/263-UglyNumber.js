/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  if (num % 1 !== 0) return false;
  if (num === 0) return false;
  let ugly,
    n = num;
  while (!ugly) {
    if ((n / 2) % 1 === 0) {
      n = n / 2;
    } else if ((n / 5) % 1 === 0) {
      n = n / 5;
    } else if ((n / 3) % 1 === 0) {
      n = n / 3;
    } else {
      ugly = n;
    }
  }
  return ugly === 1;
};
