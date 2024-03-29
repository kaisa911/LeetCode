var sortString = function (s) {
  const num = new Array(26).fill(0);
  for (let ch of s) {
    num[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }
  let ret = '';
  while (ret.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (num[i]) {
        ret += String.fromCharCode(i + 'a'.charCodeAt());
        num[i]--;
      }
    }
  }
  return ret;
};
