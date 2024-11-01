var findKthNumber = function(n, k) {
  let prefix = 1;
  while (k > 1) {
      let count = getCount(prefix, n);
      if (k <= count) {
          prefix *= 10;
          k--;
      } else {
          prefix++;
          k -= count;
      }
  }
  return prefix;
};

function getCount(prefix, n) {
  let count = 0;
  let currPrefix = prefix;
  let nextPrefix = prefix + 1;
  while (currPrefix <= n) {
      count += Math.min(n + 1, nextPrefix) - currPrefix;
      currPrefix *= 10;
      nextPrefix *= 10;
  }
  return count;
}