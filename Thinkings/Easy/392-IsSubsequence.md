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

- O(n)的思路，遍历 t，
- 判断如果 t[i]等于 s[index],那么 index 就++
- 判断如果是最后一位，则返回 true
- 否则返回 false

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
