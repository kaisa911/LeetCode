/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  let ori = x,
    pal = 0;
  if (x < 0) {
    return false;
  }
  while (x) {
    pal = pal * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return pal == ori;
};
