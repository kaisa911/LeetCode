# 通配符匹配

给你一个输入字符串 (s) 和一个字符模式 (p) ，请你实现一个支持 '?' 和 '*' 匹配规则的通配符匹配：
'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符序列（包括空字符序列）。
判定匹配成功的充要条件是：字符模式必须能够 完全匹配 输入字符串（而不是部分匹配）。

示例 1：

```js
输入：s = "aa", p = "a"
输出：false
解释："a" 无法匹配 "aa" 整个字符串。
```

示例 2：

```js
输入：s = "aa", p = "*"
输出：true
解释：'*' 可以匹配任意字符串。
```

示例 3：

```js
输入：s = "cb", p = "?a"
输出：false
解释：'?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
```

提示：

- 0 <= s.length, p.length <= 2000
- s 仅由小写英文字母组成
- p 仅由小写英文字母、'?' 或 '*' 组成

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  let star = -1;
  let k = 0;
  while (i < s.length) {
    if (s[i] == p[j] || p[j] == '?') {
      ++i;
      ++j;
      continue;
    }
    if (p[j] == '*') {
      star = j++;
      k = i;
      continue;
    }
    if (star != -1) {
      i = ++k;
      j = star + 1;
      continue;
    }
    return false;
  }
  while (j < p.length && p[j] == '*') ++j;
  return j == p.length;
};

```
