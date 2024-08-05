const fullJustify = (words, maxWidth) => {
  const res = [];
  let currentLine = ''; // 当前行的累积字符串
  let currentLength = 0; // 当前行的累积长度

  for (const word of words) {
    if (currentLength + currentLine.length() + word.length > maxWidth) {
      // 处理当前行，添加空格并填充
      const spaces = maxWidth - currentLength;
      const gaps = currentLine.split(' ').length - 1;
      let spacesBetween = Math.floor(spaces / gaps);
      let extraSpaces = spaces % gaps;

      let line = currentLine;
      for (let i = 0; i < gaps; i++) {
        if (i < extraSpaces) {
          line += ' '.repeat(spacesBetween + 1);
        } else {
          line += ' '.repeat(spacesBetween);
        }
      }

      // 去掉最后一个单词后的空格
      line = line.replace(/\s+$/, '');

      res.push(line);
      currentLine = word; // 开始新一行
      currentLength = word.length;
    } else {
      if (currentLine.length > 0) {
        currentLine += ' ';
        currentLength++;
      }
      currentLine += word;
      currentLength += word.length;
    }
  }

  // 处理最后一行
  if (currentLine.length > 0) {
    res.push(currentLine.padEnd(maxWidth));
  }

  return res;
};
