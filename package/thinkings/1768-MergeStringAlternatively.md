# 交替合并字符串

给你两个字符串 word1 和 word2 。请你从 word1 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

返回 合并后的字符串 。

示例 1：

```js
输入：word1 = "abc", word2 = "pqr"
输出："apbqcr"
解释：字符串合并情况如下所示：
word1：  a   b   c
word2：    p   q   r
合并后：  a p b q c r
```

示例 2：

```js
输入：word1 = "ab", word2 = "pqrs"
输出："apbqrs"
解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
word1：  a   b
word2：    p   q   r   s
合并后：  a p b q   r   s
```

示例 3：

```js
输入：word1 = "abcd", word2 = "pq"
输出："apbqcd"
解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
word1：  a   b   c   d
word2：    p   q
合并后：  a p b q c   d
```

提示：

- 1 <= word1.length, word2.length <= 100
- word1 和 word2 由小写英文字母组成

思路：

拿到这个题目，首先考虑需要同时遍历两个字符串 word1 和 word2 ，按照交替的顺序将字符添加到结果数组中。由于字符串长度可能不同，所以需要在遍历过程中分别处理两个字符串是否还有剩余字符的情况。选择使用一个循环，在循环中判断两个字符串的索引是否在合法范围内，并将对应字符添加到结果数组，这种方法简单直观，易于理解和实现。

1. 首先使用两个指针 `i` 和 `j` 分别指向 `word1` 和 `word2` 的起始位置。
2. 在一个循环中，只要 `i` 小于 `word1` 的长度且 `j` 小于 `word2` 的长度，就交替将两个字符串的当前字符添加到结果字符串中，并将指针后移。
3. 循环结束后，可能存在 `word1` 还有剩余字符的情况，通过一个循环将剩余字符添加到结果字符串。
4. 同样，可能存在 `word2` 还有剩余字符的情况，通过一个循环将剩余字符添加到结果字符串。

时间复杂度：O(m + n)，其中 m 是 `word1` 的长度，n 是 `word2` 的长度。需要遍历两个字符串。
空间复杂度：O(m + n)，创建了一个新的字符串来存储合并后的结果。

```javascript
var mergeAlternately = function (word1, word2) {
  let result = '';
  let i = 0,
    j = 0;
  while (i < word1.length && j < word2.length) {
    result += word1[i++];
    result += word2[j++];
  }
  while (i < word1.length) {
    result += word1[i++];
  }
  while (j < word2.length) {
    result += word2[j++];
  }
  return result;
};
```
