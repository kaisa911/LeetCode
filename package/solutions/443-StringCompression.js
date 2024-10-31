var compress = function (chars) {
  let write = 0;
  let count = 0;
  for (let read = 0; read < chars.length; read++) {
    count++;
    if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
      chars[write++] = chars[read];
      if (count > 1) {
        let start = write;
        while (count > 0) {
          chars[write++] = '' + Math.floor(count % 10);
          count = Math.floor(count / 10);
        }
        // 反转数字部分
        for (let i = start; i < (write + start) / 2; i++) {
          let temp = chars[i];
          chars[i] = chars[write - 1 - (i - start)];
          chars[write - 1 - (i - start)] = temp;
        }
      }
      count = 0;
    }
  }
  return write;
};
