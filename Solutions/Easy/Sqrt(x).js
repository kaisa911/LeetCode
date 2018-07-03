/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = x => {
  let res = x;
  while (res * res > x) {
    res = parseInt((res + x / res) / 2);
  }
  return res;
};
