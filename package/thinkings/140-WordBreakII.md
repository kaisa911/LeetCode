# 单词拆分 II

给定一个字符串 s 和一个字符串字典 wordDict ，在字符串 s 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。以任意顺序 返回所有这些可能的句子。

注意：词典中的同一个单词可能在分段中被重复使用多次。

示例 1：

```javascript
输入: (s = 'catsanddog'), (wordDict = ['cat', 'cats', 'and', 'sand', 'dog']);
输出: ['cats and dog', 'cat sand dog'];
```

示例 2：

```javascript
输入:s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
输出:["pine apple pen apple","pineapple pen apple","pine applepen apple"]
解释: 注意你可以重复使用字典中的单词。
```

示例 3：

```javascript
输入: (s = 'catsandog'), (wordDict = ['cats', 'dog', 'sand', 'and', 'cat']);
输出: [];
```

提示：

- 1 <= s.length <= 20
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 10
- s 和 wordDict[i] 仅有小写英文字母组成
- wordDict 中所有字符串都 不同

思路

1. 初始化：创建一个映射 map 用于存储已经计算过的子问题的解，避免重复计算。
2. 回溯函数：定义一个回溯函数 backtrack，它接收字符串 s、字符串长度 length、单词集合 wordSet、当前索引 index 和映射 map 作为参数。
3. 基本情况：如果当前索引 index 等于字符串长度 length，则说明找到了一个句子的拆分方案，将空列表添加到拆分方案中。
4. 递归搜索：遍历字符串 s 从当前索引 index 到字符串末尾的所有可能单词：
   - 如果当前单词在单词集合 wordSet 中，则递归调用 backtrack 函数，探索下一个单词的拆分。
   - 将当前单词与下一个单词拆分方案组合，形成新的拆分方案。
5. 存储结果：将找到的拆分方案存储在映射 map 中，以便后续重用。
6. 主函数调用：在 wordBreak 函数中调用 backtrack 函数，并传入初始参数。
7. 格式化结果：将映射 map 中的所有拆分方案格式化为字符串形式，并返回结果数组。

时间复杂度：最坏情况下为 O(2^n)，其中 n 是字符串 s 的长度。在最坏情况下，每个字符都可能作为单词的开始，导致指数级增长的递归调用。
空间复杂度：O(n)，最坏情况下，递归栈的深度可以达到字符串长度，加上存储拆分方案的空间。

```javascript
const backtrack = (s, length, wordSet, index, map) => {
  if (map.has(index)) {
    return map.get(index);
  }
  const wordBreaks = [];
  if (index === length) {
    wordBreaks.push([]);
  }
  for (let i = index + 1; i <= length; i++) {
    const word = s.substring(index, i);
    if (wordSet.has(word)) {
      const nextWordBreaks = backtrack(s, length, wordSet, i, map);
      for (const nextWordBreak of nextWordBreaks) {
        const wordBreak = [word, ...nextWordBreak];
        wordBreaks.push(wordBreak);
      }
    }
  }
  map.set(index, wordBreaks);
  return wordBreaks;
};
var wordBreak = function (s, wordDict) {
  const map = new Map();
  const wordBreaks = backtrack(s, s.length, new Set(wordDict), 0, map);
  const breakList = [];
  for (const wordBreak of wordBreaks) {
    breakList.push(wordBreak.join(' '));
  }
  return breakList;
};
```
