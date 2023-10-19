const compress = (chars) => {
  const len = chars.length;
  let s = '';
  let i = 0,
    j = i + 1;
  while (j <= len) {
    // 相等的话 右指针向右移
    if (chars[i] === chars[j]) {
      j++;
    } else {
      const tempS = j - i > 1 ? `${chars[i]}${j - i}` : `${chars[i]}`;
      s += tempS;
      i = j;
      j = i + 1;
    }
  }
  // 写入chars
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  return s.length;
};
