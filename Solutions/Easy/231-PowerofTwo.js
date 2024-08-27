/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  for (let i = 0; i <= 32; i++) {
    if (Math.pow(2, i) === n) return true;
  }

  return false;
};
var isPowerOfTwo = function(n) {
  if (n == 0) return false;
  else {
    while (n % 2 == 0) {
      n = n / 2;
    }
    if (n == 1) return true;
    else return false;
  }
};


