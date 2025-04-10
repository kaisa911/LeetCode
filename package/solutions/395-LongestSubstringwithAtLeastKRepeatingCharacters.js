var longestSubstring = function (s, k) {
  let res = 0;
  const n = s.length;
  for (let t = 1; t <= 26; t++) {
    let l = 0,
      r = 0;
    const cnt = new Array(26).fill(0);
    let tot = 0;
    let less = 0;
    while (r < n) {
      cnt[s[r].charCodeAt() - 'a'.charCodeAt()]++;
      if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === 1) {
        tot++;
        less++;
      }
      if (cnt[s[r].charCodeAt() - 'a'.charCodeAt()] === k) {
        less--;
      }

      while (tot > t) {
        cnt[s[l].charCodeAt() - 'a'.charCodeAt()]--;
        if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === k - 1) {
          less++;
        }
        if (cnt[s[l].charCodeAt() - 'a'.charCodeAt()] === 0) {
          tot--;
          less--;
        }
        l++;
      }
      if (less == 0) {
        res = Math.max(res, r - l + 1);
      }
      r++;
    }
  }
  return res;
};
