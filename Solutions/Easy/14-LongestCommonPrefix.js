/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let len = strs.length,
    res = '',
    i;
  if (len === 0 || strs === null) {
    return '';
  }
  strs.sort();
  let str1 = strs[0],
    str2 = strs[len - 1],
    min_len = Math.min(str1.length, str2.length);
  for (i = 0; i < min_len; i++) {
    if (str1.charAt(i) !== str2.charAt(i)) {
      break;
    }
  }
  res = str1.substring(0, i);
  return res;
};
