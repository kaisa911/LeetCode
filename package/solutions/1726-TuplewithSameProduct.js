var tupleSameProduct = function (nums) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const key = nums[i] * nums[j];
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  let res = 0;
  for (const v of map.values()) {
    res += v * (v - 1) * 4;
  }
  return res;
};
