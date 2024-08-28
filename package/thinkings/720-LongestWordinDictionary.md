# 词典中最长的单词

给出一个字符串数组  words 组成的一本英语词典。返回  words 中最长的一个单词，该单词是由  words  词典中其他单词逐步添加一
个字母组成。

若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

**示例 1：**

```js
输入：words = ["w","wo","wor","worl", "world"]
输出："world"
解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。
```

**示例 2：**

```js
输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
输出："apple"
解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"
```

**提示：**

- 1 <= words.length <= 1000
- 1 <= words[i].length <= 30
- 所有输入的字符串  words[i]  都只包含小写字母。

思路

1. 排序：首先对 words 数组进行排序。排序规则是，先按长度升序排序，如果长度相同，则按字典序降序排序。
2. 初始化：初始化结果字符串 res 为空字符串，candidates 集合存储可以形成当前单词的前缀集合。
3. 遍历词典：遍历排序后的 words 数组，对于每个单词 word：
   - 检查 word 去掉最后一个字符后是否是 candidates 集合中的一个前缀。
   - 如果是，将 word 添加到 candidates 集合中，并更新 res 为当前最长的单词。
4. 返回结果：遍历完成后，返回 res 作为最长的单词。

时间复杂度：O(nlogn)，其中 n 是 words 的长度。排序操作的时间复杂度为 O(nlogn)。
空间复杂度：O(n)，因为 candidates 集合在最坏情况下可能包含所有单词。

```ts
const longestWord = (words: string[]): string => {
  words.sort((a: string, b: string): number => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return b.localeCompare(a);
    }
  });
  let res: string = '';
  let candidates = new Set();
  candidates.add('');
  const n: number = words.length;
  for (let i: number = 0; i < n; i++) {
    const word = words[i];
    if (candidates.has(word.slice(0, word.length - 1))) {
      candidates.add(word);
      res = word;
    }
  }
  return res;
};
```
