# 查找共用字符

给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

示例 1：

```javascript
输入：words = ["bella","label","roller"]
输出：["e","l","l"]
```

示例 2：

```javascript
输入：words = ["cool","lock","cook"]
输出：["c","o"]
```

提示：

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] 由小写英文字母组成

思路：

拿到这个题目，首先考虑如何确定哪些字符是所有字符串都共有的。一种常见的思路是从第一个字符串开始，逐步与后续的字符串进行比较，保留在所有字符串中都出现的字符。选择这种方法的理由是它直观且易于理解和实现。

1. 首先创建一个长度为 26 的数组 `minFreq` 来记录每个字符在所有字符串中出现的最小频率。初始化每个元素为 `Infinity` ，表示尚未确定最小频率。
2. 对于输入的每个字符串 `word` ，创建一个新的频率数组 `freq` 来记录当前字符串中每个字符的出现次数。
3. 通过遍历 `word` 中的字符，计算其在 `freq` 数组中的频率。
4. 对于每个字符的频率，与 `minFreq` 中对应的元素进行比较，更新为较小的值。
5. 创建一个结果数组 `result` 。
6. 再次遍历 `minFreq` ，根据每个字符的最小频率，将字符多次添加到 `result` 中。

时间复杂度：O(n \* m)，其中 n 是字符串数组的长度，m 是字符串的平均长度。主要的时间消耗在两层循环中。
空间复杂度：O(1)，使用的额外空间大小固定为 26，与输入规模无关。

```javascript
const commonChars = function (words) {
  const minFreq = new Array(26).fill(Infinity);
  for (const word of words) {
    const freq = new Array(26).fill(0);
    for (const char of word) {
      freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < 26; i++) {
      minFreq[i] = Math.min(minFreq[i], freq[i]);
    }
  }
  const result = [];
  for (let i = 0; i < 26; i++) {
    while (minFreq[i] > 0) {
      result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
      minFreq[i]--;
    }
  }
  return result;
};
```
