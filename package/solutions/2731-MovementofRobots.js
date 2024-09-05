var sumDistance = function (nums, s, d) {
  const mod = 1e9 + 7;
  n = nums.length;
  pos = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    pos[i] = s[i] === 'L' ? nums[i] - d : nums[i] + d;
  }
  pos.sort((a, b) => a - b);
  let res = 0;
  for (let i = 1; i < n; i++) {
    res += ((((pos[i] - pos[i - 1]) * i) % mod) * (n - i)) % mod;
    res %= mod;
  }
  return res;
};
