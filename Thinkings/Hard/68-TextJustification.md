# 文本左右对齐

给定一个单词数组和一个长度  maxWidth，重新排版单词，使其成为每行恰好有  maxWidth  个字符，且左右两端对齐的文本。

你应该使用“贪心算法”来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格  ' '  填充，使得每行恰好有 maxWidth  个字符。

要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。

文本的最后一行应为左对齐，且单词之间不插入额外的空格。

**说明:**

- 单词是指由非空格字符组成的字符序列。
- 每个单词的长度大于 0，小于等于  maxWidth。
- 输入单词数组 words  至少包含一个单词。

**示例:**

```js
输入: words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
maxWidth = 16;
输出: ['This    is    an', 'example  of text', 'justification.  '];
```

**示例  2:**

```js
输入:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
输出:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
解释: 注意最后一行的格式应为 "shall be    " 而不是 "shall     be",
     因为最后一行应为左对齐，而不是左右两端对齐。
     第二行同样为左对齐，这是因为这行只包含一个单词。
```

**示例  3:**

```js
输入: words = [
  'Science',
  'is',
  'what',
  'we',
  'understand',
  'well',
  'enough',
  'to',
  'explain',
  'to',
  'a',
  'computer.',
  'Art',
  'is',
  'everything',
  'else',
  'we',
  'do',
];
maxWidth = 20;
输出: [
  'Science  is  what we',
  'understand      well',
  'enough to explain to',
  'a  computer.  Art is',
  'everything  else  we',
  'do                  ',
];
```

**思路：**
使用贪心算法
1. 初始化：创建结果数组 res 用于存储最终的每行文本，以及变量 currentLine 和 currentLength 分别用于存储当前行的单词拼接字符串和当前行的字符长度。
2. 遍历单词：使用 for...of 循环遍历 words 数组中的每个单词。
3. 判断行长度：对于每个单词，如果加上该单词后行长度会超出 maxWidth，则需要处理当前行。
4. 处理当前行：如果当前行不是第一行（即 currentLine 不为空），则需要在当前行的单词之间添加空格。首先计算总共需要添加的空格数 spaces，然后计算每个单词之间可以添加的空格数 spacesBetween 和额外空格的数量 extraSpaces。接着，使用循环在单词之间添加空格，如果还有额外空格，则从第一个单词开始逐个增加空格。
5. 去除行尾空格：使用正则表达式 .replace(/\s+$/, '') 去除当前行末尾的空格。
6. 添加到结果：将处理好的当前行添加到结果数组 res 中。
7. 准备新行：将当前单词作为新行的开始，重置 currentLine 和 currentLength。
8. 添加单词：如果加上当前单词没有超出 maxWidth，则将单词添加到 currentLine，更新 currentLength。
9. 处理最后一行：循环结束后，处理最后一行，使用 .padEnd(maxWidth) 方法确保最后一行左对齐并满足 maxWidth 的长度要求。
10. 返回结果：返回结果数组 res。


时间复杂度：O(N)，其中 N 是单词数组 words 的长度。因为每个单词只被访问一次，以及对于每个单词，我们执行的操作（如字符串连接和分割）的时间复杂度都是线性的。
空间复杂度：O(M)，其中 M 是所有单词长度加上结果字符串的长度。最坏情况下，所有单词可能都在同一行，因此 currentLine 可能包含所有单词，加上结果数组 res 存储的行数，构成了空间复杂度的主要部分。

```js
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
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
```
