# 两个字符串的排列差

给你两个字符串 s 和 t，每个字符串中的字符都不重复，且 t 是 s 的一个排列。

排列差 定义为 s 和 t 中每个字符在两个字符串中位置的绝对差值之和。

返回 s 和 t 之间的 排列差 。

示例 1：

```js
输入：s = "abc", t = "bac"

输出：2

解释：

对于 s = "abc" 和 t = "bac"，排列差是：

"a" 在 s 中的位置与在 t 中的位置之差的绝对值。
"b" 在 s 中的位置与在 t 中的位置之差的绝对值。
"c" 在 s 中的位置与在 t 中的位置之差的绝对值。
即，s 和 t 的排列差等于 |0 - 1| + |2 - 2| + |1 - 0| = 2。
```

示例 2：

```js
输入：s = "abcde", t = "edbac"

输出：12

解释： s 和 t 的排列差等于 |0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12。
```

提示：

- 1 <= s.length <= 26
- 每个字符在 s 中最多出现一次。
- t 是 s 的一个排列。
- s 仅由小写英文字母组成。

思路：

1. 构建一个映射表，将字符串 s 中的每个字符映射到它在字符串中的索引。
2. 遍历字符串 t，对于每个字符，通过映射表找到它在字符串 s 中的索引。
3. 计算字符在 s 和 t 中索引的差的绝对值，并将这些值累加。

时间复杂度：O(n)，需要遍历字符串 s 和 t 各一次。
空间复杂度：O(1)，只使用了映射表来存储字符索引，映射表的大小是固定的，与字符串 s 的长度无关。

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let diffSum = 0;
  const sIndexMap = {};

  // 首先，构建一个映射表，存储s中每个字符的索引
  for (let i = 0; i < s.length; i++) {
    sIndexMap[s[i]] = i;
  }

  // 然后，遍历t字符串，对于t中的每个字符，找到它在s中的索引，并计算差的绝对值
  for (let i = 0; i < t.length; i++) {
    const charIndexInS = sIndexMap[t[i]];
    diffSum += Math.abs(charIndexInS - i);
  }

  return diffSum;
};
```
