var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i, count);
    expandAroundCenter(s, i, i + 1, count);
  }
  return count;

  function expandAroundCenter(s, left, right, count) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
};
