/**
 * @param {number} N
 * @return {number}
 */
const fib = (N) => {
  if (N === 0) return 0;
  if (N === 1) return 1;
  let a = 0,
    b = 1,
    c;
  for (let i = 2; i <= N; ++i) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};
