/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
  let slow = n;
  let fast = n;
  do {
    // Calculate the next value for slow pointer
    slow = nextNumber(slow);
    // Calculate the next two values for fast pointer
    fast = nextNumber(nextNumber(fast));
  } while (slow !== fast); // If they meet, there's a cycle

  return slow === 1;
};

const nextNumber = (x) => {
  let sum = 0;
  while (x) {
    sum += (x % 10) ** 2;
    x = Math.floor(x / 10);
  }
  return sum;
};
