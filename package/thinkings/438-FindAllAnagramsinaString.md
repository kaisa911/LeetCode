# 找到字符串中所有字母异位词

给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

示例 1:

```js
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
```

示例 2:

```js
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
```

提示:

- 1 <= s.length, p.length <= 3 \* 10^4
- s 和 p 仅包含小写字母

思路：

## 题目的整理分析

这道题目的关键在于找到字符串 s 中所有是字符串 p 的异位词的子串。

一种有效的思路是使用滑动窗口和数组来统计字符出现次数。首先统计字符串 p 中每个字符出现的次数，然后通过滑动窗口在字符串 s 上移动，在移动过程中不断更新窗口内字符的出现次数与字符串 p 中字符出现次数的差异。当差异为 0 时，说明窗口内的子串是字符串 p 的异位词。

1. 首先获取字符串 s 和 p 的长度 sLen 和 pLen，如果 sLen 小于 pLen，直接返回空数组，因为 s 中不可能存在长度大于自身的 p 的异位词。
2. 创建一个空数组 res 用于存储结果，以及一个长度为 26 的数组 count 用于统计字符出现次数，初始化为 0。
3. 初始化 count 数组，对于字符串 s 和 p 的前 pLen 个字符：
   - 对于 s 中的字符，增加其在 count 数组中的计数。
   - 对于 p 中的字符，减少其在 count 数组中的计数。
4. 计算初始时 count 数组中不为 0 的元素个数 differ，若 differ 为 0，则说明 s 的前 pLen 个字符是 p 的异位词，将 0 添加到 res 中。
5. 开始滑动窗口操作，从索引 0 到 sLen - pLen：
   - 当窗口左移一位时（移除 s[i]）：
     - 如果 count[s[i].charCodeAt() - 'a'.charCodeAt()]等于 1，说明移除 s[i]后，窗口内该字符数量与 p 中该字符数量从相同变得不同，将 differ 加 1。
     - 如果 count[s[i].charCodeAt() - 'a'.charCodeAt()]等于 0，说明移除 s[i]后，窗口内该字符数量与 p 中该字符数量从不同变得相同，将 differ 减 1。
     - 减少 s[i]在 count 数组中的计数。
   - 当窗口右移一位时（加入 s[i + pLen]）：
     - 如果 count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]等于 - 1，说明加入 s[i + pLen]后，窗口内该字符数量与 p 中该字符数量从不同变得相同，将 differ 减 1。
     - 如果 count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]等于 0，说明加入 s[i + pLen]后，窗口内该字符数量与 p 中该字符数量从相同变得不同，将 differ 加 1。
     - 增加 s[i + pLen]在 count 数组中的计数。
   - 如果 differ 等于 0，说明当前窗口内的子串是 p 的异位词，将 i + 1 添加到 res 中。
6. 最后返回 res，即所有异位词子串的起始索引。

时间复杂度：首先需要遍历长度为 pLen 的字符串 p 和 s 的前 pLen 个字符来初始化 count 数组，时间复杂度为 O(pLen)。然后通过滑动窗口遍历 s，每次移动窗口需要进行常数次操作来更新 count 数组和 differ 变量，时间复杂度为 O(sLen)。总的时间复杂度为 O(sLen + pLen)。
空间复杂度：使用了一个长度为 26 的数组 count 来统计字符出现次数，空间复杂度为 O(1)。

```js
var findAnagrams = function (s, p) {
  const sLen = s.length,
    pLen = p.length;

  if (sLen < pLen) {
    return [];
  }

  const res = [];
  const count = Array(26).fill(0);
  for (let i = 0; i < pLen; ++i) {
    ++count[s[i].charCodeAt() - 'a'.charCodeAt()];
    --count[p[i].charCodeAt() - 'a'.charCodeAt()];
  }

  let differ = 0;
  for (let j = 0; j < 26; ++j) {
    if (count[j] !== 0) {
      ++differ;
    }
  }

  if (differ === 0) {
    res.push(0);
  }

  for (let i = 0; i < sLen - pLen; ++i) {
    if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {
      // 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) {
      // 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    --count[s[i].charCodeAt() - 'a'.charCodeAt()];

    if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === -1) {
      // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
      --differ;
    } else if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === 0) {
      // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
      ++differ;
    }
    ++count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

    if (differ === 0) {
      res.push(i + 1);
    }
  }

  return res;
};
```
