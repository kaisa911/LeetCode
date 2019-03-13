/**
 * @param {number} N
 * @return {number}
 */
const fib = N => {
  let arr = [0, 1];
  for (let i = 2; i <= N; ++i) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[N];
};
