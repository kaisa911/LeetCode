/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  for (let i = 0; Math.pow(3, i) <= Math.pow(2, 32); i++) {
    if (Math.pow(3, i) === n) return true;
  }

  return false;
};

var isPowerOfThree = function(n) {
  if (n == 0) return false;
  else {
    while (n % 3 == 0) {
      n = n / 3;
    }
    if (n == 1) return true;
    else return false;
  }
};
