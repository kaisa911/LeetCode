var sortString = function (s) {
  const count = new Array(26).fill(0);
  for (let c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = '';
  let added = true;

  while (added) {
    added = false;
    for (let i = 0; i < 26; i++) {
      if (count[i] > 0) {
        result += String.fromCharCode('a'.charCodeAt(0) + i);
        count[i]--;
        added = true;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (count[i] > 0) {
        result += String.fromCharCode('a'.charCodeAt(0) + i);
        count[i]--;
        added = true;
      }
    }
  }
  return result;
};
