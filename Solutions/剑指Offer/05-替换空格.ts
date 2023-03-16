function replaceSpace(s: string): string {
  if (!s.length || !s) return '';

  const originLength: number = s.length; // 原始长度
  let blankNum: number = 0; // 空格的数量

  // 求空格的长度
  for (let i: number = 0; i < originLength; i += 1) {
    if (s[i] === ' ') {
      blankNum += 1;
    }
  }

  const newLength: number = originLength + 2 * blankNum; // 新字符串的长度
  let originTail: number = originLength - 1; // P1指针
  let newTail: number = newLength - 1; // P2指针
  const res: string[] = new Array(newLength);

  if (newLength <= originLength) {
    return s;
  }

  while (originTail >= 0) {
    if (s[originTail] === ' ') {
      res[newTail--] = '0';
      res[newTail--] = '2';
      res[newTail--] = '%';
    } else {
      res[newTail--] = s[originTail];
    }
    --originTail;
  }
  return res.join('');
}
