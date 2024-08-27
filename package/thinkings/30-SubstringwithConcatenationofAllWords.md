# 串联所有单词的子串

给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。

s 中的 串联子串 是指一个包含 words 中所有字符串以任意顺序排列连接起来的子串。

例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。

示例 1：

```js
输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：因为 words.length == 2 同时 words[i].length == 3，连接的子字符串的长度必须为 6。
子串 "barfoo" 开始位置是 0。它是 words 中以 ["bar","foo"] 顺序排列的连接。
子串 "foobar" 开始位置是 9。它是 words 中以 ["foo","bar"] 顺序排列的连接。
输出顺序无关紧要。返回 [9,0] 也是可以的。
```

示例 2：

```js
输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]
解释：因为 words.length == 4 并且 words[i].length == 4，所以串联子串的长度必须为 16。
s 中没有子串长度为 16 并且等于 words 的任何顺序排列的连接。
所以我们返回一个空数组。
```

示例 3：

```js
输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]
解释：因为 words.length == 3 并且 words[i].length == 3，所以串联子串的长度必须为 9。
子串 "foobarthe" 开始位置是 6。它是 words 中以 ["foo","bar","the"] 顺序排列的连接。
子串 "barthefoo" 开始位置是 9。它是 words 中以 ["bar","the","foo"] 顺序排列的连接。
子串 "thefoobar" 开始位置是 12。它是 words 中以 ["the","foo","bar"] 顺序排列的连接。
```

提示：

- 1 <= s.length <= 104
- 1 <= words.length <= 5000
- 1 <= words[i].length <= 30
- words[i] 和 s 由小写英文字母组成

思路:
1. 初始化：计算每个单词的长度wordLen，串联子串的总长度totalLen，单词数组的长度wordCount，以及存储每个单词出现次数的wordMap。
2. 结果数组：创建一个空数组result，用于存储所有可能的子串开始索引。
3. 双层循环：
    - 外层循环从字符串s的开始到totalLen长度的位置，步长为1，用于确定子串的起始位置。
    - 内层循环从外层循环的当前起始位置开始，步长为wordLen，用于检查每个可能的单词位置。
4. 临时映射：在每次外层循环开始时，创建tempMap的副本，用于跟踪当前子串中已匹配的单词及其剩余需要匹配的次数。
5. 匹配过程：在内层循环中，通过切片s获取当前单词，并与tempMap进行比较：
    - 如果当前单词不在tempMap中或其计数为0，则重置外层循环的起始位置，并重置matchedCount和tempMap。
    - 如果当前单词在tempMap中，则减少其计数，并增加已匹配单词的数量matchedCount。
6. 检查匹配完成：如果matchedCount等于wordCount，则说明找到了一个有效的串联子串，将其起始索引添加到result中，并跳过已匹配的单词。
7. 返回结果：返回所有找到的串联子串的起始索引。

时间复杂度：最坏情况下，算法需要检查s中所有可能的子串，时间复杂度为O(n×m)，其中n是字符串s的长度，m是串联子串的总长度。
空间复杂度：O(w)，其中w是单词数组words的长度。这是因为我们存储了单词出现次数的映射。

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;
  const wordCount = words.length;
  const wordMap = new Map(words.map((word) => [word, 1]));

  const result = [];

  for (let start = 0; start <= s.length - totalLen; start++) {
    let tempMap = new Map(wordMap);
    let matchedCount = 0;

    for (let end = start; end <= s.length - totalLen; end += wordLen) {
      let currentWord = s.slice(end, end + wordLen);
      if (!tempMap.has(currentWord) || tempMap.get(currentWord) === 0) {
        start += wordLen * matchedCount; // 重置 start 到下一个可能的子串起始位置
        matchedCount = 0;
        tempMap.clear(); // 重置临时 Map
        break;
      }

      tempMap.set(currentWord, tempMap.get(currentWord) - 1);
      if (++matchedCount === wordCount) {
        result.push(start);
        start += wordLen * (wordCount - 1); // 跳过已匹配的单词
        matchedCount = 0;
        tempMap.clear(); // 重置临时 Map
        break;
      }
    }
  }

  return result;
};
```
