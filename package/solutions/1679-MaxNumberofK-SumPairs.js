/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;
  for (const num of nums) {
    const complement = k - num;
    if (map.has(complement) && map.get(complement) > 0) {
      count++;
      map.set(complement, map.get(complement) - 1);
    } else {
      if (!map.has(num)) {
        map.set(num, 0);
      }
      map.set(num, map.get(num) + 1);
    }
  }
  return count;
};
