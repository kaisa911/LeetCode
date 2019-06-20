/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
  let arr = [];
  let res = [];
  let len = 1;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    len *= i;
  }
  len = len / n;
  let mod = k;
  let num, index;
  while (arr.length > 1) {
    num =
      arr[
        Math.ceil(mod / len) - 1 >= 0
          ? Math.ceil(mod / len) - 1
          : arr.length - 1
      ];
    mod = mod % len;
    res.push(num);
    index = arr.indexOf(num);
    arr.splice(index, 1);
    len = 1;
    for (let i = arr.length - 1; i >= 1; i--) {
      len *= i;
    }
  }
  res.push(arr[0]);
  return res.join("");
};
