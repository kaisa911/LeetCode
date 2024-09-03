# 单词接龙

字典 wordList 中从单词 beginWord 到 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：

每一对相邻的单词只差一个字母。
对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
sk == endWord
给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。

示例 1：

```js
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
输出：5
解释：一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog", 返回它的长度 5。
```

示例 2：

```js
输入：beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
输出：0
解释：endWord "cog" 不在字典中，所以无法进行转换。
```

提示：

- 1 <= beginWord.length <= 10
- endWord.length == beginWord.length
- 1 <= wordList.length <= 5000
- wordList[i].length == beginWord.length
- beginWord、endWord 和 wordList[i] 由小写英文字母组成
- beginWord != endWord
- wordList 中的所有字符串 互不相同

思路

1. 初始化：将 wordList 转换成一个集合 wordSet 以提高查找效率。
2. 广度优先搜索：使用一个队列 queue 来存储在转换过程中访问的单词及其对应的转换级别（路径长度）。
   - 将开始单词 beginWord 和初始级别 1 加入队列。
3. 遍历队列：当队列不为空时，执行以下步骤：
   - 从队列中取出一个单词及其级别。
   - 如果该单词是 endWord，则返回当前的级别（转换序列的长度）。
   - 否则，遍历当前单词的所有字符位置。
   - 对于每个位置，遍历 26 个字母，生成新单词。
   - 如果新单词在 wordSet 中，则将其加入队列，并从 wordSet 中删除以避免重复。
4. 更新队列：将新生成的单词及其对应的级别（当前级别+1）加入队列。
5. 返回结果：如果遍历完队列后没有找到 endWord，则返回 0。

时间复杂度：最坏情况下为 O(N⋅L⋅26)，其中 N 是 wordList 的长度，L 是单词的长度，26 是字母的数量。这是因为每个单词都可能生成 26 个新单词。
空间复杂度：O(N)，用于存储 wordSet 和队列。

```js
const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);
  while (queue.length) {
    const [word, level] = queue.shift();
    // 当前出列的单词
    if (word == endWord) {
      return level;
    }
    for (let i = 0; i < word.length; i++) {
      // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) {
        // 对应26个字母
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
        if (wordSet.has(newWord)) {
          // 单词表里有这个新词
          queue.push([newWord, level + 1]); // 作为下一层的词入列
          wordSet.delete(newWord); // 避免该词重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
};
```
