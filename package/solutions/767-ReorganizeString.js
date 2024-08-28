var reorganizeString = function (s) {
  // 统计每个字符出现的次数
  const counts = Array.from(s).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  // 检查是否有字符出现次数超过(n+1)/2，如果是，则无法重排
  const maxLength = Object.values(counts).sort((a, b) => b - a)[0];
  if (maxLength > Math.floor((s.length + 1) / 2)) {
    return '';
  }

  // 使用数组模拟优先队列
  const queue = [];
  Object.keys(counts).forEach((char) => {
    for (let i = 0; i < counts[char]; i++) {
      queue.push({ char, count: counts[char] });
    }
  });

  // 按出现次数排序
  queue.sort((a, b) => b.count - a.count);

  let res = '';
  while (queue.length > 1) {
    // 取出出现次数最多的两个字符
    const first = queue.shift();
    const second = queue.shift();

    // 将它们添加到结果字符串中
    res += first.char + second.char;

    // 如果取出的字符还有剩余，则放回队列
    if (--first.count > 0) {
      queue.push(first);
    }
    if (--second.count > 0) {
      queue.push(second);
    }
  }

  // 如果队列中还有剩余的字符，添加到结果字符串
  if (queue.length === 1) {
    res += queue[0].char;
  }

  return res;
};
