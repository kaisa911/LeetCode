# 回文子串

给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

回文字符串 是正着读和倒过来读一样的字符串。

子字符串 是字符串中的由连续字符组成的一个序列。

示例 1：

```js
输入：s = "abc"
输出：3
解释：三个回文子串: "a", "b", "c"
```

示例 2：

```js
输入：s = "aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
```

提示：

- 1 <= s.length <= 1000
- s 由小写英文字母组成

思路：

拿到这道题，首先要明确回文子串的定义，即正着读和倒着读一样的字符串。由于需要统计所有可能的回文子串数量，一种常见的思路是通过遍历字符串的每个位置，以该位置为中心向两边扩展，判断是否构成回文子串。

1. 首先定义一个变量 `count` 来统计回文子串的数量。
2. 通过两层循环，第一层循环遍历字符串的每个位置 `i`。
3. 对于每个位置 `i`，分别以 `i` 为中心（奇数长度的回文）和以 `i` 和 `i + 1` 为中心（偶数长度的回文）调用 `expandAroundCenter` 函数进行扩展。
4. 在 `expandAroundCenter` 函数中，通过左右指针从中心位置向两边移动，只要字符相等就增加回文子串的计数，并继续扩展，直到不满足回文条件。

时间复杂度：O(n^2)，因为对于每个位置都可能进行扩展，最多扩展到字符串的两端。
空间复杂度：O(1)，使用了固定的额外空间来存储计数变量和临时指针，不随输入规模增长。

```javascript
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i, count);
    expandAroundCenter(s, i, i + 1, count);
  }
  return count;

  function expandAroundCenter(s, left, right, count) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }
};
```
