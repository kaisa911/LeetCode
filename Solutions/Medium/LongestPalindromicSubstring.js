/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let Maxlen = 0,
    len = 0,
    left,
    start,
    end,
    offset;

  for (let i = 0; i < s.length; i++) {
    start = i;
    //判断重复的字符长度
    while (i < s.length - 1 && s.charAt(i) === s.charAt(i + 1)) {
      i++;
    }
    end = i;
    len = end - start + 1;
    //重复的两侧的字符是否回文
    let offstart = start;
    let offend = end;
    for (
      offset = 1;
      offset <= Math.min(offstart, s.length - offend - 1);
      offset++
    ) {
      if (s[offstart - offset] === s[offend + offset]) {
        len += 2;
        start = start - 1;
        end = end + 1;
      } else {
        break;
      }
    }
    if (len > Maxlen) {
      Maxlen = len;
      left = start;
    }
  }
  return s.substring(left, left + Maxlen);
};
