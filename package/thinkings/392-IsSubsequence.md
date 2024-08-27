# 判断子序列

给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

**示例  1:**
`s = "abc", t = "ahbgdc"`

返回  true.

**示例  2:**
`s = "axc", t = "ahbgdc"`

返回  false.

思路：
通过一次遍历 t 来检查 s 中的字符是否按顺序出现在 t 中。如果 s 中的所有字符都按顺序在 t 中出现，并且没有额外的字符跳跃，那么 s 就是 t 的子序列

1. 函数定义：isSubsequence 函数接收两个参数：s（可能的子序列）和 t（原序列）。
2. 空字符串检查：如果 s 是空字符串，函数立即返回 true，因为空字符串是任何字符串的子序列。
3. 初始化变量：定义了三个变量：index：用于记录 s 当前遍历到的位置。len：s 的长度。length：t 的长度。
4. 遍历 t：使用 for 循环遍历字符串 t。
5. 字符匹配：在循环中，如果 t 中的当前字符与 s 中的当前字符（s[index]）相等，执行以下操作：
  - 如果 index 等于 len - 1，说明已经匹配完 s 中的所有字符，返回 true。
  - 否则，将 index 加 1，继续匹配 s 的下一个字符。
6. 循环结束：如果循环结束都没有返回 true，说明 s 不是 t 的子序列，返回 false。

算法的时间复杂度是 O(n)，其中 n 是字符串 t 的长度，因为最坏情况下需要遍历整个 t。
空间复杂度是 O(1)，因为只使用了少量额外的变量。
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) => {
  if (!s) return true;
  let index = 0,
    len = s.length,
    length = t.length;
  for (let i = 0; i < length; ++i) {
    if (t[i] === s[index]) {
      if (index === len - 1) return true;
      ++index;
    }
  }
  return false;
};
```
