# 重构字符串

给定一个字符串 s ，检查是否能重新排布其中的字母，使得两相邻的字符不同。

返回 s 的任意可能的重新排列。若不可行，返回空字符串 "" 。

示例 1:

```js
输入: s = 'aab';
输出: 'aba';
```

示例 2:

```js
输入: s = 'aaab';
输出: '';
```

提示:

- 1 <= s.length <= 500
- s 只包含小写字母

思路
1. 统计字符频率：使用reduce函数统计字符串s中每个字符出现的次数。
2. 检查最大频率：找到出现次数最多的字符，如果它的出现次数大于(n+1)/2，其中n是字符串的长度，则无法重新排布，返回空字符串。
3. 模拟优先队列：使用数组queue模拟一个优先队列，按照字符出现次数从高到低存储字符及其计数。
4. 构建结果字符串：使用贪心策略，从优先队列中交替取出两个字符，构建结果字符串。如果取出的字符计数大于1，则在下一次循环中重新加入队列。
5. 处理剩余字符：如果优先队列中只剩下一个字符，将其添加到结果字符串的末尾。
6. 返回结果：返回构建好的结果字符串。

时间复杂度：O(nlogn)，其中 n 是字符串 s 的长度。主要时间消耗在对字符计数和排序上。
空间复杂度：O(n)，因为我们需要存储每个字符及其计数，以及可能的优先队列。

```js
var reorganizeString = function (s) {
  // 统计每个字符出现的次数
  const counts = s.split('').reduce((acc, val) => {
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
```
